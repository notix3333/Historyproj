const INK = "#0e0b07";

interface ArticleImageProps {
  src: string;
  caption: string;
  alt?: string;
  className?: string;
  tall?: boolean;
}

export function ArticleImage({
  src,
  caption,
  alt,
  className = "",
  tall = false,
}: ArticleImageProps) {
  return (
    <figure className={`my-5 ${className}`}>
      <div
        className="overflow-hidden"
        style={{
          border: `1px solid ${INK}`,
          boxShadow: `2px 2px 0 ${INK}`,
        }}
      >
        <img
          src={src}
          alt={alt || caption}
          className="w-full object-cover block"
          style={{
            height: tall ? "280px" : "210px",
            filter: "grayscale(88%) sepia(22%) contrast(1.18) brightness(0.92)",
            display: "block",
          }}
        />
      </div>
      <figcaption
        className="flex items-start gap-1.5 pt-1.5 mt-1"
        style={{ borderTop: `1px solid ${INK}` }}
      >
        <span
          style={{
            fontSize: "0.45rem",
            marginTop: "3px",
            color: `${INK}60`,
            flexShrink: 0,
          }}
        >
          ■
        </span>
        <span
          className="italic"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.63rem",
            lineHeight: 1.55,
            color: `${INK}c0`,
          }}
        >
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}
