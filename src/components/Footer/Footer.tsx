import { Button } from '../Button/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { footerLinks, letsTalkHref } from './footerData';
import './Footer.css';

export function Footer() {
  const ctaRef = useScrollReveal<HTMLDivElement>();
  const artworkRef = useScrollReveal<HTMLDivElement>();
  const barRef = useScrollReveal<HTMLDivElement>();

  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="page-container site-footer__inner">
        <div className="site-footer__main">
          <div ref={ctaRef} className="site-footer__cta reveal">
            <div className="site-footer__content">
              <h2 id="footer-heading" className="site-footer__headline reveal-stagger">
                <span className="site-footer__headline-line">Have something</span>
                <span className="site-footer__headline-line">worth figuring out?</span>
              </h2>

              <div
                className="site-footer__divider site-footer__divider--short reveal-stagger"
                data-delay="2"
                aria-hidden="true"
              />

              <p className="site-footer__copy reveal-stagger" data-delay="3">
                I&apos;m always open to new challenges, interesting problems and good
                conversations. Let&apos;s talk about what we can build together.
              </p>

              <div className="site-footer__cta-wrap reveal-stagger" data-delay="4">
                <Button
                  variant="light"
                  href={letsTalkHref}
                  arrowDirection="right"
                  icon
                  className="site-footer__talk button--flush-start"
                >
                  LET&apos;S TALK
                </Button>
              </div>
            </div>

            <div ref={artworkRef} className="site-footer__artwork reveal">
              <div className="site-footer__artwork-frame">
                <img
                  src="/images/footer/artwork.png"
                  alt="Editorial portrait with coffee cup graphic composition"
                  className="site-footer__artwork-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="site-footer__divider site-footer__divider--full"
          aria-hidden="true"
        />

        <div ref={barRef} className="site-footer__bar reveal">
          <p className="site-footer__copyright reveal-stagger">
            © 2026 Karen Dinalli. All rights reserved. Designed with passion and
            precision.
          </p>

          <nav className="site-footer__links" aria-label="Footer links">
            <ul className="site-footer__links-list">
              {footerLinks.map((link, index) => (
                <li key={link.label} className="reveal-stagger" data-delay={String(index + 2)}>
                  <Button
                    variant="light"
                    href={link.href}
                    arrowDirection="right"
                    icon
                    className="site-footer__link"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
