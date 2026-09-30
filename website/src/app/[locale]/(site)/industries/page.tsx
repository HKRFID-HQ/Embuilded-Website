import { setRequestLocale } from "next-intl/server";
import { permanentRedirect } from "next/navigation";
export default async function IndustriesRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  permanentRedirect(locale === "zh-HK" ? "/zh-HK/solutions#industries" : "/solutions#industries");
}
