import { o as vue_exports, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Pages/Home/Partials/Hero.vue
var _sfc_main = {
	__name: "Hero",
	__ssrInlineRender: true,
	props: { site: {
		type: Object,
		default: () => ({})
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: "home",
				class: "relative bg-firm-hero overflow-hidden"
			}, _attrs))}><div aria-hidden="true" class="pointer-events-none absolute -right-32 -top-32 w-[640px] h-[640px] text-firm-gold/15 firm-sunburst animate-sun-spin"></div><div aria-hidden="true" class="pointer-events-none absolute -left-40 -bottom-40 w-[520px] h-[520px] text-firm-navy/40 firm-sunburst animate-sun-spin"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32"><div class="grid lg:grid-cols-12 gap-12 items-center"><div class="lg:col-span-7 max-w-2xl"><span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-firm-gold mb-6"><span class="h-px w-8 bg-firm-gold/60"></span> Preston Accountants &amp; Tax Advisers </span><h1 class="font-display text-white font-medium leading-[1.05] tracking-tight mb-6" style="${(0, server_renderer_exports.ssrRenderStyle)({ "font-size": "clamp(2.5rem, 6vw, 4.25rem)" })}"> Nurturing small businesses <span class="block italic text-firm-gold-soft">towards success.</span></h1><p class="text-firm-cream/80 leading-relaxed mb-9 max-w-xl text-[1.05rem]"> A personal service for local business owners and individuals across Preston and South Ribble. Plain-English advice, sensible fees, and accountants who actually pick up the phone. </p><div class="flex flex-wrap gap-3"><a href="#contact" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-firm-gold text-firm-ink text-sm font-semibold hover:bg-firm-gold-soft transition-colors shadow-firm"> Book a free consultation <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></a><a href="#services" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-firm-cream/30 text-firm-cream text-sm font-semibold hover:bg-white/5 transition-colors"> See our services </a></div><dl class="mt-12 grid grid-cols-3 gap-6 max-w-lg text-firm-cream/70"><div><dt class="text-xs uppercase tracking-wider text-firm-gold/80 mb-1">Free</dt><dd class="text-sm leading-tight">Initial consultation</dd></div><div><dt class="text-xs uppercase tracking-wider text-firm-gold/80 mb-1">Fixed</dt><dd class="text-sm leading-tight">No-surprise fees</dd></div><div><dt class="text-xs uppercase tracking-wider text-firm-gold/80 mb-1">Local</dt><dd class="text-sm leading-tight">Penwortham office</dd></div></dl></div><div class="lg:col-span-5 relative hidden lg:flex items-center justify-center"><div class="relative aspect-square w-full max-w-md"><div class="absolute inset-0 rounded-full bg-firm-cream/95 shadow-firm-lg"></div><div class="absolute inset-6 rounded-full border border-firm-navy/10"></div><div class="absolute inset-0 flex items-center justify-center p-16"><span class="font-display text-7xl font-semibold tracking-tight text-firm-navy" aria-label="Acme — Preston Accountants &amp; Tax Advisers">Acme</span></div><div aria-hidden="true" class="pointer-events-none absolute -inset-4 rounded-full text-firm-gold/40 firm-sunburst"></div></div></div></div></div><div class="relative border-t border-firm-cream/10 bg-firm-ink/40"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.22em] text-firm-cream/45"><span>Self-Assessment</span><span class="text-firm-gold/40">·</span><span>Limited Company Accounts</span><span class="text-firm-gold/40">·</span><span>VAT &amp; Payroll</span><span class="text-firm-gold/40">·</span><span>HMRC Investigations</span><span class="text-firm-gold/40">·</span><span>Business Start-up</span></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Hero.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
