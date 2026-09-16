import { o as vue_exports, t as server_renderer_exports } from "../ssr.js";
//#region resources/js/Components/HeartDivider.vue
var _sfc_main$1 = {
	__name: "HeartDivider",
	__ssrInlineRender: true,
	props: {
		align: {
			type: String,
			default: "left"
		},
		tone: {
			type: String,
			default: "caramel"
		}
	},
	setup(__props) {
		/**
		* Soft heart-flanked divider — the homely replacement for hard rule lines.
		* Pulls the brand's heart motif (logo + garden sign) through every section.
		*/
		const lineTone = {
			caramel: "bg-coffee-caramel/35",
			gold: "bg-coffee-gold/45",
			cream: "bg-coffee-cream/35"
		};
		const heartTone = {
			caramel: "text-coffee-caramel",
			gold: "text-coffee-gold",
			cream: "text-coffee-cream"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				class: ["flex items-center gap-3", __props.align === "center" ? "justify-center" : "justify-start"],
				"aria-hidden": "true"
			}, _attrs))}><span class="${(0, server_renderer_exports.ssrRenderClass)([lineTone[__props.tone], "h-px w-10 rounded-full"])}"></span><svg class="${(0, server_renderer_exports.ssrRenderClass)([heartTone[__props.tone], "h-4 w-4 shrink-0"])}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg><span class="${(0, server_renderer_exports.ssrRenderClass)([[lineTone[__props.tone], __props.align === "center" ? "w-10" : "w-20"], "h-px rounded-full"])}"></span></div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeartDivider.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Home/Partials/Events.vue
var _sfc_main = {
	__name: "Events",
	__ssrInlineRender: true,
	setup(__props) {
		const events = [
			{
				date: "SEASONAL",
				title: "Halloween Trick or Treat",
				time: "October Half Term",
				location: "In-Store",
				tag: "Seasonal"
			},
			{
				date: "SEASONAL",
				title: "Santa's Grotto Experience",
				time: "December",
				location: "In-Store",
				tag: "Christmas"
			},
			{
				date: "YEAR ROUND",
				title: "Character Visits",
				time: "Check our socials",
				location: "In-Store",
				tag: "For the Kids"
			},
			{
				date: "AVAILABLE NOW",
				title: "Pick 'n' Mix Trailer Hire",
				time: "Weddings & Events",
				location: "Your Venue",
				tag: "Hire"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: "events",
				class: "py-24 bg-paper"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"><div><p class="font-hand text-coffee-caramel text-3xl mb-1">events &amp; hire</p><h2 class="font-display text-coffee-espresso font-extrabold leading-tight" style="${(0, server_renderer_exports.ssrRenderStyle)({ "font-size": "clamp(1.9rem, 3.5vw, 2.8rem)" })}"> What&#39;s <em class="not-italic text-coffee-caramel">on</em>. </h2>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, { class: "mt-5" }, null, _parent));
			_push(`</div><a href="#contact" class="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-coffee-caramel/12 text-sm font-bold text-coffee-caramel hover:bg-coffee-caramel hover:text-coffee-ivory transition-colors"> Get in touch to book <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg></a></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(events, (event) => {
				_push(`<article class="group bg-coffee-ivory rounded-3xl p-7 flex flex-col shadow-warm-sm hover:shadow-warm hover:-translate-y-1 transition-all duration-300"><span class="self-start text-xs font-bold tracking-wide text-coffee-caramel bg-coffee-caramel/10 rounded-full px-3 py-1 mb-4">${(0, server_renderer_exports.ssrInterpolate)(event.date)}</span><h3 class="font-display text-coffee-espresso font-bold text-lg leading-snug mb-4">${(0, server_renderer_exports.ssrInterpolate)(event.title)}</h3>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, { class: "mb-4" }, null, _parent));
				_push(`<div class="flex items-center gap-2 text-sm text-coffee-mid mb-1.5"><svg class="w-4 h-4 text-coffee-caramel shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ${(0, server_renderer_exports.ssrInterpolate)(event.time)}</div><div class="flex items-center gap-2 text-sm text-coffee-mid mb-6"><svg class="w-4 h-4 text-coffee-caramel shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> ${(0, server_renderer_exports.ssrInterpolate)(event.location)}</div><span class="mt-auto self-start text-xs font-bold text-coffee-caramel bg-coffee-caramel/10 rounded-full px-4 py-1.5 group-hover:bg-coffee-caramel group-hover:text-coffee-ivory transition-colors">${(0, server_renderer_exports.ssrInterpolate)(event.tag)}</span></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Events.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
