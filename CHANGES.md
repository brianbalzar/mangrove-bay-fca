# Revisions — October 15, 2026

Changes made to the exported ChatGPT build before deployment.

## Number check against the report (Rev. 3)

Checked `dist/data.js` against the PDF. No corrections were needed.

- All 22 Priority 1–2 findings: IDs, costs and order match pp. 38–40 (P1 $7,242,000; P2 $19,653,000).
- Coral Key annual profile: matches the site inventory on pp. 46–47 ($7.347M in FY27, $14.720M total, including $65K of accessibility and sprinkler repairs).
- Coral Key site area (11.2 acres): p. 43.
- Measure catalog F1–F10: matches p. 34 ($47.6M installed, $9.9M efficiency, $503K/yr).
- Performance-contract package: matches p. 36 ($19.8M; $3.5M savings-supported; $16.3M capital still required).
- Funding sources: match p. 7 ($43.2M levy, $15.1M for renewal, $22.0M surtax).
- Source-page links point to the correct PDF pages.

## Content and design fixes

1. Capital Plan opens in 2026 dollars, matching the $209.1M on the Overview. Future dollars remain one click away. (`model.js`)
2. Restored the report's finding: "A performance contract is a delivery tool, not a funding source." (Overview finding 7 and the Funding page heading.)
3. Action Plan: Priority 3 and 4 tiles now read "Not itemized" instead of showing a single finding's cost next to complete P1/P2 totals.
4. Overview hero leads with the finding ("Four of eight sites rate Poor. Three carry 75% of current needs.") instead of a marketing line, and adds the $17.3M vs. $15.1M funding gap.
5. Hero is shorter so the six KPI tiles are visible without scrolling on a laptop; the hero photo is hidden on phones.
6. Sites page no longer repeats the Overview's FCI ranking and map.
7. Chart labels: white halo so values stay readable over the funding line; Coral Key bars show "$7.3M" units and no "$0.0" labels.
8. Callout boxes use a light outline instead of a heavy colored left border.
9. Removed the sidebar layout toggle (top tabs were chosen). Print, exports and scenario sharing are kept.
10. Removed an unused aerial photo from the assets.

## Not changed

- Scenario model math (same results as before: $128.2M future-dollar / $86.6M 2026-dollar backlog at FY36 with $15.1M/yr and 4% escalation).
- The other seven site profiles remain summary-level; the report has no component inventory for them.

# Revisions — October 16, 2026: Overview KPI cards (Codex handoff)

1. Replaced the six-cell KPI strip with "Portfolio at a glance": four cards (Current needs, Facility condition, 10-year renewal, Net savings potential), each with a basis line, a mini visual and a link. Four columns at ≥1050px, two below, one at ≤600px.
2. Card values are derived from `data.js`: Priority 1 total and count from the findings register ($7.242M, 8), condition counts from site ratings (4/2/2), the FY27–FY28 share from the annual forecast ($88.88M of $209.1M), the measure count from the catalog (10), and scope/date from the portfolio and cutoff fields.
3. Card links: Action Plan filtered to Priority 1, Sites, Capital Plan, and the Funding page's improvement-measures catalog (`#/funding?section=measures`, a new section-scroll target in the router).
4. Overview order: hero → Portfolio at a glance → Four decisions → map + FCI ranking → funding-constraint callout → Energy performance → story behind the numbers.
5. New compact Energy performance section with EUI (50.5 kBtu/sf, ENERGY STAR K–12 median 48.5 as a national reference) and energy cost ($1.70/sf, FL statewide $1.35, FL DOE 2024–25), linking to the Energy page.
6. Funding page: the measures section notes that the $503K/yr catalog total is separate from the $344K/yr contract-package estimate.
