import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { projects } from '@/data/portfolio';
import { S } from './Project_styles';
import { localized, useLanguage } from '@/i18n';

export const Projects = () => {
  const { language, t } = useLanguage();
  return <section id="projects" aria-labelledby="projects-title">
  <Container>
    <p className="eyebrow">{t.projects.eyebrow}</p>
    <SectionTitle id="projects-title">{t.projects.title}</SectionTitle>
    <p className="section-intro">{t.projects.intro}</p>
    <S.Grid>
      {projects.map((project, index) => <S.Card key={project.name} aria-labelledby={'project-' + index}>
        <div className="project-heading"><span className="eyebrow">{language === 'ru' ? (index === 0 ? t.projects.todoCategory : t.projects.musicCategory) : project.category}</span><span className="project-number" aria-hidden="true">0{index + 1}</span></div>
        <h3 id={'project-' + index}>{project.name}</h3>
        <div className="accent-line" aria-hidden="true" />
        <p className="project-description">{language === 'ru' ? (index === 0 ? t.projects.todoDescription : t.projects.musicDescription) : project.description}</p>
        <ul className="highlights">{(language === 'ru' ? (index === 0 ? t.projects.todoHighlights : t.projects.musicHighlights) : project.highlights).map(text => <li key={text}>{text}</li>)}</ul>
        <div className="project-stack"><h4>{t.projects.builtWith}</h4><ul className="badges" aria-label={localized(t.projects.stackLabel, { project: project.name })}>{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul></div>
        <div className="project-bottom">
          <div className="actions">
            {project.demo && <a className="button primary" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={t.projects.openDemo}>{t.projects.liveDemo} <span aria-hidden="true">↗</span></a>}
            <a className="button secondary" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={localized(t.projects.openRepository, { project: project.name })}>GitHub <span aria-hidden="true">↗</span></a>
          </div>
          {project.demo && <details><summary>{t.projects.demoAccount}</summary><p>{t.projects.emailLabel}: <code>free@samuraijs.com</code><br />{t.projects.passwordLabel}: <code>free</code></p></details>}
          {project.note && <p className="project-note">{language === 'ru' ? t.projects.localDemoNote : project.note}</p>}
        </div>
      </S.Card>)}
    </S.Grid>
  </Container>
</section>;
};
