import { Button } from '../Button/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function AboutHero() {
  const leadRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();
  const followRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-hero" aria-labelledby="about-hero-heading">
      <div className="page-container about-hero__inner">
        <div ref={leadRef} className="about-hero__lead reveal">
          <p className="about-page__eyebrow reveal-stagger">A BIT ABOUT WHO I AM</p>

          <h1 id="about-hero-heading" className="about-page__display reveal-stagger" data-delay="2">
            <span>I like to look</span>{' '}
            <span className="about-page__accent">closer.</span>
          </h1>
        </div>

        <div ref={visualRef} className="about-hero__visual reveal">
          <div className="about-hero__composition">
            <img
              src="/images/about/hero-composition.png"
              alt="Karen standing against a mustard rectangle, with the caption: At people. At systems. At the details that don't quite make sense."
              className="about-hero__portrait"
            />
          </div>
        </div>

        <div ref={followRef} className="about-hero__follow reveal">
          <div className="about-hero__copy reveal-stagger" data-delay="3">
            <p>
              I&apos;m Karen, a{' '}
              <span className="about-page__accent">Product Designer</span> from Brazil,
              now based in Barcelona. I design digital products for complex worlds,
              where the interface is often only the visible part of a much bigger
              problem.
            </p>
            <p>
              I like understanding what sits underneath. Asking why. Finding
              patterns. Connecting the dots. And eventually turning something
              complicated into something that feels clear.
            </p>
          </div>

          <p className="about-hero__pull reveal-stagger" data-delay="4">
            Curiosity is probably my favourite design tool.
          </p>

          <p className="about-hero__copy reveal-stagger" data-delay="5">
            Outside the screen, I follow the same instinct: mountains, old
            photographs, art, unfamiliar places, good food, and long runs with
            nowhere particular to be.
          </p>

          <div className="about-hero__cta reveal-stagger" data-delay="6">
            <Button variant="primary" href="/projects" icon={false}>
              VIEW MY WORK
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
