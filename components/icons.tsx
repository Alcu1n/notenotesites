type IconProps = {
  className?: string;
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
