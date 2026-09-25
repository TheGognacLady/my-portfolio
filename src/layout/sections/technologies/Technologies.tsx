import styled from 'styled-components';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { primarySkills, skillGroups, type Skill } from '@/data/portfolio';
import { localized, useLanguage } from '@/i18n';

export const Technologies = () => {
  const { t } = useLanguage();
  const groupLabels: Record<string, string> = {
    Frontend: t.skills.groups.frontend,
    'Forms & validation': t.skills.groups.forms,
    'API & authentication': t.skills.groups.api,
    'Testing & tooling': t.skills.groups.testing,
  };
  return <section id="technologies" aria-labelledby="skills-title">
  <Container>
    <p className="eyebrow">{t.skills.eyebrow}</p>
    <SectionTitle id="skills-title">{t.skills.title}</SectionTitle>
    <p className="section-intro">{t.skills.intro}</p>
    <SkillsGrid>{primarySkills.map(skill => <SkillItem key={skill.name} skill={skill} />)}</SkillsGrid>
    <GroupGrid>{skillGroups.map(group => <div key={group.name}><h3>{groupLabels[group.name]}</h3><ul className="badges">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</GroupGrid>
  </Container>
</section>;
};

function SkillItem({ skill }: { skill: Skill }) {
  const { t } = useLanguage();
  const level = skill.level;
  return <SkillRow>
    <div className="skill-label"><h3>{skill.name}</h3>{level !== null && <span>{level}%</span>}</div>
    {level !== null && <progress aria-label={localized(t.skills.proficiency, { skill: skill.name })} max={100} value={level} />}
  </SkillRow>;
}
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 36px;
  margin-bottom: 48px;
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;
const SkillRow = styled.div`
  min-width: 0;
  padding: 14px 0 14px 18px;
  border-left: 3px solid #8874cf;
  &:nth-child(-n + 2) { border-color: #53c4d7; }
  h3 { font-size: 18px; font-weight: 500; }
  .skill-label { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .skill-label span { flex-shrink: 0; font-size: 14px; }
  progress { appearance: none; display: block; width: 100%; height: 12px; margin-top: 12px; border: 0; border-radius: 12px; overflow: hidden; background: #162950; }
  progress::-webkit-progress-bar { background: #162950; border-radius: 12px; }
  progress::-webkit-progress-value { background: linear-gradient(90deg, #13adc7, #945dd6); border-radius: 12px; }
  progress::-moz-progress-bar { background: linear-gradient(90deg, #13adc7, #945dd6); border-radius: 12px; }
`;
const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  h3 { font-size: 16px; font-weight: 600; margin-bottom: 14px; }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;
