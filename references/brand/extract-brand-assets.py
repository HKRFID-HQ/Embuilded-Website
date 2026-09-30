#!/usr/bin/env python3
"""Extract official Embuilded lockups into website brand assets."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
SRC = ROOT / "references" / "brand" / "embuilded-official-lockups.svg"
OUT = ROOT / "website" / "public" / "brand"

lines = SRC.read_text(encoding="utf-8").splitlines()
assert lines[0].startswith("<svg"), lines[0][:40]
top_paths = [l.strip() for l in lines[1:10]]      # horizontal lockup, y 0-319
bottom_paths = [l.strip() for l in lines[10:19]]  # stacked lockup, y 670-1339
assert all(l.startswith("<path") for l in top_paths + bottom_paths)

DARKS = ["#192330", "#1A2532", "#1B2631", "#1C2632"]
ACCENT = "#F5A91B"

def svg(view_box, paths, inverse=False, title=""):
    body = []
    for p in paths:
        if inverse:
            for dark in DARKS:
                p = p.replace(f'fill="{dark}"', 'fill="#FFFFFF"')
        body.append(p)
    title_tag = f"<title>{title}</title>" if title else ""
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view_box}">{title_tag}\n'
        + "\n".join(body)
        + "\n</svg>\n"
    )

# 1. Horizontal lockup (header / footer)
(OUT / "building-embuilded-horizontal.svg").write_text(
    svg("0 0 1245 320", top_paths, title="Embuilded — embedded intelligence for the built world"),
    encoding="utf-8",
)
(OUT / "building-embuilded-horizontal-inverse.svg").write_text(
    svg("0 0 1245 320", top_paths, inverse=True, title="Embuilded — embedded intelligence for the built world"),
    encoding="utf-8",
)

# 2. Stacked lockup (reference asset)
(OUT / "building-embuilded-stacked.svg").write_text(
    svg("0 670 1245 669", bottom_paths, title="Embuilded stacked lockup"),
    encoding="utf-8",
)

# 3. App icon: official building mark on dark tile
mark = "\n".join(top_paths[:6])
icon = (
    '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">\n'
    '<title>Embuilded app icon</title>\n'
    '<rect x="26" y="26" width="460" height="460" rx="72" fill="#192330"/>\n'
    '<g transform="translate(110 104) scale(0.95)">\n'
    + "".join(
        f'<g fill="#FFFFFF">{p}</g>\n' if 'fill="#192330"' in p else p + "\n"
        for p in top_paths[:6]
    )
    + "</g>\n</svg>\n"
)
# recolor dark mark parts to white for the icon tile
icon = icon.replace('fill="#192330"', 'fill="#FFFFFF"')
(ROOT / "website" / "src" / "app" / "icon.svg").write_text(icon, encoding="utf-8")

print("wrote brand assets")
for f in sorted(OUT.iterdir()):
    print(" -", f.name, f.stat().st_size, "bytes")
