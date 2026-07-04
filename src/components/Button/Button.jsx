import "./Button.css";

export default function Button({
  label,
  variant = "primary",
  disabled = false,
}) {
  return (
    <button
      className={`btn ${variant}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}