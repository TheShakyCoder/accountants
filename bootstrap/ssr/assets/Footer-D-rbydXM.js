import { a as usePage, o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Layouts/Partials/Header.vue
var _sfc_main$3 = {
	__name: "Header",
	__ssrInlineRender: true,
	props: {
		navLinks: {
			type: Array,
			default: () => []
		},
		canLogin: Boolean,
		canRegister: Boolean,
		auth: Object
	},
	setup(__props) {
		const page = usePage();
		const site = (0, vue_exports.computed)(() => page.props.site || {});
		const telephone = (0, vue_exports.computed)(() => site.value.telephone || "");
		const telHref = (0, vue_exports.computed)(() => "tel:" + (telephone.value || "").replace(/\s+/g, ""));
		const mobileMenuOpen = (0, vue_exports.ref)(false);
		const openDropdown = (0, vue_exports.ref)(null);
		function closeDropdowns() {
			openDropdown.value = null;
		}
		function handleClickOutside(e) {
			if (!e.target.closest("nav")) closeDropdowns();
		}
		(0, vue_exports.onMounted)(() => document.addEventListener("click", handleClickOutside));
		(0, vue_exports.onUnmounted)(() => document.removeEventListener("click", handleClickOutside));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${(0, server_renderer_exports.ssrRenderAttrs)(_attrs)}><div class="hidden md:block bg-firm-ink text-firm-cream/80"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-9 text-xs"><p class="flex items-center gap-2 tracking-wide"><svg class="w-3.5 h-3.5 text-firm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Free initial consultations · Plain-English advice </p><a${(0, server_renderer_exports.ssrRenderAttr)("href", telHref.value)} class="flex items-center gap-2 font-semibold hover:text-firm-gold transition-colors"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.63 3.42 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg> ${(0, server_renderer_exports.ssrInterpolate)(telephone.value)}</a></div></div></div><nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-firm-line"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-[84px] items-center justify-between gap-6"><a href="/" class="flex items-center gap-3 shrink-0 group" aria-label="Acme — Preston Accountants &amp; Tax Advisers"><span class="font-display text-3xl font-semibold tracking-tight text-firm-navy">Acme</span></a><div class="hidden lg:flex items-center gap-1"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.navLinks, (link, idx) => {
				_push(`<div class="relative group">`);
				if (!link.children || link.children.length === 0) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
					href: link.href,
					class: "px-3.5 py-2 text-sm font-semibold text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(link.label)}`);
						else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(link.label), 1)];
					}),
					_: 2
				}, _parent));
				else _push(`<button type="button" class="px-3.5 py-2 text-sm font-semibold text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors flex items-center gap-1">${(0, server_renderer_exports.ssrInterpolate)(link.label)} <svg class="${(0, server_renderer_exports.ssrRenderClass)([{ "rotate-180": openDropdown.value === idx }, "w-3.5 h-3.5 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg></button>`);
				if (link.children && link.children.length > 0 && openDropdown.value === idx) {
					_push(`<div class="absolute left-0 top-full mt-1.5 w-56 bg-white rounded-lg shadow-firm border border-firm-line p-1.5"><!--[-->`);
					(0, server_renderer_exports.ssrRenderList)(link.children, (child, cidx) => {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
							key: cidx,
							href: child.href,
							class: "block px-3 py-2.5 text-sm text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(child.label)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(child.label), 1)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></div><div class="hidden lg:flex items-center gap-4">`);
			if (__props.canLogin && !_ctx.$page.props.auth?.user) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: _ctx.route("login"),
				class: "text-sm font-semibold text-firm-slate hover:text-firm-navy transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Client login`);
					else return [(0, vue_exports.createTextVNode)("Client login")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (__props.canLogin && _ctx.$page.props.auth?.user) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: _ctx.route("dashboard"),
				class: "text-sm font-semibold text-firm-slate hover:text-firm-navy transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Dashboard`);
					else return [(0, vue_exports.createTextVNode)("Dashboard")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`<a href="#contact" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-firm-navy text-white text-sm font-semibold hover:bg-firm-ink transition-colors shadow-firm-sm"> Book a free consultation <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></a></div><button class="lg:hidden p-2 text-firm-navy hover:text-firm-gold transition-colors"${(0, server_renderer_exports.ssrRenderAttr)("aria-expanded", mobileMenuOpen.value)} aria-label="Toggle menu">`);
			if (!mobileMenuOpen.value) _push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
			else _push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
			_push(`</button></div></div>`);
			if (mobileMenuOpen.value) {
				_push(`<div class="lg:hidden border-t border-firm-line bg-white px-4 pb-5 pt-3 space-y-1"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(__props.navLinks, (link, idx) => {
					_push(`<!--[-->`);
					if (!link.children || link.children.length === 0) _push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", link.href)} class="block px-3 py-2.5 text-sm font-semibold text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors">${(0, server_renderer_exports.ssrInterpolate)(link.label)}</a>`);
					else {
						_push(`<div><button class="w-full text-left px-3 py-2.5 text-sm font-semibold text-firm-steel hover:text-firm-navy hover:bg-firm-paper rounded-md transition-colors flex items-center justify-between">${(0, server_renderer_exports.ssrInterpolate)(link.label)} <svg class="${(0, server_renderer_exports.ssrRenderClass)([{ "rotate-180": openDropdown.value === idx }, "w-3.5 h-3.5 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg></button>`);
						if (openDropdown.value === idx) {
							_push(`<div class="ml-3 mt-0.5 border-l-2 border-firm-line pl-4 space-y-0.5"><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(link.children, (child, cidx) => {
								_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", child.href)} class="block py-2 text-sm text-firm-slate hover:text-firm-navy transition-colors">${(0, server_renderer_exports.ssrInterpolate)(child.label)}</a>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					}
					_push(`<!--]-->`);
				});
				_push(`<!--]--><div class="pt-3 border-t border-firm-line flex flex-col gap-2"><a${(0, server_renderer_exports.ssrRenderAttr)("href", telHref.value)} class="block text-center py-2 text-sm font-semibold text-firm-slate hover:text-firm-navy transition-colors">${(0, server_renderer_exports.ssrInterpolate)(telephone.value)}</a><a href="#contact" class="block text-center py-3 rounded-md bg-firm-navy text-white text-sm font-semibold hover:bg-firm-ink transition-colors">Book a free consultation</a></div></div>`);
			} else _push(`<!---->`);
			_push(`</nav></header>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Header.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/CookieConsent.vue
var STORAGE_KEY$1 = "cookie_consent";
var _sfc_main$2 = {
	__name: "CookieConsent",
	__ssrInlineRender: true,
	setup(__props) {
		const visible = (0, vue_exports.ref)(false);
		const showDetails = (0, vue_exports.ref)(false);
		(0, vue_exports.onMounted)(() => {
			try {
				if (!localStorage.getItem(STORAGE_KEY$1)) visible.value = true;
			} catch (e) {
				visible.value = true;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (visible.value) {
				_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
					role: "dialog",
					"aria-live": "polite",
					"aria-label": "Cookie consent",
					class: "fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
				}, _attrs))}><div class="mx-auto max-w-4xl rounded-2xl bg-firm-ink text-firm-cream shadow-2xl ring-1 ring-firm-cream/10"><div class="p-5 sm:p-6"><div class="flex flex-col gap-4 sm:flex-row sm:items-start"><div class="flex-1"><p class="text-sm font-semibold text-firm-gold mb-1">We value your privacy</p><p class="text-sm leading-relaxed text-firm-cream/80"> We use cookies to keep the site working and to understand how visitors use it. Essential cookies are always on. You can accept all cookies, reject non-essential ones, or read more below. <a href="/privacy" class="underline hover:text-firm-gold transition-colors">Privacy Policy</a>. </p>`);
				if (showDetails.value) _push(`<div class="mt-4 space-y-3 text-xs text-firm-cream/70"><div><p class="font-semibold text-firm-cream">Essential</p><p>Required for the site to function (session, security, CSRF). Always on.</p></div><div><p class="font-semibold text-firm-cream">Analytics</p><p>Help us understand how the site is used so we can improve it. Optional.</p></div></div>`);
				else _push(`<!---->`);
				_push(`</div><div class="flex flex-col gap-2 sm:w-56 sm:flex-shrink-0"><button type="button" class="rounded-lg bg-firm-gold px-4 py-2 text-sm font-semibold text-firm-ink hover:bg-firm-gold/90 transition-colors"> Accept all </button><button type="button" class="rounded-lg border border-firm-cream/20 px-4 py-2 text-sm font-medium text-firm-cream hover:bg-firm-cream/5 transition-colors"> Reject non-essential </button><button type="button" class="text-xs text-firm-cream/60 underline hover:text-firm-cream transition-colors">${(0, server_renderer_exports.ssrInterpolate)(showDetails.value ? "Hide details" : "Manage preferences")}</button></div></div></div></div></div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CookieConsent.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DemoDisclaimer.vue
var STORAGE_KEY = "demo_disclaimer_dismissed";
var _sfc_main$1 = {
	__name: "DemoDisclaimer",
	__ssrInlineRender: true,
	setup(__props) {
		const visible = (0, vue_exports.ref)(false);
		(0, vue_exports.onMounted)(() => {
			try {
				if (!localStorage.getItem(STORAGE_KEY)) visible.value = true;
			} catch (e) {
				visible.value = true;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (visible.value) {
				_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "demo-disclaimer-title",
					class: "fixed inset-0 z-[60] flex items-center justify-center px-4"
				}, _attrs))}><div class="absolute inset-0 bg-firm-ink/70 backdrop-blur-sm"></div>`);
				if (visible.value) _push(`<div class="relative w-full max-w-md rounded-2xl bg-firm-cream text-firm-ink shadow-2xl ring-1 ring-firm-ink/10"><button type="button" aria-label="Dismiss" class="absolute top-3 right-3 rounded-full p-1.5 text-firm-slate hover:bg-firm-ink/5 hover:text-firm-ink transition-colors"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"></path></svg></button><div class="p-6 sm:p-8"><div class="flex items-center gap-3 mb-4"><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-firm-gold/15 text-firm-gold"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span><p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold"> Notice </p></div><h2 id="demo-disclaimer-title" class="font-display text-2xl font-semibold text-firm-ink mb-3"> For demonstration purposes only </h2><p class="text-sm leading-relaxed text-firm-steel"> This website is a demo. It does not represent a real firm or real services. Any names, contact details or content shown here are illustrative only. </p><button type="button" class="mt-6 w-full rounded-lg bg-firm-ink px-4 py-2.5 text-sm font-semibold text-firm-cream hover:bg-firm-navy transition-colors"> I understand </button></div></div>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DemoDisclaimer.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/Partials/Footer.vue
var _sfc_main = {
	__name: "Footer",
	__ssrInlineRender: true,
	props: { navLinks: {
		type: Array,
		default: () => []
	} },
	setup(__props) {
		const page = usePage();
		const site = (0, vue_exports.computed)(() => page.props.site || {});
		const telHref = (0, vue_exports.computed)(() => "tel:" + (site.value.telephone || "").replace(/\s+/g, ""));
		const year = (/* @__PURE__ */ new Date()).getFullYear();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "bg-firm-ink text-firm-cream/70" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"><div class="grid md:grid-cols-12 gap-10 mb-12"><div class="md:col-span-5"><a href="/" class="inline-flex items-center gap-4 mb-5 bg-white/95 rounded-xl px-4 py-3" aria-label="Acme — Preston Accountants &amp; Tax Advisers"><span class="font-display text-3xl font-semibold tracking-tight text-firm-navy">Acme</span></a><p class="text-sm leading-relaxed max-w-sm"> Acme Ltd — a Penwortham-based firm of accountants and tax advisers, nurturing small businesses and individuals across Preston and South Ribble. </p><div class="mt-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-firm-cream/45"><span class="px-2.5 py-1 border border-firm-cream/15 rounded">ICAEW / ACCA*</span><span class="px-2.5 py-1 border border-firm-cream/15 rounded">HMRC Agent</span><span class="px-2.5 py-1 border border-firm-cream/15 rounded">ICO Registered</span></div></div><div class="md:col-span-3"><p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-4">Site</p><ul class="space-y-2.5"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.navLinks, (link) => {
				_push(`<li><a${(0, server_renderer_exports.ssrRenderAttr)("href", link.href)} class="text-sm hover:text-firm-gold transition-colors">${(0, server_renderer_exports.ssrInterpolate)(link.label)}</a></li>`);
			});
			_push(`<!--]--></ul></div><div class="md:col-span-4"><p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-4">Get in touch</p><ul class="space-y-2.5 text-sm"><li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 text-firm-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${(0, server_renderer_exports.ssrInterpolate)(site.value.address)}</span></li><li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 text-firm-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.63 3.42 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg><a${(0, server_renderer_exports.ssrRenderAttr)("href", telHref.value)} class="hover:text-firm-gold transition-colors">${(0, server_renderer_exports.ssrInterpolate)(site.value.telephone)}</a></li>`);
			if (site.value.email) _push(`<li class="flex items-start gap-2"><svg class="w-4 h-4 mt-0.5 text-firm-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><a${(0, server_renderer_exports.ssrRenderAttr)("href", "mailto:" + site.value.email)} class="hover:text-firm-gold transition-colors">${(0, server_renderer_exports.ssrInterpolate)(site.value.email)}</a></li>`);
			else _push(`<!---->`);
			_push(`<li class="flex items-start gap-2 text-firm-cream/55 text-xs pt-1"><svg class="w-4 h-4 mt-0.5 text-firm-gold/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span class="leading-relaxed">${site.value.opening_times ?? ""}</span></li></ul></div></div><div class="pt-8 border-t border-firm-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-firm-cream/45"><p>© ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(year))} Acme Ltd. Registered in England &amp; Wales.</p><div class="flex gap-5"><a href="#" class="hover:text-firm-cream transition-colors">Privacy Policy</a><a href="#" class="hover:text-firm-cream transition-colors">Terms of Use</a><button type="button" class="hover:text-firm-cream transition-colors">Cookies</button></div></div><p class="mt-6 text-[10px] text-firm-cream/30 leading-relaxed"> *Replace with the firm&#39;s actual professional body memberships, registration numbers and registered office address before going live. </p></div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, null, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, null, null, _parent));
			_push(`</footer>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Footer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main$3 as n, _sfc_main as t };
