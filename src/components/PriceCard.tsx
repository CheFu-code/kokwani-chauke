import { packages, formatPrice, whatsappUrl } from "../data";
import { Button } from "./Button";

export function PriceCard({ pkg }: { pkg: (typeof packages)[number] }) {
  const message = `Hello Kokwani Chauke Water Drilling, I'm interested in the ${pkg.depth}-metre borehole drilling package advertised at ${formatPrice(pkg.price).replace(/\s/g, "")}. Please provide more information.`;
  return (
    <article className={`price-card ${pkg.featured ? "featured" : ""}`}>
      {pkg.featured && <i>60 metre package</i>}
      <div>
        <strong>{pkg.depth}</strong>
        <span>metres</span>
      </div>
      <h3>{formatPrice(pkg.price)}</h3>
      <small>Full package</small>
      <ul>
        {["PVC & pump installation", "Control box", "Black pipe"].map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <Button variant={pkg.featured ? "primary" : "purple"} href={whatsappUrl(message)}>
        Enquire
      </Button>
    </article>
  );
}
