import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { createBlock, createTextVNode, createVNode, mergeProps, openBlock, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Layouts/GuestLayout.vue
var _sfc_main = {
	__name: "GuestLayout",
	__ssrInlineRender: true,
	props: {
		title: {
			type: String,
			default: ""
		},
		subtitle: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex font-sans antialiased" }, _attrs))}><div class="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white relative overflow-hidden"><div class="absolute -top-20 -left-20 w-72 h-72 bg-brand-500/30 rounded-full blur-3xl pointer-events-none"></div><div class="absolute -bottom-24 -right-16 w-80 h-80 bg-brand-800/40 rounded-full blur-3xl pointer-events-none"></div><div class="relative px-10 pt-10">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"${_scopeId}></path></svg> Back to website `);
					else return [(openBlock(), createBlock("svg", {
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M10 19l-7-7m0 0l7-7m-7 7h18"
					})])), createTextVNode(" Back to website ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="relative flex-1 flex flex-col justify-center px-10 xl:px-14">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-4 mb-10"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/media/logo.png" alt="Lollipops Logo" class="h-16 w-auto brightness-0 invert opacity-90"${_scopeId}><div${_scopeId}><p class="font-display font-bold text-lg leading-tight"${_scopeId}>Penwortham Lollipops</p></div>`);
					else return [createVNode("img", {
						src: "/media/logo.png",
						alt: "Lollipops Logo",
						class: "h-16 w-auto brightness-0 invert opacity-90"
					}), createVNode("div", null, [createVNode("p", { class: "font-display font-bold text-lg leading-tight" }, "Penwortham Lollipops")])];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="font-display text-3xl xl:text-4xl font-bold leading-tight mb-4"> Portal </h1><p class="text-white/75 text-base leading-relaxed mb-10 max-w-sm"> Manage your shop, news, events, and more — all in one place. </p><ul class="space-y-4"><!--[-->`);
			ssrRenderList([
				{
					icon: "📅",
					text: "Create and manage community events"
				},
				{
					icon: "📰",
					text: "Publish news and announcements"
				},
				{
					icon: "👥",
					text: "View and manage memberships"
				},
				{
					icon: "📊",
					text: "Track activity across the centre"
				}
			], (item) => {
				_push(`<li class="flex items-center gap-3 text-white/80 text-sm"><span class="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center text-base shrink-0">${ssrInterpolate(item.icon)}</span> ${ssrInterpolate(item.text)}</li>`);
			});
			_push(`<!--]--></ul></div><div class="relative px-10 pb-10"><p class="text-white/40 text-xs">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Penwortham Lollipops</p></div></div><div class="flex-1 flex flex-col bg-warm-50"><div class="lg:hidden flex items-center justify-between px-6 pt-6 pb-4">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/media/logo.png" alt="Lollipops Logo" class="h-10 w-auto"${_scopeId}><div${_scopeId}><p class="font-display font-semibold text-brand-600 text-sm leading-tight"${_scopeId}>Penwortham Lollipops</p></div>`);
					else return [createVNode("img", {
						src: "/media/logo.png",
						alt: "Lollipops Logo",
						class: "h-10 w-auto"
					}), createVNode("div", null, [createVNode("p", { class: "font-display font-semibold text-brand-600 text-sm leading-tight" }, "Penwortham Lollipops")])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "text-xs text-warm-500 hover:text-brand-600 transition-colors font-medium"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to site `);
					else return [createTextVNode(" Back to site ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex-1 flex items-center justify-center px-6 py-10 sm:px-10"><div class="w-full max-w-md"><div class="mb-8"><h2 class="font-display text-2xl font-bold text-warm-900">${ssrInterpolate(__props.title)}</h2>`);
			if (__props.subtitle) _push(`<p class="text-warm-500 text-sm mt-1">${ssrInterpolate(__props.subtitle)}</p>`);
			else _push(`<!---->`);
			_push(`</div>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
