import { useScrollReveal } from '../../hooks/useScrollReveal';
import { principles } from './aboutPageData';

export function AboutThinking() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-think" aria-labelledby="about-think-heading">
      <div className="page-container about-think__layout">
        <div ref={headingRef} className="about-think__intro reveal">
          <p className="about-page__eyebrow reveal-stagger">HOW I THINK</p>
          <h2 id="about-think-heading" className="about-page__display about-page__display--section reveal-stagger" data-delay="2">
            <span>Make sense</span>
            <span>
              of the <span className="about-page__accent">mess.</span>
            </span>
          </h2>
        </div>

        <div ref={gridRef} className="about-think__principles reveal">
          {principles.map((item) => (
            <article key={item.number} className="about-think__item">
              <p className="about-think__number">{item.number}</p>
              <h3 className="about-think__title">{item.title}</h3>
              <p className="about-think__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
