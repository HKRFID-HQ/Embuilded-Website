import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useCopy } from "@/i18n/copy";
import { pageMetadata } from "@/lib/metadata";
import { Catalog } from "@/components/catalog";
import { IndustryPhoto } from "@/components/industry-photo";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactBand, PageIntro } from "@/components/shared";
import { industries, solutions } from "@/content/site";
export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {const {locale}=await params; setRequestLocale(locale); return pageMetadata("/solutions", "Connected solutions", "Explore Gas Monitoring, HookCam, Outrigger Monitoring, Worker Tracking, Site Vision and RFID / Asset Tracking.");}
export default function SolutionsPage({params}: {params: Promise<{locale: string}>}) {
 const {locale}=use(params); setRequestLocale(locale);
 const t = useCopy(); return <><PageIntro scene="site" label={t("SOLUTIONS")} title={<>{t("Start with your site.")}<br />{t("Connect what matters.")}</>} description={t("Practical combinations of field devices, engineering and TRACI capabilities, shaped around the environment you work in.")}/><Catalog kind="solutions"/><section id="industries" className="wrap pb-20" aria-label={t("Industry applications")}><div className="section-heading"><span className="mono">{t("INDUSTRIES")}</span><h2>{t("Different environments.")}<br /><span className="muted-heading">{t("A connected approach.")}</span></h2><p>{t("Bring field engineering, connected hardware and operational intelligence to the places where your teams work.")}</p></div>{industries.map(industry => <article className="industry-detail" id={industry.slug} key={industry.slug}><div><h2>{t(industry.title)}</h2><p>{t(industry.description)}</p><span className="mono">{t(industry.focus)}</span></div><div className="industry-media"><IndustryPhoto industry={industry.slug}/><div className="industry-solution-links">{industry.solutions.map(slug => { const solution = solutions.find(item => item.slug === slug)!; return <Link key={slug} href={`/solutions/${slug}`}>{t(solution.title)}<ArrowUpRight size={20} aria-hidden="true"/></Link>; })}</div></div></article>)}</section><ContactBand title={t("Have a different challenge?")} description={t("Start with your requirements. We\u2019ll help shape the right approach.")}/></>; }
