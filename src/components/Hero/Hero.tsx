import { Button } from '../Button/Button';
import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="page-container hero__wrapper">
        <div className="hero__body">
          <div className="hero__grid">
            <div className="hero__content">
              <div className="hero__intro">
                <p className="hero__eyebrow animate-fade-up" data-delay="1">
                  PRODUCT DESIGNER · BARCELONA
                </p>

                <h1 id="hero-heading" className="hero__headline animate-fade-up" data-delay="2">
                  <span>Curious by nature.</span>
                  <span>Structured by design.</span>
                </h1>
              </div>

              <p className="hero__description animate-fade-up" data-delay="3">
                I design digital products that make complex things feel clear, useful
                and human.
              </p>

              <div className="hero__actions animate-fade-up" data-delay="4">
                <Button variant="primary" href="#projects" icon={false}>
                  VIEW PROJECTS
                </Button>
                <Button variant="secondary" href="#about" arrowDirection="right">
                  ABOUT ME
                </Button>
              </div>
            </div>

            <div className="hero__visual animate-fade-up" data-delay="3">
              <div className="hero__image-frame">
                <img
                  src="/images/hero-composition.png"
                  alt="Editorial portrait composition with geometric accents"
                  className="hero__image"
                  width={437}
                  height={559}
                />
              </div>
            </div>
          </div>

          <div className="hero__scroll-hint animate-fade-up" data-delay="4" aria-hidden="true">
            <span className="hero__scroll-arrow">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 3V13M8 13L4 9M8 13L12 9"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hero__scroll-text">(SCROLL DOWN &amp; EXPLORE)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
