import { Button } from '../Button/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { experiments } from './experimentsData';
import './Experiments.css';

export function Experiments() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="experiments" aria-labelledby="experiments-heading">
      <div className="page-container">
        <div ref={introRef} className="experiments__intro reveal">
          <p className="experiments__eyebrow reveal-stagger">EXPERIMENTS</p>
          <h2 id="experiments-heading" className="experiments__headline reveal-stagger" data-delay="2">
            Design <span className="experiments__accent">playground.</span>
          </h2>
          <p className="experiments__copy reveal-stagger" data-delay="3">
            A collection of explorations where creativity meets curiosity. No rules,
            just design.
          </p>
        </div>

        <div ref={gridRef} className="experiments__grid reveal">
          {experiments.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="experiment-card reveal-stagger"
              data-delay={String(Math.min(index + 2, 4))}
            >
              <div className="experiment-card__visual">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="experiment-card__image"
                  loading="lazy"
                />
              </div>
              <div className="experiment-card__body">
                <div className="experiment-card__meta">
                  <p className="experiment-card__name">{item.name}</p>
                  <p className="experiment-card__year">{item.year}</p>
                </div>
                <h3 className="experiment-card__title">{item.title}</h3>
                <p className="experiment-card__copy">{item.body}</p>
                <Button
                  variant="secondary"
                  href={item.href}
                  arrowDirection="right"
                  className="experiment-card__cta button--flush-start"
                >
                  Read me
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
