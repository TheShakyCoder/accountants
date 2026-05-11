import { ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Stats.vue
var _sfc_main = {
	__name: "Stats",
	__ssrInlineRender: true,
	setup(__props) {
		const highlights = [
			{
				icon: "☕",
				label: "Quality Coffee"
			},
			{
				icon: "🍵",
				label: "Specialty Teas"
			},
			{
				icon: "🎂",
				label: "Homemade Cakes"
			},
			{
				icon: "🥂",
				label: "Afternoon Tea"
			},
			{
				icon: "🏅",
				label: "Regular Giveaways"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-coffee-caramel py-4" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10"><!--[-->`);
			ssrRenderList(highlights, (h) => {
				_push(`<div class="flex items-center gap-2.5 text-coffee-ivory"><span class="text-lg leading-none" aria-hidden="true">${ssrInterpolate(h.icon)}</span><span class="text-xs font-bold uppercase tracking-widest">${ssrInterpolate(h.label)}</span></div>`);
			});
			_push(`<!--]--></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Stats.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
