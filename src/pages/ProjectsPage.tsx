import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { Experiments } from '../components/Projects/Experiments';
import { ProjectCard } from '../components/Projects/ProjectCard';
import { ProjectsHero } from '../components/Projects/ProjectsHero';
import { SelectedWorkHeader } from '../components/Projects/SelectedWorkHeader';
import { EditorialStatement } from '../components/EditorialStatement/EditorialStatement';
import { projects } from '../components/Projects/projectsData';
import './ProjectsPage.css';

export function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="projects-page page-start">
        <ProjectsHero />

        <section
          className="projects-section"
          aria-labelledby="projects-selected-work-heading"
        >
          <div className="page-container projects-section__inner">
            <SelectedWorkHeader headingId="projects-selected-work-heading" />

            <div className="projects-section__list">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <EditorialStatement>
          Make complex things feel considered.{' '}
          <span className="editorial-statement__accent">
            Clarity creates momentum.
          </span>
        </EditorialStatement>

        <Experiments />
      </main>
      <Footer />
    </>
  );
}
