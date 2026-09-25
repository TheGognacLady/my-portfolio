import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; scroll-padding-top: 100px; color-scheme: dark; }
  body { min-width: 320px; background: #0f1624; color: #f4f6fc; font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 16px; line-height: 1.7; -webkit-font-smoothing: antialiased; }
  a { color: inherit; text-decoration: none; }
  button { color: inherit; font: inherit; cursor: pointer; background: transparent; border: 0; }
  a, button, summary { -webkit-tap-highlight-color: transparent; }
  :focus-visible { outline: 3px solid #72def0; outline-offset: 5px; border-radius: 3px; }
  main:focus { outline: none; }
  img { display: block; max-width: 100%; }
  ul { list-style: none; }
  p, h1, h2, h3, a { overflow-wrap: break-word; }
  section { padding: clamp(56px, 7vw, 96px) 0; }
  section:nth-of-type(even) { background-color: #161d2a; }
  .eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: #83d6e4; }
  section > div > .eyebrow { margin-bottom: 12px; }
  .section-intro { max-width: 680px; margin-bottom: 36px; color: #c3cbd8; }
  .actions { display: flex; flex-wrap: wrap; gap: 12px; }
  .button { display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 22px; min-height: 48px; border-radius: 28px; font-size: 14px; font-weight: 600; border: 1px solid #58667e; transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease; }
  .button:hover { transform: translateY(-2px); box-shadow: 0 7px 18px rgba(4, 10, 22, 0.28); }
  .button.primary { background: linear-gradient(110deg, #7341b8, #136a89); border-color: transparent; color: #fff; }
  .button.primary:hover { background: linear-gradient(110deg, #6336a1, #105d79); }
  .button.secondary:hover { border-color: #98dbe7; background: #222e41; }
  .badges { display: flex; flex-wrap: wrap; gap: 8px; }
  .badges li { max-width: 100%; font-size: 12px; padding: 5px 10px; border: 1px solid #364259; border-radius: 6px; color: #d0daea; overflow-wrap: anywhere; }
  .social-links { display: flex; flex-wrap: wrap; align-items: center; gap: 18px; margin-top: 28px; }
  .social-links a { display: inline-flex; align-items: center; justify-content: center; min-width: 44px; min-height: 44px; padding: 8px; border-radius: 8px; color: #e4e9f2; transition: color 200ms ease, transform 200ms ease, filter 200ms ease; }
  .social-links svg { display: block; width: 28px; height: 28px; fill: currentColor; }
  .social-links a:hover, .social-links a:focus-visible { color: #82d8e8; transform: scale(1.14); filter: drop-shadow(0 3px 8px rgba(105, 120, 209, 0.42)); }
  .social-links .phone-contact a { min-width: 0; padding: 8px 12px; border: 1px solid #364259; border-radius: 8px; color: #d0daea; font-size: 14px; font-variant-numeric: tabular-nums; white-space: nowrap; }
  .social-links .phone-contact a:hover, .social-links .phone-contact a:focus-visible { border-color: #98dbe7; color: #82d8e8; filter: none; }
  .social-links .email-contact { min-width: 0; max-width: 100%; }
  .social-links .email-contact a { min-width: 0; max-width: 100%; justify-content: flex-start; gap: 9px; padding: 8px 12px; border: 1px solid #364259; border-radius: 8px; color: #d0daea; font-size: 14px; overflow-wrap: anywhere; }
  .social-links .email-contact svg { flex: 0 0 22px; width: 22px; height: 22px; }
  .social-links .email-contact a span { min-width: 0; overflow-wrap: anywhere; }
  .social-links .email-contact a:hover, .social-links .email-contact a:focus-visible { border-color: #98dbe7; color: #82d8e8; filter: none; }
  .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  .skip-link { position: fixed; top: 8px; left: 12px; transform: translateY(-160%); z-index: 30; padding: 10px 18px; background: #fff; color: #0f1624; }
  .skip-link:focus { transform: none; }
  .site-footer { max-width: 1172px; margin: auto; padding: 24px clamp(20px, 4vw, 40px); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px 24px; color: #aebacf; font-size: 12px; }
  .site-footer a { text-decoration: underline; text-underline-offset: 4px; padding: 8px 0; }
  .site-footer span { padding: 8px 0; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } *, *::before, *::after { transition: none !important; animation: none !important; } .button:hover, .social-links a:hover, .social-links a:focus-visible, article:hover, article:focus-within { transform: none !important; } }
`;
