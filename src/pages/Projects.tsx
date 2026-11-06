import { useState } from "react";
import { images } from "../data";
import { type Route } from "../routes";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { CTA } from "../components/CTA";

export function Projects({ go }: { go: (r: Route) => void }) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items: { c: string; img: string; t: string }[] = [
    { c: "Drilling", img: images.hero, t: "Truck-mounted drilling rig" },
    { c: "Equipment", img: images.equipment, t: "Site equipment" },
    { c: "Storage", img: images.tanks, t: "Water storage" },
  ];
  const shown = filter === "All" ? items : items.filter((x) => x.c === filter);
  return (
    <>
      <PageHero
        eyebrow="Equipment gallery"
        title="Drilling equipment and water storage."
        copy="Industry reference images. Contact our team to discuss work relevant to your project."
      />
      <section className="section">
        <div className="container">
          <div className="filters">
            {["All", "Drilling", "Equipment", "Storage"].map((x) => (
              <button className={filter === x ? "active" : ""} onClick={() => setFilter(x)} key={x}>
                {x}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {shown.map((x, i) => (
              <button
                className={i === 0 ? "wide" : ""}
                onClick={() => setLightbox(x.img)}
                key={x.t}
                aria-label={`View ${x.t.toLowerCase()}`}
              >
                <img
                  src={x.img}
                  alt={`${x.t}; illustrative photo, not company equipment`}
                  loading="lazy"
                />
                <span>
                  <small>{x.c} &middot; Illustrative photo</small>
                  <strong>{x.t}</strong>
                </span>
              </button>
            ))}
          </div>
          <div className="notice">
            <p>
              <strong>Photography note</strong>
              <span>
                Stock imagery does not represent completed Kokwani Chauke projects. Drilling truck
                photo:{" "}
                <a href="/images/ATTRIBUTION.md" target="_blank" rel="noreferrer">
                  Mcfly05, CC BY-SA 4.0
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      </section>
      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button onClick={() => setLightbox(null)} aria-label="Close">
            <Icon name="close" size={26} />
          </button>
          <img src={lightbox} alt="Expanded generic industry reference" />
        </div>
      )}
      <CTA go={go} />
    </>
  );
}
