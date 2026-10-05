import { Button } from '../Button/Button';
import { H, Label } from './WebPortalPrimitives';

export function WebPortalTakeaways() {
  return (
    <section className="wp-section" aria-labelledby="wp-takeaways-heading">
      <div className="page-container">
        <Label id="wp-takeaways-heading">
          <span className="wp-d-inline">TAKEAWAYS</span>
          <span className="wp-m-inline">8.0 · TAKEAWAYS</span>
        </Label>
        <div className="wp-stack">
          <article className="wp-card wp-takeaway">
            <h3>MVP LAUNCH & PRODUCT DIRECTION</h3>
            <p className="wp-body">
              Owned UX and product direction for the Web Portal MVP, aligning user needs, business
              goals, and technical constraints. Partnered with engineering to prioritise and
              deliver high-impact features based on early user feedback.
            </p>
          </article>
          <article className="wp-card wp-takeaway">
            <h3>CROSS-FUNCTIONAL ALIGNMENT</h3>
            <p className="wp-body">
              Established strong alignment across design, product, and business from the outset,
              enabling faster decision-making and consistent focus on user and business value.
            </p>
          </article>
          <article className="wp-card wp-takeaway">
            <h3>PRODUCT STRATEGY & VALUE DEFINITION</h3>
            <p className="wp-body">
              Collaborated with stakeholders to define the Web Portal's value proposition,
              translating user insights into clear product priorities that supported adoption and
              future scalability.
            </p>
          </article>
        </div>

        <article className="wp-dark wp-balance" style={{ marginTop: '2rem' }}>
          <h2>BALANCING SPEED VS. DISCOVERY</h2>
          <p>
            Not everything followed an ideal process. While the development team was eager to start
            frontend implementation, user interviews had not yet been conducted.
          </p>
          <div className="wp-balance__item">
            ⚡ <H>Pressure to move fast</H> created a risk of building without validated insights
          </div>
          <div className="wp-balance__item">
            🔴 <H>Design advocated for research</H> to avoid misaligned decisions early on
          </div>
          <div className="wp-balance__item">
            💛 <H>Negotiated a middle ground</H>, aligning on quick, focused interviews before
            development progressed
          </div>
          <div className="wp-balance__item">
            💚 <strong>Outcome:</strong> ensured early decisions were informed by real user needs
            without significantly delaying delivery
          </div>
        </article>
      </div>
    </section>
  );
}

export function WebPortalInProgress() {
  return (
    <section className="wp-section wp-progress" aria-labelledby="wp-progress-heading">
      <div className="page-container">
        <Label>IN PROGRESS</Label>
        <h2 id="wp-progress-heading" className="wp-h2">
          Client Navigation
        </h2>
        <p className="wp-body">
          Design is currently focused on the{' '}
          <H>Client Module Navigation, Transactions and Portfolio</H>.
        </p>
        <ul className="wp-progress__pills">
          <li>Interaction patterns</li>
          <li>A/B Testing</li>
          <li>UI decisions</li>
        </ul>

        <aside className="wp-disclaimer">
          <h3>DISCLAIMER</h3>
          <ol>
            <li>
              This project was developed in collaboration with product managers, developers,
              researchers, and other designers. The case study focuses on my specific contributions
              and design decisions. Some information has been altered or removed due to
              confidentiality requirements, but the process and outcomes accurately represent the
              work completed.
            </li>
            <li>
              Patricia was one of the Product Designers on this project, and her contribution was
              highly valuable throughout the design process. The work was developed collaboratively
              as part of a multidisciplinary team, with shared ownership of outcomes and decisions.
            </li>
          </ol>
        </aside>
      </div>
    </section>
  );
}

export function WebPortalEnd() {
  return (
    <section className="wp-end" aria-label="End of case study">
      <div className="page-container">
        <h2>you've reached the end!</h2>
        <p>Thanks for your attention :)</p>
        <Button
          icon={false}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO THE TOP
        </Button>
      </div>
    </section>
  );
}
