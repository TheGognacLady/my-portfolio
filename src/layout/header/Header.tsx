import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from '@/components/Container';
import { contactPhone, navigation } from '@/data/portfolio';
import { localized, useLanguage } from '@/i18n';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const toggle = useRef<HTMLButtonElement>(null);
  return <StyledHeader onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <Container>
      <div className="header-row">
        <div className="wordmark"><span className="logo-mark" aria-hidden="true">JN</span><span>Jane Nadtoka</span></div>
        <div className="header-controls">
          <div className="language-switch" role="group" aria-label={t.languageLabel}>
            <button type="button" lang="en" aria-pressed={language === 'en'} aria-label={t.languageEnglish} onClick={() => setLanguage('en')}>EN</button>
            <button type="button" lang="ru" aria-pressed={language === 'ru'} aria-label={t.languageRussian} onClick={() => setLanguage('ru')}>RU</button>
          </div>
          <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? t.close : t.menu} onClick={() => setOpen(!open)}>{open ? t.close : t.menu} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
        </div>
        <nav id="main-navigation" aria-label={t.navigationLabel} className={open ? 'is-open' : ''}>
          {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>{item.href === '#aboutme' ? t.nav.about : item.href === '#projects' ? t.nav.projects : item.href === '#technologies' ? t.nav.skills : item.href === '#experience' ? t.nav.experience : t.nav.contact}</span></a>)}
          <a className="header-phone mobile-phone" href={contactPhone.href} aria-label={localized(t.contact.phoneLabel, { number: contactPhone.display })}>{contactPhone.display}</a>
        </nav>
        <a className="header-phone desktop-phone" href={contactPhone.href} aria-label={localized(t.contact.phoneLabel, { number: contactPhone.display })}>{contactPhone.display}</a>
      </div>
    </Container>
  </StyledHeader>;
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(15, 22, 36, 0.97);
  border-bottom: 1px solid #293345;
  .header-row { min-height: 80px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
  .header-controls { display: flex; align-items: center; gap: 12px; }
  .language-switch { display: inline-flex; align-items: center; padding: 3px; border: 1px solid #364259; border-radius: 18px; }
  .language-switch button { min-width: 34px; min-height: 30px; padding: 3px 7px; border-radius: 14px; color: #c3cbd8; font-size: 12px; font-weight: 600; transition: color 180ms ease, background-color 180ms ease; }
  .language-switch button:hover { color: #fff; }
  .language-switch button[aria-pressed="true"] { background: linear-gradient(110deg, #7341b8, #136a89); color: #fff; }
  .wordmark { display: flex; align-items: center; gap: 12px; font-weight: 600; }
  .logo-mark { display: grid; place-items: center; width: 38px; height: 38px; border: 1px solid #9580db; border-radius: 50%; font-size: 13px; }
  nav { display: flex; gap: 28px; }
  nav a { position: relative; padding: 12px 0; font-size: 14px; color: #c3cbd8; }
  nav a::after { content: ''; position: absolute; left: -6px; right: -6px; top: 50%; height: 1px; background: linear-gradient(90deg, #13adc7, #6978d1 67%, #945dd6); transform: scaleX(0); transition: transform 220ms ease; }
  nav a span { display: inline-block; transition: transform 220ms ease, color 220ms ease; }
  nav a:hover, nav a:focus-visible { color: #fff; }
  nav a:hover::after, nav a:focus-visible::after { transform: scaleX(1); }
  nav a:hover span, nav a:focus-visible span { color: #9bcce3; transform: skewX(7deg) translateY(-1px); }
  .header-phone { color: #c3cbd8; font-size: 13px; font-variant-numeric: tabular-nums; white-space: nowrap; transition: color 180ms ease; }
  .header-phone:hover, .header-phone:focus-visible { color: #82d8e8; }
  .mobile-phone { display: none; }
  .menu-toggle { display: none; }
  @media (max-width: 640px) {
    .header-row { min-height: 72px; gap: 0; }
    .header-controls { gap: 8px; }
    .wordmark { font-size: 14px; gap: 8px; }
    .desktop-phone { display: none; }
    .menu-toggle { display: flex; gap: 8px; align-items: center; min-height: 44px; padding: 8px; }
    nav { display: none; width: 100%; padding-bottom: 12px; gap: 0; }
    nav.is-open { display: grid; grid-template-columns: 1fr 1fr; }
    nav a { padding: 12px; }
    nav a::after { left: 12px; right: 12px; }
    nav .mobile-phone { display: block; grid-column: 1 / -1; justify-self: center; margin-top: 4px; padding: 10px 12px; }
  }
  @media (max-width: 360px) {
    .header-controls { gap: 4px; }
    .language-switch button { min-width: 30px; padding-inline: 5px; }
    .menu-toggle { width: 40px; justify-content: center; font-size: 0; }
    .menu-toggle span { font-size: 18px; }
  }
  @media (prefers-reduced-motion: reduce) { .language-switch button { transition: none; } }
`;
