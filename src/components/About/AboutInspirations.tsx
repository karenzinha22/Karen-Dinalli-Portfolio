import { useScrollReveal } from '../../hooks/useScrollReveal';

export function AboutInspirations() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-inspire" aria-labelledby="about-inspire-heading">
      <div className="page-container about-inspire__inner">
        <div ref={contentRef} className="about-inspire__content reveal">
          <p className="about-page__eyebrow reveal-stagger">WHAT SHAPES MY EYE</p>

          <h2 id="about-inspire-heading" className="about-page__display about-page__display--section reveal-stagger" data-delay="2">
            <span>
              I find <span className="about-page__accent">inspirations</span> in
            </span>
            <span>places that have</span>
            <span>nothing to do with</span>
            <span>interface.</span>
          </h2>

          <div className="about-inspire__copy reveal-stagger" data-delay="3">
            <p>
              They come from places, moments and details that stop me in my tracks.
              A photo, a painting, a view, a conversation, a good coffee.
            </p>
            <p>
              All of it expands the way I see and always finds its way back into my
              work.
            </p>
          </div>

          <p className="about-inspire__collect reveal-stagger" data-delay="4">
            <span className="about-inspire__collect-text">
              <span className="about-inspire__collect-line">
                <span className="about-inspire__collect-i">I</span>
                {' '}
                collect
              </span>
              <span className="about-page__accent">references.</span>
            </span>
          </p>
        </div>

        <div ref={visualRef} className="about-inspire__visual reveal">
          <figure className="about-inspire__collage">
            <img
              src="/images/about/inspiration-collage.svg"
              alt="Editorial collage of architecture, mountains, coffee, and running"
              className="about-inspire__collage-image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
