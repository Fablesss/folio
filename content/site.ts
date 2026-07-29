// ============================================================================
// Bilingual site content (RU / EN).
// Both trees share the same shape (enforced by SiteContent) so the language
// toggle can swap them 1:1. Replace anything in «angle quotes» or marked TODO
// with your real data — everything else is ready copy for a low-code /
// HR-automation engineering profile.
// ============================================================================

import { bindHangingWordsDeep } from "@/content/typography";

export type Lang = "ru" | "en";

export interface ProjectItem {
  title: string;
  description: string;
  role: string;
  stack: string[];
  result?: string;
  link?: { label: string; href: string };
  /** Screenshot shown at the top of the card. Put files in /public/projects/. */
  image?: { src: string; alt: string };
  /** Renders the card two columns wide on large screens — for projects with a screenshot. */
  featured?: boolean;
}

/** A photo of a person or a place — files live in /public/photos/. */
export interface Photo {
  src: string;
  alt: string;
  /** CSS object-position: where the subject sits when a card crops the photo. */
  focus?: string;
}

export interface MediaItem {
  caption: string;
  link?: { label: string; href: string };
  photos: Photo[];
}

export interface SiteContent {
  meta: { title: string; description: string };
  nav: {
    about: string;
    experience: string;
    teaching: string;
    media: string;
    projects: string;
    skills: string;
    education: string;
    hobbies: string;
    contact: string;
  };
  hero: {
    availability: string;
    name: string;
    role: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    portrait: Photo;
    highlights: { value: string; label: string }[];
  };
  about: {
    heading: string;
    lead: string;
    paragraphs: string[];
    portrait: Photo;
  };
  experience: {
    heading: string;
    items: {
      company: string;
      /** Company mark in /public/logos/. Decorative: the company name is next to it. */
      logo?: string;
      role: string;
      period: string;
      location?: string;
      bullets: string[];
      tags: string[];
    }[];
  };
  teaching: {
    heading: string;
    subheading: string;
    items: { org: string; course: string; note?: string }[];
  };
  media: {
    heading: string;
    subheading: string;
    items: MediaItem[];
    note: string;
  };
  projects: {
    heading: string;
    subheading: string;
    groups: { title: string; items: ProjectItem[] }[];
  };
  skills: {
    heading: string;
    subheading: string;
    groups: { title: string; items: string[] }[];
  };
  education: {
    heading: string;
    items: { org: string; program: string; period: string; note?: string }[];
  };
  hobbies: {
    heading: string;
    subheading: string;
    items: { title: string; text: string; images: Photo[] }[];
  };
  contact: {
    heading: string;
    text: string;
    email: string;
    links: { label: string; href: string }[];
    note: string;
  };
  footer: { built: string };
}

// ---------------------------------------------------------------------------
// RUSSIAN
// ---------------------------------------------------------------------------
const ru: SiteContent = {
  meta: {
    title: "Denis Mokrinsky — Low-Code Engineer · Бизнес- и системный аналитик",
    description:
      "Собираю рабочую автоматизацию из бизнес-процессов: low-code/no-code, JavaScript, интеграции по REST/webhooks. Мост между бизнесом и разработкой.",
  },
  nav: {
    about: "Обо мне",
    experience: "Опыт",
    teaching: "Преподавание",
    media: "Медиа",
    projects: "Проекты",
    skills: "Навыки",
    education: "Образование",
    hobbies: "Хобби",
    contact: "Контакты",
  },
  hero: {
    availability: "Открыт к предложениям · готов к релокации",
    name: "Denis Mokrinsky",
    role: "Low-Code Engineer · Бизнес- и системный аналитик",
    tagline:
      "Решения полного цикла — от бизнес-аналитики до разработки и внедрения. Анализирую процесс, проектирую модель данных и собираю на low-code продукты, которые запускаю в работу и передаю команде.",
    ctaPrimary: "Связаться",
    ctaSecondary: "Смотреть проекты",
    portrait: {
      src: "/photos/portrait-hero.jpg",
      alt: "Денис Мокринский в студии",
    },
    highlights: [
      { value: "CTO", label: "Зерокодер — компания про no-code/low-code" },
      { value: "Fintech", label: "Salmon (FHL) — low-code с нуля" },
      { value: "HR-tech", label: "автоматизация процессов для HR" },
      { value: "Преподаю", label: "Bubble.io и n8n — Иннополис, Нетология" },
    ],
  },
  about: {
    heading: "Обо мне",
    lead: "Я — мост между бизнесом и автоматизацией: собираю процесс из слов заказчика и довожу его до работающей системы.",
    paragraphs: [
      "Как аналитик я умею разложить любой ручной процесс на триггеры, шаги и данные, а как разработчик — тут же собрать его в работающий workflow. Это моя основная сила: я не передаю задачу «через стену», а довожу до внедрения в бизнес-процессы.",
      "Low-code — это не подработка, а мой основной домен: я был CTO Зерокодера и руководил командой low-code разработки, то есть отвечал не только за свои решения, но и за стандарты, ревью и передачу экспертизы другим. В финтехе (Salmon / FHL) я приходил в low-code команду на самом старте компании — там пришлось самому определять, как выглядит «хорошо».",
      "В автоматизацию я пришёл со стороны бизнеса: учился на логистике (красный диплом РАНХиГС), управлял международными проектами в Nestlé. Поэтому язык бизнес-заказчика для меня родной, а перевести его задачу в работающую систему — то, что я делаю естественно.",
    ],
    portrait: {
      src: "/photos/portrait-about.jpg",
      alt: "Денис Мокринский",
    },
  },
  experience: {
    heading: "Опыт",
    items: [
      {
        company: "Зерокодер",
        logo: "/logos/zerocoder.png",
        role: "Директор департамента внутренней разработки",
        period: "июль 2025 — настоящее время",
        location: "EdTech · внутренние продукты",
        bullets: [
          "Строю внутреннее суперприложение компании — единую среду для HR, продаж и поддержки. 250 пользователей.",
          "Автоматизировал первую линию поддержки: боты обслуживают 1 500 студентов единовременно.",
          "Запустил мониторинг качества отдела продаж: система ежедневно обрабатывает около 40 часов записей звонков.",
          "Сделал HR-инструмент учёта и оплаты работ сотрудников: модель данных, роли, прозрачный процесс начислений.",
        ],
        tags: ["Low-code", "HR-tech", "Автоматизация процессов", "Внутренние продукты"],
      },
      {
        company: "Независимый разработчик",
        role: "Собственная студия разработки",
        period: "апрель 2023 — июль 2025",
        location: "Low-code / No-code",
        bullets: [
          "Разрабатывал продукты и автоматизации для задач бизнеса на low-code/no-code.",
          "Параллельно создавал собственные инструменты разработчика (см. раздел «Проекты»).",
        ],
        tags: ["Low-code", "Предпринимательство"],
      },
      {
        company: "Salmon (FHL)",
        logo: "/logos/salmon.png",
        role: "Low-code разработчик",
        period: "декабрь 2022 — апрель 2023",
        location: "Финтех · POS-кредитование, Филиппины",
        bullets: [
          "Входил в команду low-code разработки на самом старте компании: строил внутренние и клиентские продукты в условиях неопределённости и высокой скорости.",
          "Собрал B2B-админку аналитики кредитного портфеля: интерфейс на Bubble поверх PostgreSQL через слой Hasura + GraphQL.",
          "Интегрировал внешние системы по API: Auth0 (SSO) и скоринговый сервис для мобильного приложения по рассрочке.",
        ],
        tags: ["Fintech", "Bubble", "GraphQL", "Integrations"],
      },
      {
        company: "Стартап-студия",
        role: "CTO",
        period: "февраль — декабрь 2022",
        location: "Рынок США",
        bullets: [
          "Технический директор стартап-студии, ориентированной на американский рынок.",
        ],
        tags: ["CTO", "US-рынок"],
      },
      {
        company: "Зерокодер",
        logo: "/logos/zerocoder.png",
        role: "CTO",
        period: "июнь 2020 — февраль 2022",
        location: "EdTech · no-code/low-code",
        bullets: [
          "Технический руководитель компании, специализирующейся на no-code/low-code.",
          "Фокус — автоматизация бизнес-процессов: построил систему сквозной аналитики на Make, связав данные о клиенте из разных источников.",
          "Разрабатывал внутренние инструменты для бизнес-подразделений (портрет клиента для отдела продаж на Bubble.io + Directual).",
          "Руководил командой low-code разработки: процессы, ревью, обучение, передача экспертизы.",
        ],
        tags: ["CTO", "Team lead", "Make", "Directual", "Автоматизация процессов"],
      },
      {
        company: "Онлайн-образовательные проекты",
        role: "Технический специалист → CTO",
        period: "2018–2020",
        location: "EdTech · включая МИИН",
        bullets: [
          "Первая роль в IT после Nestlé: примерно за год вырос от технического специалиста до CTO, прокачав разработку и no-code.",
          "Отвечал за техническую часть онлайн-образовательных проектов (включая МИИН — институт интегративной нутрициологии), собирал и вёл команду.",
        ],
        tags: ["CTO", "EdTech", "No-code"],
      },
      {
        company: "Nestlé",
        logo: "/logos/nestle.png",
        role: "Demand & Supply Planner → Inter Market Supply Projects Specialist",
        period: "декабрь 2016 — август 2018",
        location: "FMCG · Москва",
        bullets: [
          "Управлял международными supply-chain проектами: адаптация рецептур под новые рынки (халяль, ОАЭ), запуск продаж на зарубежных площадках.",
          "Здесь начал автоматизировать: сам выучил VBA и написал скрипт, экономивший около часа в день каждому из 14 коллег. С этого начался мой путь в разработку.",
        ],
        tags: ["Supply chain", "VBA", "Международные проекты"],
      },
    ],
  },
  teaching: {
    heading: "Преподавание",
    subheading:
      "Преподаю то, что делаю руками. В том числе n8n и Bubble — инструменты, на которых собираю продакшн-автоматизацию.",
    items: [
      {
        org: "Университет Иннополис",
        course: "Bubble.io",
        note: "курс на английском языке",
      },
      {
        org: "Университет Иннополис",
        course: "Вайбкодинг",
        note: "магистратура, программа цифрового предпринимательства",
      },
      {
        org: "Университет Зерокодер",
        course: "n8n",
        note: "автоматизация процессов",
      },
      { org: "Нетология", course: "Bubble.io" },
    ],
  },
  media: {
    heading: "Медиа и выступления",
    subheading:
      "Меня зовут объяснять ИИ, нейросети и low-code — на федеральное ТВ, в подкасты и на отраслевые площадки. Навык переводить сложное на человеческий язык я тренирую публично.",
    items: [
      {
        photos: [
          {
            src: "/photos/media-rossiya24.jpg",
            alt: "Кадр эфира «России 24»: интервью в студии, в титре — «Денис Мокринский»",
            focus: "70% 50%",
          },
        ],
        caption:
          "«Россия 24», «Специальный репортаж» — выпуск «Бот им судья», март 2026 года.",
        link: { label: "Смотреть выпуск", href: "https://smotrim.ru/video/4001442" },
      },
      {
        photos: [
          {
            src: "/photos/media-rtvi-studio.jpg",
            alt: "Съёмочная студия РТВИ: я и ведущая на площадке программы News/Talk",
            focus: "50% 45%",
          },
          {
            src: "/photos/media-rtvi-onair.jpg",
            alt: "Мониторы аппаратной: я в эфире, в титре — должность и компания",
            focus: "50% 40%",
          },
        ],
        caption: "РТВИ, студия News/Talk — эфир об ИИ, январь 2026 года.",
        link: {
          label: "Смотреть сюжет",
          href: "https://youtu.be/-NEyKGLS_oo?si=nFURRj0BnnpKLq0R&t=2012",
        },
      },
      {
        photos: [
          {
            src: "/photos/media-edtech-kp.jpg",
            alt: "Интервью на камеру у пресс-волла премии Edtech",
          },
        ],
        caption:
          "Премия Edtech медиагруппы «Комсомольская правда» — интервью на площадке, февраль 2026 года.",
      },
      {
        photos: [
          {
            src: "/photos/media-on-set.jpg",
            alt: "Съёмочная площадка: камеры, свет и разговор за столом",
          },
        ],
        caption: "На съёмочной площадке — запись сюжета для Первого канала.",
      },
    ],
    note: "Ещё: комментарии для «Коммерсанта» и «Коммерсантъ FM», подкасты «Просто об ИТ» и «Телеграм Mini Apps».",
  },
  projects: {
    heading: "Проекты и автоматизации",
    subheading:
      "Кейсы, где я сам довёл идею до работающего инструмента — от разбора процесса до задеплоенной автоматизации.",
    groups: [
      {
        title: "Рабочие проекты",
        items: [
      {
        title: "Учёт и оплата работ сотрудников",
        description:
          "Система для HR и руководителей: справочники отделов, исполнителей, ставок и типов работ. Руководитель фиксирует факт выполненной работы, HR видит начисления и проводит оплату. Спроектировал модель данных и роли, собрав разрозненный ручной учёт в один прозрачный процесс.",
        role: "HR-tech · Зерокодер",
        stack: ["Low-code", "Модель данных", "Ролевой доступ"],
        result: "Часть внутреннего суперприложения компании — 250 пользователей.",
      },
      {
        title: "Распределение и балансировка нагрузки",
        description:
          "Внутренний инструмент: входящие заявки автоматически распределяются между сотрудниками с учётом текущей загрузки. Убрал ручную маршрутизацию и перекос, когда одни перегружены, а другие простаивают.",
        role: "CTO · Зерокодер",
        stack: ["Low-code", "Правила маршрутизации", "REST API"],
        result: "В составе того же внутреннего суперприложения — 250 пользователей.",
      },
      {
        title: "Автоматизация клиентской поддержки",
        description:
          "Квалификация обращений первой линии и маршрутизация по отделам, автоответы на типовые вопросы и оценка качества работы колл-центра через транскрибацию всех звонков.",
        role: "CTO · Зерокодер",
        stack: ["Low-code", "Транскрибация звонков", "REST API"],
        result: "Боты первой линии обслуживают 1 500 студентов единовременно; мониторинг качества ежедневно обрабатывает около 40 часов записей звонков.",
      },
      {
        title: "B2B-админка: аналитика кредитного портфеля",
        description:
          "Панель для партнёрских розничных сетей: аналитика кредитов, выданных в торговых точках, и посткредитное обслуживание. Собрал интерфейс на Bubble и поднял над готовым PostgreSQL слой Hasura + GraphQL, связав фронт и данные через API.",
        role: "Low-code разработчик · Salmon (FHL)",
        stack: ["Bubble", "PostgreSQL", "Hasura", "GraphQL", "REST API", "Auth0"],
      },
      {
        title: "Мобильное приложение: платежи по рассрочке и скоринг",
        description:
          "Клиентское приложение для внесения платежей по рассрочке: интерфейс на Bubble внутри мобильной оболочки. Интегрировал внешний скоринговый сервис — клиент проходил авторизацию у провайдера, а в продукт возвращался скоринговый балл.",
        role: "Low-code разработчик · Salmon (FHL)",
        stack: ["Bubble", "Мобильная оболочка", "REST API", "OAuth", "Скоринг-провайдер"],
      },
      {
        title: "Система сквозной аналитики",
        description:
          "Свёл данные о касаниях клиента с компанией из разных источников в один поток на Make. Бизнес получил путь клиента целиком, а не разрозненными кусками по каналам.",
        role: "CTO · Зерокодер",
        stack: ["Make", "REST API", "Webhooks", "Интеграция данных"],
      },
      {
        title: "Внутренний инструмент для отдела продаж",
        description:
          "Инструмент, собирающий портрет клиента по всем точкам касания с компанией: интерфейс на Bubble.io, данные и логика — на Directual. Продажи получили самостоятельный доступ к данным без заявок в разработку.",
        role: "CTO · Зерокодер",
        stack: ["Bubble.io", "Directual", "REST API", "Модель данных"],
      },
        ],
      },
      {
        title: "Личные проекты",
        items: [
          {
            title: "Databaser — менеджер баз данных",
            description:
              "Десктопное приложение для работы с базами: SQL-редактор с автокомплитом по схеме, виртуализированная сетка результатов, визуализация плана запроса графом и SSH-туннели. Поддерживает PostgreSQL, MySQL и SQLite. Архитектуру проектировал сам, реализацию вёл с AI.",
            role: "Личный проект · AI-assisted",
            stack: [
              "Tauri 2 (Rust)",
              "React 19 + TypeScript",
              "sqlx",
              "CodeMirror 6",
              "React Flow",
              "russh (SSH)",
            ],
            image: {
              src: "/projects/databaser.png",
              alt: "Интерфейс Databaser: вкладки подключений, сетка данных и граф схемы базы",
            },
            featured: true,
          },
          {
            title: "IDE для агентной разработки",
            description:
              "Среда для создания и запуска AI-агентов. Архитектуру проектировал сам, реализацию вёл с AI.",
            role: "Личный проект · AI-assisted",
            stack: ["AI-агенты", "AI-assisted"],
            image: {
              src: "/projects/ide.png",
              alt: "Интерфейс IDE: список проектов, чат с агентом, дерево файлов, контроль версий и встроенный браузер",
            },
            featured: true,
          },
          {
            title: "SSH-клиент с менеджером подключений",
            description:
              "Десктопный клиент для работы с удалёнными серверами: хранит доступы, держит подключения в одном месте и открывает терминальные сессии. Собственный аналог Termius.",
            role: "Личный проект · AI-assisted",
            stack: ["SSH", "Менеджер подключений", "Десктоп"],
          },
          {
            title: "Прокси для нейросетей",
            description:
              "Единая точка доступа к нейросетям: наружу отдаёт OpenAI-совместимый API, поэтому любой клиент или low-code сценарий, умеющий работать с OpenAI, подключается без переписывания интеграции.",
            role: "Личный проект · AI-assisted",
            stack: ["OpenAI-совместимый API"],
            result: "Больше 1 000 000 запросов прошло через прокси.",
          },
        ],
      },
    ],
  },
  skills: {
    heading: "Навыки",
    subheading: "Сгруппированы по задачам: от разбора процесса до интеграций и деплоя.",
    groups: [
      {
        title: "Low-code / No-code",
        items: [
          "Make",
          "n8n",
          "Zapier",
          "Power Automate",
          "Bubble.io",
          "Directual",
          "WeWeb",
          "Tilda",
        ],
      },
      {
        title: "Интеграции",
        items: ["REST API", "GraphQL", "Webhooks", "JSON", "OAuth / Auth0"],
      },
      {
        title: "Данные",
        items: [
          "Airtable",
          "NocoDB",
          "PostgreSQL",
          "MySQL",
          "SQL",
          "Hasura",
          "Моделирование БД",
        ],
      },
      {
        title: "Код и AI-разработка",
        items: [
          "AI-assisted разработка",
          "JavaScript (скрипты, трансформация данных)",
          "Node.js",
          "Python",
          "Git (GitHub / GitLab)",
          "Проектирование архитектуры",
        ],
      },
      {
        title: "Инфраструктура и мониторинг",
        items: ["Docker", "Dokploy", "Self-hosting", "Grafana", "Uptime Kuma"],
      },
      {
        title: "Аналитика и процессы",
        items: ["Бизнес-анализ", "Системный анализ", "Сквозная аналитика", "As-is / to-be"],
      },
      {
        title: "Продукт и домен",
        items: ["HR-tech", "Внутренние инструменты", "UX/UI", "Финтех", "POS-кредитование"],
      },
    ],
  },
  education: {
    heading: "Образование",
    items: [
      {
        org: "РАНХиГС · Высшая школа корпоративного управления",
        program: "Бакалавриат — Логистика",
        period: "2012–2016",
        note: "красный диплом",
      },
      {
        org: "Лицей информационных технологий № 1533, Москва",
        program: "Прикладная экономика · 8–11 классы",
        period: "2008–2012",
        note: "параллельно — веб-разработка и веб-дизайн",
      },
    ],
  },
  hobbies: {
    heading: "Хобби",
    subheading: "Чем занят, когда не собираю автоматизацию.",
    items: [
      {
        title: "Видео-продакшн",
        text: "Снимаю и монтирую сам: свет, звук, камера, финальная сборка. Отсюда привычка объяснять сложное коротко и наглядно — в постах, демо продуктов и обучающих материалах.",
        images: [
          {
            src: "/photos/hobby-video.jpg",
            alt: "Монтаж видео за двумя мониторами в домашней студии",
            focus: "60% 50%",
          },
          {
            src: "/photos/photo_2025-04-01_16-11-09.jpg",
            alt: "Съёмка на камеру — процесс видео-продакшна",
          },
        ],
      },
      {
        title: "Плавание и сапборд",
        text: "Вода — способ выключить голову. Летом это сапборд на подмосковных озёрах, круглый год — бассейн.",
        images: [
          {
            src: "/photos/photo_2024-07-14_10-04-23.jpg",
            alt: "Я на сапборде посреди озера с веслом в руках",
            focus: "50% 0%",
          },
        ],
      },
      {
        title: "Настольный теннис",
        text: "Быстрая игра, где всё решают реакция и точность. Лучший способ размяться между рабочими блоками.",
        images: [
          {
            src: "/photos/hobby-tabletennis.jpg",
            alt: "Игра в настольный теннис на уличном столе",
            focus: "35% 40%",
          },
        ],
      },
      {
        title: "Сквош",
        text: "Динамичный спорт, в котором я впервые за полгода регулярных тренировок почувствовал прогресс.",
        images: [
          {
            src: "/photos/photo_2024-06-10_12-33-44.jpg",
            alt: "Сквош-корте после игры",
          },
        ],
      },
    ],
  },
  contact: {
    heading: "Связаться",
    text: "Открыт к ролям в low-code разработке и автоматизации процессов. Отвечаю быстро.",
    email: "mokrinsky.denis@gmail.com",
    links: [
      { label: "Telegram", href: "https://t.me/den_mok" },
      { label: "Канал «Ден про вайбкодинг»", href: "https://t.me/denonline" },
    ],
    note: "Английский — преподаю на нём курс в Университете Иннополис · готов к релокации (Кипр / Грузия / Сербия / Казахстан) или удалённо.",
  },
  footer: {
    built: "Собрано на Next.js + Tailwind. Дизайн и код — мои.",
  },
};

// ---------------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------------
const en: SiteContent = {
  meta: {
    title: "Denis Mokrinsky — Low-Code Engineer · Business & Systems Analyst",
    description:
      "I turn business processes into deployed automation: low-code/no-code, JavaScript, REST/webhook integrations. The bridge between business and engineering.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    teaching: "Teaching",
    media: "Media",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    hobbies: "Hobbies",
    contact: "Contact",
  },
  hero: {
    availability: "Open to opportunities · ready to relocate",
    name: "Denis Mokrinsky",
    role: "Low-Code Engineer · Business & Systems Analyst",
    tagline:
      "Full-cycle solutions — from business analysis through development to rollout. I analyse the process, design the data model and build products on low-code that I put into production and hand over to the team.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "See projects",
    portrait: {
      src: "/photos/portrait-hero.jpg",
      alt: "Denis Mokrinsky in the studio",
    },
    highlights: [
      { value: "CTO", label: "Zerocoder — a no-code/low-code company" },
      { value: "Fintech", label: "Salmon (FHL) — low-code from day one" },
      { value: "HR-tech", label: "automating processes for HR" },
      { value: "I teach", label: "Bubble.io & n8n — Innopolis, Netology" },
    ],
  },
  about: {
    heading: "About",
    lead: "I’m the bridge between business and automation: I turn a stakeholder’s words into a process, and the process into a working system.",
    paragraphs: [
      "As an analyst I can break any manual process down into triggers, steps and data — and as an engineer I can immediately build it into a working workflow. That’s my core strength: I don’t throw tasks over the wall, I take them all the way into the business process.",
      "Low-code isn’t a side skill for me, it’s my core domain: I was CTO of Zerocoder and led a low-code engineering team, so I owned not just my own solutions but the standards, the reviews and the handover of expertise. In fintech (Salmon / FHL) I joined the low-code team in the company’s earliest days, where you have to define what “good” looks like yourself.",
      "I came into automation from the business side: I studied logistics (BSc with honours from RANEPA) and ran international projects at Nestlé. So the language of a business stakeholder is native to me, and turning their problem into a working system is something I do naturally.",
    ],
    portrait: {
      src: "/photos/portrait-about.jpg",
      alt: "Denis Mokrinsky",
    },
  },
  experience: {
    heading: "Experience",
    items: [
      {
        company: "Zerocoder",
        logo: "/logos/zerocoder.png",
        role: "Head of Internal Development",
        period: "Jul 2025 — present",
        location: "EdTech · internal products",
        bullets: [
          "Building the company’s internal super-app — a single environment for HR, sales and support. 250 users.",
          "Automated first-line support: bots serve 1,500 students concurrently.",
          "Launched sales-team quality monitoring: the system processes around 40 hours of call recordings daily.",
          "Built an HR tool for tracking and paying out employee work: data model, roles, a transparent payout process.",
        ],
        tags: ["Low-code", "HR-tech", "Process automation", "Internal products"],
      },
      {
        company: "Independent",
        role: "Own development studio",
        period: "Apr 2023 — Jul 2025",
        location: "Low-code / No-code",
        bullets: [
          "Built products and automations for business needs on low-code/no-code.",
          "In parallel, created my own developer tools (see the Projects section).",
        ],
        tags: ["Low-code", "Entrepreneurship"],
      },
      {
        company: "Salmon (FHL)",
        logo: "/logos/salmon.png",
        role: "Low-code engineer",
        period: "Dec 2022 — Apr 2023",
        location: "Fintech · POS lending, Philippines",
        bullets: [
          "Part of the low-code engineering team from day one: built internal and customer-facing products at speed and under real ambiguity.",
          "Built a B2B admin panel for loan-portfolio analytics: a Bubble interface on top of PostgreSQL via a Hasura + GraphQL layer.",
          "Integrated external systems over APIs: Auth0 (SSO) and a scoring provider for the instalment-payments mobile app.",
        ],
        tags: ["Fintech", "Bubble", "GraphQL", "Integrations"],
      },
      {
        company: "Startup studio",
        role: "CTO",
        period: "Feb — Dec 2022",
        location: "US market",
        bullets: [
          "CTO of a startup studio focused on the US market.",
        ],
        tags: ["CTO", "US market"],
      },
      {
        company: "Zerocoder",
        logo: "/logos/zerocoder.png",
        role: "CTO",
        period: "Jun 2020 — Feb 2022",
        location: "EdTech · no-code/low-code",
        bullets: [
          "CTO of a company specialising in no-code/low-code.",
          "Focus: business-process automation — built an end-to-end analytics system on Make, joining customer data from scattered sources.",
          "Built internal tools for business departments (a touchpoint-based customer profile for the sales team on Bubble.io + Directual).",
          "Led the low-code engineering team: processes, reviews, training, handover of expertise.",
        ],
        tags: ["CTO", "Team lead", "Make", "Directual", "Process automation"],
      },
      {
        company: "Online-education projects",
        role: "Technical specialist → CTO",
        period: "2018–2020",
        location: "EdTech · incl. MIIN",
        bullets: [
          "First role in tech after Nestlé: grew from technical specialist to CTO in about a year, building up development and no-code skills.",
          "Owned the technical side of online-education projects (including MIIN, an institute of integrative nutrition); hired and led the team.",
        ],
        tags: ["CTO", "EdTech", "No-code"],
      },
      {
        company: "Nestlé",
        logo: "/logos/nestle.png",
        role: "Demand & Supply Planner → Inter Market Supply Projects Specialist",
        period: "Dec 2016 — Aug 2018",
        location: "FMCG · Moscow",
        bullets: [
          "Ran international supply-chain projects: adapting recipes to new markets (halal, UAE), launching sales on overseas marketplaces.",
          "This is where I started automating: I taught myself VBA and wrote a script that saved about an hour a day for each of 14 colleagues. That’s how my path into development began.",
        ],
        tags: ["Supply chain", "VBA", "International projects"],
      },
    ],
  },
  teaching: {
    heading: "Teaching",
    subheading:
      "I teach what I build. That includes n8n and Bubble — the tools I ship production automation with.",
    items: [
      {
        org: "Innopolis University",
        course: "Bubble.io",
        note: "course taught in English",
      },
      {
        org: "Innopolis University",
        course: "Vibecoding",
        note: "master’s programme in digital entrepreneurship",
      },
      {
        org: "Zerocoder University",
        course: "n8n",
        note: "process automation",
      },
      { org: "Netology", course: "Bubble.io" },
    ],
  },
  media: {
    heading: "Media & speaking",
    subheading:
      "I get invited to explain AI, neural networks and low-code — on national TV, in podcasts and at industry events. Translating complex things into plain language is a skill I practise in public.",
    items: [
      {
        photos: [
          {
            src: "/photos/media-rossiya24.jpg",
            alt: "A frame from the Rossiya 24 broadcast: a studio interview captioned “Denis Mokrinsky”",
            focus: "70% 50%",
          },
        ],
        caption:
          "Rossiya 24 (national TV), “Special Report” — the episode “Bot Be the Judge”, March 2026.",
        link: { label: "Watch the episode", href: "https://smotrim.ru/video/4001442" },
      },
      {
        photos: [
          {
            src: "/photos/media-rtvi-studio.jpg",
            alt: "The RTVI studio floor: me and the host on the News/Talk set",
            focus: "50% 45%",
          },
          {
            src: "/photos/media-rtvi-onair.jpg",
            alt: "Gallery monitors showing me on air with a name caption",
            focus: "50% 40%",
          },
        ],
        caption: "RTVI, the News/Talk studio — a segment on AI, January 2026.",
        link: {
          label: "Watch the segment",
          href: "https://youtu.be/-NEyKGLS_oo?si=nFURRj0BnnpKLq0R&t=2012",
        },
      },
      {
        photos: [
          {
            src: "/photos/media-edtech-kp.jpg",
            alt: "An on-camera interview at the Edtech award press wall",
          },
        ],
        caption:
          "The Edtech award by the Komsomolskaya Pravda media group — an interview at the venue, February 2026.",
      },
      {
        photos: [
          {
            src: "/photos/media-on-set.jpg",
            alt: "A film set: cameras, lights and a conversation at the table",
          },
        ],
        caption: "On set, filming an interview for Channel One.",
      },
    ],
    note: "Also: comments for Kommersant and Kommersant FM, and podcast appearances on “Prosto ob IT” and “Telegram Mini Apps”.",
  },
  projects: {
    heading: "Projects & automations",
    subheading:
      "Cases where I took an idea all the way to a working tool — from mapping the process to deployed automation.",
    groups: [
      {
        title: "Work projects",
        items: [
      {
        title: "Employee work tracking and payouts",
        description:
          "A system for HR and team leads: reference data for departments, contributors, rates and work types. A manager records completed work, HR sees what is due and runs the payout. I designed the data model and the role structure, pulling scattered manual tracking into one transparent process.",
        role: "HR-tech · Zerocoder",
        stack: ["Low-code", "Data model", "Role-based access"],
        result: "Part of the company’s internal super-app — 250 users.",
      },
      {
        title: "Workload routing and balancing",
        description:
          "Internal tool: incoming requests are distributed across the team automatically, weighted by each person’s current load. Removed manual routing and the imbalance where some people were swamped while others idled.",
        role: "CTO · Zerocoder",
        stack: ["Low-code", "Routing rules", "REST API"],
        result: "Part of the same internal super-app — 250 users.",
      },
      {
        title: "Customer support automation",
        description:
          "First-line ticket qualification and routing by department, automated answers to common questions and call-centre quality scoring built on transcription of every call.",
        role: "CTO · Zerocoder",
        stack: ["Low-code", "Call transcription", "REST API"],
        result: "First-line bots serve 1,500 students concurrently; quality monitoring processes around 40 hours of call recordings daily.",
      },
      {
        title: "B2B admin panel: loan portfolio analytics",
        description:
          "A panel for partner retail chains: analytics on loans issued at points of sale, plus post-lending servicing. Built the interface in Bubble and put a Hasura + GraphQL layer on top of an existing PostgreSQL, wiring front end and data together over APIs.",
        role: "Low-code engineer · Salmon (FHL)",
        stack: ["Bubble", "PostgreSQL", "Hasura", "GraphQL", "REST API", "Auth0"],
      },
      {
        title: "Mobile app: instalment payments and scoring",
        description:
          "Customer-facing app for making instalment payments: a Bubble interface inside a mobile shell. Integrated an external scoring provider — the customer authorised on the provider’s side and the score came back into the product.",
        role: "Low-code engineer · Salmon (FHL)",
        stack: ["Bubble", "Mobile shell", "REST API", "OAuth", "Scoring provider"],
      },
      {
        title: "End-to-end analytics system",
        description:
          "Brought customer touchpoint data from scattered sources into a single flow on Make. The business got the whole customer journey instead of disconnected per-channel fragments.",
        role: "CTO · Zerocoder",
        stack: ["Make", "REST API", "Webhooks", "Data integration"],
      },
      {
        title: "Internal tool for the sales team",
        description:
          "A tool that assembles a customer profile from every touchpoint with the company: Bubble.io interface, data and logic on Directual. Sales got self-service access to the data without filing tickets to engineering.",
        role: "CTO · Zerocoder",
        stack: ["Bubble.io", "Directual", "REST API", "Data model"],
      },
        ],
      },
      {
        title: "Personal projects",
        items: [
          {
            title: "Databaser — database manager",
            description:
              "A desktop client for working with databases: a SQL editor with schema-aware autocomplete, a virtualised result grid, query-plan visualisation as a graph and SSH tunnelling. Supports PostgreSQL, MySQL and SQLite. I designed the architecture and drove the implementation with AI.",
            role: "Personal project · AI-assisted",
            stack: [
              "Tauri 2 (Rust)",
              "React 19 + TypeScript",
              "sqlx",
              "CodeMirror 6",
              "React Flow",
              "russh (SSH)",
            ],
            image: {
              src: "/projects/databaser.png",
              alt: "Databaser interface: connection tabs, data grid and database schema graph",
            },
            featured: true,
          },
          {
            title: "IDE for agentic development",
            description:
              "An environment for building and running AI agents. I designed the architecture and drove the implementation with AI.",
            role: "Personal project · AI-assisted",
            stack: ["AI agents", "AI-assisted"],
            image: {
              src: "/projects/ide.png",
              alt: "IDE interface: project list, agent chat, file tree, version control and built-in browser",
            },
            featured: true,
          },
          {
            title: "SSH client with connection manager",
            description:
              "A desktop client for working with remote servers: stores credentials, keeps every connection in one place and opens terminal sessions. My own take on Termius.",
            role: "Personal project · AI-assisted",
            stack: ["SSH", "Connection manager", "Desktop"],
          },
          {
            title: "LLM proxy",
            description:
              "A single entry point to language models: it exposes an OpenAI-compatible API, so any client or low-code scenario that already speaks OpenAI connects without rewriting the integration.",
            role: "Personal project · AI-assisted",
            stack: ["OpenAI-compatible API"],
            result: "Over 1,000,000 requests served through the proxy.",
          },
        ],
      },
    ],
  },
  skills: {
    heading: "Skills",
    subheading: "Grouped by the job: from mapping a process to integrations and rollout.",
    groups: [
      {
        title: "Low-code / No-code",
        items: [
          "Make",
          "n8n",
          "Zapier",
          "Power Automate",
          "Bubble.io",
          "Directual",
          "WeWeb",
          "Tilda",
        ],
      },
      {
        title: "Integrations",
        items: ["REST API", "GraphQL", "Webhooks", "JSON", "OAuth / Auth0"],
      },
      {
        title: "Data",
        items: [
          "Airtable",
          "NocoDB",
          "PostgreSQL",
          "MySQL",
          "SQL",
          "Hasura",
          "DB modelling",
        ],
      },
      {
        title: "Code & AI development",
        items: [
          "AI-assisted development",
          "JavaScript (scripting, data transforms)",
          "Node.js",
          "Python",
          "Git (GitHub / GitLab)",
          "Architecture design",
        ],
      },
      {
        title: "Infrastructure & monitoring",
        items: ["Docker", "Dokploy", "Self-hosting", "Grafana", "Uptime Kuma"],
      },
      {
        title: "Analysis & process",
        items: ["Business analysis", "System analysis", "End-to-end analytics", "As-is / to-be"],
      },
      {
        title: "Product & domain",
        items: ["HR-tech", "Internal tools", "UX/UI", "Fintech", "POS lending"],
      },
    ],
  },
  education: {
    heading: "Education",
    items: [
      {
        org: "RANEPA · Higher School of Corporate Management",
        program: "BSc — Logistics",
        period: "2012–2016",
        note: "with honours (red diploma)",
      },
      {
        org: "IT Lyceum No. 1533, Moscow",
        program: "Applied Economics · grades 8–11",
        period: "2008–2012",
        note: "web development & design alongside",
      },
    ],
  },
  hobbies: {
    heading: "Hobbies",
    subheading: "What I do when I’m not building automation.",
    items: [
      {
        title: "Video production",
        text: "I shoot and edit myself: light, sound, camera, final cut. That’s where the habit of explaining complex things briefly and visually comes from — in posts, product demos and course material.",
        images: [
          {
            src: "/photos/hobby-video.jpg",
            alt: "Editing video at two monitors in a home studio",
            focus: "60% 50%",
          },
          {
            src: "/photos/photo_2025-04-01_16-11-09.jpg",
            alt: "Filming with a camera — video production in action",
          },
        ],
      },
      {
        title: "Swimming & paddleboarding",
        text: "Water is how I switch my head off. A paddleboard on the lakes near Moscow in summer, the pool all year round.",
        images: [
          {
            src: "/photos/photo_2024-07-14_10-04-23.jpg",
            alt: "Me on a paddleboard in the middle of a lake, paddle in hand",
            focus: "50% 0%",
          },
        ],
      },
      {
        title: "Table tennis",
        text: "A fast game decided by reaction and precision. The best way to loosen up between blocks of work.",
        images: [
          {
            src: "/photos/hobby-tabletennis.jpg",
            alt: "Playing table tennis on an outdoor table",
            focus: "35% 40%",
          },
        ],
      },
      {
        title: "Squash",
        text: "A dynamic sport where, after six months of regular training, I felt real progress for the first time.",
        images: [
          {
            src: "/photos/photo_2024-06-10_12-33-44.jpg",
            alt: "The squash court after a game",
          },
        ],
      },
    ],
  },
  contact: {
    heading: "Get in touch",
    text: "Open to low-code engineering and process automation roles. I reply fast.",
    email: "mokrinsky.denis@gmail.com",
    links: [
      { label: "Telegram", href: "https://t.me/den_mok" },
      { label: "Telegram channel", href: "https://t.me/denonline" },
    ],
    note: "English — I teach a course in it at Innopolis University · ready to relocate (Cyprus / Georgia / Serbia / Kazakhstan) or work remotely.",
  },
  footer: {
    built: "Built with Next.js + Tailwind. Design and code by me.",
  },
};

// Dashes, quotes, ё and ranges are written correctly in the literals above.
// The one rule left to the machine is line-breaking: bindHangingWordsDeep glues
// prepositions, numerals and dashes to their neighbour so the browser never
// leaves them stranded at the end of a line, whatever the viewport.
export const content: Record<Lang, SiteContent> = {
  ru: bindHangingWordsDeep(ru),
  en: bindHangingWordsDeep(en),
};
