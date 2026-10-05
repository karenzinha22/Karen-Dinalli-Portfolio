import { H, Label } from './WebPortalPrimitives';
import { assets } from './webportalAssets';

export function WebPortalContext() {
  return (
    <section className="wp-section" aria-labelledby="wp-context-heading">
      <div className="page-container">
        <Label>1.0 · CONTEXT</Label>
        <div className="wp-split">
          <div>
            <h2 id="wp-context-heading" className="wp-h2">
              What is the Web Portal?
            </h2>
            <p className="wp-body">
              The Ohpen Platform is the central workspace where different teams interact,
              collaborate, and manage their daily operations. It connects{' '}
              <H>front office, middle office, and back office</H> users within a single
              environment, making it a critical touchpoint for multiple user journeys.
            </p>
            <p className="wp-body">
              Given the diversity of users and tasks, the platform must balance flexibility
              with consistency. Features like role-based access and activity tracking are not
              only functional requirements but also key elements that shape trust, transparency,
              and user confidence in the system.
            </p>
          </div>
          <div className="wp-stack">
            <article className="wp-card">
              <h3 className="wp-card__title">FRONT OFFICE</h3>
              <p className="wp-body wp-d">
                The platform supports relationship management by giving teams access to client
                information, activity history, and communication tools. The focus here is on{' '}
                <H>clarity, accessibility, and enabling quick, informed interactions</H> with
                clients.
              </p>
              <p className="wp-body wp-m">
                The platform empowers teams to build stronger client relationships with clear,
                accessible information and tools for fast, informed interactions.
              </p>
            </article>
            <article className="wp-card">
              <h3 className="wp-card__title">MIDDLE & BACK OFFICE</h3>
              <p className="wp-body wp-d">
                The platform facilitates more complex workflows such as order processing,
                portfolio management, product handling, valuations, and reporting. These tasks
                require{' '}
                <H>efficient navigation, structured data presentation, and streamlined processes</H>{' '}
                to reduce cognitive load and improve accuracy.
              </p>
              <p className="wp-body wp-m">
                The platform supports complex workflows across orders, portfolios, products,
                valuations, and reporting, with clear navigation and structured data to reduce
                cognitive load and improve accuracy.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebPortalBand() {
  return (
    <section className="wp-band" aria-label="Design question">
      <div className="page-container">
        <p>
          How might we restructure a complex financial platform to align with user mental
          models and support faster, more reliable workflows?
        </p>
      </div>
    </section>
  );
}

export function WebPortalProblem() {
  return (
    <section className="wp-section" aria-labelledby="wp-problem-heading">
      <div className="page-container">
        <Label>2.0 · PROBLEM</Label>
        <h2 id="wp-problem-heading" className="wp-h2">
          The portal became a bottleneck
        </h2>
        <p className="wp-body">
          A few months ago, I was approached to assess the current state of the Web Portal,
          which had become a <H>critical pain point</H> across multiple dimensions, especially
          from a user experience and design perspective.
        </p>
        <p className="wp-body">
          Although Ohpen positions itself as a modern alternative to legacy banking systems,
          the Web Portal as the primary client-facing interface fails to reflect this vision.{' '}
          <H>
            The experience feels outdated, both visually and functionally, creating a disconnect
            between the brand promise and what users actually encounter.
          </H>{' '}
          This inconsistency negatively impacts trust, perceived innovation, and overall
          credibility.
        </p>

        <div className="wp-old-screens">
          <img
            src={assets.oldScreensDesktop}
            alt="Legacy Web Portal screens and key challenges: brand experience misalignment, outdated UI and interaction patterns, high cognitive load in complex workflows, limited scalability, accessibility and access issues, and inability to support future-ready experiences"
          />
        </div>
      </div>
    </section>
  );
}

export function WebPortalScope() {
  return (
    <section className="wp-section" aria-labelledby="wp-scope-heading">
      <div className="page-container">
        <Label>3.0 · SCOPE & STRATEGY</Label>
        <div className="wp-split">
          <div>
            <h2 id="wp-scope-heading" className="wp-h2">
              Focusing on what matters most
            </h2>
            <p className="wp-body">
              As part of Web Portal 2.0, we focused on{' '}
              <H>redesigning Contact & Account Management</H>, the most used and highest-impact
              area of the platform. This section accounts for around{' '}
              <H>37% of advisor interactions</H>, making it the highest-impact opportunity to
              improve the overall experience early on.
            </p>
          </div>
          <div className="wp-stack">
            <article className="wp-card">
              <h3 className="wp-card__title">⚠️ HIGH FRICTION</h3>
              <p className="wp-body">
                Users described it as <strong>slow and complex</strong>
              </p>
            </article>
            <article className="wp-card">
              <h3 className="wp-card__title">📊 HIGH USAGE</h3>
              <p className="wp-body">
                Around <strong>37% of advisor</strong> interactions
              </p>
            </article>
            <article className="wp-card">
              <h3 className="wp-card__title">💼 BUSINESS CRITICAL</h3>
              <p className="wp-body">
                Impacts <strong>satisfaction & sales conversations</strong>
              </p>
            </article>
          </div>
        </div>

        <article className="wp-dark" style={{ marginTop: '2rem' }}>
          <h3>DESIGN OPPORTUNITY</h3>
          <p>
            Focusing on <H>Contact & Account Management</H> allowed us to rethink a high-impact,
            high-frequency experience — transforming it from a source of friction into a
            foundation for a more modern, scalable, and user-centered platform.
          </p>
        </article>
      </div>
    </section>
  );
}
