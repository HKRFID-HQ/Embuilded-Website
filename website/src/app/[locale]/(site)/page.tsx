import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useCopy } from "@/i18n/copy";
import { IndustryPhoto } from "@/components/industry-photo";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { ActionLink, Architecture, ContactBand, ServiceList, TextLink } from "@/components/shared";
import { FieldPhoto } from "@/components/field-photo";
import { SiteFilm } from "@/components/site-film";
import { industries, solutions, caseStudies } from "@/content/site";
import { products } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";
export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {const {locale}=await params; setRequestLocale(locale); return pageMetadata("/", "Embedded intelligence for the built world", "Field engineering, connected hardware and TRACI intelligence for construction, infrastructure and the built environment.", true);}
export default function Home({params}: {params: Promise<{locale: string}>}) {
 const {locale}=use(params); setRequestLocale(locale);
 const t = useCopy();
 const featured = products[0];
    return <>
    <section className="home-hero wrap">
      <div className="hero-copy"><div className="eyebrow"><span className="accent-line"/>{t("CONNECTED IN THE FIELD")}</div><h1>{t("Embedded intelligence")}<br />{t("for the ")}<span>{t("built world.")}</span></h1><p>{t("Field devices, operational data and evidence.")}<br className="desktop-break"/>{t(" Connected into practical systems.")}</p><div className="hero-actions"><ActionLink href="/solutions">{t("Explore solutions")}</ActionLink><TextLink href="/traci">{t("Meet TRACI")}</TextLink></div></div>
      <div className="hero-visual"><SiteFilm/><div className="hero-image-note"><span className="mono">{t("THE BUILT WORLD, CONNECTED")}</span></div></div>
    </section>

    <section className="section wrap why-section"><div className="section-heading"><span className="mono">{t("WHY EMBUILDED")}</span><h2>{t("Why teams choose Embuilded.")}</h2><p>{t("Connected systems only work when the field, the hardware and the platform are engineered together.")}</p></div><div className="why-grid"><article data-reveal><span className="mono">01</span><h3>{t("Field-first engineering")}</h3><p>{t("Site surveys, cabling, installation and commissioning by our own engineers. The field works before the software does.")}</p></article><article data-reveal><span className="mono">02</span><h3>{t("Your platform stays")}</h3><p>{t("Keep your software, workflows and customer relationships. We connect the field underneath them.")}</p></article><article data-reveal><span className="mono">03</span><h3>{t("Evidence, not just data")}</h3><p>{t("Every alert links to traceable evidence, so decisions, reports and audits start from facts.")}</p></article></div></section>

    <section className="product-spotlight"><div className="wrap product-spotlight-inner"><div className="product-spotlight-copy"><span className="mono">{t("FEATURED PRODUCT")}</span><h2>{t("Continuous gas monitoring.")}<br />{t("Built for hazardous sites.")}</h2><p>{t("The %MODEL% multi-gas detector watches combustible gas, oxygen, carbon monoxide and hydrogen sulfide around the clock — with on-site alarms and remote data transmission over 4G, Wi-Fi or LoRa.").replace("%MODEL%", featured.model)}</p><ul className="check-list">{[t("Up to four gases in one unit"), t("Explosion-proof IP66 enclosure"), t("Over 12 hours of battery operation")].map(item => <li key={item}><Check size={18} aria-hidden="true"/>{item}</li>)}</ul><div className="intro-actions"><ActionLink href={`/products/${featured.slug}`}>{t("Explore the multi-gas detector")}</ActionLink><TextLink href="/solutions/gas-monitoring">{t("See the gas monitoring solution")}</TextLink></div></div><div className="product-spotlight-media"><Image src={featured.image} alt={`${t(featured.title)} — ${featured.model}`} width={1200} height={900} sizes="(max-width: 767px) 100vw, 50vw"/></div></div></section>

    <section className="open4s-spotlight"><div className="wrap open4s-spotlight-inner"><div><span className="partner-prelude">{t("OPEN4S INTEROPERABILITY")}</span><h2>{t("Your hardware works here.")}</h2></div><div className="partner-copy"><p>{t("Connect compatible third-party sensors, cameras and safety devices into TRACI — or integrate TRACI devices into your existing platform. Open interfaces both ways, without forced replacement.")}</p><ActionLink href="/open4s">{t("Explore Open4S")}</ActionLink></div></div></section>

    <section className="value-strip"><div className="wrap value-strip-inner"><span className="value-strip-label">{t("From the field.")}<br /><strong>{t("To the bigger picture.")}</strong></span><div><span>{t("Connect devices")}</span></div><ArrowRight className="strip-arrow" size={18} aria-hidden="true"/><div><span>{t("Make data useful")}</span></div><ArrowRight className="strip-arrow" size={18} aria-hidden="true"/><div><span>{t("Capture evidence")}</span></div></div></section>

    <section className="section wrap"><div className="section-heading"><h2>{t("Real environments.")}<br /><span className="muted-heading">{t("Connected solutions.")}</span></h2><p>{t("Start with the challenge on your site. Build the right combination of devices, engineering and intelligence.")}</p></div><div className="home-solutions">{solutions.filter(s => s.slug !== "outrigger-monitoring").map((solution, i) => <Link key={solution.slug} href={`/solutions/${solution.slug}`} className={`home-solution ${i === 0 ? "home-solution-featured" : ""}`}><div className="solution-topline"><span className="mono">{t(solution.category)}</span><ArrowUpRight size={20} aria-hidden="true"/></div><div><h3>{t(solution.title)}</h3><p>{t(solution.description)}</p></div></Link>)}</div><div className="section-bottom"><TextLink href="/solutions">{t("View all solutions")}</TextLink><Link className="subtle-link" href="/traci#plugins">{t("Explore TRACI BCDS and the plugin family ")}<ArrowRight size={16} aria-hidden="true"/></Link></div></section>

    <section className="services-section"><div className="wrap services-grid"><div className="section-heading"><h2>{t("Three ways")}<br />{t("to move forward.")}</h2><p>{t("Use the engineering you need.")}<br />{t("Add the hardware that fits.")}<br />{t("Connect it with managed services.")}</p><TextLink href="/about#services">{t("Explore our services")}</TextLink><FieldPhoto scene="site" className="services-inline-photo"/></div><ServiceList /></div></section>

    <section className="section wrap platform-section"><div className="platform-copy"><div className="eyebrow">{t("THE TRACI PLATFORM")}</div><h2>{t("One connected view.")}<br />{t("From device to evidence.")}</h2><p>{t("A modular device, intelligence and evidence platform for the built world. Connect the field with the systems your teams use.")}</p><ActionLink href="/traci" secondary>{t("Meet TRACI")}</ActionLink></div><Architecture /></section>

    <section className="partner-section"><div className="wrap partner-inner"><div><span className="partner-prelude">{t("Built for collaboration.")}</span><h2>{t("Keep your platform.")}<br /><span>{t("We connect the field.")}</span></h2></div><div className="partner-copy"><p>{t("Your software. Your customer relationship. Our field engineering, connected devices and managed infrastructure underneath it.")}</p><ActionLink href="/about#partners" light>{t("Explore partnerships")}</ActionLink></div><FieldPhoto scene="buildings"/></div></section>

    <section className="section wrap"><div className="section-heading"><h2>{t("Built around your environment.")}</h2><p>{t("Practical systems for the places where work happens.")}</p></div><div className="industry-links">{industries.map((industry, index) => <Link key={industry.slug} href={`/solutions#${industry.slug}`}><IndustryPhoto industry={industry.slug} compact/><span className="mono">0{index + 1}</span><h3>{t(industry.title)}</h3><ArrowUpRight size={24} aria-hidden="true"/></Link>)}</div></section>

    <section className="case-section wrap"><div><h2>{t("Field notes & case studies")}</h2>{caseStudies.length === 0 ? <p>{t("Project stories are being prepared. In the meantime, explore how our solutions fit your site.")}</p> : caseStudies.map(study => <p key={study.slug}>{t(study.description)}</p>)}</div><TextLink href="/solutions">{t("Explore solutions")}</TextLink></section>
    <ContactBand />
  </>;
}
