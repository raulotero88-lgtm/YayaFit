// YayaFit — Home screen
// Senior-friendly fitness app for older women. Calm pastel palette, very large type.

const { useEffect, useMemo } = React;

// ─────────────────────────────────────────────────────────────
// Translations
// ─────────────────────────────────────────────────────────────
const STRINGS = {
  es: {
    greet: 'Buenos días',
    name: 'María',
    date: 'Domingo, 23 de mayo',
    mood: '¿Cómo te encuentras hoy?',
    moods: ['Muy bien', 'Bien', 'Regular', 'Cansada'],
    heroEyebrow: 'Tu plan semanal',
    heroTitle: 'Movimiento suave',
    heroMeta: 'Día 3 de 5  ·  20 min',
    heroCta: 'Continuar',
    quickTitle: 'Hoy puedes hacer',
    q: {
      clase: 'Clase libre',
      claseSub: 'Elige tú',
      comunidad: 'Tu grupo',
      comunidadSub: '12 amigas',
      respira: 'Respiración',
      respiraSub: '5 min',
      nutri: 'Nutrición',
      nutriSub: 'Receta del día'
    },
    weekTitle: 'Esta semana',
    weekDays: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    weekStat: 'días activos',
    reminder: 'Recordatorio suave',
    reminderBody: 'A las 18:00, una caminata corta por casa.',
    tabs: ['Inicio', 'Clases', 'Salud', 'Tú']
  },
  ca: {
    greet: 'Bon dia',
    name: 'Maria',
    date: 'Diumenge, 23 de maig',
    mood: 'Com et trobes avui?',
    moods: ['Molt bé', 'Bé', 'Regular', 'Cansada'],
    heroEyebrow: 'El teu pla setmanal',
    heroTitle: 'Moviment suau',
    heroMeta: 'Dia 3 de 5  ·  20 min',
    heroCta: 'Continuar',
    quickTitle: 'Avui pots fer',
    q: {
      clase: 'Classe lliure',
      claseSub: 'Tria tu',
      comunidad: 'El teu grup',
      comunidadSub: '12 amigues',
      respira: 'Respiració',
      respiraSub: '5 min',
      nutri: 'Nutrició',
      nutriSub: 'Recepta del dia'
    },
    weekTitle: 'Aquesta setmana',
    weekDays: ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'],
    weekStat: 'dies actius',
    reminder: 'Recordatori suau',
    reminderBody: 'A les 18:00, una passejada curta per casa.',
    tabs: ['Inici', 'Classes', 'Salut', 'Tu']
  },
  en: {
    greet: 'Good morning',
    name: 'Mary',
    date: 'Sunday, May 23',
    mood: 'How are you feeling today?',
    moods: ['Great', 'Good', 'So-so', 'Tired'],
    heroEyebrow: 'Your weekly plan',
    heroTitle: 'Gentle movement',
    heroMeta: 'Day 3 of 5  ·  20 min',
    heroCta: 'Continue',
    quickTitle: 'Today you can',
    q: {
      clase: 'Free class',
      claseSub: 'You choose',
      comunidad: 'Your group',
      comunidadSub: '12 friends',
      respira: 'Breathing',
      respiraSub: '5 min',
      nutri: 'Nutrition',
      nutriSub: 'Recipe of the day'
    },
    weekTitle: 'This week',
    weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    weekStat: 'active days',
    reminder: 'Gentle reminder',
    reminderBody: 'At 6:00pm, a short walk around the house.',
    tabs: ['Home', 'Classes', 'Health', 'You']
  }
};

// ─────────────────────────────────────────────────────────────
// Color palettes
// ─────────────────────────────────────────────────────────────
const PALETTES = {
  serenity: {
    label: 'Serenidad',
    bg: '#F5F1EA', // warm cream
    surface: '#FFFFFF',
    ink: '#1F2A2E',
    inkSoft: '#6B7682',
    primary: '#CFE0EC', // pastel blue
    primaryDeep: '#3B6A8A',
    secondary: '#D8E4D4', // sage green
    secondaryDeep: '#4F6E50',
    accent: '#F4D9CB', // soft coral
    accentDeep: '#A4543A',
    pill: '#EFEAE1'
  },
  jardin: {
    label: 'Jardín',
    bg: '#F2F1EA',
    surface: '#FFFFFF',
    ink: '#23302A',
    inkSoft: '#6E7A72',
    primary: '#D8E4D4',
    primaryDeep: '#4F6E50',
    secondary: '#E7E2D2',
    secondaryDeep: '#7A6E48',
    accent: '#EFCFC4',
    accentDeep: '#9A4F39',
    pill: '#EBE7DB'
  },
  amanecer: {
    label: 'Amanecer',
    bg: '#FAF1EA',
    surface: '#FFFFFF',
    ink: '#2A2024',
    inkSoft: '#7B6A6F',
    primary: '#F4D5C8',
    primaryDeep: '#A4543A',
    secondary: '#E9DFD0',
    secondaryDeep: '#806A4B',
    accent: '#D8E0EB',
    accentDeep: '#456787',
    pill: '#F0E5DC'
  },
  lavanda: {
    label: 'Lavanda',
    bg: '#F1EEF2',
    surface: '#FFFFFF',
    ink: '#272231',
    inkSoft: '#736C7F',
    primary: '#DDD4E6',
    primaryDeep: '#5C4B7A',
    secondary: '#D6DFE6',
    secondaryDeep: '#476078',
    accent: '#EFD7D9',
    accentDeep: '#8E4D55',
    pill: '#E9E4ED'
  }
};

// ─────────────────────────────────────────────────────────────
// Tiny line icons — drawn deliberately simple, single stroke
// ─────────────────────────────────────────────────────────────
const Icon = ({ name, size = 28, color = 'currentColor', stroke = 2 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'home':return <svg {...common}><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /></svg>;
    case 'classes':return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M10 9l5 3-5 3z" fill={color} stroke="none" /></svg>;
    case 'heart':return <svg {...common}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" /></svg>;
    case 'person':return <svg {...common}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>;
    case 'play':return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M10 8l6 4-6 4z" fill={color} stroke="none" /></svg>;
    case 'arrow':return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case 'bell':return <svg {...common}><path d="M6 17h12l-1.5-2V11a4.5 4.5 0 1 0-9 0v4z" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>;
    case 'leaf':return <svg {...common}><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" /><path d="M5 19l8-8" /></svg>;
    case 'cup':return <svg {...common}><path d="M6 9h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9z" /><path d="M17 11h2a2 2 0 0 1 0 4h-2" /></svg>;
    case 'users':return <svg {...common}><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" /><path d="M15 19c0-2 1.5-3.5 4-3.5" /></svg>;
    default:return null;
  }
};

// ─────────────────────────────────────────────────────────────
// Photo slot — uses <image-slot> web component for drop-in photos
// ─────────────────────────────────────────────────────────────
const Photo = ({ id, placeholder, radius = 28, style = {}, tint = '#D8E4D4', src, fit = 'cover' }) =>
<div style={{ position: 'relative', borderRadius: radius, overflow: 'hidden', background: tint, ...style }}>
    <image-slot
    id={id}
    placeholder={placeholder}
    shape="rounded"
    radius={radius}
    fit={fit}
    {...src ? { src } : {}}
    style={{ display: 'block', width: '100%', height: '100%' }}>
  </image-slot>
  </div>;


// ─────────────────────────────────────────────────────────────
// Home Screen
// ─────────────────────────────────────────────────────────────
function YayaFitHome({ tweaks }) {
  const t = STRINGS[tweaks.lang] || STRINGS.es;
  const P = PALETTES[tweaks.palette] || PALETTES.serenity;
  const fontDisplay = tweaks.fontStyle === 'serif' ?
  '"Fraunces", "Cormorant Garamond", Georgia, serif' :
  '"Nunito", "Quicksand", -apple-system, system-ui, sans-serif';
  const fontBody = '"Nunito", "Quicksand", -apple-system, system-ui, sans-serif';
  // Text size scale: 0 = standard accessible, 1 = larger, 2 = largest.
  // Body text scales more aggressively than display so huge headings
  // don't swallow the layout at accessibility max.
  const scale = [1, 1.14, 1.28][tweaks.textSize] || 1;
  const displayScale = [1, 1.06, 1.10][tweaks.textSize] || 1;
  const fs = (px) => Math.round(px * (px >= 24 ? displayScale : scale));

  return (
    <div style={{
      width: '100%', minHeight: '100%', background: P.bg,
      fontFamily: fontBody, color: P.ink,
      paddingTop: 70,
      paddingBottom: 110
    }}>
      {/* Greeting block — primary header of the home screen.
                   No app wordmark: the user knows they're inside YayaFit. */}
      <div style={{
        padding: '8px 24px 0',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: fs(15), color: P.inkSoft, fontWeight: 500 }}>
            {t.date}
          </div>
          <div style={{
            marginTop: 6,
            fontFamily: fontDisplay,
            fontWeight: tweaks.fontStyle === 'serif' ? 400 : 700,
            fontSize: fs(38), lineHeight: 1.05,
            letterSpacing: tweaks.fontStyle === 'serif' ? '-0.02em' : '-0.03em'
          }}>
            {t.greet},<br />
            <span style={{ color: P.primaryDeep }}>{t.name}</span>
          </div>
        </div>
        <div style={{
          width: 48, height: 48, borderRadius: 24, background: P.pill,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: P.ink, fontWeight: 600, fontSize: fs(18),
          border: '1.5px solid rgba(0,0,0,0.05)',
          flexShrink: 0
        }}>M</div>
      </div>

      {/* Mood check */}
      <div style={{ padding: '28px 24px 0' }}>
        <div style={{ fontSize: fs(18), color: P.inkSoft, marginBottom: 12 }}>{t.mood}</div>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
          {t.moods.map((m, i) =>
          <button key={i} style={{
            flex: '0 0 auto',
            padding: '14px 20px', borderRadius: 999,
            background: i === 1 ? P.ink : P.surface,
            color: i === 1 ? P.bg : P.ink,
            border: i === 1 ? 'none' : `1.5px solid ${P.pill}`,
            fontFamily: fontBody, fontSize: fs(17),
            cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: "700"
          }}>{m}</button>
          )}
        </div>
      </div>

      {/* Hero plan card */}
      <div style={{ padding: '28px 20px 0' }}>
        <div style={{
          borderRadius: 32, background: '#FBF0DE', overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(20,40,60,0.04)'
        }}>
          <Photo
            id="yf-hero"
            src={(typeof window !== 'undefined' && window.__resources && window.__resources.heroImg) || "assets/hero-mujeres.png"}
            fit="cover"
            placeholder="Mujer mayor haciendo ejercicio suave en casa"
            radius={0}
            tint="#FBF0DE"
            style={{ width: '100%', height: 240, borderRadius: 0 }} />
          
          <div style={{ padding: '22px 24px 24px' }}>
            <div style={{ fontSize: fs(14), color: P.primaryDeep, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {t.heroEyebrow}
            </div>
            <div style={{
              fontFamily: fontDisplay,
              fontWeight: tweaks.fontStyle === 'serif' ? 500 : 700,
              fontSize: fs(30), lineHeight: 1.1, marginTop: 6,
              letterSpacing: tweaks.fontStyle === 'serif' ? '-0.02em' : '-0.02em',
              color: P.ink
            }}>
              {t.heroTitle}
            </div>
            <div style={{ fontSize: fs(17), color: P.inkSoft, marginTop: 8 }}>
              {t.heroMeta}
            </div>
            {/* Progress dots */}
            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              {[0, 1, 2, 3, 4].map((i) =>
              <div key={i} style={{
                flex: 1, height: 8, borderRadius: 4,
                background: i < 3 ? P.primaryDeep : 'rgba(0,0,0,0.08)'
              }} />
              )}
            </div>
            <button style={{
              marginTop: 22, width: '100%', minHeight: 64,
              borderRadius: 20, border: 'none', cursor: 'pointer',
              background: P.ink, color: P.bg,
              fontFamily: fontBody, fontSize: fs(20), fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12
            }}>
              <Icon name="play" size={26} color={P.bg} stroke={1.8} />
              {t.heroCta}
            </button>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ padding: '32px 20px 0' }}>
        <div style={{
          fontFamily: fontDisplay,
          fontWeight: tweaks.fontStyle === 'serif' ? 500 : 700,
          fontSize: fs(22), marginBottom: 14, padding: '0 4px',
          letterSpacing: tweaks.fontStyle === 'serif' ? '-0.01em' : '-0.02em'
        }}>{t.quickTitle}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <QuickCard
            P={P} fontDisplay={fontDisplay} fontBody={fontBody} fs={fs} tweaks={tweaks}
            bg={P.secondary} ink={P.secondaryDeep}
            title={t.q.clase} sub={t.q.claseSub}
            withPhoto photoId="yf-clase-v2" photoPlaceholder="Clase de yoga senior"
            photoSrc="assets/clase-libre.png" photoSrcKey="claseImg" />
          
          <QuickCard
            P={P} fontDisplay={fontDisplay} fontBody={fontBody} fs={fs} tweaks={tweaks}
            bg={P.accent} ink={P.accentDeep}
            title={t.q.comunidad} sub={t.q.comunidadSub}
            withPhoto photoId="yf-grupo-v2" photoPlaceholder="Grupo de amigas"
            photoSrc="assets/grupo.png" photoSrcKey="grupoImg" />
          
          <QuickCard
            P={P} fontDisplay={fontDisplay} fontBody={fontBody} fs={fs} tweaks={tweaks}
            bg={P.surface} ink={P.primaryDeep}
            title={t.q.respira} sub={t.q.respiraSub}
            withPhoto photoId="yf-respira-v2" photoPlaceholder="Respiración consciente"
            photoSrc="assets/respiracion.png" photoSrcKey="respiraImg" />
          
          <QuickCard
            P={P} fontDisplay={fontDisplay} fontBody={fontBody} fs={fs} tweaks={tweaks}
            bg={P.surface} ink={P.secondaryDeep}
            title={t.q.nutri} sub={t.q.nutriSub}
            withPhoto photoId="yf-nutri-v2" photoPlaceholder="Nutrición consciente"
            photoSrc="assets/nutricion.png" photoSrcKey="nutriImg" />
          
        </div>
      </div>

      {/* Week strip */}
      <div style={{ padding: '32px 20px 0' }}>
        <div style={{
          background: P.surface, borderRadius: 28, padding: '22px 22px 20px',
          border: `1px solid ${P.pill}`
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{
              fontFamily: fontDisplay,
              fontWeight: tweaks.fontStyle === 'serif' ? 500 : 700,
              fontSize: fs(22),
              letterSpacing: tweaks.fontStyle === 'serif' ? '-0.01em' : '-0.02em'
            }}>{t.weekTitle}</div>
            <div style={{ fontSize: fs(17), color: P.inkSoft }}>
              <span style={{ color: P.ink, fontWeight: 700, fontSize: fs(22) }}>4</span>/7 {t.weekStat}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 8, marginTop: 16 }}>
            {t.weekDays.map((d, i) => {
              const active = [0, 2, 4, 5].includes(i);
              const today = i === 6;
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{ fontSize: fs(14), color: P.inkSoft, fontWeight: 600 }}>{d}</div>
                  <div style={{
                    width: '100%', aspectRatio: '1/1', borderRadius: 14,
                    background: active ? P.primaryDeep : today ? P.primary : P.pill,
                    color: active ? P.bg : P.ink,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: fs(15), fontWeight: 700,
                    border: today ? `2px solid ${P.ink}` : '2px solid transparent',
                    boxSizing: 'border-box'
                  }}>
                    {active ? '✓' : i + 17}
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>

      {/* Reminder */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          background: P.surface, borderRadius: 28, padding: '22px',
          border: `1px solid ${P.pill}`,
          display: 'flex', alignItems: 'flex-start', gap: 16
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 18, background: P.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}>
            <Icon name="bell" size={28} color={P.accentDeep} stroke={2} />
          </div>
          <div style={{ flex: 1, paddingTop: 2 }}>
            <div style={{
              fontFamily: fontDisplay,
              fontWeight: tweaks.fontStyle === 'serif' ? 500 : 700,
              fontSize: fs(20),
              letterSpacing: tweaks.fontStyle === 'serif' ? '-0.01em' : '-0.02em'
            }}>{t.reminder}</div>
            <div style={{ fontSize: fs(17), color: P.inkSoft, marginTop: 4, lineHeight: 1.35 }}>
              {t.reminderBody}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tab bar */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: P.surface,
        borderTop: `1px solid ${P.pill}`,
        padding: '12px 12px 28px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4 }}>
          {[
          { ic: 'home', l: t.tabs[0], active: true },
          { ic: 'classes', l: t.tabs[1] },
          { ic: 'heart', l: t.tabs[2] },
          { ic: 'person', l: t.tabs[3] }].
          map((tab, i) =>
          <button key={i} style={{
            border: 'none', background: 'transparent', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: '8px 4px', borderRadius: 16,
            color: tab.active ? P.ink : P.inkSoft
          }}>
              <Icon name={tab.ic} size={28} color={tab.active ? P.ink : P.inkSoft} stroke={tab.active ? 2.4 : 2} />
              <span style={{ fontSize: fs(13), fontWeight: tab.active ? 700 : 500, fontFamily: fontBody }}>{tab.l}</span>
            </button>
          )}
        </div>
      </div>
    </div>);

}

function QuickCard({ P, fontDisplay, fontBody, fs, tweaks, bg, ink, title, sub, withPhoto, photoId, photoPlaceholder, photoSrc, photoSrcKey, icon }) {
  // Resolve at runtime so bundled (window.__resources) and dev (asset path) both work.
  const resolvedPhotoSrc = photoSrcKey && typeof window !== 'undefined' && window.__resources && window.__resources[photoSrcKey]
    ? window.__resources[photoSrcKey]
    : photoSrc;
  return (
    <button style={{
      background: bg, borderRadius: 24, border: `1px solid ${P.pill}`,
      padding: 0, cursor: 'pointer', textAlign: 'left',
      display: 'flex', flexDirection: 'column', minHeight: 200,
      overflow: 'hidden'
    }}>
      {withPhoto ?
      <Photo id={photoId} placeholder={photoPlaceholder} radius={0} tint="#FBF0DE" fit="contain"
      src={resolvedPhotoSrc}
      style={{ width: '100%', height: 120, borderRadius: 0 }} /> :

      <div style={{ padding: '20px 18px 0' }}>
          <div style={{
          width: 52, height: 52, borderRadius: 16, background: P.pill,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <Icon name={icon} size={28} color={ink} stroke={2} />
          </div>
        </div>
      }
      <div style={{ padding: '14px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{
          fontFamily: fontDisplay,
          fontWeight: tweaks.fontStyle === 'serif' ? 500 : 700,
          fontSize: fs(20), lineHeight: 1.1,
          letterSpacing: tweaks.fontStyle === 'serif' ? '-0.01em' : '-0.02em',
          color: P.ink
        }}>{title}</div>
        <div style={{ fontSize: fs(15), color: P.inkSoft, marginTop: 4 }}>{sub}</div>
      </div>
    </button>);

}

window.YayaFitHome = YayaFitHome;
window.PALETTES = PALETTES;