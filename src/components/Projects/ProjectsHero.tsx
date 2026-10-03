import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProjectsHero.css';

export function ProjectsHero() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="projects-hero" aria-labelledby="projects-hero-heading">
      <div className="page-container projects-hero__inner">
        <div ref={contentRef} className="projects-hero__content reveal">
          <div className="projects-hero__intro">
            <p className="projects-hero__eyebrow reveal-stagger">TINY FRACTION OF MY WORK</p>

            <h1 id="projects-hero-heading" className="projects-hero__headline reveal-stagger" data-delay="2">
              <span>Things I&apos;ve</span>
              <span>
                made <span className="projects-hero__accent">sense</span> of.
              </span>
            </h1>
          </div>

          <p className="projects-hero__copy reveal-stagger" data-delay="3">
            A selection of products, platforms and experiments shaped by curiosity,
            systems thinking and a lot of questions.
          </p>
        </div>

        <div ref={visualRef} className="projects-hero__visual reveal">
          <img
            src="/images/projects/hero-composition.png"
            alt="Editorial collage of two figures and a flowering tree, captioned From complexity to clarity."
            className="projects-hero__image"
            width={500}
            height={666}
          />
        </div>
      </div>
    </section>
  );
}
