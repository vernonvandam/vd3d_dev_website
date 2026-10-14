import { n as services } from "./services-DJqpv2DE.mjs";
import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._service-Bm9XL2hL.js
var $$splitComponentImporter = () => import("./services._service-CrP3tHkJ.mjs");
var Route = createFileRoute("/services/$service")({
	loader: ({ params }) => {
		const service = services.find((item) => item.slug === params.service);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.title ?? "Services"} | VD3D Perth` },
		{
			name: "description",
			content: loaderData?.description ?? "Explore VD3D services in Perth."
		},
		{
			property: "og:title",
			content: `${loaderData?.title ?? "Services"} | VD3D Perth`
		},
		{
			property: "og:description",
			content: loaderData?.description ?? "Explore VD3D services in Perth."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
