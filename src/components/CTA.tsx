import { business } from "../data";
import { type Route } from "../routes";
import { Button } from "./Button";

export function CTA({ go }: { go: (r: Route) => void }) {
  return (
    <section className="cta">
      <div className="container">
        <div>
          <span className="eyebrow light">Let’s discuss your project</span>
          <h2>Discuss your water requirements.</h2>
          <p>
            Tell us where your property is and what you need. Our team will help you plan the next
            step.
          </p>
        </div>
        <div className="actions">
          <Button onClick={() => go("quote")}>Request a Quote</Button>
          <Button variant="outline-light" href={`tel:${business.phonePrimaryLink}`}>
            Call Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
