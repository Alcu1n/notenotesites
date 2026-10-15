import type { ReactNode } from "react";
import { SiteDocument } from "@/components/site-document";
export default function ChineseLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="zh">{children}</SiteDocument>;
}
