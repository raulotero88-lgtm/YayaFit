# Genera el favicon de YayaFit: circulo fucsia de marca con "Y" blanca (serif).
# Paleta: accent #D63E78 (guia-estilo-yayafit-v1.md). Salida: brand/images/favicon-yayafit-512.png
from PIL import Image, ImageDraw, ImageFont

SIZE = 512
FUCSIA = (214, 62, 120, 255)  # #D63E78
img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
d.ellipse([8, 8, SIZE - 8, SIZE - 8], fill=FUCSIA)

font = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 330)
bbox = d.textbbox((0, 0), "Y", font=font)
w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
x = (SIZE - w) / 2 - bbox[0]
y = (SIZE - h) / 2 - bbox[1] - 8  # leve ajuste optico hacia arriba
d.text((x, y), "Y", font=font, fill=(255, 255, 255, 255))

out = "brand/images/favicon-yayafit-512.png"
img.save(out)
print("OK", out, img.size)
