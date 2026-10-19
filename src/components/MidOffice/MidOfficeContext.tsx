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
              MidOffice is a mortgage operations platform used by financial institutions to manage
              complex mortgage workflows.
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
            <article className="wp-card">
              <h3 className="wp-card__title mo-marker-title">
                <img src={assets.marker} alt="" />
                Business urgency
              </h3>
              <p className="wp-body">
                To achieve the company&apos;s 2027 vision of becoming <strong>&quot;best in class&quot;</strong>,
                the platform needed modernization now not incremental fixes. A strategic redesign
                became unavoidable.
              </p>
            </article>
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
