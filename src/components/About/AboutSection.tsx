import { Button } from '../Button/Button';
import { Divider } from '../Projects/Divider';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { AboutTransition } from './AboutTransition';
import './About.css';

export function AboutSection() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <AboutTransition />

      <section
        id="about"
        className="about-section"
        aria-labelledby="about-heading"
      >
        <div className="page-container about-section__inner">
          <header className="about-section__header">
            <p className="about-section__label">OUTSIDE THE SCREEN</p>
            <Divider variant="full" className="about-section__header-divider" />
          </header>

          <div className="about-section__grid">
            <div ref={contentRef} className="about-section__content reveal">
              <p className="about-section__eyebrow reveal-stagger">ABOUT</p>

              <h2 id="about-heading" className="about-section__title reveal-stagger" data-delay="2">
                <span className="about-section__title-line">Beyond</span>
                <span className="about-section__title-line">
                  the pixels<span className="about-section__accent-dot">.</span>
                </span>
              </h2>

              <p className="about-section__intro reveal-stagger" data-delay="3">
                I&apos;m curious about how things work, why they don&apos;t, and what
                could make them better.
              </p>

              <Divider
                variant="short"
                className="about-section__divider reveal-stagger"
                data-delay="3"
              />

              <div className="about-section__body reveal-stagger" data-delay="4">
                <p>
                  When I&apos;m not crafting user journeys, here&apos;s the journey
                  I&apos;m on. Born in São Paulo, I grew up with creativity, culture,
                  and sports shaping my world. Curiosity carried me from Brazil to
                  Dublin, then Barcelona, and into Product Design.
                </p>
                <p>
                  Outside of design, you&apos;ll usually find me running through the
                  mountains, wandering around a museum, looking at old photographs,
                  traveling somewhere new, or sitting down for a very good coffee.
                </p>
              </div>

              <p className="about-section__closing reveal-stagger" data-delay="5">
                I think curiosity is a form of attention. And good design starts by
                paying attention.
              </p>

              <div className="about-section__cta-wrap reveal-stagger" data-delay="6">
                <Button
                  variant="secondary"
                  href="#about"
                  arrowDirection="right"
                  icon
                  className="about-section__cta button--flush-start"
                >
                  MORE ABOUT ME
                </Button>
              </div>
            </div>

            <div ref={visualRef} className="about-section__visual reveal">
              <div className="about-section__image-frame">
                <img
                  src="/images/about/portrait-composition.png"
                  alt="Karen Dinalli portrait with editorial geometric composition"
                  className="about-section__image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
