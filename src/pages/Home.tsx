import { business, images, packages, formatPrice } from "../data";
import { type Route } from "../routes";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { ServiceCards } from "../components/ServiceCards";
import { CTA } from "../components/CTA";

export function Home({ go }: { go: (r: Route) => void }) {
  return (
    <>
      <section className="home-intro">
        <div className="container intro-layout">
          <div className="intro-copy">
            <span className="eyebrow">Serving South Africa nationwide</span>
            <h1>
              Borehole drilling.
              <br />
              Water for your property.
            </h1>
            <p>
              Drilling, pump installation and water storage for homes, farms and businesses across
              South Africa.
            </p>
            <div className="actions">
              <Button variant="purple" onClick={() => go("quote")}>
                Request a quote
              </Button>
              <a className="intro-phone" href={`tel:${business.phonePrimaryLink}`}>
                {business.phonePrimary}
              </a>
            </div>
            <span className="intro-slogan">{business.slogan}</span>
          </div>
          <figure className="intro-photo">
            <img src={images.drillingTruck} alt="Truck-mounted borehole drilling rig" />
          </figure>
        </div>
      </section>
      <section className="home-services section">
        <div className="container">
          <div className="title-row">
            <Heading eyebrow="Our services" title="From drilling to installation" />
            <button className="text-link" onClick={() => go("services")}>
              View all services
            </button>
          </div>
          <ServiceCards go={go} />
        </div>
      </section>
      <section className="section soft home-pricing">
        <div className="container pricing-overview">
          <div>
            <Heading eyebrow="Drilling packages" title="Plan your project" />
            <p className="lead">
              Packages include PVC and pump installation, a control box and black pipe.
            </p>
            <p className="muted">
              Final pricing depends on site conditions and the work required. Additional steel
              casing is charged separately.
            </p>
            <Button variant="purple" onClick={() => go("pricing")}>
              View all packages
            </Button>
          </div>
          <div className="package-table">
            <div className="package-table-head">
              <span>Drilling depth</span>
              <span>Package price</span>
            </div>
            {packages.slice(0, 4).map((pkg) => (
              <button key={pkg.depth} onClick={() => go("pricing")}>
                <span>{pkg.depth} metres</span>
                <strong>{formatPrice(pkg.price)}</strong>
              </button>
            ))}
            <p>Packages available from 40 to 100 metres. Prices subject to confirmation.</p>
          </div>
        </div>
      </section>
      <CTA go={go} />
    </>
  );
}
