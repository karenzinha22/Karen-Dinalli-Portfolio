import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

export function ProjectIntro() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="project-intro" aria-labelledby="project-intro-heading">
      <div ref={ref} className="project-intro__inner reveal">
        <h2 id="project-intro-heading" className="project-intro__headline reveal-stagger">
          Things I&apos;ve made sense of.
        </h2>
        <div className="project-intro__figure reveal-stagger" data-delay="2">
          <img
            src="/images/projects/intro-figure.png"
            alt=""
            className="project-intro__image"
            width={358}
            height={280}
          />
        </div>
      </div>
    </section>
  );
}
