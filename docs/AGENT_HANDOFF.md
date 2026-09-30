# Embuilded Website — Agent Handoff

## Immediate start

This file is the operational entry point for the project. Read it before changing the website, then read the newest entries in [`ACTION_PLAN.md`](ACTION_PLAN.md) and [`VERIFICATION.md`](VERIFICATION.md).

- Working application: `website/`
- Protected requirements: `references/website-requirements/aa55356c7615/source/Embuilded-website--main`
- Current delivery repository: `https://github.com/HKRFID-HQ/Embuilded-Website.git`
- Personal fallback repository: `https://github.com/Johnson-HK-RFID/website-development.git` (remote name `legacy`)
- Delivery branch: `main`
- Public production alias: `https://website-development-rust.vercel.app/`
- Vercel project: `rfid4/website-development`, Root Directory `website`
- Current organization delivery commit: `ddfce52` ([organization commit](https://github.com/HKRFID-HQ/Embuilded-Website/commit/ddfce52c2c5e6fb04ecef59026c738ac6c0b3eb8))
- Organization GitHub Actions run: [36675951116](https://github.com/HKRFID-HQ/Embuilded-Website/actions/runs/36675951116) passed lint, tests, build, typecheck, protected-source verification and production browser checks.
- Local `origin` points to the organization repository; `legacy` points to the personal fallback. Gas-sensor brochure work is intentionally deferred and no HNAG1000 changes remain.
- Vercel still uses the personal repository connection and the existing production alias; switch the Vercel Git repository separately when organization access is available.

Never modify the protected requirements directory. Develop only in `website/` and supporting project documents or scripts outside that source snapshot.

## Collaboration preferences

- Communicate with the user in Chinese.
- Keep repository documents, code, metadata and public English copy in formal English.
- Preserve the English and Traditional Chinese experiences together. A material public copy addition needs a Traditional Chinese translation in the same iteration.
- Act on approved development and publishing tasks without repeatedly asking for confirmation.
- After each material iteration, update `ACTION_PLAN.md`, `VERIFICATION.md` and this handoff when the product concept, architecture or operating procedure changes.
- Complete local validation, commit and push to the authorized repository, then wait for GitHub Actions and Vercel and check the public alias.

## Product model

Embuilded Intelligence Limited provides embedded intelligence for the built world. The website connects three commercial layers:

1. Field Engineering Services.
2. Connected Hardware + Engineering.
3. Managed Device & Software Services.

TRACI is the technology platform that connects field devices, intelligence, workflows and evidence. Its modular family includes TRACI Safety, Vision, Asset, BCDS and SSSS.

Open4S is the interoperability approach behind TRACI 4S. Treat it as a platform proposition, not a device or generic service:

- TRACI devices can feed an existing CMP, SSSS platform, BMS, dashboard or enterprise system.
- Compatible third-party devices can feed TRACI.
- TRACI can pass safety events and operational data into other applications through APIs, webhooks and standard integration methods.
- Openness is paired with traceable device identity, permissions, event history, evidence, system health and integration status.
- The commercial promise is reduced vendor lock-in, protection of existing hardware, incremental expansion, multi-vendor consolidation, integrator flexibility and customer control of data.

Do not invent customer names, projects, deployment counts, performance statistics, certifications, technical specifications or completed integrations.

## Audiences and positioning

Primary audiences are Hong Kong and international contractors, building-site operators, engineering buyers, owners, system integrators, technology vendors, CCTV and AI partners, and SSSS/4S providers.

The partner proposition is: keep the partner's platform while using Embuilded field engineering, connected devices and managed infrastructure. The site must distinguish Embuilded as the company, TRACI as its platform, Open4S as its interoperability approach, plugins as modular capabilities, and solutions as applied site systems.

## Current information architecture

Every route has an English version and a Traditional Chinese version under `/zh-HK`.

| Area | English route | Purpose |
| --- | --- | --- |
| Home | `/` | Positioning, solutions, services, platform, partners and industries |
| TRACI | `/traci` | Platform architecture and modular capabilities |
| Open4S | `/open4s` | Two-way interoperability, traceability and open-stack benefits |
| Solutions | `/solutions` | Filterable solution catalogue |
| Devices | `/devices` | Filterable field-device catalogue |
| Services | `/services` | Three commercial engagement layers |
| Partners | `/partners` | Partner delivery models and interface responsibilities |
| Industries | `/industries` | Construction, infrastructure, property/facilities and industrial contexts |
| About | `/about` | Company and brand architecture |
| Contact | `/contact` | Inquiry form and project-brief download |

Solution detail routes are:

- `/solutions/gas-monitoring`
- `/solutions/hookcam`
- `/solutions/outrigger-monitoring`
- `/solutions/worker-tracking`
- `/solutions/site-vision`
- `/solutions/rfid-asset-tracking`

Open4S has deliberate entry points in the global navigation, TRACI and Partners. It is included in metadata, alternate-language links, the sitemap, content snapshots and browser suites.

## Implemented behavior

- Next.js App Router with static locale generation where possible.
- English default routes and Traditional Chinese `/zh-HK` routes using `next-intl`.
- Locale switch retains the route, query string and fragment.
- Responsive desktop and mobile navigation.
- Filter and search behavior for solutions; category filtering for devices.
- Inquiry validation, honest delivery status, local brief download and optional configured endpoint delivery.
- Localized metadata, canonical links, alternate-language links, sitemap, robots behavior and localized 404 pages.
- Homepage full-viewport, muted, looping Hong Kong construction timelapse with no playback controls.
- Poster fallback for reduced-motion, data-saving and no-JavaScript visits.
- Contextual top photography on all inner pages and all solution details.
- Short layered page-entry motion and slow hero-image drift; reduced-motion mode disables both.
- Scroll progress, restrained card reveals and TRACI connector drawing as progressive enhancement.
- Open4S editorial sections for three integration directions, control/traceability, benefits and the closing platform statement.

## Design direction

The approved direction is an editorial construction-company presentation informed by Suffolk, McCownGordon, Layton, Turner and Holder, while retaining Embuilded's own structure and content.

- Warm off-white paper, charcoal and restrained construction orange.
- Large direct typography, visible grid lines, structured whitespace and practical engineering hierarchy.
- Real building-construction photography, with Hong Kong context where possible.
- Images should occupy a meaningful compositional role; do not insert standalone galleries or isolated images merely to fill space.
- Public pages must not show stock-library attribution captions. Keep source and licence evidence in internal manifests.
- Use purposeful SVG icons from the established icon library. Do not use emoji.
- Avoid blue-purple AI gradients, glassmorphism, generic AI imagery, fabricated dashboards, decorative telemetry and excessive rounded cards.
- Motion should add depth and route feedback without turning the site into a technology demo.
- Do not imply that stock workers, sites or projects belong to Embuilded.

The primary records are:

- `docs/BUILDING_DESIGN.md`
- `docs/EDITORIAL_DESIGN.md`
- `docs/DESIGN_DECISIONS.md`
- `docs/UI_REDESIGN.md`
- `docs/PHOTOGRAPHY.md`
- `docs/BRAND_ASSETS.md`
- `docs/frontend/skills/hkrfid-website-frontend/SKILL.md`

## Code map

- Routes and page composition: `website/src/app/[locale]/(site)/`
- Open4S page: `website/src/app/[locale]/(site)/open4s/page.tsx`
- Shared layout components: `website/src/components/shared.tsx`
- Header and mobile navigation: `website/src/components/site-header.tsx`
- Progressive motion: `website/src/components/engineering-motion.tsx`
- Business data and global navigation: `website/src/content/site.ts`
- Photography mapping: `website/src/content/photography.ts`
- Traditional Chinese dictionary: `website/src/i18n/zh-HK.json`
- Approved brand assets: `website/public/brand/` and `website/src/app/icon.svg`
- Base visual system: `website/src/app/globals.css`
- Current editorial layer and Open4S styling: `website/src/app/editorial.css`
- Content fixture: `website/tests/fixtures/redesign-content.json`
- Test scripts: `website/scripts/`

The project uses Next.js 16, React 19, TypeScript, `next-intl`, self-hosted fonts, local images and local video. There is no runtime stock-media dependency.

## Content workflow

The approved English output is protected by `npm run test:content`. When the user explicitly approves new public copy or navigation:

1. Implement the English route or copy.
2. Add every material string to `website/src/i18n/zh-HK.json`.
3. Add new primary routes to `content-snapshot.mjs`, `browser-check.mjs`, `i18n-check.mjs` and `visual-review.mjs` as appropriate.
4. Start the site and intentionally recapture the content fixture with `node scripts/content-snapshot.mjs --capture`.
5. Review the fixture diff; do not accept unrelated copy or link changes.
6. Run `npm run test:content` normally.

Business requirements added after the protected draft belong in `docs/requirements-draft.md` and `docs/requirements-traceability.md`. Never rewrite the original source files.

## Media and licensing

All public media is delivered locally. Keep author, source URL, licence and checksum evidence in:

- `docs/frontend/field-media-manifest.json`
- `docs/frontend/photography-manifest.json`
- `docs/PHOTOGRAPHY.md`

The current construction media is illustrative. Prefer active building construction, tower cranes, concrete frames, scaffolding and internationally representative site teams. Avoid bridge/road imagery when selecting primary construction visuals.

## Local setup and validation

From the repository root in PowerShell:

```powershell
Set-ExecutionPolicy -Scope Process Bypass -Force
. .\scripts\tool-env.ps1
.\scripts\verify-sources.ps1
```

From `website/`:

```powershell
. ..\scripts\tool-env.ps1
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:content
npm run test:film
npm run test:media
npm run test:i18n
npm run test:browser
npm run test:visual
```

Browser suites expect a running site at `http://127.0.0.1:3000`. Use `npm run start` after `npm run build` for final checks. On this Windows environment, large consecutive browser suites can leave the Next.js image optimizer in a stalled state or produce `NoFallbackError`. Restart the production server before retrying `test:media`; do not weaken the test or alter media because of this environment-specific condition.

Current expected coverage after Open4S:

- 16 English content routes.
- 16 English browser routes and 40 responsive browser layouts.
- 57 unique internal destinations.
- 16 Traditional Chinese routes, 24 responsive layouts and 8 accessibility audits.
- 44 responsive visual layouts across 11 representative pages.
- Seven inquiry unit tests.
- Four protected source files with unchanged checksums.

## Delivery procedure

Only publish to `https://github.com/HKRFID-HQ/Embuilded-Website.git` on `main` through `scripts/publish.ps1`.

1. Confirm `git diff --check` and a clean, reviewed change set.
2. Run source verification and relevant website checks.
3. Commit with a concrete message.
4. Run `scripts/publish.ps1` from the repository root.
5. Wait for the matching GitHub Actions run to finish successfully.
6. Wait for Vercel production to reach Ready.
7. Verify the public alias, both locales, canonical host, new links and sitemap entries.
8. Record the commit, CI run, deployment and live checks in `VERIFICATION.md`.

The organization repository is now the approved delivery target. Keep the personal repository as a read-only fallback. Do not publish website code into the protected requirements snapshot or its former source repository.

## Current release state

The organization repository is the current delivery source as of 30 September 2026. Commit `ddfce52` is pushed to `main` and CI passed. The latest retained product work includes the Open4S proposition, bilingual routes, construction-led visual system and approved Embuilded/TRACI logo assets. Do not resume the deferred gas-sensor product addition unless the user explicitly requests it.

The Open4S implementation remains live on the existing Vercel alias. Earlier production verification covered both Open4S locales, both TRACI locales, Partners and the sitemap. The organization push contains the complete current history and documentation.

The full Git history was copied to `HKRFID-HQ/Embuilded-Website` on 30 September 2026. Local `origin` points to the organization repository and `legacy` points to the personal fallback. The protected requirements remained unchanged.

## Known open dependencies

- Final approved logo and broader brand assets.
- Approved customer projects, case studies, testimonials and project imagery.
- Confirmed device specifications and claims suitable for publication.
- A real inquiry delivery destination and credentials; the local brief download remains the truthful fallback.
- Final public domain, analytics choice and indexing approval. Production currently uses the Vercel alias and review-oriented indexing configuration.

Do not block ordinary design, copy integration, testing or deployment work on these dependencies unless the requested change directly requires one of them.
