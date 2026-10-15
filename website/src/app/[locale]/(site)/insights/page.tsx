import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import { formatInsightDate } from "@/lib/format";
import { ContactBand, PageIntro } from "@/components/shared";
import { insightCategories, insights } from "@/content/insights";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  return pageMetadata("/insights", "Insights", "Product notes, case-study approaches, Open4S integration thinking and industry perspective from Embuilded.");
}

export default function InsightsPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ category?: string }> }) {
  const { locale } = use(params); setRequestLocale(locale);
  const { category } = use(searchParams);
  const t = useCopy();
  const active = insightCategories.find(item => item === category) ?? "All insights";
  const shown = insights.filter(post => active === "All insights" || post.category === active);
  return <><PageIntro scene="tower" label={t("INSIGHTS")} title={<>{t("Field notes,")}<br />{t("product thinking.")}</>} description={t("Product updates, case-study approaches, Open4S integration thinking and industry perspective from the Embuilded team.")}/>
  <section className="section wrap"><div className="filter-group insights-filter" role="group" aria-label={t("Filter insights")}>{insightCategories.map(item => <Link key={item} href={item === "All insights" ? "/insights" : `/insights?category=${encodeURIComponent(item)}`} aria-current={active === item ? "page" : undefined} className="insight-chip">{t(item)}</Link>)}</div>
  {shown.length ? <div className="insight-grid">{shown.map(post => <article key={post.slug} className="insight-card"><div className="insight-card-meta"><span className="mono">{t(post.category.toUpperCase())}</span><time dateTime={post.date}>{formatInsightDate(post.date, locale)}</time></div><h2>{t(post.title)}</h2><p>{t(post.excerpt)}</p><Link className="text-link" href={`/insights/${post.slug}`}>{t("Read insight")}<ArrowRight size={18} aria-hidden="true"/></Link></article>)}</div> : <p className="insight-empty">{t("No insights in this category yet — new case-study content is on the way.")}</p>}</section>
  <ContactBand title={t("Have a topic we should cover?")}/></>;
}
