import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { Experiments } from '../components/Projects/Experiments';
import { ProjectCard } from '../components/Projects/ProjectCard';
import { ProjectsHero } from '../components/Projects/ProjectsHero';
import { SelectedWorkHeader } from '../components/Projects/SelectedWorkHeader';
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

        <section className="projects-quote" aria-label="Editorial quote">
          <div className="page-container">
            <div className="projects-page__rule" />
            <blockquote className="projects-quote__block">
              <p>
                Make complex things feel considered.{' '}
                <span className="projects-page__accent">Clarity creates momentum.</span>
              </p>
            </blockquote>
            <div className="projects-page__rule" />
          </div>
        </section>

        <Experiments />
      </main>
      <Footer />
    </>
  );
}
