import styled from 'styled-components';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { useLanguage } from '@/i18n';

export const ExperienceSecond = () => {
  const { t } = useLanguage();
  return <section id="experience" aria-labelledby="about-title">
    <Container>
      <p className="eyebrow">{t.experience.eyebrow}</p>
      <SectionTitle id="about-title">{t.experience.title}</SectionTitle>
      <Content>
        <div className="period">{t.experience.period}<span>{t.experience.type}</span></div>
        <div><h3>{t.experience.role}</h3><p>{t.experience.first}</p><p>{t.experience.second}</p></div>
      </Content>
    </Container>
  </section>;
};

const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.7fr);
  gap: 40px;
  margin-top: 36px;
  .period { border-left: 3px solid #9776d4; padding-left: 20px; color: #d5c5fa; font-weight: 600; }
  .period span { display: block; font-size: 13px; font-weight: 400; color: #b9c3d4; margin-top: 10px; }
  h3 { font-size: 22px; font-weight: 600; margin-bottom: 16px; }
  p { color: #c3cbd8; }
  p + p { margin-top: 16px; }
  @media (max-width: 700px) { grid-template-columns: 1fr; gap: 24px; }
`;
