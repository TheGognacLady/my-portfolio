import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { contactEmail, contactPhone, socialLinks } from '@/data/portfolio';
import { localized, useLanguage } from '@/i18n';

export const Footer = () => {
  const { t } = useLanguage();
  return <section id="contact" aria-labelledby="contact-title">
    <Container>
      <p className="eyebrow">{t.contact.eyebrow}</p>
      <SectionTitle id="contact-title">{t.contact.title}</SectionTitle>
      <p className="section-intro">{t.contact.intro}</p>
      <ul className="social-links" aria-label={t.contact.listLabel}>
        <li className="email-contact"><a href={contactEmail.href} aria-label={t.contact.emailLabel}><SocialIcon name="Email" /><span>{contactEmail.display}</span></a></li>
        <li className="phone-contact"><a href={contactPhone.href} aria-label={localized(t.contact.phoneLabel, { number: contactPhone.display })}>{contactPhone.display}</a></li>
        {socialLinks.map(link => <li key={link.name}><a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name === 'WhatsApp' ? t.contact.whatsappNewTab : localized(t.contact.socialNewTab, { name: link.name })}><SocialIcon name={link.name} /><span className="visually-hidden">{link.name}</span></a></li>)}
      </ul>
    </Container>
  </section>;
};

function SocialIcon({ name }: { name: string }) {
  if (name === 'Email') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5h17v12h-17zM4 7l8 6 8-6" /></svg>;
  if (name === 'GitHub') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.12c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.92 2.42 3.48 1.75.1-.74.4-1.24.72-1.53-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3 0 4.29-2.6 5.23-5.09 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>;
  if (name === 'LinkedIn') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.16h2.97v9.18ZM6.45 7.9a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.44h-2.97v-4.47c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.55H9.19V9.16h2.85v1.25h.04c.4-.72 1.37-1.48 2.82-1.48 3.02 0 3.58 1.99 3.58 4.58v4.83Z" /></svg>;
  if (name === 'Telegram') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.8 3.2 18.5 20c-.25 1.19-.91 1.48-1.84.92l-5.08-3.74-2.45 2.36c-.27.27-.5.5-1.02.5l.36-5.17 9.42-8.51c.41-.36-.09-.56-.64-.2L5.61 13.5.59 11.93c-1.09-.34-1.11-1.09.23-1.62L20.47 2.8c.9-.33 1.69.22 1.33.4Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M20.45 11.55a8.5 8.5 0 0 1-12.58 7.47L3.5 20l1.02-4.22a8.5 8.5 0 1 1 15.93-4.23Z" /><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M8.3 7.7c-.3.22-.58.7-.58 1.25 0 .56.38 1.78 1.55 3 1.18 1.22 2.58 2.08 3.73 2.48.88.31 1.56.17 2.05-.2.37-.27.68-.84.73-1.22.04-.38-.09-.55-.38-.7l-1.73-.83c-.24-.12-.45-.13-.64.13l-.68.88c-.15.2-.35.22-.61.1a7.1 7.1 0 0 1-2.2-1.43 6.5 6.5 0 0 1-1.26-1.62c-.1-.2-.07-.38.1-.56l.5-.6c.17-.2.2-.39.1-.63l-.72-1.7c-.1-.25-.25-.35-.55-.35-.3 0-.57.05-.81.2Z" /></svg>;
}
