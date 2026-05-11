function hashCode(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

const PALETTE = [
  ["#dbeafe", "#1d4ed8"],
  ["#fae8ff", "#a21caf"],
  ["#dcfce7", "#15803d"],
  ["#fee2e2", "#b91c1c"],
  ["#fef3c7", "#a16207"],
  ["#cffafe", "#0e7490"],
];

export function AgentAvatar({
  name,
  size = 64,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  const [bg, fg] = PALETTE[hashCode(name) % PALETTE.length];
  return (
    <span
      role="img"
      aria-label={name}
      className={`inline-grid place-items-center rounded-full font-semibold ${className}`}
      style={{
        background: bg,
        color: fg,
        width: size,
        height: size,
        fontSize: size * 0.36,
      }}
    >
      {initials}
    </span>
  );
}
