import { Button } from '../Button/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cvHref, experience, linkedInHref } from './aboutPageData';

export function AboutExperience() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-work" aria-labelledby="about-work-heading">
      <div className="page-container about-work__inner">
        <div ref={contentRef} className="about-work__content reveal">
          <p className="about-page__eyebrow reveal-stagger">THE WORK</p>

          <h2 id="about-work-heading" className="about-page__display about-page__display--section reveal-stagger" data-delay="2">
            <span>From pixels to product</span>
            <span className="about-page__accent">thinking.</span>
          </h2>

          <p className="about-work__copy reveal-stagger" data-delay="3">
            I&apos;ve spent 5+ years designing digital products, starting in UX/UI
            and growing into Product Design. Today, I work across research,
            interaction design, product strategy and design systems, mostly within
            the wonderfully complicated world of fintech.
          </p>

          <div className="about-work__actions reveal-stagger" data-delay="4">
            <Button
              variant="primary"
              href={cvHref}
              icon={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW CV
            </Button>
            <Button
              variant="secondary"
              href={linkedInHref}
              arrowDirection="right"
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT MY LINKEDIN
            </Button>
          </div>
        </div>

        <div ref={listRef} className="about-work__timeline reveal">
          <ol className="about-work__list">
            {experience.map((item) => (
              <li key={`${item.years}-${item.role}`} className="about-work__item">
                <p className="about-work__years">{item.years}</p>
                <div className="about-work__marker" aria-hidden="true" />
                <div className="about-work__role">
                  <p className="about-work__company">{item.company}</p>
                  <p className="about-work__title">{item.role}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
