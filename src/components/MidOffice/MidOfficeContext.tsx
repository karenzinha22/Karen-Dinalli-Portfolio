import { H, Label } from '../WebPortal/WebPortalPrimitives';
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
  'Design Validation',
  'Cross-functional Collab',
  'Improve Accessibility',
];

function OldPlatformGallery() {
  const screens = [...assets.oldPlatformScreens, ...assets.oldPlatformScreens];

  return (
    <div className="mo-marquee">
      <ul className="mo-marquee__track">
        {screens.map((screen, index) => {
          const duplicate = index >= assets.oldPlatformScreens.length;
          return (
            <li
              key={`${screen.src}-${index}`}
              className="mo-marquee__item"
              aria-hidden={duplicate ? true : undefined}
            >
              <img src={screen.src} alt={duplicate ? '' : screen.alt} draggable={false} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

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
              <strong>What is MidOffice?</strong>
            </p>
            <p className="wp-body">
              MidOffice is a mortgage application processing platform built to automate and manage
              the journey from application submission to lending decision.
            </p>
            <p className="wp-body">
              It handles complex processing activities behind the scenes, while providing
              underwriters with the tools to monitor applications, manage tasks and resolve
              exceptions that require human intervention.
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

        <OldPlatformGallery />
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
              The goal of the MidOffice redesign was to simplify a complex mortgage processing
              platform, improving usability, navigation and workflow efficiency.
            </p>
            <p className="wp-body">
              We wanted to help underwriters find the information they need faster, manage their
              tasks more effectively, and have better visibility and control over the mortgage
              application process.
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
        <figure className="mo-process">
          <img
            src={assets.progressLine}
            alt="MidOffice process from research to creation, across Discover, Define, Ideate, and Implement"
          />
        </figure>
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
              <ul className="mo-chips mo-chips--contribution">
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
