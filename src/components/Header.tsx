import { type Route } from "../routes";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Header({
  route,
  go,
  menu,
  setMenu,
}: {
  route: Route;
  go: (r: Route) => void;
  menu: boolean;
  setMenu: (open: boolean) => void;
}) {
  return (
    <header>
      <div className="container nav">
        <button onClick={() => go("home")} aria-label="Homepage">
          <Logo />
        </button>
        <nav className={menu ? "open" : ""} aria-label="Main navigation">
          {(
            [
              ["home", "Home"],
              ["about", "About"],
              ["services", "Services"],
              ["pricing", "Pricing"],
              ["projects", "Gallery"],
              ["contact", "Contact"],
            ] as [Route, string][]
          ).map(([r, l]) => (
            <button className={route === r ? "active" : ""} onClick={() => go(r)} key={r}>
              {l}
            </button>
          ))}
          <Button onClick={() => go("quote")}>Request a quote</Button>
        </nav>
        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
        >
          <Icon name={menu ? "close" : "menu"} size={26} />
        </button>
      </div>
    </header>
  );
}
