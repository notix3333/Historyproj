const INK = "#0e0b07";

interface DropCapProps {
  letter: string;
  rest: string;
}

export function DropCap({ letter, rest }: DropCapProps) {
  return (
    <div className="mb-4 overflow-hidden">
      <p
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "0.95rem",
          lineHeight: 1.76,
          color: INK,
          textAlign: "left",
          textWrap: "pretty",
          hyphens: "auto",
        }}
      >
        <span
          className="float-left select-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4.5rem",
            lineHeight: "0.78",
            fontWeight: 900,
            marginRight: "6px",
            marginTop: "4px",
            color: INK,
          }}
        >
          {letter}
        </span>
        {rest}
      </p>
    </div>
  );
}
