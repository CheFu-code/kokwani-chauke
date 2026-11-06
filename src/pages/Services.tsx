import { services, whatsappUrl } from "../data";
import { type Route } from "../routes";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { CTA } from "../components/CTA";

export function Services({ go }: { go: (r: Route) => void }) {
  const purpose = [
    "Used to access groundwater for residential, agricultural, community or business water needs. Drilling depth and scope are confirmed per project.",
    "Connects borehole infrastructure for practical water delivery. Package components and equipment are confirmed in the final quotation.",
    "Helps support and protect the drilled borehole. Appropriate requirements depend on construction and site conditions.",
    "Steel and other pipe casing may be required in certain conditions. Advertised steel casing charges are separate.",
    "Provides information about water characteristics. Confirm the type and scope of testing available for your project.",
    "Supports collection and availability of pumped water. Tank size, placement and installation should be discussed.",
  ];
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Borehole solutions from drilling to installation."
        copy="Borehole drilling, casing, pumps and storage for your property."
      />
      <section className="section service-list">
        <div className="container">
          {services.map((s, i) => (
            <article key={s.title}>
              <b>0{i + 1}</b>
              <div>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <p>{purpose[i]}</p>
                <div className="actions">
                  <Button onClick={() => go("quote")}>Request a Quote</Button>
                  <Button
                    variant="outline"
                    href={whatsappUrl(
                      `Hello Kokwani Chauke Water Drilling, I would like to enquire about ${s.title}.`,
                    )}
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA go={go} />
    </>
  );
}
