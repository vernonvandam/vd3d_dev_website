import { t as consultationUrl } from "./services-DJqpv2DE.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./services._service-Bm9XL2hL.mjs";
import { f as ArrowUpRight, l as Check, m as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, n as ConsultationBand, r as SiteFooter, t as Button } from "./site-shell-RnRN57w8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._service-CrP3tHkJ.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const service = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section site-width service-detail",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "link",
				className: "px-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " Back to VD3D"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "service-detail-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: service.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: service.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.detail }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: service.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), feature] }, feature)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "industrial",
						size: "feature",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: consultationUrl,
							children: ["Let’s discuss your project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: service.image,
					alt: service.alt,
					width: 1024,
					height: 768
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationBand, {})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { ServicePage as component };
