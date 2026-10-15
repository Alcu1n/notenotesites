import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("zh", "");
export default function Page() {
  return <HomePage locale="zh" />;
}
