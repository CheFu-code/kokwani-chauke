import { useState, type FormEvent } from "react";
import { packages, services, formatPrice, whatsappUrl } from "../data";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { Field, FormHead } from "../components/FormFields";
import { Summary } from "../components/Summary";

export function Quote() {
  const [depth, setDepth] = useState("");
  const selected = packages.find((p) => p.depth === Number(depth));
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget).entries());
    const msg = `Hello Kokwani Chauke Water Drilling. I would like a quotation for borehole drilling.\n\nName: ${d.name}\nContact: ${d.phone}\nEmail: ${d.email || "Not provided"}\nProvince: ${d.province}\nTown / location: ${d.town}\nProperty type: ${d.property}\nService: ${d.service}\nEstimated depth: ${d.depth || "Not sure"}${selected ? `\nAdvertised base price: ${formatPrice(selected.price)}` : ""}\nAdditional information: ${d.message || "None"}\n\nI understand this is an enquiry and not a binding quotation.`;
    open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <PageHero
        eyebrow="Quotation request"
        title="Tell us about your water project."
        copy="Choose a package, add project details and send a complete enquiry directly through WhatsApp."
      />
      <section className="section form-section">
        <div className="container quote-layout">
          <form className="form-card" onSubmit={submit}>
            <FormHead
              title="Your project details"
              copy="Required fields are marked with an asterisk."
            />
            <div className="form-grid">
              <Field label="Full name *">
                <input name="name" required autoComplete="name" />
              </Field>
              <Field label="Contact number *">
                <input name="phone" type="tel" required pattern="[0-9 +()-]{7,}" />
              </Field>
              <Field label="Email (optional)">
                <input name="email" type="email" />
              </Field>
              <Field label="Province *">
                <select name="province" required defaultValue="">
                  <option value="" disabled>
                    Select province
                  </option>
                  {[
                    "Limpopo",
                    "Gauteng",
                    "Mpumalanga",
                    "North West",
                    "KwaZulu-Natal",
                    "Free State",
                    "Eastern Cape",
                    "Western Cape",
                    "Northern Cape",
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </Field>
              <Field label="Town / project location *">
                <input name="town" required />
              </Field>
              <Field label="Property type *">
                <select name="property" required defaultValue="">
                  <option value="" disabled>
                    Select property type
                  </option>
                  {[
                    "Home / residential",
                    "Farm / agriculture",
                    "Rural community",
                    "Commercial property",
                    "Other",
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </Field>
              <Field label="Service required *">
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select service
                  </option>
                  {services.map((x) => (
                    <option key={x.title}>{x.title}</option>
                  ))}
                </select>
              </Field>
              <Field label="Estimated borehole depth">
                <select name="depth" value={depth} onChange={(e) => setDepth(e.target.value)}>
                  <option value="">Not sure yet</option>
                  {packages.map((x) => (
                    <option value={x.depth} key={x.depth}>
                      {x.depth} metres — {formatPrice(x.price)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Additional information" wide>
                <textarea name="message" rows={5} />
              </Field>
            </div>
            <label className="consent">
              <input type="checkbox" required />I consent to these details being included in a
              WhatsApp message for the purpose of responding to my enquiry. *
            </label>
            <div className="submit-row">
              <Button type="submit">Send via WhatsApp</Button>
              <span>No details stored on this website</span>
            </div>
          </form>
          <Summary selected={selected} />
        </div>
      </section>
    </>
  );
}
