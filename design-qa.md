# Design QA — Maggie Portfolio

## Current iteration — Editorial About page (September 30, 2026)

- Source visual truth: `/var/folders/v9/jqx1zb8n6t9fjftvz83wj54w0000gp/T/codex-clipboard-6a8a1691-ef90-44f9-8e50-591052095b1c.png`
- Implementation: `about-mags.html` and the homepage teaser in `index.html`
- Verified viewport: responsive mobile at 508 × 1005; the earlier 893 × 1005 browser evidence was also reviewed
- State: default page load
- HTTP verification: both pages return `200 OK` from the local preview
- Primary interactions tested: mobile menu opens and closes; the current-page item remains aligned; homepage navigation returns to About
- Console check: no errors or warnings
- Implementation screenshot: captured in the in-app browser during the current task; the browser capture is not exposed as a persistent file path
- Full-view comparison: the annotated About page and refreshed implementation were compared at the same responsive viewport
- Focused-region comparison: hero copy, hero top alignment, mobile header rule, profile location, and expanded mobile menu were checked individually
- Fonts and typography: the portfolio's existing Manrope stack is retained; the hero hierarchy and wrapping are readable at the verified viewport
- Spacing and layout rhythm: the About title uses the shared `--hero-top`; the mobile header and menu align consistently with the other pages
- Colors and visual tokens: the existing black/white palette and restrained borders are retained
- Image quality and asset fidelity: opening portrait is intentionally reserved as a temporary placeholder at the user's request; existing personal images are retained below
- Copy and content: existing career facts and selected-work links retained and rewritten into an editorial profile structure
- Comparison history: removed the redundant profile kicker and masthead, replaced design-background-led copy, aligned the hero, fixed current-page mobile menu spacing, and added the shared mobile header rule; the refreshed browser evidence showed no remaining P0/P1/P2 issue in the annotated areas

final result: passed

---

## Previous full-site QA

Status: Passed for local review and handoff. Public deployment is not part of this delivery.

## Scope and source

Source: Maggie’s public portfolio at https://www.maggie-chang.com/, captured September 22, 2026. Ten pages retained. Industrial Design portfolio section, its four project pages, and hidden PhysioQ excluded. Flex and home positioning intentionally revised according to the user’s brief.

The Product Design URL-to-code workflow guided source capture, reuse of real imagery, and desktop/mobile comparison. Original visual language is retained: white background, restrained black typography, generous spacing, original illustrations, and two-column project cards. Flex adds muted green strategy diagrams and a launch band consistent with the existing imagery.

## Checks performed

- Desktop viewport 1440 × 900: all ten pages opened; no document horizontal overflow or broken completed image elements detected.
- Mobile viewport 390 × 844: all ten pages opened; no document horizontal overflow or broken completed image elements detected.
- Source/implementation screenshot comparisons: homepage desktop, HRA full page, Contact mobile. Additional source captures included Claim, Tuning, Factory, Flex, About, Illustration, and Dealer AI.
- Visual review: Flex hero and strategy loop on desktop, Flex hero on mobile, Illustration grid, and About heading clearance.
- Interaction checks: homepage Flex card opens the local case study; Flex strategy link updates the hash and reaches the correct section; mobile menu opens, navigates to Contact, and closes with Escape.
- Static validation: all local HTML links, script/image references, and fragment destinations resolve; duplicate source IDs removed. `validation.json` records zero errors.
- Scope assertions: exactly six homepage PM/Design project links; no Industrial Design portfolio section or hidden PhysioQ; all twelve requested Flex sections present, counting Hero.
- Images, fonts, stylesheet and navigation code are local. No Webflow runtime, Google font loader, analytics script, or hosted form dependency remains.

## Repairs made

- Rebuilt mobile navigation without the hosted Webflow runtime; added accessible labels, expanded state, Escape support, and keyboard focus outlines.
- Fixed mobile Flex word spacing where desktop line breaks collapse.
- Corrected original Contact mobile paragraph width and About heading overlap.
- Fixed homepage Claim date typo from “20203” to “2023”.
- Preserved original image variants; if an original file was unavailable, used its available responsive version.
- Two unavailable background images were referenced only by unused legacy `.cell-3` / `.cell-4` styles; no retained page uses those classes. Their remote references were removed.

## Content and release boundaries

Dealer AI remains Coming Soon because the public source contains no case study. Existing non-Flex project results were copied, not independently audited. Flex clearly separates implemented changes, next-release plans and ongoing work, and does not invent performance metrics.

No public hosting, DNS migration, live-site changes or subscription cancellation was performed. Cross-browser testing beyond the current Chrome environment, public HTTPS, old URL routing and production analytics must be verified during deployment.
