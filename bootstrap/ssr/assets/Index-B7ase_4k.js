import { a as usePage, n as head_default, o as vue_exports, t as server_renderer_exports } from "../ssr.js";
import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-D-rbydXM.js";
import _sfc_main$3 from "./Hero-CNZ4uncr.js";
import _sfc_main$4 from "./Stats-Ddz-Mf-k.js";
import _sfc_main$5 from "./About-BECbL5MT.js";
import _sfc_main$6 from "./Services-4AHMJOW8.js";
import _sfc_main$7 from "./WhyUs-74Pc4HuI.js";
import _sfc_main$8 from "./News-DAtNnWNv.js";
import _sfc_main$9 from "./Contact-6H1JXbZ9.js";
//#region resources/js/Pages/Home/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		canLogin: { type: Boolean },
		canRegister: { type: Boolean }
	},
	setup(__props) {
		const site = usePage().props.site;
		const navLinks = site?.nav_links ?? [];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(head_default), { title: (0, vue_exports.unref)(site).fullname }, null, _parent));
			_push(`<div class="font-sans antialiased text-firm-steel bg-white">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				navLinks: (0, vue_exports.unref)(navLinks),
				canLogin: __props.canLogin,
				canRegister: __props.canRegister
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, { site: (0, vue_exports.unref)(site) }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$4, null, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$5, null, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$6, null, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$7, null, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$8, null, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$9, { site: (0, vue_exports.unref)(site) }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, { navLinks: (0, vue_exports.unref)(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
