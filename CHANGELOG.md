# Changelog

## Unreleased

### Added

- `docs/SECURITY_AUDIT_AUG_22_2026.md`: formal security audit of the site (source code + passive checks of the production deployment on Vercel). No critical or high-severity vulnerability found; documents residual risks (supply chain, user-facing phishing risk on wallet backups, operational hygiene), the mitigations in place, and a table of outstanding publisher-side actions.
- **Security hardening**:
  - HTTP security headers set for every route in `next.config.ts`: Content-Security-Policy (`default-src 'self'`, `connect-src` limited to same-origin + the Optimism RPC and w3pk endpoints, `frame-ancestors 'none'`, `object-src 'none'`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, restrictive `Permissions-Policy`, and HSTS extended with `includeSubDomains; preload`. In development only, `script-src` additionally allows `'unsafe-eval'` (React's development build uses `eval()` for debugging features; production builds never include it).
  - `pnpm.overrides` in `package.json` forcing patched versions of transitive dependencies with known advisories (`underscore`, `ws`, `brace-expansion` v1/v2, `js-yaml`, `esbuild`): `pnpm audit` drops from 10 advisories (7 high) to 1 low (`elliptic`, no patched version exists, not reachable in this deployment).
  - `.github/dependabot.yml`: weekly automated dependency updates (npm + GitHub Actions).
  - `pnpm-workspace.yaml` with `minimumReleaseAge: 4320` (3 days): freshly published — potentially hijacked — package versions cannot be installed immediately (`w3pk`, published by this project's own maintainer, is excluded).
  - Anti-phishing notice in the wallet backup/restore UI (`/settings`, both the unauthenticated restore section and the backup tab), in all 10 languages: backups must only ever be restored on `www.presidentielle.fun`; entering the backup file and password anywhere else hands over the wallet.
  - README: new "Security" section pointing to the audit and summarizing the hardening in place.

### Changed

- **Privacy — W3PK build verification is now opt-in**: `BuildVerification` no longer contacts the public Optimism RPC (`mainnet.optimism.io`) automatically on mount. It now starts in an idle state with an explicit "Verify now" button and a privacy note explaining that clicking makes a single read-only request whose recipient (like any server) sees the visitor's IP. No network request leaves the page without user action, so simply visiting `/settings` reveals nothing to any third party.
- **CGU (`/conditions`) privacy overhaul**: section 5 becomes « Données personnelles et vie privée » and now states precisely that the site collects zero personal data, runs no audience measurement, no trackers (first- or third-party), no tracking cookies, no ads and no third-party scripts; that the publisher has no way of knowing who visits; that fonts/assets are self-hosted (no Google Fonts/CDN requests); that preferences live only in `localStorage` (inspectable/erasable from `/settings`); that passkeys stay on-device with no server-side accounts; that the only outbound connections are explicit user actions (external links, opt-in build verification); an honest note about host-level technical logs the publisher does not exploit; and that no consent banner is required since nothing is collected. New section 6 « Nos engagements : les principes CROPS » commits the site to Ethereum's CROPS principles (Censorship Resistant, Open source, Private, Secure); former sections 6–10 renumbered 7–11.
- README: new "Privacy" section documenting the zero-data/no-tracker posture and the CROPS commitments, with a link to the Ethereum Foundation mandate and to `/conditions`.

- Metadata cleanup in `src/app/metadata.ts`: replaced leftover template keywords (`w3pk`, `WebAuthn`, `Web3`…) with election-related ones, fixed the Open Graph locale (`en_US` → `fr_FR`), and removed the placeholder Google site-verification entry.
- Header login/logout button is commented out (temporarily hidden); the passkey auth logic and registration modal remain in the code.
- Countdown is now much bigger and colorful: the digit tiles have a 3px brand-gradient border (primary → accent, background stays transparent) with a glow, larger digits (up to 7xl on desktop) and bolder labels; the upcoming-milestone title is larger and shown in the brand accent color. The urgent (< 30 days to registration deadline) state keeps its red treatment as a red gradient. On mobile the four tiles always stay on a single row: they shrink and share the width instead of wrapping.
- Homepage « Suis-je inscrit·e ? » button now uses the brand accent color (`brandColors.accent`) instead of the Chakra blue palette, and sizes to its label instead of stretching full width.
- More breathing room at the bottom of the homepage (`pb={48}` instead of symmetric `py={16}`).
- Countdown tagline: dropped the opening « Pas de bullshit » ("No bullshit") clause in all 10 languages; the tagline now reads « Juste ce qu’il faut pour voter. » ("Just what you need to vote.").
- Wording: use the singular « présidentielle » everywhere (header title, French countdown heading, SPECS.md title and tagline) instead of « présidentielles ».
- Updated the 2027 election calendar in `src/utils/election.ts` to the official dates set in the Conseil des ministres of 1 July 2026: registration deadline on 12 March 2027 (single deadline for online and in-person), 1st round on 18 April 2027, 2nd round on 2 May 2027 (previously provisional projections: 3 March / 11 April / 25 April).

### Removed

- The « Dates prévisionnelles — dans l'attente du décret officiel » note on the homepage (and its `provisionalNote` translation string in all 10 languages), obsolete now that the dates are official.

### Fixed

- Pages are now fully server-rendered and readable by bots and crawlers (SEO, link previews, AI crawlers): `W3pkProvider` was loaded with `ssr: false` around the whole app, so every page's HTML contained only a loading spinner. It is now imported directly and renders children on the server; w3pk itself still only initializes in the browser.

### Added

- `src/app/robots.ts`: serves `/robots.txt` (allow all crawlers, points to the sitemap).
- `src/app/sitemap.ts`: serves `/sitemap.xml` listing `/`, `/pourquoi`, `/role`, `/conditions` and `/contrib`.
- `SITE_URL` constant in `src/app/metadata.ts` (overridable via `NEXT_PUBLIC_SITE_URL`), used by `metadataBase`, robots.txt and the sitemap. Still points to the placeholder `https://w3pk.w3hc.org` — set the real production domain.
- `/conditions` page: « Conditions d'utilisation » — the site's terms of service in French (10 sections: purpose of the site, publisher, access, informational nature of the content and political independence, personal data — local-only storage, no third-party trackers —, external links, intellectual property under GPL-3.0, liability, changes to the terms, applicable French law). French-only and hardcoded for now (not yet in the translation system). Linked from the header menu (hardcoded French label « Conditions d'utilisation »).
- `/contrib` page: « Contribuer » — who maintains the site (Julien Béranger, with a link to julienberanger.com/contact), its goal (encouraging people to vote), a link to the GitHub repository, and a list of concrete ways to contribute: create an issue (direct link to the new-issue form), edit the site (fork, edit, push), and open a pull request (merge request) to get changes reviewed and merged. French-only and hardcoded for now (not yet in the translation system). Linked from the header menu (hardcoded French label « Contribuer »).
- `/pourquoi` page: « Pourquoi voter ? » — why voting matters, explained simply (5 sections: the direct weight of one ballot, historically close elections — 2002, 2017, 1974 —, why abstaining is still a decision, voting as a hard-won right, and what to do when no candidate convinces you — including the blank vote counted since 2014), ending with the « Suis-je inscrit·e ? » registration-check button and a link to `/role`. French-only and hardcoded for now (not yet in the translation system). Linked from the header menu (hardcoded French label « Pourquoi voter ? »).
- `docs/notes/role-page-review.md`: completeness review of the `/role` page — missing roles (art. 7 vacancy, art. 88-5 EU-enlargement referendum, honorific roles such as co-prince of Andorra and grand master of the Légion d'honneur) and nuances to fix (art. 11 proposal requirement, art. 29/30 convocation, art. 5 « continuité de l'État »).
- `/role` page: « Le rôle du président de la République » — the president's powers explained simply (22 points grouped in 5 sections: powers exercised alone, powers shared with the government, army and international relations, other roles, good to know), with Constitution article references linking to the official per-article pages on Légifrance (opens in a new tab). French-only and hardcoded for now (not yet in the translation system). Linked from the header menu (hardcoded French label « Le rôle du président »).
- Homepage hero per SPECS §0: countdown to the next civic deadline (voter-registration deadline, then 1st round, then 2nd round), tagline, and a single official link — « Suis-je inscrit·e ? » pointing to the service-public.fr voter-registration check (ISE). The homepage no longer requires login.
- `src/utils/election.ts`: 2027 election calendar (single source of truth for the dates) and the official registration-check URL.
- `Countdown` component (`src/components/Countdown.tsx`): ticks every second, shows the upcoming milestone, turns red when the registration deadline is less than 30 days away, and lists all milestone dates formatted in the visitor's language (Europe/Paris time).
- `home.countdown` translation strings in all 10 supported languages.

### Removed

- The template homepage (login prompt, wallet address display, message signing).
