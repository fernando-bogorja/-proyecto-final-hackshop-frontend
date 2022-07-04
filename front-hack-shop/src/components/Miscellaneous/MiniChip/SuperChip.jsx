import "./SuperChip.css";

export default function MiniChip({ variant, color, size, children }) {
  return <span className={`chip ${size} ${variant} ${color}`}>{children}</span>;
}
