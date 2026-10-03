import { Button } from '../Button/Button';
import { emailHref } from './aboutPageData';

export function AboutAvailability() {
  return (
    <section className="about-avail" aria-labelledby="about-avail-heading">
      <div className="page-container">
        <div className="about-avail__card">
          <div className="about-avail__visual">
            <img
              src="/images/about/availability-visual.png"
              alt="Editorial portrait of Karen seated with a red geometric overlay"
              className="about-avail__image"
            />
          </div>

          <div className="about-avail__content">
            <p className="about-avail__status">
              <span className="about-avail__status-dot" aria-hidden="true" />
              Available for work
            </p>
            <h2 id="about-avail-heading" className="about-avail__heading">
              Need a designer who takes{' '}
              <span className="about-page__accent">ownership</span>?
            </h2>
            <p className="about-avail__copy">
              Feel free to hit me up. I&apos;m looking forward to hearing from you :)
            </p>
            <Button
              variant="secondary"
              href={emailHref}
              arrowDirection="right"
              className="button--flush-start"
            >
              EMAIL ME
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
