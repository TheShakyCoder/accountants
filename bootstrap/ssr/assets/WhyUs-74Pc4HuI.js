import { o as vue_exports, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Pages/Home/Partials/WhyUs.vue
var _sfc_main = {
	__name: "WhyUs",
	__ssrInlineRender: true,
	setup(__props) {
		const steps = [
			{
				n: "01",
				title: "Free initial chat",
				body: "Pop into the Penwortham office or jump on a call. Tell us what you do; we listen."
			},
			{
				n: "02",
				title: "Fixed-fee proposal",
				body: "A written quote — clear scope, clear price. No timesheets, no creeping invoices."
			},
			{
				n: "03",
				title: "Switch &amp; settle in",
				body: "We handle the handover with your old accountant and HMRC. You barely lift a finger."
			},
			{
				n: "04",
				title: "Year-round support",
				body: "Quarterly check-ins, unlimited questions, and a real person when something matters."
			}
		];
		const testimonials = [
			{
				quote: "Acme took our books off our hands inside a week. The transition was painless and we finally understand our numbers.",
				name: "Sarah Holden",
				role: "Director, Penwortham boutique"
			},
			{
				quote: "Honest, plain-English advice that has saved us money two years running. I couldn't recommend them more highly.",
				name: "James Cartwright",
				role: "Self-employed contractor"
			},
			{
				quote: "They actually pick up the phone — which sounds basic, but after years with a big firm it felt like a revelation.",
				name: "Priya Shah",
				role: "Founder, local design studio"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: "why",
				class: "relative bg-firm-ink text-firm-cream py-24 overflow-hidden"
			}, _attrs))}><div aria-hidden="true" class="pointer-events-none absolute -right-60 top-1/2 -translate-y-1/2 w-[700px] h-[700px] text-firm-gold/8 firm-sunburst animate-sun-spin"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="max-w-2xl mb-16"><p class="text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-3">Why Acme</p><h2 class="font-display font-semibold leading-tight text-white" style="${(0, server_renderer_exports.ssrRenderStyle)({ "font-size": "clamp(2rem, 4vw, 2.85rem)" })}"> Built for the conversation, <span class="italic text-firm-gold-soft">not the transaction.</span></h2><div class="h-1 w-12 bg-firm-gold mt-5"></div></div><ol class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-firm-cream/10 rounded-2xl overflow-hidden mb-20"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(steps, (s) => {
				_push(`<li class="bg-firm-ink p-8"><p class="font-display text-firm-gold text-3xl font-semibold mb-3">${(0, server_renderer_exports.ssrInterpolate)(s.n)}</p><p class="font-display text-white text-lg font-semibold mb-2">${s.title ?? ""}</p><p class="text-firm-cream/70 text-sm leading-relaxed">${(0, server_renderer_exports.ssrInterpolate)(s.body)}</p></li>`);
			});
			_push(`<!--]--></ol><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(testimonials, (t) => {
				_push(`<figure class="bg-white/[0.04] border border-firm-cream/10 rounded-2xl p-7 backdrop-blur-sm"><svg class="w-7 h-7 text-firm-gold mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2H4v2h1a4 4 0 004-4V9a2 2 0 00-2-2H9zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V9a2 2 0 00-2-2h2z"></path></svg><blockquote class="text-firm-cream/85 leading-relaxed text-[0.95rem] mb-5"> &quot;${(0, server_renderer_exports.ssrInterpolate)(t.quote)}&quot; </blockquote><figcaption><p class="font-semibold text-white text-sm">${(0, server_renderer_exports.ssrInterpolate)(t.name)}</p><p class="text-firm-cream/55 text-xs mt-0.5">${(0, server_renderer_exports.ssrInterpolate)(t.role)}</p></figcaption></figure>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/WhyUs.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
