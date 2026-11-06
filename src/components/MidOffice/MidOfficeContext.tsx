import { H, Label, WpPicture } from '../WebPortal/WebPortalPrimitives';
import { MidOfficeFigure } from './MidOfficeFigure';
import { assets } from './midofficeAssets';

const limits = [
  'OUTDATED UI FROM 2012',
  'LEGACY FRONTEND ARCHITECTURE',
  'DIFFICULT SCALABILITY',
  'GROWING TECHNICAL DEBT',
  'INCONSISTENT USER EXPERIENCE',
  'POOR DEVELOPER EXPERIENCE',
  'SLOW FEATURE DELIVERY',
  'COMPLEX NAVIGATION & WORKFLOWS',
];

const plan = [
  {
    n: '1',
    title: 'Month 1–4',
    items: [
      'UX Audit',
      'Stakeholder talks',
      'User recruitment',
      '7 user interviews',
      'Workflow analysis',
    ],
  },
  {
    n: '2',
    title: 'Month 4–5',
    items: ['Pain point clusters', 'HMW exercises', 'Opportunity areas'],
  },
  {
    n: '3',
    title: 'Month 5+',
    items: ['Wireframes', 'Prototypes', 'Validation rounds'],
  },
  {
    n: '4',
    title: 'Ongoing',
    items: ['Testing NL + UK', 'A/B testing', 'Iteration'],
  },
];

const goalColumns = [
  {
    title: 'USER GOALS',
    items: [
      'Improve usability',
      'Simplify navigation',
      'Reduce onboarding complexity',
      'Create intuitive experiences',
    ],
  },
  {
    title: 'BUSINESS GOALS',
    items: [
      'Reduce technical debt',
      'Improve scalability',
      'Speed up development',
      'Improve retention',
    ],
  },
  {
    title: 'TECHNICAL GOALS',
    items: [
      'Modernize frontend',
      'Improve performance',
      'Enable integrations',
      'Better Engineering experience',
    ],
  },
];

const team = [
  '2x Product designers',
  '2x PMs',
  '1 Architect',
  '3x Front-end eng',
  '2x Back-end eng',
  '1x Lead developer',
];

const contribution = [
  'UX Research',
  'UX Audit',
  'Problem Framing',
  'User Flows',
  'Wire-framing',
  'Design validation',
  'Cross-functional collab',
];

const oldPlatformAlt =
  'Legacy MidOffice case list and case overview, the platform before the redesign';

export function MidOfficeOverview() {
  return (
    <section className="wp-section" aria-labelledby="mo-overview-heading">
      <div className="page-container">
        <Label>1.0 · OVERVIEW</Label>
        <div className="wp-split">
          <div>
            <h2 id="mo-overview-heading" className="wp-h2">
              The Platform
            </h2>
            <p className="wp-body">
              MidOffice is a cloud-based platform that connects lenders, brokers, and financial
              institutions to simplify mortgage applications and manage the journey from application
              to completion.
            </p>
          </div>
          <div className="wp-stack">
            <article className="wp-card">
              <h3 className="wp-card__title">LEGACY PLATFORM MODERNIZATION</h3>
              <p className="wp-body">
                The platform was built more than 12 years ago and relied on an outdated UI and
                legacy frontend technology (GWT), making it difficult to scale, maintain, and
                evolve.
              </p>
            </article>
            <article className="wp-card">
              <h3 className="wp-card__title">BEYOND MIGRATION</h3>
              <p className="wp-body">
                While the initial initiative focused on frontend migration, the team identified a
                far greater opportunity to <H>redesign the entire experience</H> and modernize the
                platform for both users and developers.
              </p>
            </article>
          </div>
        </div>

        <div className="mo-panel">
          <MidOfficeFigure src={assets.oldPlatformDesktop} alt={oldPlatformAlt}>
            <WpPicture
              desktop={assets.oldPlatformDesktop}
              mobile={assets.oldPlatformMobile}
              alt={oldPlatformAlt}
            />
          </MidOfficeFigure>
        </div>
      </div>
    </section>
  );
}

export function MidOfficeChallenge() {
  return (
    <section className="wp-section" aria-labelledby="mo-challenge-heading">
      <div className="page-container">
        <Label>2.0 · THE CHALLENGE</Label>
        <div className="wp-split">
          <div>
            <h2 id="mo-challenge-heading" className="wp-h2">
              A Platform at Its Limits
            </h2>
            <p className="wp-body">
              The platform had become increasingly difficult to maintain and no longer matched
              modern user expectations.
            </p>
          </div>
          <ol className="mo-issues">
            {limits.map((item, index) => (
              <li key={item}>
                <span className="wp-num">{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="mo-audit">
          <p className="mo-audit__label">INITIAL AUDIT</p>
          <p className="wp-body">
            We conducted an initial heuristic evaluation before the user research phase and a
            second evaluation during the interview process to validate findings against real user
            behavior.
          </p>
          <MidOfficeFigure
            src={assets.audit}
            alt="Initial heuristic audit of the legacy MidOffice task list, case overview, case list, and home navigation"
          />
        </div>
      </div>
    </section>
  );
}

export function MidOfficeQuestion() {
  return (
    <section className="wp-band" aria-label="Design question">
      <div className="page-container">
        <p>How might we simplify complex mortgage workflow for daily operational users?</p>
      </div>
    </section>
  );
}

export function MidOfficeGoals() {
  return (
    <section className="wp-section" aria-labelledby="mo-goals-heading">
      <div className="page-container">
        <Label>3.0 · PROJECT GOALS</Label>
        <h2 id="mo-goals-heading" className="wp-h2">
          Defining Success
        </h2>
        <p className="wp-body">
          Three layers of goals shaped the redesign:{' '}
          <H>user needs, business outcomes, and technical ambitions.</H>
        </p>
        <div className="mo-cards-3">
          {goalColumns.map((column) => (
            <article key={column.title} className="wp-card">
              <h3 className="wp-card__title">{column.title}</h3>
              <ul className="mo-card-list">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="wp-body mo-goals-note">
          To bring structure to the project, I adopted the Double Diamond framework, using its four
          phases, Discover, Define, Develop and Deliver, to build a deeper understanding of our
          users, clearly identify the problems to solve, and guide the development of meaningful
          solutions.
        </p>

        <h3 className="wp-subhead">OUR PLAN</h3>
        <ol className="mo-plan">
          {plan.map((step) => (
            <li key={step.title} className="mo-plan__step">
              <div className="mo-plan__head">
                <span className="wp-num">{step.n}</span>
                <span className="mo-plan__title">{step.title}</span>
              </div>
              <ul className="mo-plan__items">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mo-cards-3 mo-methods">
          <article className="wp-card mo-method">
            <h3>
              <img src={assets.methodAudit} alt="" />
              UX/UI Audit
            </h3>
            <p>
              <strong>Full heuristic audit</strong> of the legacy platform&apos;s screens, patterns,
              and navigation flows.
            </p>
          </article>
          <article className="wp-card mo-method">
            <h3>
              <img src={assets.methodInterviews} alt="" />
              User Interviews
            </h3>
            <p>
              <strong>7 external users</strong> across different operational roles in{' '}
              <strong>Netherlands and UK markets.</strong>
            </p>
          </article>
          <article className="wp-card mo-method">
            <h3>
              <img src={assets.methodWorkflow} alt="" />
              Workflow Analysis
            </h3>
            <p>Deep dive into case management, task workflows, and permissions complexity.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function MidOfficeTeam() {
  return (
    <section className="wp-section" aria-labelledby="mo-team-heading">
      <div className="page-container">
        <Label>4.0 · TEAM & ROLE</Label>
        <div className="wp-split">
          <div>
            <h2 id="mo-team-heading" className="wp-h2">
              Who We Are
            </h2>
            <p className="wp-body">
              A cross-functional team balancing user needs, business strategy, and engineering
              constraints.
            </p>
          </div>
          <div className="wp-stack">
            <article className="wp-card">
              <h3 className="wp-card__title">THE TEAM</h3>
              <ul className="mo-chips">
                {team.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="wp-card">
              <h3 className="wp-card__title">MY CONTRIBUTION</h3>
              <ul className="mo-chips">
                {contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
