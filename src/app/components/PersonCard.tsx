const INK = "#0e0b07";
const PAPER = "#ffffff";

interface Person {
  name: string;
  years: string;
  role: string;
  country: string;
  description: string;
  numeral: string;
}

const persons: Person[] = [
  {
    numeral: "I",
    name: "Антуан Россиньоль",
    years: "1600 – 1682",
    role: "Криптограф Людовика XIV",
    country: "Франция",
    description:
      "Отец европейской криптографии на государственной службе. Создал вместе с сыном Бонавентуром «Большой шифр» — систему из 587 кодовых групп, не поддававшуюся расшифровке более 200 лет. Королевский двор предоставил ему дом вблизи Версаля, чтобы Россиньоль всегда находился под рукой.",
  },
  {
    numeral: "II",
    name: "Игнац де Кох",
    years: "1680 – 1763",
    role: "Директор Geheime Kabinets-Kanzlei",
    country: "Австрия",
    description:
      "Руководил венской тайной канцелярией при трёх императорах. Под его началом служба достигла образцовой эффективности: 100 писем обрабатывались за три часа до открытия почтовых отделений. Составлял ежедневные доклады для Марии Терезии лично.",
  },
  {
    numeral: "III",
    name: "Маргарита Терезия Валентин",
    years: "1712 – 1778",
    role: "Начальница отдела вскрытия печатей",
    country: "Австрия",
    description:
      "Одна из немногих женщин, достигших высокого положения в тайной службе. Владела искусством размягчения и точного воспроизведения восковых печатей тридцати европейских дворов. Её работа была столь искусна, что адресаты никогда не замечали следов вскрытия.",
  },
  {
    numeral: "IV",
    name: "Джон Тёрло",
    years: "1616 – 1668",
    role: "Государственный секретарь Кромвеля",
    country: "Англия",
    description:
      "Создатель Secret Office при Почтовом ведомстве Англии. Организовал масштабную сеть перехвата корреспонденции роялистов и иностранных держав. Его система просуществовала с незначительными изменениями до XIX века.",
  },
];

export function PersonsSection() {
  return (
    <section id="section-6" style={{ borderTop: `3px double ${INK}` }}>
      {/* Header banner */}
      <div
        className="px-8 py-3 flex items-center justify-between"
        style={{ background: INK, color: PAPER }}
      >
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
          БИОГРАФИЧЕСКИЙ УКАЗАТЕЛЬ
        </div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", opacity: 0.6 }}>✦</div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
          ПЕРСОНАЛИИ
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
          Мастера Тайного Ремесла
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
          Люди, стоявшие у истоков государственного почтового шпионажа в Европе
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ border: `2px solid ${INK}` }}
        >
          {persons.map((p, i) => (
            <div
              key={i}
              className="p-7 relative"
              style={{
                borderRight: i % 2 === 0 ? `1px solid ${INK}` : "none",
                borderBottom: i < 2 ? `1px solid ${INK}` : "none",
              }}
            >
              {/* Roman numeral */}
              <div
                className="absolute top-5 right-5 select-none"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: `${INK}10`,
                  lineHeight: 1,
                }}
              >
                {p.numeral}
              </div>

              {/* Header */}
              <div className="mb-4" style={{ borderBottom: `1px solid ${INK}40`, paddingBottom: 12 }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    lineHeight: 1.15,
                    color: INK,
                  }}
                >
                  {p.name}
                </h3>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                  <span
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "0.78rem",
                      fontStyle: "italic",
                      color: `${INK}90`,
                    }}
                  >
                    {p.years}
                  </span>
                  <span
                    className="inline-flex items-center px-2 py-0.5"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.5rem",
                      letterSpacing: "0.2em",
                      background: `${INK}12`,
                      color: INK,
                    }}
                  >
                    {p.country.toUpperCase()}
                  </span>
                </div>

                <div
                  className="italic mt-1.5"
                  style={{
                    fontFamily: "'IM Fell English', serif",
                    fontSize: "0.88rem",
                    color: `${INK}c0`,
                  }}
                >
                  {p.role}
                </div>
              </div>

              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.8,
                  color: INK,
                  textAlign: "left",
                  textWrap: "pretty",
                }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
