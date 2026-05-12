const INK = "#0e0b07";

interface DividerProps {
  ornamental?: boolean;
  thick?: boolean;
  stars?: boolean;
}

export function Divider({ ornamental = false, thick = false, stars = false }: DividerProps) {
  if (stars) {
    return (
      <div className="flex items-center justify-center my-5 gap-2.5">
        <div className="flex-1" style={{ height: 1, background: INK }} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem", color: INK }}>
          ✦
        </span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.55rem", color: INK }}>
          ◆
        </span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem", color: INK }}>
          ✦
        </span>
        <div className="flex-1" style={{ height: 1, background: INK }} />
      </div>
    );
  }

  if (ornamental) {
    return (
      <div className="flex items-center justify-center my-5 gap-3">
        <div className="flex-1" style={{ height: 1, background: `${INK}60` }} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: `${INK}60` }}>
          ✦
        </span>
        <div className="flex-1" style={{ height: 1, background: `${INK}60` }} />
      </div>
    );
  }

  if (thick) {
    return (
      <div style={{ borderTop: `2px solid ${INK}`, margin: "16px 0" }} />
    );
  }

  return (
    <div style={{ borderTop: `1px solid ${INK}`, margin: "12px 0" }} />
  );
}

export function ColumnDivider() {
  return (
    <div className="hidden md:block w-px self-stretch" style={{ background: INK }} />
  );
}

export function SectionBreak() {
  return (
    <div className="py-2">
      <div style={{ height: 2, background: INK }} />
      <div style={{ height: 1, background: INK, marginTop: 3 }} />
    </div>
  );
}
