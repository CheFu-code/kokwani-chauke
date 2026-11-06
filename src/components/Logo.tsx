export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="logo">
      <span className="logo-mark">KC</span>
      <span className={`logo-copy ${light ? "light" : ""}`}>
        <strong>Kokwani Chauke</strong>
        <small>Water Drilling</small>
      </span>
    </div>
  );
}
