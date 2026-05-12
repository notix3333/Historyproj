const INK = "#0e0b07";
const PAPER = "#ebe0c9";

interface PullQuoteProps {
  text: string;
  attribution?: string;
  inverted?: boolean;
}

export function PullQuote({ text, attribution, inverted = false }: PullQuoteProps) {
  if (inverted) {
    return (
      <blockquote
        className="my-5 px-7 py-6 relative overflow-hidden"
        style={{ background: INK, color: PAPER }}
      >
        {/* Giant background quote mark */}
        <div
          className="absolute -top-4 -left-1 select-none pointer-events-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "8rem",
            lineHeight: 1,
            color: `${PAPER}10`,
          }}
        >
          "
        </div>

        <p
          className="italic relative z-10 text-center"
          style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: "1.1rem",
            lineHeight: 1.55,
            color: `${PAPER}ee`,
          }}
        >
          {text}
        </p>

        {attribution && (
          <cite
            className="block text-center mt-4 not-italic tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.55rem",
              color: `${PAPER}80`,
              borderTop: `1px solid ${PAPER}25`,
              paddingTop: 12,
            }}
          >
            — {attribution}
          </cite>
        )}
      </blockquote>
    );
  }

  return (
    <blockquote
      className="my-5 py-5 px-2 text-center"
      style={{
        borderTop: `3px double ${INK}`,
        borderBottom: `3px double ${INK}`,
      }}
    >
      {/* Decorative quotation mark */}
      <div
        className="select-none leading-none mb-1"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "3rem",
          lineHeight: 0.8,
          color: `${INK}25`,
        }}
      >
        "
      </div>

      <p
        className="italic"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.15rem",
          lineHeight: 1.45,
          color: INK,
          fontStyle: "italic",
        }}
      >
        {text}
      </p>

      {attribution && (
        <cite
          className="block mt-3 not-italic uppercase tracking-[0.2em]"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.55rem",
            color: `${INK}70`,
            borderTop: `1px solid ${INK}25`,
            paddingTop: 10,
            marginTop: 12,
          }}
        >
          — {attribution}
        </cite>
      )}
    </blockquote>
  );
}
