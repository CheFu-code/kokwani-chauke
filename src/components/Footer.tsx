import { business, services, generalMessage, whatsappUrl } from "../data";
import { type Route } from "../routes";
import { Logo } from "./Logo";

export function Footer({ go }: { go: (r: Route) => void }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>
            Professional borehole drilling and water installation solutions for homes, farms,
            communities and businesses.
          </p>
          <b>“{business.slogan}”</b>
        </div>
        <div>
          <h4>Quick links</h4>
          {(["about", "services", "pricing", "projects", "contact"] as Route[]).map((r) => (
            <button onClick={() => go(r)} key={r}>
              {r === "projects" ? "Gallery" : r[0].toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
        <div>
          <h4>Services</h4>
          {services.slice(0, 5).map((s) => (
            <button onClick={() => go("services")} key={s.title}>
              {s.title}
            </button>
          ))}
        </div>
        <div className="foot-contact">
          <h4>Contact</h4>
          <a href={`tel:${business.phonePrimaryLink}`}>{business.phonePrimary}</a>
          <a href={`tel:${business.phoneSecondaryLink}`}>{business.phoneSecondary}</a>
          <p>{business.address}</p>
          <a className="green" href={whatsappUrl(generalMessage)} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
      </div>
      <div className="container copyright">
        <span>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </span>
        <span>Serving all nine provinces of South Africa</span>
      </div>
    </footer>
  );
}
