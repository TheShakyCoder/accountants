import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { createBlock, createTextVNode, createVNode, mergeProps, openBlock, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Home/Partials/News.vue
var _sfc_main = {
	__name: "News",
	__ssrInlineRender: true,
	setup(__props) {
		const news = [
			{
				date: "1 May 2026",
				title: "New American candy shipment just landed",
				excerpt: "We've got a fresh batch of viral TikTok snacks, Takis, and limited-edition Reese's flavours — grab them before they're gone!",
				tag: "New Stock",
				tagColor: "bg-brand-100 text-brand-700"
			},
			{
				date: "15 Apr 2026",
				title: "Pick 'n' mix trailer now available for hire",
				excerpt: "Bring the pick 'n' mix experience to your wedding, party, or corporate event. Our mobile sweet shop is ready to roll!",
				tag: "Hire",
				tagColor: "bg-purple-100 text-purple-700"
			},
			{
				date: "1 Apr 2026",
				title: "Summer sweet hampers now available",
				excerpt: "The perfect gift for any sweet tooth — our handmade hampers are packed with a mix of retro, American, and pick 'n' mix favourites.",
				tag: "Gifts",
				tagColor: "bg-amber-100 text-amber-700"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "news",
				class: "py-20 bg-white"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-end justify-between mb-14"><div><span class="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">Latest News</span><h2 class="font-display text-3xl sm:text-4xl font-extrabold text-warm-900"> What&#39;s <span class="text-gradient-candy">new</span> in the shop </h2></div>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/news-updates",
				class: "hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-700 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` All news <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
					else return [createTextVNode(" All news "), (openBlock(), createBlock("svg", {
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M9 5l7 7-7 7"
					})]))];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid md:grid-cols-3 gap-7"><!--[-->`);
			ssrRenderList(news, (item) => {
				_push(`<article class="group border border-warm-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer"><div class="flex items-center justify-between mb-4"><span class="${ssrRenderClass([item.tagColor, "px-2.5 py-1 rounded-full text-xs font-semibold"])}">${ssrInterpolate(item.tag)}</span><time class="text-xs text-warm-400">${ssrInterpolate(item.date)}</time></div><h3 class="font-semibold text-warm-900 mb-3 leading-snug group-hover:text-brand-600 transition-colors">${ssrInterpolate(item.title)}</h3><p class="text-sm text-warm-500 leading-relaxed">${ssrInterpolate(item.excerpt)}</p><div class="mt-4 flex items-center gap-1 text-xs font-medium text-brand-500"> Read more <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/News.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
