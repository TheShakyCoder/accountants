import { n as _sfc_main$2, t as _sfc_main$3 } from "./Footer-BGKIJPJS.js";
import _sfc_main$4 from "./Hero-BphQp_Mf.js";
import _sfc_main$5 from "./Stats-CHyDGBt9.js";
import _sfc_main$6 from "./About-Bivxa3Mz.js";
import _sfc_main$7 from "./Services-BQawzYII.js";
import _sfc_main$8 from "./Events-B1fwvD_B.js";
import _sfc_main$9 from "./News-CB_hNH4D.js";
import _sfc_main$10 from "./Volunteer-C-Q4WiYx.js";
import _sfc_main$11 from "./Contact-BmsHoFsW.js";
import { Head, usePage } from "@inertiajs/vue3";
import { ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, unref, useSSRContext } from "vue";
//#region resources/js/Components/InstagramFeed.vue
var _sfc_main$1 = {
	__name: "InstagramFeed",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const facebookUrl = page.props.site.social?.facebook || "https://www.facebook.com/Penwortham2017";
		const instagramUrl = page.props.site.social?.instagram || "https://www.instagram.com/bonbonscoffeebar/";
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "social",
				class: "bg-coffee-cream py-20"
			}, _attrs))}><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"><p class="text-coffee-caramel text-xs font-bold uppercase tracking-[0.22em] mb-5">Stay Connected</p><h2 class="font-display text-coffee-espresso font-extrabold mb-4" style="${ssrRenderStyle({ "font-size": "clamp(1.8rem, 3vw, 2.6rem)" })}"> Follow the Bonbons life. </h2><p class="font-display italic text-coffee-mid text-lg mb-10"> Behind-the-scenes, seasonal specials and regular giveaways — all on our socials. </p><div class="flex flex-wrap justify-center gap-4 mb-6"><a${ssrRenderAttr("href", unref(facebookUrl))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md" aria-label="Follow Bonbons on Facebook"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg> Facebook </a><a${ssrRenderAttr("href", unref(instagramUrl))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-8 py-4 text-white text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" })}" aria-label="Follow Bonbons on Instagram"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram </a></div><p class="text-coffee-caramel/70 text-xs uppercase tracking-widest"> Follow us for giveaways, updates and daily specials </p></div></section>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InstagramFeed.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Home/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		canLogin: { type: Boolean },
		canRegister: { type: Boolean },
		site: { type: Object }
	},
	setup(__props) {
		const navLinks = usePage().props.site.nav_links;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: __props.site.fullname }, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white">`);
			_push(ssrRenderComponent(_sfc_main$2, {
				navLinks: unref(navLinks),
				canLogin: __props.canLogin,
				canRegister: __props.canRegister
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$4, { site: __props.site }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$10, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$11, { site: __props.site }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, { navLinks: unref(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
