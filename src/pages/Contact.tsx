import { useState, type FormEvent } from "react";
import { business, services, packages, generalMessage, whatsappUrl } from "../data";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { Field, FormHead } from "../components/FormFields";

export function Contact() {
  const [opened, setOpened] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget).entries());
    const msg = `Hello Kokwani Chauke Water Drilling, I would like to make an enquiry.\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || "Not provided"}\nService: ${d.service}\nPreferred depth: ${d.depth || "Not sure"}\nProject location: ${d.location}\nMessage: ${d.message || "None"}`;
    setOpened(true);
    open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s discuss your borehole requirements."
        copy="Call, WhatsApp or send an enquiry for your project anywhere in South Africa."
      />
      <section className="section form-section">
        <div className="container">
          <div className="contact-cards">
            <div>
              <small>Call our team</small>
              <a href={`tel:${business.phonePrimaryLink}`}>
                <strong>{business.phonePrimary}</strong>
              </a>
              <a href={`tel:${business.phoneSecondaryLink}`}>
                <b>{business.phoneSecondary}</b>
              </a>
            </div>
            <a href={whatsappUrl(generalMessage)} target="_blank" rel="noreferrer">
              <small>WhatsApp enquiries</small>
              <strong>{business.phonePrimary}</strong>
              <b>Start a conversation</b>
            </a>
            <div>
              <small>Visit our office</small>
              <strong>Baloyi Complex, Office 26</strong>
              <b>R81 Main Road, Giyani</b>
            </div>
          </div>
          <div className="contact-layout">
            <form className="form-card" onSubmit={submit}>
              <FormHead
                title="Send an enquiry"
                copy="Your completed message opens in WhatsApp for review and sending."
              />
              <div className="form-grid">
                <Field label="Full name *">
                  <input name="name" required />
                </Field>
                <Field label="Phone number *">
                  <input name="phone" type="tel" required pattern="[0-9 +()-]{7,}" />
                </Field>
                <Field label="Email (optional)">
                  <input name="email" type="email" />
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
                <Field label="Preferred drilling depth">
                  <select name="depth">
                    <option value="">Not sure</option>
                    {packages.map((x) => (
                      <option key={x.depth}>{x.depth} metres</option>
                    ))}
                  </select>
                </Field>
                <Field label="Project location *">
                  <input name="location" required />
                </Field>
                <Field label="Additional message" wide>
                  <textarea name="message" rows={5} />
                </Field>
              </div>
              <div className="submit-row">
                <Button type="submit">Continue to WhatsApp</Button>
                <span>Privacy-conscious, no website storage</span>
              </div>
              {opened && (
                <p className="feedback">
                  Continue in WhatsApp to review and send your enquiry. If no window opened, allow
                  pop-ups and try again.
                </p>
              )}
            </form>
            <aside className="location">
              <div className="map">
                <strong>Find our office</strong>
                <p>Use Google Maps to search for our office address in Giyani.</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Search address on Google Maps
                </a>
              </div>
              <div>
                <small>Office address</small>
                <p>{business.address}</p>
              </div>
              <div>
                <small>Planning a visit?</small>
                <p>Please call ahead to arrange your visit.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
