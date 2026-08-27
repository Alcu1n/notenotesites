import { siteConfig } from "@/lib/site-config";

type DownloadButtonProps = {
  className?: string;
};

export function DownloadButton({ className = "" }: DownloadButtonProps) {
  const classes = `download-button ${className}`.trim();

  if (siteConfig.appStoreUrl) {
    return (
      <a className={classes} href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
        <span className="download-button__icon" aria-hidden="true">
          <span />
        </span>
        <span>
          <small>Available on the</small>
          <strong>App Store</strong>
        </span>
        <span className="arrow-mark" aria-hidden="true" />
      </a>
    );
  }

  return (
    <span className={`${classes} download-button--pending`} aria-label="App Store link coming soon">
      <span className="download-button__icon" aria-hidden="true">
        <span />
      </span>
      <span>
        <small>Coming soon to the</small>
        <strong>App Store</strong>
      </span>
      <span className="arrow-mark" aria-hidden="true" />
    </span>
  );
}
