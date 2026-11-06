import { services } from "../data";
import { type Route } from "../routes";

export function ServiceCards({ go }: { go: (r: Route) => void }) {
  return (
    <div className="service-grid">
      {services.map((s) => (
        <article className="service-card" key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <button onClick={() => go("contact")}>Enquire</button>
        </article>
      ))}
    </div>
  );
}
