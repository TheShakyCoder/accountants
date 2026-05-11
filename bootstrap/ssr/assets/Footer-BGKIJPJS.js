import { Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { createTextVNode, mergeProps, onMounted, onUnmounted, ref, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Layouts/Partials/Header.vue
var _sfc_main$1 = {
	__name: "Header",
	__ssrInlineRender: true,
	props: {
		navLinks: Array,
		canLogin: Boolean,
		canRegister: Boolean,
		auth: Object
	},
	setup(__props) {
		const mobileMenuOpen = ref(false);
		const openDropdown = ref(null);
		function closeDropdowns() {
			openDropdown.value = null;
		}
		function handleClickOutside(e) {
			if (!e.target.closest("nav")) closeDropdowns();
		}
		onMounted(() => document.addEventListener("click", handleClickOutside));
		onUnmounted(() => document.removeEventListener("click", handleClickOutside));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${ssrRenderAttrs(_attrs)}><nav class="sticky top-0 z-50 bg-coffee-espresso border-b-2 border-coffee-caramel/60"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-[72px] items-center justify-between"><a href="/" class="flex items-center gap-1 shrink-0 font-display"><span class="text-coffee-cream text-xl font-extrabold tracking-tight">Bon</span><span class="text-coffee-gold text-xl font-extrabold tracking-tight">bons</span></a><div class="hidden lg:flex items-center gap-1"><!--[-->`);
			ssrRenderList(__props.navLinks, (link, idx) => {
				_push(`<div class="relative group">`);
				if (!link.children || link.children.length === 0) _push(ssrRenderComponent(unref(Link), {
					href: link.href,
					class: "px-3 py-2 text-xs font-bold uppercase tracking-widest text-coffee-cream/80 hover:text-coffee-gold transition-colors rounded"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(link.label)}`);
						else return [createTextVNode(toDisplayString(link.label), 1)];
					}),
					_: 2
				}, _parent));
				else _push(`<button type="button" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-coffee-cream/80 hover:text-coffee-gold transition-colors flex items-center gap-1 rounded">${ssrInterpolate(link.label)} <svg class="${ssrRenderClass([{ "rotate-180": openDropdown.value === idx }, "w-3 h-3 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg></button>`);
				if (link.children && link.children.length > 0 && openDropdown.value === idx) {
					_push(`<div class="absolute left-0 top-full mt-1 w-48 bg-coffee-dark border border-coffee-caramel/30 shadow-xl rounded"><!--[-->`);
					ssrRenderList(link.children, (child, cidx) => {
						_push(ssrRenderComponent(unref(Link), {
							key: cidx,
							href: child.href,
							class: "block px-4 py-2.5 text-xs text-coffee-cream/75 hover:text-coffee-gold hover:bg-coffee-mid/40 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(child.label)}`);
								else return [createTextVNode(toDisplayString(child.label), 1)];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></div><div class="hidden lg:flex items-center gap-4">`);
			if (__props.canLogin && !_ctx.$page.props.auth?.user) _push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("login"),
				class: "text-xs font-bold uppercase tracking-widest text-coffee-gold/70 hover:text-coffee-gold transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Login`);
					else return [createTextVNode("Login")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (__props.canRegister && !_ctx.$page.props.auth?.user) _push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("register"),
				class: "text-xs font-bold uppercase tracking-widest text-coffee-gold/70 hover:text-coffee-gold transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Register`);
					else return [createTextVNode("Register")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if (__props.canLogin && _ctx.$page.props.auth?.user) _push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("dashboard"),
				class: "text-xs font-bold uppercase tracking-widest text-coffee-gold/70 hover:text-coffee-gold transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Dashboard`);
					else return [createTextVNode("Dashboard")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`<a href="#contact" class="px-5 py-2 bg-coffee-caramel text-coffee-ivory text-xs font-bold uppercase tracking-widest rounded hover:bg-coffee-gold hover:text-coffee-espresso transition-all">Visit Us</a></div><button class="lg:hidden p-2 text-coffee-cream hover:text-coffee-gold transition-colors"${ssrRenderAttr("aria-expanded", mobileMenuOpen.value)} aria-label="Toggle menu">`);
			if (!mobileMenuOpen.value) _push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
			else _push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
			_push(`</button></div></div>`);
			if (mobileMenuOpen.value) {
				_push(`<div class="lg:hidden border-t border-coffee-caramel/30 bg-coffee-dark px-4 pb-5 pt-3 space-y-1"><!--[-->`);
				ssrRenderList(__props.navLinks, (link, idx) => {
					_push(`<!--[-->`);
					if (!link.children || link.children.length === 0) _push(`<a${ssrRenderAttr("href", link.href)} class="block px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-coffee-cream/75 hover:text-coffee-gold transition-colors">${ssrInterpolate(link.label)}</a>`);
					else {
						_push(`<div><button class="w-full text-left px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-coffee-cream/75 hover:text-coffee-gold transition-colors flex items-center justify-between">${ssrInterpolate(link.label)} <svg class="${ssrRenderClass([{ "rotate-180": openDropdown.value === idx }, "w-3 h-3 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg></button>`);
						if (openDropdown.value === idx) {
							_push(`<div class="ml-4 mt-0.5 border-l border-coffee-caramel/30 pl-4 space-y-0.5"><!--[-->`);
							ssrRenderList(link.children, (child, cidx) => {
								_push(`<a${ssrRenderAttr("href", child.href)} class="block py-2 text-xs text-coffee-cream/60 hover:text-coffee-gold transition-colors">${ssrInterpolate(child.label)}</a>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					}
					_push(`<!--]-->`);
				});
				_push(`<!--]--><div class="pt-3 border-t border-coffee-caramel/30 flex flex-col gap-2">`);
				if (__props.canLogin && !_ctx.$page.props.auth?.user) _push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("login"),
					class: "block text-center py-2 text-xs font-bold uppercase tracking-widest text-coffee-gold/70 hover:text-coffee-gold transition-colors"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Login`);
						else return [createTextVNode("Login")];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(`<a href="#contact" class="block text-center py-2.5 bg-coffee-caramel text-coffee-ivory text-xs font-bold uppercase tracking-widest rounded hover:bg-coffee-gold hover:text-coffee-espresso transition-all">Visit Us</a></div></div>`);
			} else _push(`<!---->`);
			_push(`</nav></header>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Header.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/Partials/Footer.vue
var _sfc_main = {
	__name: "Footer",
	__ssrInlineRender: true,
	props: { navLinks: { type: Array } },
	setup(__props) {
		const page = usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-coffee-espresso border-t-2 border-coffee-caramel/25" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14"><div class="grid md:grid-cols-4 gap-10 mb-10"><div class="md:col-span-2"><div class="font-display text-2xl font-extrabold mb-4"><span class="text-coffee-cream">Bon</span><span class="text-coffee-gold">bons</span><span class="text-coffee-cream/50 text-base font-normal ml-2 tracking-wide">Coffee Bar</span></div><p class="text-coffee-cream/50 text-sm leading-relaxed max-w-xs"> An atmospheric coffee bar and village tea rooms in the heart of Penwortham, serving quality coffee, specialty teas, homemade cakes, and afternoon teas. </p></div><div><p class="text-coffee-gold/70 text-xs font-bold uppercase tracking-widest mb-4">Quick Links</p><ul class="space-y-2"><!--[-->`);
			ssrRenderList(__props.navLinks, (link) => {
				_push(`<li><a${ssrRenderAttr("href", link.href)} class="text-coffee-cream/50 text-sm hover:text-coffee-gold transition-colors">${ssrInterpolate(link.label)}</a></li>`);
			});
			_push(`<!--]--></ul></div><div><p class="text-coffee-gold/70 text-xs font-bold uppercase tracking-widest mb-4">Get in Touch</p><ul class="space-y-2 text-sm text-coffee-cream/50 mb-6"><li><a${ssrRenderAttr("href", "tel:" + unref(page).props.site.telephone)} class="hover:text-coffee-gold transition-colors">${ssrInterpolate(unref(page).props.site.telephone)}</a></li>`);
			if (unref(page).props.site.email) _push(`<li><a${ssrRenderAttr("href", "mailto:" + unref(page).props.site.email)} class="hover:text-coffee-gold transition-colors">${ssrInterpolate(unref(page).props.site.email)}</a></li>`);
			else _push(`<!---->`);
			_push(`<li class="text-coffee-cream/35 text-xs pt-1 leading-relaxed">${unref(page).props.site.opening_times ?? ""}</li></ul><p class="text-coffee-gold/70 text-xs font-bold uppercase tracking-widest mb-3">Follow Us</p><div class="flex gap-3"><a${ssrRenderAttr("href", unref(page).props.site.social?.instagram)} target="_blank" rel="noopener" class="w-9 h-9 border border-coffee-caramel/30 rounded flex items-center justify-center text-coffee-gold hover:bg-coffee-caramel/20 hover:border-coffee-gold transition-colors" aria-label="Instagram"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a><a${ssrRenderAttr("href", unref(page).props.site.social?.facebook)} target="_blank" rel="noopener" class="w-9 h-9 border border-coffee-caramel/30 rounded flex items-center justify-center text-coffee-gold hover:bg-coffee-caramel/20 hover:border-coffee-gold transition-colors" aria-label="Facebook"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a></div></div></div><div class="pt-8 border-t border-coffee-caramel/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-coffee-cream/30"><p>© Bonbons Coffee Bar ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}. All rights reserved.</p><div class="flex gap-5"><a href="#" class="hover:text-coffee-cream/60 transition-colors">Privacy Policy</a><a href="#" class="hover:text-coffee-cream/60 transition-colors">Terms of Use</a></div></div></div></footer>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Footer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main$1 as n, _sfc_main as t };
