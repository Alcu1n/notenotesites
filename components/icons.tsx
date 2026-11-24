type IconProps = {
  className?: string;
};

type FeatureIconProps = {
  kind: "text" | "photo" | "sticker";
};

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`arrow-mark ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

// Apple mark from Bootstrap Icons (MIT); see public/licenses/bootstrap-icons.txt.
export function AppleIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`download-button__icon ${className}`.trim()}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
    </svg>
  );
}

export function LockIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`lock-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="10" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <path d="M12 14v2" />
    </svg>
  );
}

export function FeatureIcon({ kind }: FeatureIconProps) {
  if (kind === "text") {
    return (
      <svg className="feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4.5" y="4" width="23" height="24" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.5 11.5h13M9.5 16.5h13M9.5 21.5h7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "photo") {
    return (
      <svg className="feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m6.5 22.5 6.2-6.2 4.2 4.2 2.8-2.8 5.8 4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className="feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="7" y="5" width="18" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 2.5h11a3 3 0 0 1 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <path d="M11 12.5h10M11 17h6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20.5" cy="21" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function SparkIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`spark-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9L12 3Z" />
    </svg>
  );
}
