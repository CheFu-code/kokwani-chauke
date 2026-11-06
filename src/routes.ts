export type Route = "home" | "about" | "services" | "pricing" | "projects" | "contact" | "quote";
export const paths: Record<Route, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  pricing: "/pricing",
  projects: "/projects",
  contact: "/contact",
  quote: "/quote",
};
export const routeFromPath = () =>
  (Object.entries(paths).find(
    ([, p]) => p === (location.pathname.replace(/\/$/, "") || "/"),
  )?.[0] as Route) || "home";
export const metadata: Record<Route, [string, string]> = {
  home: [
    "Borehole Drilling South Africa | Kokwani Chauke Water Drilling",
    "Professional borehole drilling, pump installation and water solutions for homes, farms and businesses across South Africa.",
  ],
  about: [
    "About Kokwani Chauke Water Drilling | South Africa",
    "Learn about our practical approach to borehole drilling and dependable water solutions across South Africa.",
  ],
  services: [
    "Borehole Drilling & Installation Services | South Africa",
    "Explore water borehole drilling, pump installation, casing, water testing and tank solutions.",
  ],
  pricing: [
    "Borehole Drilling Prices | Kokwani Chauke",
    "View advertised borehole drilling packages from 40 to 100 metres and request a quotation.",
  ],
  projects: [
    "Drilling Equipment Gallery | Kokwani Chauke",
    "Illustrative photos of drilling equipment and water storage. Contact our team to discuss your project.",
  ],
  contact: [
    "Contact Kokwani Chauke Water Drilling | South Africa",
    "Call or WhatsApp Kokwani Chauke Water Drilling for a borehole quotation.",
  ],
  quote: [
    "Request a Borehole Quote | Kokwani Chauke",
    "Build a non-binding borehole drilling enquiry and send it to our team on WhatsApp.",
  ],
};
