import { ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Services.vue
var _sfc_main = {
	__name: "Services",
	__ssrInlineRender: true,
	setup(__props) {
		const menuItems = [
			{
				icon: "☕",
				title: "Espresso &amp; Coffee",
				desc: "From classic flat whites and lattes to single-origin pour overs — every cup crafted to order by our team.",
				tag: "Signature Roasts"
			},
			{
				icon: "🍵",
				title: "Specialty Teas",
				desc: "A curated selection of loose-leaf and blended teas, served properly, the way they deserve to be.",
				tag: "Loose Leaf"
			},
			{
				icon: "🍳",
				title: "Breakfasts",
				desc: "Full English, eggs your way, and toasted options — the perfect way to start any morning in style.",
				tag: "Served All Morning"
			},
			{
				icon: "🥗",
				title: "Light Lunches",
				desc: "Seasonal soups, freshly filled sandwiches, and daily specials made with locally sourced ingredients.",
				tag: "Daily Specials"
			},
			{
				icon: "🎂",
				title: "Homemade Cakes",
				desc: "Baked in-house and displayed proudly — rotating regularly. When they're gone, they're gone.",
				tag: "Baked Fresh Daily"
			},
			{
				icon: "🥂",
				title: "Afternoon Tea",
				desc: "Tiered stands, finger sandwiches, warm scones and prosecco — the full, glorious affair.",
				tag: "With or Without Prosecco"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "menu",
				class: "bg-coffee-espresso py-24"
			}, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><p class="text-coffee-gold text-xs font-bold uppercase tracking-[0.22em] mb-4">What We Serve</p><h2 class="font-display text-coffee-cream font-extrabold" style="${ssrRenderStyle({ "font-size": "clamp(2rem, 4vw, 3.2rem)" })}"> Good food, great coffee. </h2><p class="font-display italic text-coffee-gold mt-3 text-lg">Made fresh. Served with care.</p></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-coffee-caramel/10 border border-coffee-caramel/10"><!--[-->`);
			ssrRenderList(menuItems, (item) => {
				_push(`<div class="group bg-coffee-dark hover:bg-coffee-mid p-10 text-center flex flex-col items-center transition-colors duration-300 border border-coffee-caramel/10"><span class="text-4xl mb-5 block" aria-hidden="true">${ssrInterpolate(item.icon)}</span><h3 class="font-display text-coffee-cream font-bold text-lg mb-3">${item.title ?? ""}</h3><p class="text-coffee-cream/55 text-sm leading-relaxed mb-5">${ssrInterpolate(item.desc)}</p><span class="mt-auto text-[10px] font-bold uppercase tracking-widest text-coffee-gold border border-coffee-caramel/40 px-3 py-1 group-hover:border-coffee-gold transition-colors">${ssrInterpolate(item.tag)}</span></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Services.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
