import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/metadata";
import { staticSlugs, isPageSlug } from "@/lib/routes";
type Props = { params: Promise<{ slug: string[] }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return staticSlugs;
}
export async function generateMetadata({ params }: Props) {
  const page = (await params).slug.join("/");
  if (!isPageSlug(page) || page === "") notFound();
  return pageMetadata("en", page);
}
export default async function Page({ params }: Props) {
  const page = (await params).slug.join("/");
  if (!isPageSlug(page) || page === "") notFound();
  return <ContentPage locale="en" page={page} />;
}
