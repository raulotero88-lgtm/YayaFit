# Incrusta "Portada Campeonas 2.jpg" (trofeo del Mundial) como carátula del MP3 de Campeonas.
# Sustituye la carátula anterior (copa genérica). Hace backup .mp3.bak antes de tocar.
from pathlib import Path
import shutil
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, APIC, error

base = Path(__file__).resolve().parents[1]  # music/06-campeonas/
mp3 = base / "Campeonas — YayaFit (Canción mundial 2026).mp3"
cover = base / "Portada Campeonas 2.jpg"

assert mp3.exists(), f"no existe el mp3: {mp3}"
assert cover.exists(), f"no existe la portada: {cover}"

bak = mp3.with_suffix(mp3.suffix + ".bak")
if not bak.exists():
    shutil.copy2(mp3, bak)
    print("backup creado:", bak.name)
else:
    print("backup ya existia (no se sobrescribe):", bak.name)

audio = MP3(mp3, ID3=ID3)
try:
    audio.add_tags()
except error:
    pass

# Quitar cualquier caratula anterior
audio.tags.delall("APIC")

audio.tags.add(APIC(
    encoding=3,            # utf-8
    mime="image/jpeg",
    type=3,               # COVER_FRONT
    desc="Cover",
    data=cover.read_bytes(),
))
audio.save(v2_version=3)

# Verificacion
check = MP3(mp3, ID3=ID3)
apics = [f for f in check.tags.values() if getattr(f, "FrameID", "") == "APIC"]
print("APIC frames tras guardar:", len(apics))
for p in apics:
    print("  mime:", p.mime, "type:", int(p.type), "size:", len(p.data), "bytes")
print("nuevo tamano mp3:", mp3.stat().st_size, "bytes")
