type Variant = "primary" | "reverse" | "mono-black" | "mono-white";

export function Mark({
  size = 32,
  variant = "primary",
  className = "",
}: {
  size?: number;
  variant?: Variant;
  className?: string;
}) {
  const palette = {
    primary: { bg: "#8B1F1F", fg: "#FFFFFF", slit: "#8B1F1F" },
    reverse: { bg: "#222222", fg: "#FFFFFF", slit: "#222222" },
    "mono-black": { bg: "#222222", fg: "#FFFFFF", slit: "#222222" },
    "mono-white": { bg: "#FFFFFF", fg: "#222222", slit: "#FFFFFF" },
  }[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      role="img"
      aria-label="Sight"
      className={className}
    >
      <rect width="44" height="44" rx="8" fill={palette.bg} />
      <text
        x="22"
        y="31"
        textAnchor="middle"
        fontFamily="'Inter Tight', Inter, system-ui, sans-serif"
        fontWeight="600"
        fontSize="30"
        fill={palette.fg}
      >
        S
      </text>
      <rect x="0" y="20.5" width="44" height="3" fill={palette.slit} />
    </svg>
  );
}
