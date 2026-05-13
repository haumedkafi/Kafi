export function Stars({
  rating,
  size = 16,
  className = "",
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      className={`inline-flex items-center text-amber-500 ${className}`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && hasHalf;
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            aria-hidden
            className="shrink-0"
          >
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.5l2.6 5.27 5.82.84-4.21 4.1.99 5.79L10 14.77 4.8 17.5l.99-5.79L1.58 7.61l5.82-.84z"
              fill={
                isFull
                  ? "currentColor"
                  : isHalf
                    ? `url(#half-${i})`
                    : "#e5e7eb"
              }
            />
          </svg>
        );
      })}
    </span>
  );
}
