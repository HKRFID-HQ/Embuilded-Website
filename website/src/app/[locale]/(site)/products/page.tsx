import { use } from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { pageMetadata } from "@/lib/metadata";
import { products } from "@/content/products";
import { ContactBand, PageIntro } from "@/components/shared";
export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {const {locale}=await params; setRequestLocale(locale); return pageMetadata("/products", "Products", "Field-proven connected hardware from Embuilded, with specifications, configurations and integration support.");}
export default function ProductsPage({params}: {params: Promise<{locale: string}>}) {
 const {locale}=use(params); setRequestLocale(locale);
 const t = useCopy(); return <><PageIntro scene="industrial" label={t("PRODUCTS")} title={<>{t("Hardware you can deploy.")}<br />{t("Specified for your site.")}</>} description={t("Selected Embuilded hardware with confirmed specifications, configurations and engineering support from supply to commissioning.")}/>
 <section className="section wrap"><div className="product-feature">{products.map(product => <article key={product.slug} className="product-feature-card">
   <div className="product-feature-media"><Image src={product.image} alt={t(product.title)} fill sizes="(max-width: 767px) 100vw, 44vw"/></div>
   <div className="product-feature-body"><div className="eyebrow">{t(product.category.toUpperCase())} · {product.model}</div><h2>{t(product.title)}</h2><p>{t(product.summary)}</p><ul className="product-feature-gases">{product.gases.map(gas => <li key={gas} className="tag">{t(gas)}</li>)}</ul><Link className="button" href={`/products/${product.slug}`}>{t("View product")}<ArrowRight size={18} aria-hidden="true"/></Link></div>
 </article>)}</div></section>
 <section className="page-panel"><div className="wrap"><h2>{t("One platform, configured per site.")}</h2><p className="note">{t("Each product connects into the wider Embuilded delivery model: field engineering for deployment, TRACI for telemetry, events and evidence, and Open4S integration with the systems your operation already uses.")}</p><Link className="text-link" href="/solutions/gas-monitoring">{t("See the related solution")}<ArrowUpRight size={18} aria-hidden="true"/></Link></div></section>
 <ContactBand title={t("Need hardware specified for your site?")}/></>; }
