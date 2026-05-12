const INK = "#0e0b07";

interface SectionHeadProps {
  kicker?: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
  large?: boolean;
}

export function SectionHead({
  kicker,
  headline,
  subheadline,
  centered = false,
  large = false,
}: SectionHeadProps) {
  return (
    <div className={`mb-5 ${centered ? "text-center" : ""}`}>
      {kicker && (
        <div className={`inline-flex items-center mb-3 ${centered ? "justify-center w-full" : ""}`}>
          <div
            className="px-2.5 py-1"
            style={{
              background: INK,
              fontFamily: "'Cinzel', serif",
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              color: "#ebe0c9",
            }}
          >
            {kicker.toUpperCase()}
          </div>
        </div>
      )}

      {/* Top rule */}
      <div style={{ height: 2, background: INK, marginBottom: 6 }} />

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: large ? "2.8rem" : "1.55rem",
          fontWeight: 900,
          lineHeight: 1.1,
          color: INK,
        }}
      >
        {headline}
      </h2>

      {subheadline && (
        <p
          className="mt-2 italic"
          style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: "0.92rem",
            lineHeight: 1.55,
            color: INK,
          }}
        >
          {subheadline}
        </p>
      )}

      {/* Bottom rule */}
      <div
        style={{
          marginTop: 8,
          height: 0,
          borderTop: `1px solid ${INK}`,
          borderBottom: `1px solid ${INK}`,
          paddingTop: 3,
        }}
      />
    </div>
  );
}
