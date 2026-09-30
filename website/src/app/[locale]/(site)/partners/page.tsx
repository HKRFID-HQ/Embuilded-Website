import { setRequestLocale } from "next-intl/server";
import { permanentRedirect } from "next/navigation";
export default async function PartnersRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  permanentRedirect(locale === "zh-HK" ? "/zh-HK/about#partners" : "/about#partners");
}
