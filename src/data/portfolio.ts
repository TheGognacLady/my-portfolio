export type Skill = { name: string; level: number | null };

// No proficiency scores are verified. Set a level only after Jane confirms it.
export const primarySkills: Skill[] = [
  { name: 'React', level: null },
  { name: 'TypeScript', level: null },
  { name: 'JavaScript', level: null },
  { name: 'HTML', level: null },
  { name: 'CSS', level: null },
  { name: 'Redux Toolkit / RTK Query', level: null },
];

export const skillGroups = [
  { name: 'Frontend', items: ['React Router', 'Material UI', 'styled-components', 'CSS Modules'] },
  { name: 'Forms & validation', items: ['React Hook Form', 'Zod'] },
  { name: 'API & authentication', items: ['REST APIs', 'OAuth', 'Socket.IO'] },
  { name: 'Testing & tooling', items: ['Vitest', 'Playwright infrastructure', 'Git / GitHub', 'Vite', 'pnpm'] },
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/TheGognacLady', ariaLabel: 'GitHub (opens in a new tab)' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/el-camino-del-alma-a21695261/', ariaLabel: 'LinkedIn (opens in a new tab)' },
  { name: 'Telegram', href: 'https://t.me/MarijuanaJah', ariaLabel: 'Telegram (opens in a new tab)' },
  { name: 'WhatsApp', href: 'https://wa.me/79180291478', ariaLabel: 'Contact Jane Nadtoka on WhatsApp (opens in a new tab)' },
];

export const contactPhone = {
  display: '+7-918-029-14-78',
  href: 'tel:+79180291478',
};

export const contactEmail = {
  display: 'TheCognacLady@gmail.com',
  href: 'mailto:TheCognacLady@gmail.com',
  ariaLabel: 'Email Jane Nadtoka at TheCognacLady@gmail.com',
};

export const navigation = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#technologies' },
  { name: 'About', href: '#aboutme' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  github: string;
  demo?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: 'Todo List',
    category: 'Task management',
    description: 'A task management application for organizing lists, editing tasks, and tracking completion, with authenticated access to a REST API.',
    highlights: [
      'RTK Query handles server data, caching, and invalidation after changes.',
      'Login forms use React Hook Form and Zod validation.',
      'Material UI interface with task filters and light / dark themes.',
      'Vitest tests cover task update payloads and API error handling.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Material UI', 'React Hook Form', 'Zod', 'React Router', 'Vite', 'Vitest'],
    github: 'https://github.com/TheGognacLady/todo-list',
    demo: 'https://todo-list-swart-phi-73.vercel.app/#/login',
  },
  {
    name: 'Music Fun',
    category: 'Music & playlists',
    description: 'A music application for browsing and playing tracks, searching playlists, and managing playlist details and covers.',
    highlights: [
      'OAuth popup login with access / refresh tokens and automatic retry after a 401.',
      'RTK Query optimistic playlist updates with rollback when a request fails.',
      'Zod validates API responses; Socket.IO keeps playlist queries up to date.',
      'Vitest tests cover reauthorization, rollback, and validation; Playwright infrastructure supports E2E work.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'React Router', 'React Hook Form', 'Zod', 'Socket.IO', 'CSS Modules', 'Vite', 'Vitest', 'Playwright (infrastructure)'],
    github: 'https://github.com/TheGognacLady/music-fun',
    note: 'Local demo — external educational API restricts public deployment domains.',
  },
];
