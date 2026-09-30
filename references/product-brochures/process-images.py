# Retouch gas detector brochure images v3
# Originals remain untouched in docx-media/.
import statistics
from PIL import Image, ImageDraw, ImageFont

FONT = "C:/Windows/Fonts/arialbd.ttf"

def font(size):
    return ImageFont.truetype(FONT, size)

def cover(im, box, color=(255, 255, 255)):
    ImageDraw.Draw(im).rectangle(box, fill=color)

def median_color(im, box):
    px = im.load()
    x0, y0, x1, y1 = box
    rs, gs, bs = [], [], []
    for x in range(x0, x1):
        for y in range(y0, y1):
            p = px[x, y]
            rs.append(p[0]); gs.append(p[1]); bs.append(p[2])
    return (int(statistics.median(rs)), int(statistics.median(gs)), int(statistics.median(bs)))

def fill_median(im, box):
    cover(im, box, median_color(im, box))

def clone_fill(im, box, src):
    """Copy pixels from src region (same size) into box - preserves texture."""
    x0, y0, x1, y1 = box
    sx0, sy0 = src
    region = im.crop((sx0, sy0, sx0 + (x1 - x0), sy0 + (y1 - y0)))
    im.paste(region, (x0, y0))

def label(im, xy, text, size=20, underline=True):
    d = ImageDraw.Draw(im)
    f = font(size)
    d.text(xy, text, font=f, fill=(20, 20, 20))
    if underline:
        x, y = xy
        bbox = d.textbbox((x, y), text, font=f)
        d.line([(bbox[0], bbox[3] + 2), (bbox[2], bbox[3] + 2)], fill=(20, 20, 20), width=2)

def vlabel(im, cx, cy, text, size=20):
    f = font(size)
    tmp = Image.new("RGBA", (600, 80), (0, 0, 0, 0))
    d = ImageDraw.Draw(tmp)
    d.text((10, 10), text, font=f, fill=(20, 20, 20))
    bbox = d.textbbox((10, 10), text, font=f)
    tmp = tmp.crop((bbox[0] - 4, 0, bbox[2] + 4, 80))
    rot = tmp.rotate(90, expand=True)
    im.paste(rot, (cx - rot.width // 2, cy - rot.height // 2), rot)

# ---------- image1: variants photo (870x400) ----------
im = Image.open("docx-media/image1.jpeg").convert("RGB")
cover(im, (315, 0, 555, 110))                       # vendor logo top centre (white bg)
cover(im, (8, 238, 92, 385))                        # left vertical Chinese label
vlabel(im, 50, 312, "STANDARD", 20)
cover(im, (808, 112, 870, 358))                     # right vertical Chinese label
vlabel(im, 839, 232, "PUMP SUCTION + CAMERA", 16)
# screens: cover vendor marks
fill_median(im, (195, 117, 248, 130))               # left bezel logo
fill_median(im, (196, 163, 250, 176))               # left LCD bottom company line
fill_median(im, (628, 103, 682, 113))               # right display top logo strip
fill_median(im, (628, 144, 682, 153))               # right display bottom strip
im.save("gas-detector-variants.jpg", quality=92)

# ---------- image2: dimension / callout diagram (1800x1000) ----------
im = Image.open("docx-media/image2.jpeg").convert("RGB")
cover(im, (483, 402, 800, 450))
label(im, (492, 408), "Upper part: 9.5 cm", 20)
cover(im, (608, 627, 885, 679))
label(im, (616, 634), "Lower part: 11.5 cm", 20)
cover(im, (1526, 40, 1602, 82));  label(im, (1534, 46), "Handle", 19)
cover(im, (906, 168, 1038, 220))
label(im, (913, 170), "Wireless", 20, underline=False)
label(im, (913, 194), "transmitter", 20)
cover(im, (906, 373, 1112, 421)); label(im, (913, 380), "Gas sensor inlet", 20)
cover(im, (1596, 338, 1752, 386)); label(im, (1604, 345), "Sound & light alarm", 18)
cover(im, (1491, 433, 1688, 481)); label(im, (1499, 440), "Gas concentration display", 19)
cover(im, (1036, 538, 1128, 586)); label(im, (1044, 545), "Battery box", 20)
cover(im, (1001, 708, 1112, 757)); label(im, (1009, 715), "Power switch", 20)
cover(im, (1686, 712, 1780, 765))
label(im, (1694, 714), "Charging", 18, underline=False)
label(im, (1694, 737), "port", 18)
# vendor marks inside the two screens (self-median flat fills)
fill_median(im, (1338, 317, 1412, 332))              # right bezel logo
fill_median(im, (1326, 416, 1424, 431))              # right LCD bottom company line
fill_median(im, (333, 321, 408, 336))                # left bezel logo
fill_median(im, (320, 407, 430, 421))                # left LCD bottom company line
im.save("gas-detector-dimensions.jpg", quality=92)
print("done")
