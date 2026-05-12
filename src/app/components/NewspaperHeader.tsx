const INK = "#0e0b07";
const PAPER = "#ebe0c9";

const navItems = [
  { label: "История", id: "section-0" },
  { label: "Вена", id: "section-1" },
  { label: "Париж", id: "section-2" },
  { label: "Лондон", id: "section-3" },
  { label: "Петербург", id: "section-4" },
  { label: "Шифры", id: "section-5" },
  { label: "Персоналии", id: "section-6" },
];

export function NewspaperHeader() {
  return (
    <header style={{ color: INK }}>
      {/* ── TOP RULE ── */}
      <div style={{ height: 3, background: INK }} />
      <div style={{ height: 1, background: INK, marginTop: 2 }} />

      {/* ── EDITION BAR ── */}
      <div
        className="flex justify-between items-center px-8 py-1.5"
        style={{ borderBottom: `1px solid ${INK}`, fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.12em" }}
      >
        <span>ТОМ CXLVI · НОМ. XLVII</span>
        <span className="tracking-[0.22em]">✦ &nbsp; ИСТОРИЧЕСКОЕ ИЗДАНИЕ &nbsp; ✦</span>
        <span>ОСНОВАНО В ЛЕТО 1703 Г.</span>
      </div>

      {/* ── MASTHEAD ── */}
      <div className="px-8 pt-5 pb-4 text-center" style={{ borderBottom: `3px double ${INK}` }}>
        {/* Above-title label */}
        <div
          className="tracking-[0.5em] uppercase mb-3"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem" }}
        >
          — Тайные Архивы Европейских Державъ —
        </div>

        {/* Ornamental rule */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1" style={{ height: 1, background: INK }} />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem" }}>◆</span>
          <div className="flex-1" style={{ height: 1, background: INK }} />
        </div>

        {/* MAIN TITLE */}
        <h1
          className="select-none leading-none mb-1"
          style={{
            fontFamily: "'UnifrakturMaguntia', cursive",
            fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
            color: INK,
            letterSpacing: "-0.01em",
          }}
        >
          Чёрный Кабинетъ
        </h1>

        {/* Ornamental rule */}
        <div className="flex items-center gap-3 mt-4 mb-3">
          <div className="flex-1" style={{ height: 1, background: INK }} />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem" }}>◆</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.6rem" }}>◆</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem" }}>◆</span>
          <div className="flex-1" style={{ height: 1, background: INK }} />
        </div>

        {/* Subtitle */}
        <div
          className="tracking-[0.35em] uppercase"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem" }}
        >
          Cabinet&nbsp;Noir &nbsp;·&nbsp; Geheime&nbsp;Kabinets-Kanzlei &nbsp;·&nbsp; The&nbsp;Secret&nbsp;Office
        </div>

        {/* Date bar */}
        <div
          className="mt-3 tracking-widest"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", opacity: 0.6 }}
        >
          Два Века Тайного Почтового Надзора &nbsp;·&nbsp; 1590 — 1848
        </div>
      </div>

      {/* ── NAVIGATION ── */}
      <nav
        style={{
          borderBottom: `2px solid ${INK}`,
          background: INK,
        }}
        className="flex flex-wrap justify-center"
      >
        {navItems.map((item, i) => (
          <a
            key={i}
            href={`#${item.id}`}
            className="relative px-5 py-2.5 transition-all duration-200"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: `${PAPER}cc`,
              borderRight: i < navItems.length - 1 ? `1px solid ${PAPER}30` : "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = PAPER;
              (e.currentTarget as HTMLAnchorElement).style.background = `${PAPER}15`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = `${PAPER}cc`;
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            {item.label.toUpperCase()}
          </a>
        ))}
      </nav>

      {/* ── BOTTOM ACCENT LINE ── */}
      <div style={{ height: 1, background: INK, opacity: 0.3 }} />
    </header>
  );
}
