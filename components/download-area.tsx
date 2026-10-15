import QRCode from "qrcode";
import { cache } from "react";
import { downloadLink } from "@/lib/download";
import type { Locale } from "@/lib/routes";
import { DownloadButton } from "./download-button";
import { DownloadQr } from "./download-qr";
const qrImage = cache((url: string) =>
  QRCode.toDataURL(url, {
    width: 196,
    margin: 4,
    errorCorrectionLevel: "M",
    color: { dark: "#292b24", light: "#ffffff" },
  }),
);
export async function DownloadArea({
  locale,
  page = "",
  position = "hero",
  qr = true,
}: {
  locale: Locale;
  page?: string;
  position?: string;
  qr?: boolean;
}) {
  const image = qr ? await qrImage(downloadLink(locale, page)) : "";
  return (
    <div className="download-area">
      <DownloadButton locale={locale} page={page} position={position} />
      {qr && <DownloadQr locale={locale} page={page} image={image} />}
    </div>
  );
}
