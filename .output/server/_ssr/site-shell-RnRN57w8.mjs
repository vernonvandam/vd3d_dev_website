import { n as __toESM } from "../_runtime.mjs";
import { n as services, t as consultationUrl } from "./services-DJqpv2DE.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MapPin, c as ChevronDown, f as ArrowUpRight, i as Menu, o as Layers, r as Route, s as Crosshair, t as X, u as Box } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-RnRN57w8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			industrial: "bg-primary text-primary-foreground hover:bg-primary/85 rounded-sm font-semibold",
			industrialOutline: "border border-industrial-muted/50 text-industrial-text hover:bg-industrial-border rounded-sm",
			navigation: "text-industrial-muted hover:text-industrial-text rounded-sm p-0 h-auto",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			feature: "h-12 px-6 text-xs",
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": "VD3D home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wordmark",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["VD", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3D" })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "brand-subline",
			children: "DESIGN. PRINT. CREATE."
		})]
	});
}
function SiteHeader() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-width header-top",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "header-location",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 13 }), " Perth, Western Australia"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "industrial",
						size: "default",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: consultationUrl,
							children: ["Let’s talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mobile-toggle",
						variant: "navigation",
						size: "icon",
						"aria-label": mobileOpen ? "Close menu" : "Open menu",
						"aria-expanded": mobileOpen,
						onClick: () => setMobileOpen(!mobileOpen),
						children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: `header-nav ${mobileOpen ? "is-open" : ""}`,
			"aria-label": "Main navigation",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-width nav-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "service-menu",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "navigation",
							className: "nav-link",
							"aria-expanded": servicesOpen,
							onClick: () => setServicesOpen(!servicesOpen),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {}),
								" Our services ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 12 })
							]
						}), servicesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "service-dropdown",
							children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$service",
								params: { service: service.slug },
								onClick: () => {
									setServicesOpen(false);
									setMobileOpen(false);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 }), service.title]
							}, service.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "nav-link",
						href: "/#process",
						onClick: () => setMobileOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {}), " Our process"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "nav-link",
						href: "/#services",
						onClick: () => setMobileOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {}), " What we create"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "nav-link",
						href: "/#about",
						onClick: () => setMobileOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, {}), " About VD3D"]
					})
				]
			})
		})]
	});
}
function ConsultationBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "cta-band",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-width cta-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
				"Your next idea.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Let’s make it real." })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Start with a conversation. No obligations, just possibilities." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "industrial",
				size: "feature",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: consultationUrl,
					children: ["Book a consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
				})
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-width",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-main",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#services",
							children: "Our services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#about",
							children: "About us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: consultationUrl,
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.instagram.com/vandam3d/",
							target: "_blank",
							rel: "noreferrer",
							children: ["Instagram ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "↗"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 VD3D. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Designed, printed and created in Perth, Western Australia." })]
			})]
		})
	});
}
//#endregion
export { SiteHeader as i, ConsultationBand as n, SiteFooter as r, Button as t };
