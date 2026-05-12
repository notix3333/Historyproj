const INK = "#0e0b07";

interface DropCapProps {
  letter: string;
  rest: string;
}

export function DropCap({ letter, rest }: DropCapProps) {
  return (
    <div className="mb-4 overflow-hidden">
      <p
        className="text-justify"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "0.9rem",
          lineHeight: 1.82,
          color: INK,
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
