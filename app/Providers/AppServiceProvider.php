<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Belt-and-suspenders: if APP_URL is https, force the URL generator to
        // emit https:// links even if TrustProxies somehow misses the forwarded
        // scheme header. Prevents Mixed Content on Coolify's Traefik proxy.
        if (str_starts_with(config('app.url', ''), 'https://')) {
            URL::forceScheme('https');
        }
    }
}
