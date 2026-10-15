export function formatInsightDate(iso: string, locale: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  if (locale === "zh-HK") return `${year} 年 ${month} 月 ${day} 日`;
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
