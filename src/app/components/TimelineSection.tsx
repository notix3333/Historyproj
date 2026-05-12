const INK = "#0e0b07";
const PAPER = "#ebe0c9";

const events = [
  { year: "1590", country: "Франция", event: "Генрих IV учреждает тайный перехват дипломатической переписки при королевском дворе." },
  { year: "1628", country: "Франция", event: "Кардинал Ришелье создаёт систематическую службу перехвата и дешифровки при Cabinet du Roi." },
  { year: "1653", country: "Англия",  event: "Джон Тёрло учреждает «Секретный кабинет» при Почтовом ведомстве Англии для перехвата переписки роялистов." },
  { year: "1688", country: "Франция", event: "Антуан Россиньоль создаёт «Большой шифр» Людовика XIV — 587 кодовых групп для обозначения слогов." },
  { year: "1703", country: "Австрия", event: "Основана Geheime Kabinets-Kanzlei в Вене — наиболее эффективная служба перехвата в истории Европы." },
  { year: "1716", country: "Россия",  event: "Пётр Великий создаёт систему перехвата почты при Тайной канцелярии по образцу европейских чёрных кабинетов." },
  { year: "1735", country: "Австрия", event: "Граф Коллоредо реорганизует Geheime Kabinets-Kanzlei. Письма вскрываются, копируются и запечатываются за три часа." },
  { year: "1762", country: "Англия",  event: "Парламентское расследование раскрывает деятельность Secret Office. Скандал вокруг перехвата писем Джона Уилкса." },
  { year: "1844", country: "Англия",  event: "Публичный скандал: обнаружено вскрытие писем итальянского революционера Маццини. Парламентские слушания о законности чёрных кабинетов." },
  { year: "1848", country: "Австрия", event: "Революция в Вене. Толпа штурмует помещение Geheime Kabinets-Kanzlei и уничтожает часть архивов." },
];

const countryColor: Record<string, string> = {
  Франция: "#1a1a2e",
  Австрия: "#1a1a1a",
  Англия:  "#111827",
  Россия:  "#0e0b07",
};

export function TimelineSection() {
  return (
    <section id="section-0" style={{ borderTop: `3px double ${INK}` }}>
      {/* Header banner */}
      <div
        className="px-8 py-3 flex items-center justify-between"
        style={{ background: INK, color: PAPER }}
      >
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
          ИСТОРИЯ
        </div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.15em", opacity: 0.6 }}>
          ✦
        </div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
          ХРОНОЛОГИЯ
        </div>
      </div>

      <div className="px-8 pt-8 pb-10">
        <h2
          className="text-center mb-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: INK,
          }}
        >
          Два Века Тайного Надзора
        </h2>
        <p
          className="text-center italic mb-8 max-w-xl mx-auto"
          style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: `${INK}90`,
          }}
        >
          Ключевые события истории европейских чёрных кабинетов
        </p>

        {/* Timeline */}
        <div
          className="max-w-3xl mx-auto"
          style={{ borderTop: `2px solid ${INK}` }}
        >
          {events.map((ev, i) => (
            <div
              key={i}
              className="flex items-stretch"
              style={{ borderBottom: `1px solid ${INK}40` }}
            >
              {/* Year */}
              <div
                className="shrink-0 flex items-center justify-end py-4 pr-5"
                style={{ width: "90px" }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: INK,
                    lineHeight: 1,
                  }}
                >
                  {ev.year}
                </span>
              </div>

              {/* Vertical rule */}
              <div
                className="shrink-0 self-stretch"
                style={{ width: 2, background: INK, margin: "0 0" }}
              />

              {/* Content */}
              <div className="flex-1 py-4 pl-5 pr-3">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="inline-block px-2 py-0.5"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.5rem",
                      letterSpacing: "0.22em",
                      background: INK,
                      color: PAPER,
                    }}
                  >
                    {ev.country.toUpperCase()}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: INK,
                  }}
                >
                  {ev.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
