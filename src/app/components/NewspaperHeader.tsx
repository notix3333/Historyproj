const INK = "#0e0b07";
const PAPER = "#ffffff";

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
        className="px-8 py-2 text-center"
        style={{
          borderBottom: `1px solid ${INK}`,
          fontFamily: "'Cinzel', serif",
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
        }}
      >
        <span>Музейный проект</span>
      </div>

      {/* ── MASTHEAD ── */}
      <div className="px-8 pt-5 pb-4 text-center" style={{ borderBottom: `3px double ${INK}` }}>
        {/* Above-title label */}
        <div
          className="tracking-[0.5em] uppercase mb-3"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem" }}
        >
          Попов Николай Матюшкин Владислав
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
            fontSize: "clamp(2.8rem, 8vw, 5.8rem)",
            color: INK,
            letterSpacing: "0",
            textWrap: "balance",
          }}
        >
          Черные кабинеты
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
          className="tracking-[0.18em] sm:tracking-[0.35em] uppercase"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", lineHeight: 1.65 }}
        >
          ББИ-25-6
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
