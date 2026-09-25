import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Technologies } from './layout/sections/technologies/Technologies';
import { ExperienceSecond } from './layout/sections/experience/ExperienceSecond';
import { Footer } from './layout/footer/Footer';
import { localized, useLanguage } from './i18n';

export default function App() {
  const { t } = useLanguage();
  return <>
    <a className="skip-link" href="#main-content">{t.skipToContent}</a>
    <Header />
    <main id="main-content" tabIndex={-1}>
      <Main />
      <Projects />
      <Technologies />
      <ExperienceSecond />
      <Footer />
    </main>
    <footer className="site-footer"><span>{localized(t.footer.copyright, { year: String(new Date().getFullYear()) })}</span><a href="#aboutme">{t.footer.backToTop} ↑</a></footer>
  </>;
}
