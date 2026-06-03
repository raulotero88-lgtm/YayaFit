# -*- coding: utf-8 -*-
"""Incrusta portada + metadatos en el MP3 de 'Libre'."""
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, APIC, TIT2, TPE1, TALB, TCON, TDRC, error

MP3_PATH = r"CANCIONES YAYAFIT/Libre - YayaFit.mp3"
COVER_PATH = r"CANCIONES YAYAFIT/Portada Libre - YayaFit.jpg"

# Cargar (o crear) las etiquetas ID3
audio = MP3(MP3_PATH, ID3=ID3)
try:
    audio.add_tags()
except error:
    pass  # ya tiene tags

tags = audio.tags

# Metadatos de texto
tags.delall("TIT2"); tags.add(TIT2(encoding=3, text="Libre"))
tags.delall("TPE1"); tags.add(TPE1(encoding=3, text="YayaFit"))
tags.delall("TALB"); tags.add(TALB(encoding=3, text="YayaFit"))
tags.delall("TCON"); tags.add(TCON(encoding=3, text="Electropop"))
tags.delall("TDRC"); tags.add(TDRC(encoding=3, text="2026"))

# Portada (carátula frontal)
with open(COVER_PATH, "rb") as img:
    cover_data = img.read()
tags.delall("APIC")
tags.add(APIC(
    encoding=3,          # UTF-8
    mime="image/jpeg",
    type=3,              # 3 = Cover (front)
    desc="Cover",
    data=cover_data,
))

# Guardar con ID3v2.3 (máxima compatibilidad con reproductores)
audio.save(v2_version=3)

# Verificacion
v = MP3(MP3_PATH, ID3=ID3)
print("Titulo :", v.tags.get("TIT2"))
print("Artista:", v.tags.get("TPE1"))
print("Album  :", v.tags.get("TALB"))
print("Genero :", v.tags.get("TCON"))
apic = v.tags.getall("APIC")
print("Portada incrustada:", "SI" if apic else "NO",
      "(", len(apic[0].data) if apic else 0, "bytes )")
print("Duracion:", round(v.info.length, 1), "s")
