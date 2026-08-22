import { Button } from '../Button/Button';
import { Divider } from './Divider';
import { EditorialQuote } from './EditorialQuote';
import { ProjectCard } from './ProjectCard';
import { ProjectIntro } from './ProjectIntro';
import { editorialQuotes, projects } from './projectsData';
import './Projects.css';

export function ProjectsSection() {
  return (
    <>
      <ProjectIntro />

      <section
        id="projects"
        className="projects-section"
        aria-labelledby="selected-work-heading"
      >
        <div className="page-container projects-section__inner">
          <header className="projects-section__header">
            <h2 id="selected-work-heading" className="projects-section__label">
              SELECTED WORK
            </h2>
            <Divider variant="full" className="projects-section__header-divider" />
          </header>

          <div className="projects-section__list">
            {projects.map((project, index) => (
              <div key={project.id} className="projects-section__group">
                <ProjectCard project={project} />
                {index < editorialQuotes.length && (
                  <>
                    <Divider variant="full" />
                    <EditorialQuote>{editorialQuotes[index]}</EditorialQuote>
                    <Divider variant="full" />
                  </>
                )}
              </div>
            ))}

            <div className="projects-section__footer">
              <Button variant="primary" href="#projects" icon={false}>
                VIEW ALL PROJECTS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
