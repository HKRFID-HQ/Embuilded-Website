# DNS 變更記錄 — embuilded.com 上線 Vercel

> 內部文檔。記錄 2026-10-02 從 Wix 遷移到 Vercel 的 DNS 變更，以便需要回滾時快速還原。

## 變更前（Wix 舊站）

| Name | Type | Content | Proxy |
| --- | --- | --- | --- |
| embuilded.com | A | 185.230.63.186 | DNS only |
| embuilded.com | A | 185.230.63.107 | DNS only |
| embuilded.com | A | 185.230.63.171 | DNS only |
| www.embuilded.com | CNAME | cdn1.wixdns.net（解析到 td-ccm-neg-87-45.wixdns.net / 34.149.87.45） | DNS only |

其餘記錄（Cloudflare Tunnel 子域、MX、TXT 等共 38 條）**保持不動**。
建議變更前用 Cloudflare DNS 頁面的 Export 按鈕導出完整 zone file 備份。

## 變更後（Vercel 新站）

| Name | Type | Content | Proxy |
| --- | --- | --- | --- |
| embuilded.com | A | 76.76.21.21（Vercel anycast） | DNS only |
| www.embuilded.com | CNAME | cname.vercel-dns.com | DNS only |

Vercel 項目：embuilded-website → Domains 添加 embuilded.com + www（www 重定向到 apex）。
Vercel 環境變量：`SITE_URL=https://embuilded.com`（Production），設置後需 Redeploy。

## 回滾方法（如需要）

1. Cloudflare 刪除 `76.76.21.21` 的 A 記錄，重新添加「變更前」表中的 3 條 Wix A 記錄
2. `www` 的 CNAME 改回 `cdn1.wixdns.net`
3. 到 Wix 後台確認域名連接狀態（必要時點擊重新連接）
4. DNS 約 5 分鐘內生效（Cloudflare DNS-only TTL 為 Auto ≈ 300s）

## 注意事項

- 新舊 A 記錄**不能並存**：會導致訪客被隨機分流到兩個站，且 Vercel 證書簽發會失敗
- Wix 站點內容在 Wix 後台保留，解綁域名不會刪除內容
- 上線後建議：Google Search Console 提交新 sitemap（https://embuilded.com/sitemap.xml）
