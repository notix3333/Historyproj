import React from "react";
import { NewspaperHeader } from "./components/NewspaperHeader";
import { DropCap } from "./components/DropCap";
import { PullQuote } from "./components/PullQuote";
import { ArticleImage } from "./components/ArticleImage";
import { SectionHead } from "./components/SectionHead";
import { TimelineSection } from "./components/TimelineSection";
import { PersonsSection } from "./components/PersonCard";
import { CipherSection } from "./components/CipherSection";
import museumOverview from "../assets/museum/museum-overview.jpg";
import blackChambersPanel from "../assets/museum/black-chambers-panel.jpg";
import habsburgAudio from "../assets/museum/habsburg-audio.jpg";
import englandMap from "../assets/museum/england-map.jpg";
import toolsCase from "../assets/museum/tools-case.jpg";
import sealsDocuments from "../assets/museum/seals-documents.jpg";
import stPetersburgWorkers from "../assets/museum/st-petersburg-workers.jpg";
import cipherClock from "../assets/museum/cipher-clock.jpg";

const INK = "#0e0b07";
const PAPER = "#ffffff";

// ── Reusable text body ──────────────────────────────────────────
function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`mb-4 ${className}`}
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
      {children}
    </p>
  );
}

// ── Section banner (inverted, like NYT section headers) ─────────
function SectionBanner({ left, right }: { left: string; right: string }) {
  return (
    <div
      className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between px-8 py-2.5 text-center"
      style={{ background: INK, color: PAPER, borderTop: `3px double ${INK}` }}
    >
      <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
        {left.toUpperCase()}
      </span>
      <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", opacity: 0.5 }}>✦</span>
      <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
        {right.toUpperCase()}
      </span>
    </div>
  );
}

// ── Testimony box ──────────────────────────────────────────────
function Testimony({ label, text, attr }: { label: string; text: string; attr?: string }) {
  return (
    <div className="my-5 p-5" style={{ border: `2px solid ${INK}`, background: `${INK}06` }}>
      <div
        className="uppercase tracking-[0.25em] mb-3"
        style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", color: `${INK}80` }}
      >
        {label}
      </div>
      <p
        className="italic leading-relaxed"
        style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.97rem", lineHeight: 1.65, color: INK }}
      >
        {text}
      </p>
      {attr && (
        <div
          className="mt-3 pt-2 text-right"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.62rem",
            color: `${INK}70`,
            borderTop: `1px solid ${INK}25`,
          }}
        >
          — {attr}
        </div>
      )}
    </div>
  );
}

// ── Chambers table ─────────────────────────────────────────────
const chambers = [
  { country: "Австрия", name: "Geheime Kabinets-Kanzlei", years: "1703–1848", desc: "Наиболее эффективная служба Европы. Перехватывала до 100 писем ежедневно. Лично докладывала Марии Терезии и Меттерниху." },
  { country: "Франция", name: "Cabinet Noir",              years: "XVI–XIX",   desc: "Существовал со времён Франциска I. Достиг расцвета при Ришелье, Людовике XIV и Наполеоне. Дал название всему явлению." },
  { country: "Англия",  name: "Secret Office",             years: "1653–1844", desc: "Учреждён Джоном Тёрло при Кромвеле. Перехватывал переписку якобитов, дипломатов и революционеров." },
  { country: "Россия",  name: "Чёрный кабинет",            years: "1716–1917", desc: "Основан Петром I при Тайной канцелярии. Расширен Екатериной II. Действовал вплоть до Февральской революции." },
  { country: "Пруссия", name: "Geheimes Postkabinett",     years: "1700–1866", desc: "Особенно активизировался при Фридрихе Великом. Регулярно вскрывал почту иностранных дипломатов в Берлине." },
];

const methods = [
  { num: "I",   title: "Размягчение печатей",   body: "Восковые печати размягчались над спиртовым пламенем или паром кипящей воды. Австрийские специалисты держали коллекцию свыше 200 точных копий печатей европейских вельмож и посольств." },
  { num: "II",  title: "Химические растворители",body: "Для особо сложных конвертов применялись специальные составы. Венские мастера разработали вещество, снимавшее сургуч целиком без следа. Некоторые конверты обрабатывались уксусными парами." },
  { num: "III", title: "Шифрование донесений",   body: "Сами доклады чёрных кабинетов зашифровывались отдельным шифром. Ключ хранился исключительно у директора. Перехваченные шифровки передавались криптоаналитикам." },
  { num: "IV",  title: "Симпатические чернила",  body: "Специалисты умели выявлять тайнопись — нагреванием над пламенем, обработкой лимонным соком, молоком или химическими реактивами. Сложнейшие составы требовали особого освещения." },
  { num: "V",   title: "Скорая копировка",        body: "Переписчики венской канцелярии достигали феноменальной скорости. Стандартное письмо копировалось за 3–4 минуты. Прижимные прессы снимали зеркальную копию за секунды." },
  { num: "VI",  title: "Агентурная сеть",         body: "Параллельно чёрным кабинетам все крупные дворы держали агентов среди почтальонов и курьеров. Агенты следили за адресатами, весом корреспонденции и подозрительными двойными днами сум." },
];

export default function App() {
  const paperStyle: React.CSSProperties = {
    backgroundColor: PAPER,
    color: INK,
    minHeight: "100vh",
  };

  return (
    <div style={paperStyle} lang="ru">
      {/* Outer frame */}
      <div
        className="max-w-[1140px] mx-auto"
        style={{ borderLeft: `2px solid ${INK}`, borderRight: `2px solid ${INK}`, minHeight: "100vh" }}
      >
        <NewspaperHeader />

        <main>
          {/* ════════════════════════════════════════════
              HERO HEADLINE
          ════════════════════════════════════════════ */}
          <section id="section-0" className="px-8 py-9 text-center" style={{ borderBottom: `2px solid ${INK}` }}>
            <h1
              className="mx-auto mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5.6vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: INK,
                maxWidth: "820px",
                textWrap: "balance",
              }}
            >
              Как государства читали чужие письма
            </h1>

            {/* Ornamental rule */}
            <div className="flex items-center gap-3 max-w-lg mx-auto mb-4">
              <div className="flex-1" style={{ height: 1, background: INK }} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.75rem" }}>✦</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.6rem" }}>◆</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.75rem" }}>✦</span>
              <div className="flex-1" style={{ height: 1, background: INK }} />
            </div>

            <p
              className="italic max-w-2xl mx-auto"
              style={{
                fontFamily: "'IM Fell English', serif",
                fontSize: "1.08rem",
                lineHeight: 1.65,
                color: `${INK}cc`,
              }}
            >
              История перлюстрации
            </p>
          </section>

          <section className="px-8 py-8" style={{ borderBottom: `3px double ${INK}` }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-8 items-start">
              <ArticleImage
                src={museumOverview}
                caption="Общий вид музейной экспозиции: стенды, интерактивные станции и линия истории почтового надзора."
                tone="museum"
                height="340px"
                objectPosition="center 42%"
                className="my-0"
              />

              <div>
                <SectionHead
                  kicker="Экспозиция"
                  headline="От текста к маршруту по криптографическому музею"
                  subheadline="Адрес: Ботаническая ул., 25 строение 4, Москва, 127276"
                />
                <Body>
                  Мы посетили криптографический музей и не смогли оставить без
                  внимания стенд, посвящённый тайной деятельности «чёрных
                  кабинетов». Заинтересовавшись этой темой, мы решили изучить
                  дополнительные материалы и обнаружили множество любопытных
                  фактов об их работе. Наш рассказ будет подкреплён реальными
                  музейными экспонатами.
                </Body>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              <ArticleImage
                src={blackChambersPanel}
                caption="Вводный стенд экспозиции: что называли «чёрными кабинетами» и зачем они возникли."
                tone="museum"
                height="210px"
                objectPosition="center 32%"
                className="my-0"
              />
              <ArticleImage
                src={toolsCase}
                caption="Инструменты перлюстратора и криптографа: пар, тонкие ножи, печати и вспомогательные приборы."
                tone="museum"
                height="210px"
                objectPosition="center 40%"
                className="my-0"
              />
              <ArticleImage
                src={cipherClock}
                caption="Музейный блок о шифровании и почтовой цензуре: скорость вскрытия писем была частью системы."
                tone="museum"
                height="210px"
                objectPosition="center 42%"
                className="my-0"
              />
            </div>
          </section>

          {/* ════════════════════════════════════════════
              SECTION I · HISTORY + VIENNA + CHAMBERS
          ════════════════════════════════════════════ */}
          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr_1fr] gap-0">

              {/* ── Col 1: История ── */}
              <div className="md:pr-7 pb-7 md:pb-0 md:border-r md:border-[#0e0b07]">
                <SectionHead kicker="Что такое" headline="Черные кабинеты" />
                <DropCap
                  letter="Ч"
                  rest="ЁРНЫМ КАБИНЕТОМ, или Cabinet Noir по-французски, именовали тайные государственные службы, главной задачей которых было перехватывать, вскрывать, копировать и снова запечатывать письма — так, чтобы никто не заметил следов."
                />
                <Body>
                  Подобные учреждения существовали во всех крупнейших европейских державах
                  на протяжении XVII–XIX веков. Австрия, Франция, Англия, Пруссия, Россия —
                  каждая имела свою службу перехвата, считая надзор законным правом
                  суверена.
                </Body>
                <Body>
                  Операции велись в полнейшей тайне: чиновники принимали особую присягу,
                  документы шифровались, а само существование подобных учреждений
                  официально никогда не признавалось.
                </Body>
                <ArticleImage
                  src={blackChambersPanel}
                  caption="Музейный стенд объясняет, почему перехват писем стал отдельной государственной практикой."
                  tone="museum"
                  objectPosition="center 30%"
                />
              </div>

              {/* ── Col 2: Вена ── */}
              <div id="section-1" className="md:px-7 border-t-2 md:border-t-0 md:border-r border-[#0e0b07] pt-7 md:pt-0 pb-7 md:pb-0">
                <ArticleImage
                  src={habsburgAudio}
                  caption="Интерактивный музейный блок о Габсбургской монархии напоминает: австрийская служба стала образцом для всей Европы."
                  tall
                  tone="museum"
                  objectPosition="center 48%"
                />
                <SectionHead
                  kicker="Австрия · Вена"
                  headline="Образцовая Машина Шпионажа Габсбургов"
                  subheadline="Geheime Kabinets-Kanzlei — тайная канцелярия, действовавшая с 1703 по 1848 год"
                />
                <DropCap
                  letter="В"
                  rest="ЕНСКАЯ Тайная кабинетная канцелярия по праву считается вершиной европейского почтового шпионажа. Основанная при императоре Иосифе I, она располагалась прямо в здании Главного почтамта — что давало немедленный доступ ко всей корреспонденции."
                />
                <Body>
                  Механизм работы был отточен до совершенства. Каждое утро, до открытия
                  обычного почтового отделения, курьеры доставляли мешки с письмами прямо
                  в канцелярию. Мастера вскрывали конверты над спиртовыми горелками,
                  помощники копировали содержимое — нередко зашифрованное — и передавали
                  дешифровщикам. Затем письма запечатывались вновь точными копиями
                  чужих печатей.
                </Body>
                <PullQuote
                  text="Сто писем вскрывались, копировались и запечатывались за три часа — прежде чем почтовые служащие являлись на работу."
                  attribution="Из доклада прусского посланника, Вена, 1742 г."
                  inverted
                />
                <Body>
                  Сотрудников — около двадцати — полностью изолировали от внешнего мира
                  на время работы. Ежедневные доклады ложились на стол лично
                  императрицы Марии Терезии.
                </Body>
              </div>

              {/* ── Col 3: Справочник ── */}
              <div className="md:pl-7 border-t-2 md:border-t-0 border-[#0e0b07] pt-7 md:pt-0">
                <SectionHead kicker="Справочник" headline="Пять Государств — Пять Кабинетов" />
                <div>
                  {chambers.map((c, i) => (
                    <div
                      key={i}
                      className="py-4"
                      style={{ borderBottom: i < chambers.length - 1 ? `1px solid ${INK}30` : "none" }}
                    >
                      <div className="flex items-start gap-2 mb-1 flex-wrap">
                        <span
                          className="inline-block px-2 py-0.5 shrink-0"
                          style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.2em", background: INK, color: PAPER }}
                        >
                          {c.country.toUpperCase()}
                        </span>
                        <span
                          className="italic"
                          style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.75rem", color: `${INK}80` }}
                        >
                          {c.years}
                        </span>
                      </div>
                      <div
                        className="mb-1"
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 700, color: INK }}
                      >
                        {c.name}
                      </div>
                      <p
                        style={{
                          fontFamily: "'Libre Baskerville', serif",
                          fontSize: "0.84rem",
                          lineHeight: 1.68,
                          color: INK,
                          textAlign: "left",
                          textWrap: "pretty",
                        }}
                      >
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════
              SECTION II · FRANCE + ENGLAND + RUSSIA
          ════════════════════════════════════════════ */}
          <SectionBanner left="Европейские кабинеты" right="От Парижа до Петербурга" />

          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr_1fr] gap-0">

              {/* ── France ── */}
              <div id="section-2" className="md:pr-7 pb-7 md:pb-0 md:border-r md:border-[#0e0b07]">
                <SectionHead kicker="Франция · Париж" headline="Cabinet Noir: от Ришелье до Наполеона" />
                <ArticleImage
                  src={sealsDocuments}
                  caption="Печати, списки и копии писем показывают материальную сторону перлюстрации: вскрыть, переписать, вернуть следы на место."
                  tone="museum"
                  objectPosition="center 44%"
                />
                <DropCap
                  letter="Ф"
                  rest="РАНЦУЗСКИЙ Cabinet Noir возник ещё при Франциске I, однако подлинной системой стал при кардинале Ришелье. Всесильный министр Людовика XIII понимал: кто владеет чужими тайнами, тот владеет чужими судьбами."
                />
                <Body>
                  При Людовике XIV служба достигла пика. «Король-Солнце» лично
                  просматривал доклады по письмам собственных министров и маршалов.
                  Никто не находился вне подозрений.
                </Body>
                <PullQuote
                  text="Дайте мне шесть строк, написанных рукой честнейшего человека, и я найду в них, за что его повесить."
                  attribution="Приписывается кардиналу Ришелье"
                />
                <Body>
                  Наполеон возродил службу, поставив во главе Жозефа Фуше. Cabinet Noir
                  читал письма маршалов, сенаторов и самой Жозефины.
                </Body>
              </div>

              {/* ── England ── */}
              <div id="section-3" className="md:px-7 border-t-2 md:border-t-0 md:border-r border-[#0e0b07] pt-7 md:pt-0 pb-7 md:pb-0">
                <SectionHead
                  kicker="Англия · Лондон"
                  headline="Secret Office: Когда Парламент Потребовал Ответа"
                  subheadline="Скандалы 1762 и 1844 годов потрясли британское общество"
                />
                <DropCap
                  letter="А"
                  rest="НГЛИЙСКИЙ «Секретный кабинет» при Почтовом ведомстве вёл историю от Кромвеля. Его учредил Джон Тёрло для слежки за перепиской роялистов и иностранных врагов республики. После Реставрации служба была сохранена монархией — новые власти быстро оценили её возможности."
                />

                <div className="flex flex-col sm:flex-row gap-5 items-start mb-2">
                  <div className="flex-1">
                    <Body>
                      Первый публичный скандал разразился в 1762 году: обнаружилось, что
                      Secret Office перехватывала письма публициста Джона Уилкса.
                      Парламент потребовал объяснений. Правительство ответило
                      уклончиво: да, читаем — но лишь по особым ордерам.
                    </Body>
                    <Body>
                      Куда более громкий скандал произошёл в 1844 году. Депутат Томас
                      Дансомб представил петицию итальянского революционера Маццини,
                      утверждавшего, что его письма передаются австрийской полиции.
                    </Body>
                  </div>
                  <ArticleImage
                    src={englandMap}
                    caption="Музейная карта показывает связь британского Secret Office с общей европейской сетью перехвата."
                    className="w-full sm:w-40 shrink-0"
                    tone="museum"
                    objectPosition="center"
                  />
                </div>

                <Body>
                  Расследование подтвердило: за 1844–1847 годы было перехвачено
                  около 372 тысяч писем. Парламент принял ряд ограничений —
                  хотя полностью службу не упразднил.
                </Body>

                <Testimony
                  label="Из показаний перед Комитетом Палаты общин, 1844 г."
                  text="«Нам были выданы особые ордера за подписью Государственного секретаря. Мы вскрывали письма, снимали копии и возвращали конверты в обращение — всё в течение двух–трёх часов. Никаких следов не оставалось.»"
                  attr="Показания сотрудника Secret Office (имя скрыто)"
                />
              </div>

              {/* ── Russia ── */}
              <div id="section-4" className="md:pl-7 border-t-2 md:border-t-0 border-[#0e0b07] pt-7 md:pt-0">
                <SectionHead kicker="Россия · Петербург" headline="Чёрный Кабинет Романовых" />
                <ArticleImage
                  src={stPetersburgWorkers}
                  caption="Стенд о составе сотрудников Санкт-Петербургского «чёрного кабинета»: письма, конверты, печати и рабочий инструментарий."
                  tone="museum"
                  objectPosition="center 40%"
                />
                <DropCap
                  letter="П"
                  rest="ЁТР ВЕЛИКИЙ создал русскую службу почтового перехвата около 1716 года, опираясь на опыт европейских путешествий. Тайная канцелярия, ведавшая политическим сыском, получила полномочия вскрывать корреспонденцию по всей России."
                />
                <Body>
                  При Екатерине II система была существенно расширена. Перехват вёлся
                  на главных почтовых трактах — в Петербурге, Москве, Риге, Киеве.
                </Body>

                <div
                  className="pl-4 py-1 my-4"
                  style={{ borderLeft: `4px solid ${INK}` }}
                >
                  <p
                    className="italic"
                    style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.97rem", lineHeight: 1.65, color: INK }}
                  >
                    Пушкин знал, что его письма читаются. Он вставлял в переписку
                    язвительные ремарки, обращённые прямо к «кабинетным читателям».
                  </p>
                </div>

                <Body>
                  Русский чёрный кабинет пережил все реформы XIX века. Особенно
                  эффективен он был во время Венского конгресса 1814–1815 годов:
                  российская сторона заранее знала позицию оппонентов.
                  Лишь Февральская революция 1917 года положила конец
                  двухвековой традиции.
                </Body>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════
              CIPHER
          ════════════════════════════════════════════ */}
          <CipherSection />

          {/* ════════════════════════════════════════════
              TIMELINE
          ════════════════════════════════════════════ */}
          <TimelineSection />

          {/* ════════════════════════════════════════════
              PERSONS
          ════════════════════════════════════════════ */}
          <PersonsSection />

          {/* ════════════════════════════════════════════
              METHODS
          ════════════════════════════════════════════ */}
          <SectionBanner left="Практика тайного дела" right="Методы работы" />

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
              Искусство Невидимого Вскрытия
            </h2>
            <p
              className="text-center italic mb-10 max-w-xl mx-auto"
              style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.95rem", lineHeight: 1.6, color: `${INK}90` }}
            >
              Шесть основных приёмов, которыми пользовались все европейские чёрные кабинеты
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-7 items-start mb-8">
              <ArticleImage
                src={toolsCase}
                caption="Музейная витрина с предметами перлюстратора: именно такие инструменты переводят абстрактное «вскрытие писем» в понятную технологию."
                tone="museum"
                tall
                objectPosition="center 42%"
                className="my-0"
              />
              <div className="pt-1">
                <SectionHead
                  kicker="Материалы"
                  headline="Тайная работа была ремеслом"
                  subheadline="За политическими решениями стояли конкретные предметы: ножи, паровые приборы, печати, журналы регистрации и копии документов."
                />
                <Body>
                  Фотографии экспозиции помогают показать, что чёрные кабинеты
                  были не только политическим институтом, но и мастерской точных
                  процедур. Ошибка в печати или неверно сложенный конверт могли
                  раскрыть всю операцию.
                </Body>
              </div>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              style={{ border: `2px solid ${INK}` }}
            >
              {methods.map((m, i) => (
                <div
                  key={i}
                  className="p-6 relative"
                  style={{
                    borderRight: [0, 1, 3, 4].includes(i) ? `1px solid ${INK}` : "none",
                    borderBottom: i < 3 ? `1px solid ${INK}` : "none",
                  }}
                >
                  {/* Background numeral */}
                  <div
                    className="absolute top-4 right-5 select-none pointer-events-none"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "3rem",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: `${INK}08`,
                    }}
                  >
                    {m.num}
                  </div>

                  {/* Foreground numeral */}
                  <div
                    className="mb-3"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: `${INK}60` }}
                  >
                    {m.num}
                  </div>

                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 900,
                      lineHeight: 1.2,
                      color: INK,
                    }}
                  >
                    {m.title}
                  </h3>

                  <div style={{ height: 1, background: `${INK}30`, marginBottom: 12 }} />

                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.74,
                      color: INK,
                      textAlign: "left",
                      textWrap: "pretty",
                    }}
                  >
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════════════════
              FINAL BANNER
          ════════════════════════════════════════════ */}
          <section id="epilogue" style={{ borderTop: `3px double ${INK}` }}>
            <div className="px-8 py-12" style={{ background: PAPER, color: INK }}>
              <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                <div
                  className="tracking-[0.4em] uppercase mb-5"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", color: `${INK}80` }}
                >
                  — Эпилог —
                </div>

                {/* Ornamental rule */}
                <div className="flex items-center gap-3 max-w-md w-full mx-auto mb-5">
                  <div className="flex-1" style={{ height: 1, background: `${INK}60` }} />
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem", color: `${INK}80` }}>✦</span>
                  <div className="flex-1" style={{ height: 1, background: `${INK}60` }} />
                </div>

                <h2
                  className="text-center mb-5"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    color: INK,
                    textWrap: "balance",
                  }}
                >
                  «Никакого Чёрного Кабинета Не Существует»
                </h2>

                <p
                  className="text-center italic max-w-xl"
                  style={{
                    fontFamily: "'IM Fell English', serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: `${INK}cc`,
                  }}
                >
                  Официальный ответ австрийского правительства на запрос
                  Венского муниципального совета, 1830 г.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              FOOTER
          ════════════════════════════════════════════ */}
          <footer
            className="px-8 py-8"
            style={{ borderTop: `3px double ${INK}` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr] gap-10">
              <div>
                <div
                  className="mb-2"
                  style={{ fontFamily: "'UnifrakturMaguntia', cursive", fontSize: "2rem", color: INK }}
                >
                  Черные кабинеты
                </div>
                <p
                  className="italic"
                  style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.88rem", lineHeight: 1.6, color: `${INK}c0` }}
                >
                  Музейный проект о тайнах европейского почтового шпионажа
                </p>
              </div>

              <div>
                <div
                  className="uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", color: `${INK}70`, borderBottom: `1px solid ${INK}30`, paddingBottom: 8 }}
                >
                  Источники
                </div>
                <ul
                  className="space-y-2"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.65,
                    color: `${INK}90`,
                  }}
                >
                  <li>
                    Змозик В. С. <em>«Чёрные кабинеты»: история российской перлюстрации. XVIII — начало XX века.</em> М.: Новое литературное обозрение, 2015.
                  </li>
                  <li>
                    Соболева Т. А. <em>История шифровального дела в России.</em> М.: ОЛМА-ПРЕСС, 2002.
                  </li>
                  <li>
                    Токарева Н. Н. Об истории криптографии в России // <em>Прикладная дискретная математика.</em> 2012.
                  </li>
                  <li>
                    Бабаш А. В., Шанкин Г. П. <em>История криптографии. Часть I.</em> М.: Гелиос, 2002.
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
