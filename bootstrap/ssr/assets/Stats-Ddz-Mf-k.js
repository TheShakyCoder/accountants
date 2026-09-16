import { o as vue_exports, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Pages/Home/Partials/Stats.vue
var _sfc_main = {
	__name: "Stats",
	__ssrInlineRender: true,
	setup(__props) {
		const pillars = [
			{
				title: "Plain English",
				body: "Tax explained in a way that actually makes sense. No jargon, no surprises."
			},
			{
				title: "Personal service",
				body: "You speak to the person doing your accounts — not a call-centre or a chatbot."
			},
			{
				title: "Fixed fees",
				body: "Agreed up front before any work begins. You only pay for what you asked for."
			},
			{
				title: "Flexible hours",
				body: "Day, evening or Saturday appointments — fitted around your business."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "bg-white border-y border-firm-line" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14"><div class="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-firm-line"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(pillars, (p) => {
				_push(`<div class="px-2 sm:px-6 py-6 sm:py-2 first:pl-0 last:pr-0"><p class="font-display text-firm-navy text-xl font-semibold mb-2">${(0, server_renderer_exports.ssrInterpolate)(p.title)}</p><p class="text-sm text-firm-slate leading-relaxed">${(0, server_renderer_exports.ssrInterpolate)(p.body)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Stats.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
