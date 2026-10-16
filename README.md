# Mangrove Bay FCA website — portable source package

Upchurch's fictional Mangrove Bay School District facility-assessment companion.
Snapshot exported October 15, 2026. Report: Rev. 3, October 2026; data cutoff September 30, 2026.

## Open the website immediately

Open **Mangrove-Bay-FCA.html** in a modern browser. It includes the styles, scripts, data, displayed illustrations, logo and complete PDF report in one file. No installation or internet connection is required to browse the assessment or calculate scenarios.

The “Share scenario” button creates a link to the hosted website. Recipients need access to that hosted site. Offline file edits do not update the hosted version.

## Edit or deploy

The **dist** folder contains the editable, buildless static website:

- `index.html`: page shell and entry point.
- `styles.css`: responsive layout, print rules and visual styling.
- `app.js`: views, navigation, tables, filters, charts and exports.
- `data.js`: report data and source-page references.
- `model.js`: scenario calculations.
- `assets/`: the supplied PDF, logo and report illustrations.

For local editing, serve the dist folder over HTTP because it uses JavaScript modules. From this package folder, a Python installation can run:

```bash
python -m http.server 8000 --directory dist
```

Then open http://localhost:8000. On Windows, `py` may be used instead of `python`.

For hosting, upload the contents of **dist** to a static web host, such as an existing Upchurch web server or Azure Static Web Apps. The host must serve JavaScript with its standard JavaScript MIME type. Routes use URL fragments, so no server-side route rewrites are needed. Configure the intended hostname and access policy on that host. This download does not include the current host's authentication or DNS configuration.

No Git metadata, hosting account identifiers or credentials are included in this package.

## What is included

Seven main sections, eight facility profiles, top-tab navigation, a capital scenario model, a published-findings explorer, energy comparisons, CSV exports, printing and PDF source links.

## Source and model limits

The supplied report was the source for this version. Its companion workbook was not supplied. Only Coral Key has a detailed published component inventory; the other seven site profiles use the published summaries. The findings register contains all 22 Priority 1–2 findings plus two additional Coral Key findings. It is not a complete district asset register.

Report totals and FCI values retain their published rounding. The annual forecast comes from Figure 12. Coral Key's annual profile is derived from its inventory budget years plus two explicit repair items. Website and report should ultimately be generated from the same assessment dataset.

The scenario model escalates scheduled and carried needs, applies flat nominal annual funding and carries unspent funds forward without interest. Its unfunded-need / indexed replacement-value ratio is a financial proxy, not a prediction of observed condition. The model excludes the other 33 facilities, implementation capacity, emergency costs and deterioration beyond inflation. It does not add external funding or energy savings automatically.

Coral Key replacement requires an entered capital allowance. It removes the existing renewal profile, adds stabilization and interim roof work, and adds the allowance in the selected year. Study costs and post-replacement lifecycle renewals are unpriced. This is not the required 30-year options study.

## Rebuild the single-file version

After editing anything in **dist**, regenerate **Mangrove-Bay-FCA.html** with:

```bash
python tools/build_standalone.py
```

See **CHANGES.md** for the revisions made after the original export.

## Preview on GitHub Pages

Live preview: https://brianbalzar.github.io/mangrove-bay-fca/

`.github/workflows/pages.yml` runs `tests/verify.mjs` and publishes **dist** on every push to `main`. One-time setup: repo Settings > Pages > Source: **GitHub Actions**. The site works under a `/<repo>/` subpath because all paths are relative and routes use URL fragments.

The preview carries a `noindex` tag and a `robots.txt` that blocks crawlers. Remove both before the Upchurch launch. GitHub Pages sites are public even when the repository is private.

Do not put the Git repository inside this OneDrive folder; OneDrive can corrupt `.git` folders. Keep the clone elsewhere (for example `C:\dev\mangrove-bay-fca`) and copy finished files back here.

## Verification

With Node.js installed, run:

```bash
node tests/verify.mjs
```

The source has passed report-total reconciliation, model boundary checks and checks of all 15 route renderings. The standalone export also passes a JavaScript syntax check and embedded-asset integrity checks. Browser-based visual testing was unavailable during export.

## Public versions

Use a separately curated dataset and PDF for an approved public version. The data's visibility tags are editorial metadata, not access controls. A static deployment includes all of its shipped source data and assets.
