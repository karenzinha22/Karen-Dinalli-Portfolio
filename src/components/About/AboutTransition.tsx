import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

export function AboutTransition() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      className="about-transition"
      aria-labelledby="about-transition-heading"
    >
      <div ref={ref} className="about-transition__inner reveal">
        <h2
          id="about-transition-heading"
          className="about-transition__headline reveal-stagger"
        >
          Structured mind. Curious soul.
        </h2>
        <div className="about-transition__figure reveal-stagger" data-delay="2">
          <img
            src="/images/about/transition-figure.png"
            alt=""
            className="about-transition__image"
            width={498}
            height={280}
          />
        </div>
      </div>
    </section>
  );
}
