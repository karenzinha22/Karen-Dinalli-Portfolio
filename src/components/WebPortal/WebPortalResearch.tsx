import { H, Label } from './WebPortalPrimitives';

export function WebPortalResearch() {
  return (
    <section className="wp-section" aria-labelledby="wp-research-heading">
      <div className="page-container">
        <Label>4.0 · RESEARCH & DISCOVERY</Label>
        <div className="wp-split">
          <div>
            <h2 id="wp-research-heading" className="wp-h2">
              Research across 7 roles
            </h2>
            <p className="wp-body">
              To ensure the Web Portal redesign addressed real <H>user needs</H>, we conducted
              interviews with key user groups across the platform, including front office, middle
              office, and back office teams.
            </p>
            <p className="wp-body">
              These conversations helped uncover day-to-day challenges, workflow inefficiencies,
              and unmet needs within the current experience.
            </p>
          </div>
          <ul className="wp-stats wp-d" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li className="wp-card wp-stat">
              <p className="wp-stat__value">12</p>
              <p className="wp-stat__label">Research sessions</p>
            </li>
            <li className="wp-card wp-stat">
              <p className="wp-stat__value">7</p>
              <p className="wp-stat__label">Distinct user roles</p>
            </li>
            <li className="wp-card wp-stat">
              <p className="wp-stat__value">23</p>
              <p className="wp-stat__label">Usability issues identified</p>
            </li>
          </ul>
          <div className="wp-m">
            <ul className="wp-stats wp-stats--mobile" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li className="wp-card wp-stat">
                <p className="wp-stat__value">12</p>
                <p className="wp-stat__label">Research sessions</p>
              </li>
              <li className="wp-card wp-stat">
                <p className="wp-stat__value">7</p>
                <p className="wp-stat__label">User roles</p>
              </li>
              <li className="wp-card wp-stat">
                <p className="wp-stat__value">3</p>
                <p className="wp-stat__label">Operational teams</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="wp-stack" style={{ marginTop: '1.75rem' }}>
          <article className="wp-card wp-finding">
            <div className="wp-finding__head">
              <h3>🔍 Search</h3>
              <span className="wp-tag wp-tag--gold">HIGH FREQUENCY</span>
            </div>
            <p className="wp-finding__meta">8 of 12 sessions cited search pain</p>
            <ul>
              <li>
                <strong>Entity pre-selection blocks the search flow:</strong> Before typing, users
                must choose what kind of entity to search. This extra mandatory step slows down a
                routine action performed dozens of times per day.
              </li>
              <li>
                <strong>Active and archived accounts mixed in results:</strong> Searching a client
                returns all accounts with no visual separation. In a live client call, users risk
                taking action on the wrong account.
              </li>
              <li>
                <strong>Search auto-redirects without warning:</strong> When there is one match,
                the system navigates directly to it. Users expecting a list are disoriented.
              </li>
            </ul>
            <blockquote>
              “As a back-office user, I want a fast, prominent search that intelligently interprets
              my input and allows me to refine results, so I can reliably find the right customer
              in seconds.”
            </blockquote>
          </article>

          <article className="wp-card wp-finding">
            <div className="wp-finding__head">
              <h3>👷‍♀️ Client Details</h3>
              <span className="wp-tag wp-tag--red">CRITICAL</span>
            </div>
            <p className="wp-finding__meta">6 of 12 sessions cited client details pain</p>
            <ul>
              <li>Switching contact tabs doesn't update the active contact.</li>
              <li>
                Contact ID not visible in client details — users must navigate to the User Trail to
                find it.
              </li>
              <li>
                Account dropdown shows only IDs — impossible to distinguish accounts without
                clicking each one.
              </li>
            </ul>
            <blockquote>
              “As a back-office user, I want a single customer overview that summarizes the
              customer and their linked accounts so I can understand the situation at a glance.”
            </blockquote>
          </article>
        </div>

        <div className="wp-split" style={{ marginTop: '3rem' }}>
          <div>
            <p className="wp-kicker wp-kicker--ochre">BASED ON THESE FINDINGS</p>
            <h2 className="wp-h2">What the new Web Portal needs to be</h2>
          </div>
          <div className="wp-principles">
            <article className="wp-card">
              <h3 className="wp-principle-title">SAME PATTERNS, EVERYWHERE</h3>
              <span className="wp-tag wp-tag--slate">PREDICTABLE</span>
              <p className="wp-body" style={{ marginTop: '0.75rem' }}>
                Filters, search, layouts, tables, and terminology must behave consistently across
                every screen. Users should never have to re-learn the same interaction in a
                different section.
              </p>
            </article>
            <article className="wp-card">
              <h3 className="wp-principle-title">SHOW ME WHAT I NEED, WHERE I AM</h3>
              <span className="wp-tag wp-tag--slate">CONTEXTUAL</span>
              <p className="wp-body" style={{ marginTop: '0.75rem' }}>
                The right information must be available at the point of action, not two tabs away.
                Users shouldn't need a second screen to make a confident decision.
              </p>
            </article>
            <article className="wp-card">
              <h3 className="wp-principle-title">I CAN RELY ON WHAT I SEE</h3>
              <span className="wp-tag wp-tag--slate">TRUSTWORTHY</span>
              <p className="wp-body" style={{ marginTop: '0.75rem' }}>
                Session state, audit trails, contact context and account status must be accurate
                and stable. If users can't trust the data on screen, every action becomes a risk.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

const desktopRoleItems = [
  'UX research to uncover key pain points and guide priorities',
  'Scaled the design system for consistency and faster delivery',
  'Improved accessibility with WCAG-aligned practices',
  'Aligned UX/UI, engineering, and product for smoother collaboration',
  'Drove decisions through workshops and demos',
];

const mobileRoleItems = [
  {
    n: '01',
    title: 'FRAME THE PROBLEM',
    body: 'Connected business goals, user evidence, and technical constraints into a clear design direction.',
  },
  {
    n: '02',
    title: 'LEAD THE EXPERIENCE DESIGN',
    body: 'Mapped workflows, explored information architecture, prototyped core journeys, and validated decisions with users.',
  },
  {
    n: '03',
    title: 'ALIGN A MULTIDISCIPLINARY TEAM',
    body: 'Worked closely with product managers, developers, researchers, and designers to sequence the work and build shared ownership.',
  },
  {
    n: '04',
    title: 'CREATE SCALABLE PATTERNS',
    body: 'Translated the redesign into reusable interaction and interface patterns for the wider platform.',
  },
];

export function WebPortalRole() {
  return (
    <section className="wp-section" aria-labelledby="wp-role-heading">
      <div className="page-container">
        <Label>MY ROLE & APPROACH</Label>
        <div className="wp-split">
          <div>
            <h2 id="wp-role-heading" className="wp-h2">
              Driving structure, clarity, and scalability
            </h2>
            <div className="wp-d">
              <p className="wp-body">
                We were brought in to evaluate the current experience and identify opportunities to
                transform the Web Portal into a <H>modern, user-centered product</H> aligned with
                Ohpen's brand and future vision.
              </p>
              <p className="wp-body">
                My role focused on bridging the gap between business goals, technical constraints,
                and user needs —{' '}
                <H>
                  analyzing existing user flows, identifying friction points, and reframing
                  challenges from a UX/UI perspective
                </H>{' '}
                to uncover meaningful design opportunities.
              </p>
            </div>
          </div>
          <ul className="wp-role-list wp-d">
            {desktopRoleItems.map((item) => (
              <li key={item}>
                <span className="wp-dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="wp-m">
          <ul className="wp-role-list" style={{ marginTop: '1.25rem' }}>
            {mobileRoleItems.map((item) => (
              <li key={item.n}>
                <span className="wp-num">{item.n}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p className="wp-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
