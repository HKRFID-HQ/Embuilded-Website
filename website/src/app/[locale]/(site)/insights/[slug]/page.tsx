import { setRequestLocale } from "next-intl/server";
import { getCopy } from "@/i18n/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactBand, PageHeroImage } from "@/components/shared";
import { insights } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";
import { formatInsightDate } from "@/lib/format";

export const dynamicParams = false;
export function generateStaticParams() { return insights.map(post => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params; setRequestLocale(locale);
  const post = insights.find(item => item.slug === slug);
  return pageMetadata(`/insights/${slug}`, post?.title ?? "Insight not found", post?.excerpt ?? "Insights from Embuilded.");
}
export default async function InsightPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { locale, slug } = await params; setRequestLocale(locale);
  const t = await getCopy();
  const post = insights.find(item => item.slug === slug);
  if (!post) notFound();
  const more = insights.filter(item => item.slug !== post.slug).slice(0, 2);
  return <><section className="page-intro page-intro-media wrap insight-article-intro"><nav className="breadcrumb" aria-label={t("Breadcrumb")}><Link href="/insights">{t("Insights")}</Link><ArrowRight size={13} aria-hidden="true"/><span>{t(post.title)}</span></nav><div className="insight-card-meta"><span className="mono">{t(post.category.toUpperCase())}</span><time dateTime={post.date}>{formatInsightDate(post.date, locale)}</time><span>{t("%MIN% min read").replace("%MIN%", String(post.minutes))}</span></div><h1>{t(post.title)}</h1><p className="insight-lede">{t(post.excerpt)}</p><PageHeroImage scene={post.scene}/></section>
  <article className="section wrap insight-body">{post.sections.map((section, index) => <section key={index}>{section.heading ? <h2>{t(section.heading)}</h2> : null}{section.paragraphs.map(paragraph => <p key={paragraph.slice(0, 40)}>{t(paragraph)}</p>)}</section>)}
  {post.related ? <aside className="insight-related"><h2>{t("Continue reading.")}</h2><div>{post.related.map(link => <Link key={link.href} className="text-link" href={link.href}>{t(link.label)}<ArrowUpRight size={18} aria-hidden="true"/></Link>)}</div></aside> : null}</article>
  {more.length ? <section className="page-panel"><div className="wrap"><div className="section-heading"><h2>{t("More insights.")}</h2></div><div className="insight-grid insight-grid-compact">{more.map(item => <article key={item.slug} className="insight-card"><div className="insight-card-meta"><span className="mono">{t(item.category.toUpperCase())}</span><time dateTime={item.date}>{formatInsightDate(item.date, locale)}</time></div><h3>{t(item.title)}</h3><Link className="text-link" href={`/insights/${item.slug}`}>{t("Read insight")}<ArrowRight size={18} aria-hidden="true"/></Link></article>)}</div></div></section> : null}
  <ContactBand title={t("Have a topic we should cover?")}/></>;
}
