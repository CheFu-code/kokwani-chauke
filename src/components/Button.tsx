import { type ReactNode } from "react";

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  type,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: string;
  type?: "submit";
}) {
  return href ? (
    <a
      className={`btn ${variant}`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <button type={type || "button"} className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
