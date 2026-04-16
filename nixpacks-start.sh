#!/usr/bin/env bash
#
# Container entrypoint used by Nixpacks on Coolify.
#
# Runs DB-dependent and env-dependent tasks at container boot (where the
# database service is reachable), then starts php-fpm and nginx using
# the self-contained config shipped in this repo (nixpacks-nginx.conf).
#
# Invoked via `[start] cmd = "bash /app/nixpacks-start.sh"` in nixpacks.toml.

set -euo pipefail

echo "==> [startup] artisan migrate --force"
php artisan migrate --force --no-interaction

echo "==> [startup] artisan storage:link (idempotent)"
php artisan storage:link 2>/dev/null || true

echo "==> [startup] artisan config/route/view/event cache"
# Cache at runtime so the compiled artefacts reflect Coolify's env vars,
# not the (possibly empty) env that existed during the Docker build.
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan event:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

echo "==> [startup] preparing nginx temp dirs"
# Our nginx.conf points these at /tmp so nginx doesn't need /var/cache
# write access. Make sure they exist.
mkdir -p /tmp/nginx-client-body /tmp/nginx-proxy /tmp/nginx-fastcgi /tmp/nginx-uwsgi /tmp/nginx-scgi

echo "==> [startup] starting php-fpm (background)"
# Nixpacks' bundled php-fpm.conf listens on 127.0.0.1:9000, which is
# what our nginx config's fastcgi_pass targets.
php-fpm -y /assets/php-fpm.conf --daemonize

echo "==> [startup] exec nginx with repo-provided config"
# Use our own nginx config — bypasses the Nixpacks PHP provider's
# template, which was producing duplicate location blocks on Laravel.
# `daemon off;` lives inside the config file itself, so no -g flag needed.
exec nginx -c /app/nixpacks-nginx.conf
