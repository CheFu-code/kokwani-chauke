import { packages, formatPrice } from "../data";

export function Summary({ selected }: { selected: (typeof packages)[number] | undefined }) {
  return (
    <aside className="summary">
      <span className="eyebrow light">Enquiry summary</span>
      <h3>{selected ? `${selected.depth} metre package` : "Select a package"}</h3>
      <strong>{selected ? formatPrice(selected.price) : "Price shown here"}</strong>
      <small>Advertised base price</small>
      <hr />
      <h4>Package information</h4>
      {["PVC & pump installation", "Control box", "Black pipe"].map((x) => (
        <p key={x}>{x}</p>
      ))}
      <div>
        <small>Separately priced where applicable</small>
        <b>Steel casing: R1,500 / m</b>
        <b>Extra steel casing: R1,000 / m</b>
      </div>
      <em>This summary is not a binding quote. Pricing is confirmed after project review.</em>
    </aside>
  );
}
