import { o as vue_exports, r as link_default, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Pages/Home/Partials/News.vue
var _sfc_main = {
	__name: "News",
	__ssrInlineRender: true,
	setup(__props) {
		const insights = [
			{
				date: "6 May 2026",
				category: "Tax",
				title: "Self Assessment 2025/26 — what's changed for sole traders",
				excerpt: "A short walkthrough of the basis-period reform, MTD timelines and three deductions most people miss.",
				readMins: 5
			},
			{
				date: "22 Apr 2026",
				category: "Business",
				title: "Should you incorporate? Five honest questions to ask first",
				excerpt: "The numbers rarely tell the whole story. Here's how we walk clients through the sole-trader-vs-limited decision.",
				readMins: 4
			},
			{
				date: "8 Apr 2026",
				category: "Payroll",
				title: "NI thresholds for the new tax year — what employers need to do",
				excerpt: "A two-minute summary, plus our payroll team's checklist for keeping auto-enrolment compliant.",
				readMins: 3
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: "insights",
				class: "bg-firm-paper py-24"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"><div class="max-w-xl"><p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-3">Insights</p><h2 class="font-display text-firm-navy font-semibold leading-tight" style="${(0, server_renderer_exports.ssrRenderStyle)({ "font-size": "clamp(1.9rem, 3.5vw, 2.5rem)" })}"> Plain-English thinking, <span class="italic text-firm-steel">from our desk to yours.</span></h2><div class="h-1 w-12 bg-firm-gold mt-5"></div></div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(link_default), {
				href: "/news-updates",
				class: "inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-md border border-firm-navy/20 text-sm font-semibold text-firm-navy hover:bg-firm-navy hover:text-white transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` All articles <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
					else return [(0, vue_exports.createTextVNode)(" All articles "), ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [(0, vue_exports.createVNode)("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2.5",
						d: "M9 5l7 7-7 7"
					})]))];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(insights, (item) => {
				_push(`<article class="group bg-white rounded-2xl border border-firm-line p-7 hover:border-firm-navy/15 hover:shadow-firm transition-all duration-300 cursor-pointer flex flex-col"><div class="flex items-center justify-between mb-5"><span class="text-[10px] font-semibold tracking-[0.18em] uppercase text-firm-gold bg-firm-navy/5 rounded px-2 py-1">${(0, server_renderer_exports.ssrInterpolate)(item.category)}</span><time class="text-xs text-firm-slate">${(0, server_renderer_exports.ssrInterpolate)(item.date)}</time></div><h3 class="font-display text-firm-navy font-semibold text-lg leading-snug mb-3 group-hover:text-firm-gold transition-colors">${(0, server_renderer_exports.ssrInterpolate)(item.title)}</h3><p class="text-sm text-firm-steel leading-relaxed mb-6">${(0, server_renderer_exports.ssrInterpolate)(item.excerpt)}</p><div class="mt-auto pt-4 border-t border-firm-line flex items-center justify-between"><span class="text-xs text-firm-slate">${(0, server_renderer_exports.ssrInterpolate)(item.readMins)} min read</span><span class="inline-flex items-center gap-1.5 text-xs font-semibold text-firm-navy group-hover:text-firm-gold transition-colors"> Read article <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg></span></div></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/News.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
