import type { MetadataRoute } from "next";
import { navigation, solutions } from "@/content/site";
import { products } from "@/content/products";
import { insights } from "@/content/insights";
import { siteOrigin } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  if (!origin) return [];
  return ["/", ...navigation.map(item => item.href), "/contact", ...solutions.map(solution => `/solutions/${solution.slug}`), ...products.map(product => `/products/${product.slug}`), ...insights.map(post => `/insights/${post.slug}`)].flatMap(path => {
    const languages = { en: `${origin}${path}`, "zh-HK": `${origin}/zh-HK${path === "/" ? "" : path}` };
    return Object.values(languages).map(url => ({url, alternates: {languages}, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7}));
  });
}
