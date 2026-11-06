import { business, generalMessage, whatsappUrl } from "../data";

export function MobileContactBar() {
  return (
    <div className="mobile-bar">
      <a href={`tel:${business.phonePrimaryLink}`}>Call</a>
      <a href={whatsappUrl(generalMessage)} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
