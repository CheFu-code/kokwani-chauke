import { images } from "../data";
import { type Route } from "../routes";
import { Heading } from "../components/Heading";
import { PageHero } from "../components/PageHero";
import { CTA } from "../components/CTA";

export function About({ go }: { go: (r: Route) => void }) {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Practical water solutions, built around your needs."
        copy="Nationwide borehole drilling for homes, farms, communities and commercial properties across South Africa."
      />
      <section className="section">
        <div className="container split">
          <div>
            <Heading eyebrow="Who we are" title="Helping customers plan dependable water access" />
            <p className="lead">
              Kokwani Chauke Water Drilling provides borehole drilling and related installation
              services across South Africa, with our office based in Giyani, Limpopo.
            </p>
            <p className="muted">
              Our approach is straightforward: listen to the customer, discuss the site and drilling
              requirements, agree the scope and maintain direct communication throughout the
              project.
            </p>
            <p className="muted">
              Because each property is different, final recommendations and quotations are confirmed
              against actual project requirements.
            </p>
          </div>
          <figure className="about-image">
            <img
              src={images.drillingTruck}
              alt="Truck-mounted borehole drilling rig, illustrative photograph"
              loading="lazy"
            />
            <figcaption>
              Illustrative photo ?{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Water_well_drilling_rig.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Mcfly05
              </a>{" "}
              ?{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noreferrer"
              >
                CC BY-SA 4.0
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <CTA go={go} />
    </>
  );
}
