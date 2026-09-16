import { o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
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
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "min-h-screen flex font-sans antialiased" }, _attrs))}><div class="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col bg-firm-hero text-firm-cream relative overflow-hidden"><div aria-hidden="true" class="pointer-events-none absolute -right-40 -top-40 w-[520px] h-[520px] text-firm-gold/15 firm-sunburst animate-sun-spin"></div><div aria-hidden="true" class="pointer-events-none absolute -left-32 -bottom-32 w-[420px] h-[420px] text-firm-navy/40 firm-sunburst animate-sun-spin"></div><div class="relative px-10 pt-10">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "inline-flex items-center gap-2 text-firm-cream/60 hover:text-firm-gold text-sm font-medium transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"${_scopeId}></path></svg> Back to website `);
					else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [(0, vue_exports.createVNode)("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M10 19l-7-7m0 0l7-7m-7 7h18"
					})])), (0, vue_exports.createTextVNode)(" Back to website ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="relative flex-1 flex flex-col justify-center px-10 xl:px-14">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "inline-flex items-center gap-4 mb-10",
				"aria-label": "Acme — Preston Accountants & Tax Advisers"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="font-display text-4xl font-semibold tracking-tight text-firm-cream"${_scopeId}>Acme</span>`);
					else return [(0, vue_exports.createVNode)("span", { class: "font-display text-4xl font-semibold tracking-tight text-firm-cream" }, "Acme")];
				}),
				_: 1
			}, _parent));
			_push(`<span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-5"><span class="h-px w-8 bg-firm-gold/60"></span> Client Portal </span><h1 class="font-display text-3xl xl:text-4xl font-medium leading-tight tracking-tight text-firm-cream mb-4"> Your accounts, <span class="block italic text-firm-gold-soft">always to hand.</span></h1><p class="text-firm-cream/75 text-base leading-relaxed mb-10 max-w-sm"> Share documents, review draft accounts, and keep in touch with your accountant — all from one secure place. </p><ul class="space-y-4"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)([
				"Securely send and receive documents",
				"Review draft accounts and tax returns",
				"Track HMRC deadlines and submissions",
				"Message your accountant directly"
			], (item) => {
				_push(`<li class="flex items-start gap-3 text-firm-cream/80 text-sm"><span class="mt-0.5 w-5 h-5 rounded-full border border-firm-gold/60 flex items-center justify-center text-firm-gold shrink-0"><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></span> ${(0, server_renderer_exports.ssrInterpolate)(item)}</li>`);
			});
			_push(`<!--]--></ul></div><div class="relative px-10 pb-10 flex items-center justify-between text-xs text-firm-cream/45"><p>© ${(0, server_renderer_exports.ssrInterpolate)((/* @__PURE__ */ new Date()).getFullYear())} Acme Ltd</p><p class="uppercase tracking-[0.22em]">Preston · South Ribble</p></div></div><div class="flex-1 flex flex-col bg-firm-paper"><div class="lg:hidden flex items-center justify-between px-6 pt-6 pb-4 border-b border-firm-line bg-white/80 backdrop-blur">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "flex items-center gap-3",
				"aria-label": "Acme — Preston Accountants & Tax Advisers"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="font-display text-2xl font-semibold tracking-tight text-firm-navy"${_scopeId}>Acme</span>`);
					else return [(0, vue_exports.createVNode)("span", { class: "font-display text-2xl font-semibold tracking-tight text-firm-navy" }, "Acme")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/",
				class: "text-xs text-firm-slate hover:text-firm-navy transition-colors font-medium"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to site `);
					else return [(0, vue_exports.createTextVNode)(" Back to site ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex-1 flex items-center justify-center px-6 py-10 sm:px-10"><div class="w-full max-w-md">`);
			if (__props.title || __props.subtitle) {
				_push(`<div class="mb-8"><h2 class="font-display text-3xl font-medium tracking-tight text-firm-ink">${(0, server_renderer_exports.ssrInterpolate)(__props.title)}</h2>`);
				if (__props.subtitle) _push(`<p class="text-firm-slate text-sm mt-2">${(0, server_renderer_exports.ssrInterpolate)(__props.subtitle)}</p>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
