"""Build single-file versions of the site from dist/.

Usage (from the package folder):
    python tools/build_standalone.py

Writes:
    Mangrove-Bay-FCA.html  - one file with styles, scripts, images and the PDF embedded
"""
import base64
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"


def bundle_js() -> str:
    """Concatenate the three ES modules into one module script."""
    data = (DIST / "data.js").read_text(encoding="utf-8")
    model = (DIST / "model.js").read_text(encoding="utf-8")
    app = (DIST / "app.js").read_text(encoding="utf-8")
    strip_imports = lambda s: re.sub(r"^import .*?;\s*$", "", s, flags=re.M)
    data = data.replace("export const DATA", "const DATA")
    model = strip_imports(model).replace("export const ", "const ").replace("export function ", "function ")
    app = strip_imports(app)
    app = re.sub(r"^export \{.*?\};\s*$", "", app, flags=re.M)
    return "\n".join([data, model, "const D = DATA;", app])


def data_uri(path: pathlib.Path, mime: str) -> str:
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def build(embed_assets: bool) -> str:
    html = (DIST / "index.html").read_text(encoding="utf-8")
    css = (DIST / "styles.css").read_text(encoding="utf-8")
    js = bundle_js()
    html = html.replace('<link rel="stylesheet" href="styles.css">', f"<style>{css}</style>")
    html = html.replace('<script type="module" src="app.js"></script>', "")
    html = html.replace("</body>", f'<script type="module">{js}</script>\n</body>')
    if embed_assets:
        mimes = {".png": "image/png", ".jpeg": "image/jpeg", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".pdf": "application/pdf"}
        # Embed the PDF once (in DATA.report); point the header and noscript links at it from script.
        pdf = "assets/mangrove-bay-fca-report.pdf"
        html = html.replace(f'<a class="button report-button" href="{pdf}" download>', '<a class="button report-button" href="#" download="mangrove-bay-fca-report.pdf">')
        html = html.replace(f'<a href="{pdf}">Read the complete PDF report.</a>', 'Open the PDF report supplied with this file.')
        html = html.replace("const D = DATA;", "const D = DATA; document.querySelector('.report-button').href = DATA.report;")
        for asset in (DIST / "assets").iterdir():
            uri = data_uri(asset, mimes[asset.suffix])
            html = html.replace(f"assets/{asset.name}", uri)
    return html


if __name__ == "__main__":
    out = ROOT / "Mangrove-Bay-FCA.html"
    out.write_text(build(embed_assets=True), encoding="utf-8")
    print(f"Wrote {out} ({out.stat().st_size / 1e6:.1f} MB)")
