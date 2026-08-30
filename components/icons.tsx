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

export function AppStoreIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={`download-button__icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 4.2-5.8 10.1M12 4.2l5.8 10.1M8 14.3h8M9.4 15.1l-2.7 4.7M14.6 15.1l2.7 4.7" />
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
      <svg className="feature-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="7" width="32" height="34" rx="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M15 16h18M15 23h18M15 30h11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "photo") {
    return (
      <svg className="feature-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="7" y="10" width="34" height="28" rx="4" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="31" cy="18" r="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="m10 33 9-9 6 6 4-4 9 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className="feature-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="m24 7 4.2 8.5 9.4 1.4-6.8 6.6 1.6 9.3-8.4-4.4-8.4 4.4 1.6-9.3-6.8-6.6 9.4-1.4L24 7Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="23" r="3" fill="currentColor" />
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
