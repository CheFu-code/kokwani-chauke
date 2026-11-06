import { useState, useEffect } from "react";
import { type Route, paths, routeFromPath, metadata } from "./routes";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Projects } from "./pages/Projects";
import { Quote } from "./pages/Quote";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MobileContactBar } from "./components/MobileContactBar";

export default function App() {
  const [route, setRoute] = useState<Route>(routeFromPath());
  const [menu, setMenu] = useState(false);
  const go = (r: Route) => {
    history.pushState({}, "", paths[r]);
    setRoute(r);
    setMenu(false);
    scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const pop = () => setRoute(routeFromPath());
    addEventListener("popstate", pop);
    return () => removeEventListener("popstate", pop);
  }, []);
  useEffect(() => {
    document.title = metadata[route][0];
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata[route][1]);
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.append(link);
    }
    link.href = `${location.origin}${paths[route]}`;
  }, [route]);
  const page = {
    home: <Home go={go} />,
    about: <About go={go} />,
    services: <Services go={go} />,
    pricing: <Pricing go={go} />,
    projects: <Projects go={go} />,
    contact: <Contact />,
    quote: <Quote />,
  }[route];
  return (
    <>
      <Header route={route} go={go} menu={menu} setMenu={setMenu} />
      <main>{page}</main>
      <Footer go={go} />
      <MobileContactBar />
    </>
  );
}
