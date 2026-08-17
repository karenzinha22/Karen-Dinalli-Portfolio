import { Button } from '../Button/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { DescriptionPart, Project } from './types';
import { Divider } from './Divider';
import './Projects.css';

type ProjectCardProps = {
  project: Project;
};

function renderParagraph(parts: string | DescriptionPart[], accent: Project['accent']) {
  if (typeof parts === 'string') {
    return <p>{parts}</p>;
  }

  return (
    <p>
      {parts.map((part, index) =>
        part.highlight ? (
          <span
            key={index}
            className={`project-card__highlight project-card__highlight--${accent}`}
          >
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </p>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      id={project.id}
      className={`project-card reveal project-card--${project.accent}`}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="project-card__content reveal-stagger">
        <p className={`project-card__number project-card__number--${project.accent}`}>
          {project.number}
        </p>

        <h3 id={`project-${project.id}-title`} className="project-card__name">
          {project.name}
        </h3>

        <p className={`project-card__statement project-card__statement--${project.accent}`}>
          {project.statement}
        </p>

        <Divider variant="short" className="project-card__divider" />

        <p className="project-card__categories">{project.categories}</p>

        <div className="project-card__description">
          {project.description.paragraphs.map((paragraph) =>
            renderParagraph(paragraph, project.accent),
          )}
        </div>

        {project.ctaIcon === false ? (
          <p className="project-card__coming-soon">{project.ctaLabel}</p>
        ) : (
          <Button
            variant="secondary"
            href={project.ctaHref ?? `#${project.id}`}
            arrowDirection="right"
            icon
            className="project-card__cta button--flush-start"
          >
            {project.ctaLabel}
          </Button>
        )}
      </div>

      <div className="project-card__visual reveal-stagger" data-delay="2">
        <div className="project-card__image-frame">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="project-card__image"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}
