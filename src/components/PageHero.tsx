export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
