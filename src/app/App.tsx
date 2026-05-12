import React from "react";
import { NewspaperHeader } from "./components/NewspaperHeader";
import { DropCap } from "./components/DropCap";
import { Divider } from "./components/Divider";
import { PullQuote } from "./components/PullQuote";
import { ArticleImage } from "./components/ArticleImage";
import { SectionHead } from "./components/SectionHead";
import { TimelineSection } from "./components/TimelineSection";
import { PersonsSection } from "./components/PersonCard";
import { CipherSection } from "./components/CipherSection";

const INK = "#0e0b07";
const PAPER = "#ebe0c9";

// ── Images ─────────────────────────────────────────────────────
const IMG_CANDLE       = "https://images.unsplash.com/photo-1778078983791-dd2c49698c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
const IMG_SEAL         = "https://images.unsplash.com/photo-1641477176034-1a3e10c343a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
const IMG_VERSAILLES   = "https://images.unsplash.com/photo-1760543329953-db4eacb70108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
const IMG_CIPHER_BG    = "https://images.unsplash.com/photo-1716840550677-31616e88f51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
const IMG_LIBRARY      = "https://images.unsplash.com/photo-1758730010177-1711515b7552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
const IMG_VIENNA       = "https://images.unsplash.com/photo-1728839869046-3e603270b5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";

// ── Reusable text body ──────────────────────────────────────────
function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-justify mb-4 ${className}`}
      style={{
        fontFamily: "'Libre Baskerville', serif",
        fontSize: "0.9rem",
        lineHeight: 1.82,
        color: INK,
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
      className="flex items-center justify-between px-8 py-2.5"
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
    backgroundImage: `
      repeating-linear-gradient(
        transparent 0px,
        transparent 27px,
        rgba(14,11,7,0.028) 27px,
        rgba(14,11,7,0.028) 28px
      )`,
    color: INK,
    minHeight: "100vh",
  };

  const colDivider: React.CSSProperties = {
    borderRight: `1px solid ${INK}`,
  };

  return (
    <div style={paperStyle}>
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
          <section className="px-8 py-8 text-center" style={{ borderBottom: `2px solid ${INK}` }}>
            <div
              className="tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", color: `${INK}80` }}
            >
              — Специальное историческое расследование —
            </div>

            <h1
              className="mx-auto mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: INK,
                maxWidth: "820px",
              }}
            >
              Тайные Кабинеты, что Читали Письма
              Королей и Министров
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
              История европейских служб перехвата корреспонденции — от Ришелье до Меттерниха —
              и людей, превративших чужие тайны в оружие власти
            </p>
          </section>

          {/* ════════════════════════════════════════════
              SECTION I · HISTORY + VIENNA + CHAMBERS
          ════════════════════════════════════════════ */}
          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr_1fr] gap-0">

              {/* ── Col 1: История ── */}
              <div className="md:pr-7 pb-7 md:pb-0" style={{ ...colDivider }}>
                <SectionHead kicker="Что такое" headline="Чёрный Кабинет?" />
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
                  src={IMG_SEAL}
                  caption="Восковая печать — и главное препятствие, и главный инструмент чёрных кабинетов. Европа, ок. 1740 г."
                />
              </div>

              {/* ── Col 2: Вена ── */}
              <div id="section-1" className="md:px-7 border-t-2 md:border-t-0 border-[#0e0b07] pt-7 md:pt-0 pb-7 md:pb-0" style={{ borderRight: `1px solid ${INK}` }}>
                <ArticleImage
                  src={IMG_VIENNA}
                  caption="Венский почтамт — здесь располагалась Geheime Kabinets-Kanzlei, образцовая служба тайного перехвата, 1703–1848 гг."
                  tall
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
                        className="text-justify"
                        style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.82rem", lineHeight: 1.7, color: INK }}
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
              <div id="section-2" className="md:pr-7 pb-7 md:pb-0" style={colDivider}>
                <SectionHead kicker="Франция · Париж" headline="Cabinet Noir: от Ришелье до Наполеона" />
                <ArticleImage
                  src={IMG_VERSAILLES}
                  caption="Версальский дворец — политический центр Европы и главный источник перехваченных тайн для Cabinet Noir."
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
              <div id="section-3" className="md:px-7 border-t-2 md:border-t-0 border-[#0e0b07] pt-7 md:pt-0 pb-7 md:pb-0" style={{ borderRight: `1px solid ${INK}` }}>
                <SectionHead
                  kicker="Англия · Лондон"
                  headline="Secret Office: Когда Парламент Потребовал Ответа"
                  subheadline="Скандалы 1762 и 1844 годов потрясли британское общество"
                />
                <DropCap
                  letter="А"
                  rest="НГЛИЙСКИЙ «Секретный кабинет» при Почтовом ведомстве вёл историю от Кромвеля. Его учредил Джон Тёрло для слежки за перепиской роялистов и иностранных врагов республики. После Реставрации служба была сохранена монархией — новые власти быстро оценили её возможности."
                />

                <div className="flex gap-5 items-start mb-2">
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
                    src={IMG_LIBRARY}
                    caption="Архивы Secret Office хранили копии депеш за 200 лет."
                    className="w-32 shrink-0"
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
                  src={IMG_CANDLE}
                  caption="Переписчики работали при свечах. Одно письмо копировалось за три–четыре минуты."
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
                    className="text-justify leading-relaxed"
                    style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.87rem", lineHeight: 1.8, color: INK }}
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
          <section style={{ borderTop: `3px double ${INK}` }}>
            <div className="relative overflow-hidden" style={{ height: "360px" }}>
              <img
                src={IMG_CIPHER_BG}
                alt="Тайный документ"
                className="w-full h-full object-cover"
                style={{
                  filter: "grayscale(85%) sepia(30%) contrast(1.2) brightness(0.7)",
                  objectPosition: "center 30%",
                }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center px-8"
                style={{ background: "linear-gradient(to bottom, rgba(14,11,7,0.4) 0%, rgba(14,11,7,0.88) 100%)", color: PAPER }}
              >
                <div
                  className="tracking-[0.4em] uppercase mb-5"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", opacity: 0.7 }}
                >
                  — Эпилог —
                </div>

                {/* Ornamental rule */}
                <div className="flex items-center gap-3 max-w-md w-full mx-auto mb-5">
                  <div className="flex-1" style={{ height: 1, background: `${PAPER}50` }} />
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem", color: `${PAPER}60` }}>✦</span>
                  <div className="flex-1" style={{ height: 1, background: `${PAPER}50` }} />
                </div>

                <h2
                  className="text-center mb-5"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    textShadow: "0 2px 16px rgba(0,0,0,0.6)",
                    color: PAPER,
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
                    textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                    color: `${PAPER}cc`,
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div>
                <div
                  className="mb-2"
                  style={{ fontFamily: "'UnifrakturMaguntia', cursive", fontSize: "2rem", color: INK }}
                >
                  Чёрный Кабинетъ
                </div>
                <p
                  className="italic"
                  style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.88rem", lineHeight: 1.6, color: `${INK}c0` }}
                >
                  Историческое издание о тайнах европейского почтового шпионажа
                </p>
              </div>

              <div>
                <div
                  className="uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", color: `${INK}70`, borderBottom: `1px solid ${INK}30`, paddingBottom: 8 }}
                >
                  Источники
                </div>
                <ul style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.72rem", lineHeight: 1.9, color: `${INK}90` }}>
                  <li>Kahn D. <em>The Codebreakers</em>, 1967</li>
                  <li>Andrew C. <em>The Secret World</em>, 2018</li>
                  <li>Yardley H. <em>The American Black Chamber</em>, 1931</li>
                  <li>Ellis B. <em>Post Office Espionage</em>, 2001</li>
                </ul>
              </div>

              <div className="md:text-right">
                <div
                  className="uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", color: `${INK}70`, borderBottom: `1px solid ${INK}30`, paddingBottom: 8 }}
                >
                  Примечание
                </div>
                <p
                  style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.72rem", lineHeight: 1.8, color: `${INK}90` }}
                >
                  Все сведения основаны на открытых исторических
                  источниках. Материал носит образовательный характер.
                  Любые совпадения с современными практиками
                  случайны и непреднамеренны.
                </p>
              </div>
            </div>

            <Divider stars />

            <p
              className="text-center"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: `${INK}60`,
              }}
            >
              «Тайна переписки нарушается лишь в силу государственной необходимости» &nbsp;—&nbsp; Меттерних
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}