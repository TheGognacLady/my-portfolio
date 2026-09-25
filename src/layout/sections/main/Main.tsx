import photo from '@/images/Jane.jpg';
import { Container } from '@/components/Container';
import { S } from './Main_styles';
import { useLanguage } from '@/i18n';

export const Main = () => {
  const { t } = useLanguage();
  return <S.StyledMain id="aboutme" aria-labelledby="hero-title">
  <Container>
    <S.Content>
      <div>
        <p className="eyebrow">Frontend Developer / React Developer</p>
        <h1 id="hero-title">{t.hero.name}<span className="hero-dot">.</span></h1>
        <S.Intro>{t.hero.intro}</S.Intro>
        <div className="actions"><a className="button primary" href="#projects" aria-label={t.hero.viewProjectsLabel}>{t.hero.viewProjects} <span aria-hidden="true">↗</span></a><a className="button secondary" href="#contact">{t.hero.getInTouch}</a></div>
      </div>
      <S.Photo src={photo} alt="Jane Nadtoka" width="380" height="450" fetchPriority="high" />
    </S.Content>
  </Container>
</S.StyledMain>;
};
