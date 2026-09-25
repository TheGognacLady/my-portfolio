import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ru';

const english = {
  languageLabel: 'Language', languageEnglish: 'English', languageRussian: 'Russian',
  switchToEnglish: 'Switch language to English', switchToRussian: 'Switch language to Russian',
  skipToContent: 'Skip to content', navigationLabel: 'Main navigation', menu: 'Menu', close: 'Close',
  nav: { about: 'About', projects: 'Projects', skills: 'Skills', experience: 'Experience', contact: 'Contact' },
  hero: {
    name: 'Jane Nadtoka',
    intro: 'Building frontend applications since 2023. I work with React and TypeScript to build interfaces with API integration, authentication, and reliable data handling.',
    viewProjects: 'View projects', getInTouch: 'Get in touch', viewProjectsLabel: 'View projects', getInTouchLabel: 'Get in touch',
  },
  projects: {
    eyebrow: 'Selected work', title: 'Projects', intro: 'Two applications that show how I work with interfaces, data, and real APIs.',
    todoCategory: 'Task management',
    todoDescription: 'A task management application for organizing lists, editing tasks, and tracking completion, with authenticated access to a REST API.',
    todoHighlights: [
      'RTK Query handles server data, caching, and invalidation after changes.',
      'Login forms use React Hook Form and Zod validation.',
      'Material UI interface with task filters and light / dark themes.',
      'Vitest tests cover task update payloads and API error handling.',
    ],
    musicCategory: 'Music & playlists',
    musicDescription: 'A music application for browsing and playing tracks, searching playlists, and managing playlist details and covers.',
    musicHighlights: [
      'OAuth popup login with access / refresh token handling and automatic retry after a 401.',
      'RTK Query optimistic playlist updates with rollback when a request fails.',
      'Zod validates API responses; Socket.IO keeps playlist queries up to date.',
      'Vitest tests cover reauthorization, rollback, and validation; Playwright infrastructure supports E2E work.',
    ],
    builtWith: 'Built with', liveDemo: 'Live demo', openDemo: 'Open Todo List live demo in a new tab',
    openRepository: 'Open {project} on GitHub in a new tab', demoAccount: 'Try the demo account', emailLabel: 'Email', passwordLabel: 'Password',
    localDemoNote: 'Local demo — external educational API restricts public deployment domains.', stackLabel: '{project} technology stack',
  },
  skills: {
    eyebrow: 'My toolkit', title: 'Frontend skills', intro: 'React and TypeScript at the core, supported by the tools I use in my projects.',
    groups: { frontend: 'Frontend', forms: 'Forms & validation', api: 'API & authentication', testing: 'Testing & tooling' },
    proficiency: '{skill} self-assessed proficiency',
  },
  experience: {
    eyebrow: 'About me', title: 'Learning through building', period: '2023–Present', type: 'Project-based development', role: 'Frontend Development',
    first: 'I’m Jane, a frontend developer focused on React and TypeScript. Since 2023, I’ve been building applications and working through the details behind their interfaces: connecting APIs, managing server state, validating data, and handling authentication.',
    second: 'My projects give me hands-on experience with automated testing, optimistic updates, and real-time data. I’m looking for a Frontend / React Developer role where I can contribute and continue developing these skills.',
  },
  contact: {
    eyebrow: 'Contact', title: 'Let’s talk about working together.',
    intro: 'For Frontend / React Developer opportunities, reach me by email, phone, LinkedIn, Telegram, or WhatsApp.',
    listLabel: 'Email, phone, and social profiles', emailLabel: 'Email Jane Nadtoka at TheCognacLady@gmail.com',
    phoneLabel: 'Call +7-918-029-14-78', socialNewTab: '{name} (opens in a new tab)',
    whatsappNewTab: 'Contact Jane Nadtoka on WhatsApp (opens in a new tab)',
  },
  footer: { copyright: '© {year} Jane Nadtoka', backToTop: 'Back to top' },
  title: 'Jane Nadtoka | Frontend / React Developer',
  description: 'Jane Nadtoka — Frontend / React Developer building applications with React and TypeScript since 2023. Explore Todo List, Music Fun, and contact details.',
  ogDescription: 'React and TypeScript projects, practical frontend experience, and contact details.',
} as const;

type Widen<T> = T extends string ? string : T extends readonly unknown[] ? { [K in keyof T]: Widen<T[K]> } : { [K in keyof T]: Widen<T[K]> };
type Messages = Widen<typeof english>;

const russian: Messages = {
  languageLabel: 'Язык', languageEnglish: 'Английский', languageRussian: 'Русский',
  switchToEnglish: 'Переключить язык на английский', switchToRussian: 'Переключить язык на русский',
  skipToContent: 'Перейти к содержимому', navigationLabel: 'Основная навигация', menu: 'Меню', close: 'Закрыть',
  nav: { about: 'Обо мне', projects: 'Проекты', skills: 'Навыки', experience: 'Опыт', contact: 'Контакты' },
  hero: {
    name: 'Евгения Надтока',
    intro: 'Разрабатываю frontend-приложения с 2023 года. Работаю с React и TypeScript, создаю интерфейсы с интеграцией API, аутентификацией и надёжной обработкой данных.',
    viewProjects: 'Посмотреть проекты', getInTouch: 'Связаться со мной', viewProjectsLabel: 'Посмотреть проекты', getInTouchLabel: 'Связаться со мной',
  },
  projects: {
    eyebrow: 'Избранные проекты', title: 'Проекты', intro: 'Два приложения, в которых я работаю с интерфейсами, данными и реальными API.',
    todoCategory: 'Управление задачами',
    todoDescription: 'Приложение для управления задачами с аутентификацией, работой с серверными данными и валидацией форм.',
    todoHighlights: [
      'RTK Query управляет серверными данными, кэшированием и обновлением данных после изменений.',
      'Формы входа используют React Hook Form и валидацию с Zod.',
      'Интерфейс на Material UI с фильтрами задач и светлой и тёмной темами.',
      'Тесты Vitest проверяют данные для обновления задач и обработку ошибок API.',
    ],
    musicCategory: 'Музыка и плейлисты',
    musicDescription: 'Приложение для работы с музыкой и плейлистами с OAuth-аутентификацией, обновлением токенов, оптимистичными обновлениями и данными в реальном времени.',
    musicHighlights: [
      'Вход через OAuth во всплывающем окне, работа с access / refresh tokens и автоматический повтор запроса после ответа 401.',
      'Оптимистичные обновления плейлистов в RTK Query с откатом при ошибке запроса.',
      'Zod проверяет ответы API; Socket.IO обновляет данные плейлистов в реальном времени.',
      'Тесты Vitest проверяют повторную авторизацию, откат изменений и валидацию; для E2E-тестирования настроена инфраструктура Playwright.',
    ],
    builtWith: 'Технологии', liveDemo: 'Демо', openDemo: 'Открыть демо Todo List в новой вкладке',
    openRepository: 'Открыть {project} на GitHub в новой вкладке', demoAccount: 'Демо-аккаунт', emailLabel: 'Email', passwordLabel: 'Пароль',
    localDemoNote: 'Демо доступно локально — внешний учебный API ограничивает публичные домены для развёртывания.', stackLabel: 'Технологии проекта {project}',
  },
  skills: {
    eyebrow: 'Мои инструменты', title: 'Навыки frontend-разработки', intro: 'React и TypeScript — основа моей работы; также использую инструменты, применённые в проектах.',
    groups: { frontend: 'Frontend', forms: 'Формы и валидация', api: 'API и аутентификация', testing: 'Тестирование и инструменты' },
    proficiency: '{skill} — самооценка уровня владения',
  },
  experience: {
    eyebrow: 'Обо мне', title: 'Развитие через практику', period: '2023–настоящее время', type: 'Разработка собственных проектов', role: 'Frontend-разработка',
    first: 'Я frontend-разработчик, специализируюсь на React и TypeScript. С 2023 года разрабатываю приложения и работаю с ключевыми аспектами frontend-разработки: интеграцией API, управлением состоянием и серверными данными, валидацией данных и аутентификацией.',
    second: 'Работа над собственными проектами дала мне практический опыт автоматизированного тестирования, оптимистичных обновлений интерфейса и работы с данными в реальном времени. Сейчас я ищу позицию Frontend / React Developer, где смогу применять свои навыки в реальных проектах и продолжать профессионально развиваться.',
  },
  contact: {
    eyebrow: 'Контакты', title: 'Буду рада обсудить возможности сотрудничества.',
    intro: 'По вопросам сотрудничества и вакансий Frontend / React Developer со мной можно связаться по электронной почте, телефону, через LinkedIn, Telegram или WhatsApp.',
    listLabel: 'Электронная почта, телефон и профили в социальных сетях',
    emailLabel: 'Написать Jane Nadtoka на TheCognacLady@gmail.com', phoneLabel: 'Позвонить по номеру +7-918-029-14-78',
    socialNewTab: '{name} (откроется в новой вкладке)', whatsappNewTab: 'Написать Jane Nadtoka в WhatsApp (откроется в новой вкладке)',
  },
  footer: { copyright: '© {year} Jane Nadtoka', backToTop: 'Наверх' },
  title: 'Jane Nadtoka | Frontend / React Developer',
  description: 'Jane Nadtoka — Frontend / React Developer. С 2023 года разрабатываю приложения на React и TypeScript. Проекты Todo List и Music Fun, навыки и контакты.',
  ogDescription: 'Проекты на React и TypeScript, практический опыт frontend-разработки и контакты.',
};

const translations: Record<Language, Messages> = { en: english, ru: russian };
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: Messages };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = 'portfolio-language';

function getInitialLanguage(): Language {
  try { return localStorage.getItem(storageKey) === 'ru' ? 'ru' : 'en'; } catch { return 'en'; }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = translations[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', t.description);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', t.ogDescription);
    try { localStorage.setItem(storageKey, language); } catch { /* Language switching still works without storage. */ }
  }, [language, t]);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export function localized(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? '');
}
