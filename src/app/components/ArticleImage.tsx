import React from "react";
import { X, ZoomIn } from "lucide-react";

const INK = "#0e0b07";

interface ArticleImageProps {
  src: string;
  caption: string;
  alt?: string;
  className?: string;
  tall?: boolean;
  height?: string;
  objectPosition?: string;
  tone?: "archival" | "museum" | "none";
}

export function ArticleImage({
  src,
  caption,
  alt,
  className = "",
  tall = false,
  height,
  objectPosition = "center",
  tone = "archival",
}: ArticleImageProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const filters = {
    archival: "grayscale(78%) sepia(16%) contrast(1.12) brightness(0.94)",
    museum: "contrast(1.05) saturate(0.92) brightness(0.96)",
    none: "none",
  };
  const imageAlt = alt || caption;

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <figure className={`my-5 ${className}`}>
      <div
        className="overflow-hidden"
        style={{
          border: `1px solid ${INK}`,
          boxShadow: `2px 2px 0 ${INK}`,
        }}
      >
        <button
          type="button"
          aria-label={`Увеличить изображение: ${imageAlt}`}
          className="group relative block w-full cursor-zoom-in overflow-hidden p-0 text-left"
          onClick={() => setIsOpen(true)}
          style={{ background: "transparent", border: 0 }}
        >
          <img
            src={src}
            alt={imageAlt}
            className="w-full object-cover block transition-transform duration-300 group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
            style={{
              height: height ?? (tall ? "280px" : "210px"),
              filter: filters[tone],
              objectPosition,
              display: "block",
            }}
            loading="lazy"
            decoding="async"
          />
          <span
            className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            style={{ background: "rgba(14, 11, 7, 0.26)" }}
            aria-hidden="true"
          />
          <span
            className="absolute right-3 top-3 inline-flex size-11 scale-95 items-center justify-center rounded-full opacity-0 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100 group-focus-visible:scale-110 group-focus-visible:opacity-100"
            style={{
              background: "rgba(255, 255, 255, 0.92)",
              color: INK,
              boxShadow: "0 10px 28px rgba(0,0,0,0.22)",
            }}
            aria-hidden="true"
          >
            <ZoomIn size={23} strokeWidth={2.1} />
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Увеличенное изображение"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(14, 11, 7, 0.88)",
          }}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            aria-label="Закрыть увеличенное изображение"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full transition-transform hover:scale-105 focus-visible:scale-105"
            style={{
              background: "#ffffff",
              color: INK,
              boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
            }}
            onClick={() => setIsOpen(false)}
          >
            <X size={22} strokeWidth={2.2} />
          </button>

          <figure
            className="m-0 max-w-[min(96vw,1200px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={src}
              alt={imageAlt}
              className="block max-h-[82vh] w-auto max-w-full object-contain"
              style={{
                boxShadow: "0 18px 60px rgba(0,0,0,0.55)",
                background: "#ffffff",
              }}
            />
            <figcaption
              className="mt-3 max-w-3xl"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.82rem",
                lineHeight: 1.55,
                color: "#ffffff",
              }}
            >
              {caption}
            </figcaption>
          </figure>
        </div>
      )}

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
