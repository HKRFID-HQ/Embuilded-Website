import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getCopy } from "@/i18n/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { ActionLink, ContactBand, PageHeroImage, type PageHeroScene } from "@/components/shared";
import { products } from "@/content/products";
import { solutions } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string; locale: string;
    }>;
}): Promise<Metadata> {
    const { slug, locale } = await params; setRequestLocale(locale);
    const product = products.find(item => item.slug === slug);
    return pageMetadata(`/products/${slug}`, product?.title ?? "Product not found", product?.summary ?? "Explore connected hardware from Embuilded.");
}
export default async function ProductPage({ params }: {
    params: Promise<{
        slug: string; locale: string;
    }>;
}) {
 const {locale}=await params; setRequestLocale(locale);
 const t = await getCopy();
    const { slug } = await params;
    const product = products.find(item => item.slug === slug);
    if (!product)
        notFound();
    const solution = solutions.find(item => item.slug === product.solution);
    const scenes: Record<string, PageHeroScene> = { "multi-gas-detector": "industrial" };
    return <><section className="page-intro solution-page-intro wrap"><nav className="breadcrumb" aria-label={t("Breadcrumb")}><Link href="/products">{t("Products")}</Link><ArrowRight size={13} aria-hidden="true"/><span>{t(product.title)}</span></nav><div className="detail-intro"><div><div className="eyebrow">{t(product.category.toUpperCase())} · {product.model}</div><h1>{t(product.title)}</h1><p>{t(product.summary)}</p><div className="intro-actions"><ActionLink href={`/contact?service=${encodeURIComponent(product.title)}`}>{t("Let\u2019s talk")}</ActionLink><a className="text-link" href={product.dataSheet} download>{t("Download data sheet")}</a></div></div><div className="detail-visual"><span aria-hidden="true">{product.model}</span><div>{product.gases.map(gas => <span className="tag" key={gas}>{t(gas)}</span>)}</div></div></div><PageHeroImage scene={scenes[product.slug] ?? "industrial"}/></section>
    <section className="section wrap detail-body"><div><h2>{t("Built for continuous")}<br />{t("field monitoring.")}</h2><p>{t(product.description)}</p><p className="detail-note">{t("Configurations, sensor combinations and integration scope are confirmed against your site requirements during project scoping.")}</p></div><div><h2 className="mb-7">{t("Key features.")}</h2><ul className="scope-list">{product.features.map(feature => <li key={feature}><Check size={18} aria-hidden="true"/>{t(feature)}</li>)}</ul></div></section>
    <section className="page-panel"><div className="wrap"><div className="section-heading"><h2>{t("Specifications.")}</h2></div><dl className="spec-table">{product.specifications.map(([name, value]) => <div key={name} className="spec-row"><dt>{t(name)}</dt><dd>{t(value)}</dd></div>)}</dl><p className="note">{t("Specifications are based on the product datasheet for model %MODEL%. Certified ratings and suitability are confirmed per deployment.") .replace("%MODEL%", product.model)}</p></div></section>
    <section className="section wrap"><div className="section-heading"><h2>{t("Where it works.")}</h2><p>{t("Typical deployment contexts for this product family.")}</p></div><ul className="app-tags">{product.applications.map(item => <li key={item}>{t(item)}</li>)}</ul></section>
    <section className="page-panel"><div className="wrap"><div className="section-heading"><h2>{t("Dimensions & interfaces.")}</h2></div><div className="product-diagram"><Image src={product.diagram} alt={`${t(product.title)} — ${t("dimension and interface diagram")}`} width={1800} height={1000} sizes="(max-width: 767px) 100vw, 90vw"/></div></div></section>
    {solution ? <section className="section wrap"><div className="section-heading"><h2>{t("Connect the wider picture.")}</h2></div><div className="capability-grid"><article><h3>{t(solution.title)}</h3><p>{t(solution.description)}</p><Link className="text-link" href={`/solutions/${solution.slug}`}>{t("Explore solution")}<ArrowUpRight size={18} aria-hidden="true"/></Link></article></div></section> : null}
    <ContactBand title={`Let’s scope your ${product.title.toLowerCase()} requirements.`}/></>;
}
