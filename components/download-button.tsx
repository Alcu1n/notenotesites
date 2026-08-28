import { siteConfig } from "@/lib/site-config";

import { AppStoreIcon, ArrowIcon } from "./icons";

type DownloadButtonProps = {
  className?: string;
};

export function DownloadButton({ className = "" }: DownloadButtonProps) {
  const classes = `download-button ${className}`.trim();

  if (siteConfig.appStoreUrl) {
    return (
      <a className={classes} href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
        <AppStoreIcon />
        <span>
          <small>Available on the</small>
          <strong>App Store</strong>
        </span>
        <ArrowIcon />
      </a>
    );
  }

  return (
    <span
      className={`${classes} download-button--pending`}
      aria-label="App Store link coming soon"
      aria-disabled="true"
      title="App Store link coming soon"
    >
      <AppStoreIcon />
      <span>
        <small>Coming soon to the</small>
        <strong>App Store</strong>
      </span>
      <ArrowIcon />
    </span>
  );
}
