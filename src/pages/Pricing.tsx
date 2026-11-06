import { packages } from "../data";
import { type Route } from "../routes";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { PageHero } from "../components/PageHero";
import { PriceCard } from "../components/PriceCard";
import { Notice } from "../components/Notice";

export function Pricing({ go }: { go: (r: Route) => void }) {
  return (
    <>
      <PageHero
        eyebrow="Pricing & packages"
        title="A clear starting point for your borehole project."
        copy="Compare drilling depths and contact us to confirm the right package for your site."
      />
      <div className="included">
        <div className="container">
          <strong>Full package includes:</strong>
          {["PVC & pump installation", "Control box", "Black pipe"].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
      <section className="section">
        <div className="container">
          <Heading
            center
            eyebrow="40 to 100 metres"
            title="Select your drilling depth"
            copy="PVC and pump installation, control box and black pipe included."
          />
          <div className="price-grid all">
            {packages.map((p) => (
              <PriceCard pkg={p} key={p.depth} />
            ))}
          </div>
          <div className="extras">
            <div>
              <small>Additional charge</small>
              <strong>1m Steel Casing</strong>
              <b>R1,500</b>
            </div>
            <div>
              <small>Additional charge</small>
              <strong>1m Extra Steel Casing</strong>
              <b>R1,000</b>
            </div>
            <p>
              Additional casing is separately priced and is not shown as automatically included in
              the full package.
            </p>
          </div>
          <Notice />
          <div className="center-button">
            <Button onClick={() => go("quote")}>Build a Quote Request</Button>
          </div>
        </div>
      </section>
    </>
  );
}
