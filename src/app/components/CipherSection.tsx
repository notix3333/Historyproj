const INK = "#0e0b07";
const PAPER = "#ffffff";

const cipherRows = [
  { num: "124", value: "А", num2: "218", value2: "де" },
  { num: "131", value: "Б", num2: "224", value2: "ди" },
  { num: "142", value: "В", num2: "231", value2: "до" },
  { num: "156", value: "Г", num2: "242", value2: "ду" },
  { num: "163", value: "Д", num2: "256", value2: "ен" },
  { num: "171", value: "Е", num2: "263", value2: "ер" },
  { num: "184", value: "Ж", num2: "271", value2: "ес" },
  { num: "192", value: "З", num2: "284", value2: "ет" },
  { num: "201", value: "И", num2: "292", value2: "же" },
  { num: "213", value: "К", num2: "301", value2: "за" },
];

export function CipherSection() {
  return (
    <section id="section-5" style={{ borderTop: `3px double ${INK}` }}>
      {/* Section header banner */}
      <div
        className="px-8 py-3 flex items-center justify-between"
        style={{ background: INK, color: PAPER }}
      >
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
          КРИПТОГРАФИЯ
        </div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.15em", opacity: 0.6 }}>
          ✦
        </div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
          ТАЙНОПИСЬ ЕВРОПЫ
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
          Великий Шифр Россиньоля
        </h2>
        <p
          className="text-center italic mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "'IM Fell English', serif", fontSize: "1rem", lineHeight: 1.65, color: INK }}
        >
          Le Grand Chiffre — государственный шифр Людовика XIV, созданный около 1688 года
          и не разгаданный вплоть до 1893 года, когда криптограф Этьен Базерис
          восстановил его после трёх лет работы.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Cipher table */}
          <div
            className="md:pr-8 md:border-r"
            style={{ borderColor: INK }}
          >
            <div
              className="text-center uppercase tracking-[0.25em] mb-4"
              style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", color: `${INK}90` }}
            >
              Фрагмент таблицы замены · Реконструкция
            </div>

            <table className="w-full border-collapse" style={{ border: `2px solid ${INK}` }}>
              <thead>
                <tr style={{ background: INK, color: PAPER }}>
                  {["КОД", "СЛОГ", "КОД", "СЛОГ"].map((h, i) => (
                    <th
                      key={i}
                      className="px-3 py-2 text-center"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.58rem",
                        letterSpacing: "0.15em",
                        border: `1px solid ${PAPER}30`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cipherRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? `${INK}04` : PAPER }}>
                    <td
                      className="px-3 py-1.5 text-center font-mono"
                      style={{ fontSize: "0.82rem", border: `1px solid ${INK}30`, color: INK }}
                    >
                      {row.num}
                    </td>
                    <td
                      className="px-3 py-1.5 text-center"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        border: `1px solid ${INK}30`,
                        color: INK,
                      }}
                    >
                      {row.value}
                    </td>
                    <td
                      className="px-3 py-1.5 text-center font-mono"
                      style={{ fontSize: "0.82rem", border: `1px solid ${INK}30`, color: INK }}
                    >
                      {row.num2}
                    </td>
                    <td
                      className="px-3 py-1.5 text-center"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        border: `1px solid ${INK}30`,
                        color: INK,
                      }}
                    >
                      {row.value2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p
              className="mt-2 italic text-center"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.62rem",
                color: `${INK}70`,
              }}
            >
              Шифр содержал 587 числовых групп, обозначавших слоги, слова и имена
            </p>

            {/* Encoded fragment */}
            <div
              className="mt-6 p-4"
              style={{ border: `2px solid ${INK}`, background: `${INK}06` }}
            >
              <div
                className="uppercase tracking-[0.25em] mb-3"
                style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", color: `${INK}80` }}
              >
                Зашифрованный фрагмент
              </div>
              <p
                className="font-mono tracking-wider leading-loose break-all"
                style={{ fontSize: "0.8rem", color: INK }}
              >
                124-218-201-171-256-142-301-163-184-192-213-131-271-224-242-292-156-231-163-213
              </p>
              <div
                className="mt-3 pt-2 italic"
                style={{
                  fontFamily: "'IM Fell English', serif",
                  fontSize: "0.9rem",
                  color: `${INK}c0`,
                  borderTop: `1px solid ${INK}30`,
                }}
              >
                Расшифровка: «Король повелевает хранить в тайне»
              </div>
            </div>
          </div>

          {/* Text explanation */}
          <div className="mt-8 md:mt-0 md:pl-8">
            <div
              className="pl-4 mb-5"
              style={{ borderLeft: `4px solid ${INK}` }}
            >
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.76,
                  color: INK,
                  textAlign: "left",
                  textWrap: "pretty",
                }}
              >
                Система была разработана Антуаном Россиньолем и его сыном
                Бонавентуром для королевской переписки. В отличие от большинства
                шифров того времени, основанных на замене букв, «Большой шифр»
                кодировал целые слоги числами, что делало его принципиально иначе
                устроенным.
              </p>
            </div>

            <p
              className="leading-relaxed mb-4"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.95rem",
                lineHeight: 1.76,
                color: INK,
                textAlign: "left",
                textWrap: "pretty",
              }}
            >
              Особую сложность создавали «пустышки» — числа, не несущие смысла
              и служащие лишь для введения криптоаналитика в заблуждение. Кроме
              того, некоторые числа означали «зачеркни предыдущее слово» — приём,
              не встречавшийся прежде ни в одном шифре.
            </p>

            <p
              className="leading-relaxed mb-4"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.95rem",
                lineHeight: 1.76,
                color: INK,
                textAlign: "left",
                textWrap: "pretty",
              }}
            >
              После смерти обоих Россиньолей тайна шифра была утрачена.
              Зашифрованные депеши хранились нечитанными более двухсот лет —
              пока Базерис не вскрыл систему, обнаружив среди прочего
              упоминание «Железной маски».
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-0 mt-6" style={{ border: `2px solid ${INK}` }}>
              {[
                { num: "587", label: "Кодовых групп" },
                { num: "200+", label: "Лет секретности" },
                { num: "3", label: "Года на взлом" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 text-center"
                  style={{ borderRight: i < 2 ? `1px solid ${INK}` : "none" }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: INK,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="mt-1 uppercase tracking-wider"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.5rem",
                      color: `${INK}80`,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
