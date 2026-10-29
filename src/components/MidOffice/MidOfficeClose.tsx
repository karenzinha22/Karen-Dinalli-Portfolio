import { Button } from '../Button/Button';
import { H, Label } from '../WebPortal/WebPortalPrimitives';
import { MidOfficeFigure } from './MidOfficeFigure';
import { assets } from './midofficeAssets';

const rounds = [
  {
    title: 'ROUND 1 · CASE OVERVIEW',
    tested:
      'We tested how users interact with the Case Overview page, focusing on their ability to find and prioritise key information, navigate the page efficiently, and access important actions and collaboration details.',
    learned: (
      <>
        Users struggled to quickly identify key information and expected collaboration-related
        details to be more visible and accessible. <H>42% of participants in this round</H> also expressed a need for a
        cleaner, easier-to-scan Case Overview.
      </>
    ),
    changed:
      'We reorganised the information hierarchy to surface the most critical information first and increased the visibility of collaboration elements. We also removed unnecessary content, simplifying the Case Overview.',
  },
  {
    title: 'ROUND 2 · TASK LIST',
    tested:
      'We tested if prioritizing personal tasks in the main view and introducing a summary card improves task discoverability, reduces navigation effort, and helps users understand key information faster.',
    learned: (
      <>
        Participants found the new structure easier to navigate but wanted quicker ways to find and
        prioritise tasks. <H>30% of participants in this round</H> expressed the need for a faster, more intuitive way
        to access their assigned tasks.
      </>
    ),
    changed:
      'Prioritized personal tasks over grouped task lists, aiming to reduce search time and improve focus. A summary card was also added to provide users with key information and actionable insights at a glance.',
  },
];

const phaseOne = [
  'A modernised visual experience, aimed at greater consistency across the platform',
  'A technical update that kept day-to-day operations in place',
  'Existing business logic and editing workflows remained unchanged',
  'Users could continue working through familiar legacy dialogs, ensuring a smooth and low-risk transition',
];

const phaseTwo = [
  'Simpler workflows, aimed at a more intuitive experience',
  'An approach of validating through user behaviour and usage',
  'Further iteration based on real user feedback',
  'Avoided a full business logic rewrite to limit technical risk',
  'All new features and capabilities developed directly within the new application',
];

const lessons = [
  {
    title: 'Slow Down to Move Fast',
    body: 'Research investment at the start saves far more time than jumping straight to UI.',
    icon: assets.lessonSlow,
  },
  {
    title: 'Push Back With Evidence',
    body: 'Research findings gave us the credibility to defend a research-first approach to stakeholders.',
    icon: assets.lessonEvidence,
  },
  {
    title: 'Design Is Strategy',
    body: 'This project was never just a redesign it was a platform transformation that design led.',
    icon: assets.lessonStrategy,
  },
];

export function MidOfficeDemo() {
  return (
    <section className="wp-section" aria-labelledby="mo-demo-heading">
      <div className="page-container">
        <Label>9.0 · FIRST DEMO & VISION</Label>
        <div className="wp-split">
          <div>
            <h2 id="mo-demo-heading" className="wp-h2">
              Selling The Direction
            </h2>
            <p className="wp-body">
              The first concept demo served as a future-proofing initiative for the platform,
              validating the redesign direction with key stakeholders and users before committing to
              implementation.
            </p>
            <h3 className="wp-h3">Interactive Validation</h3>
            <p className="wp-body">
              Due to time constraints, we conducted two rounds of qualitative usability testing
              with support from our <strong>User Researcher and key stakeholders</strong>. Despite
              the limited timeline, these sessions uncovered valuable early insights into usability
              and collaboration patterns, helping us refine the design direction before
              implementation.
            </p>
          </div>
          <MidOfficeFigure
            src={assets.validation}
            alt="Usability session reviewing the MidOffice progress screen with stakeholders"
          />
        </div>

        {rounds.map((round) => (
          <div key={round.title}>
            <h3 className="wp-subhead">{round.title}</h3>
            <div className="mo-cards-3">
              <article className="wp-card">
                <h3 className="wp-card__title">WHAT WE TESTED</h3>
                <p className="wp-body">{round.tested}</p>
              </article>
              <article className="wp-card">
                <h3 className="wp-card__title">WHAT WE LEARNED</h3>
                <p className="wp-body">{round.learned}</p>
              </article>
              <article className="wp-card">
                <h3 className="wp-card__title">HOW IT CHANGED</h3>
                <p className="wp-body">{round.changed}</p>
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MidOfficeFinal() {
  return (
    <section className="wp-section" aria-labelledby="mo-final-heading">
      <div className="page-container">
        <Label>10 · ITERATIONS AFTER TESTING</Label>
        <h2 id="mo-final-heading" className="wp-h2">
          Final Design
        </h2>
        <p className="wp-body">
          We took into account the key insights from all two rounds, refining our interfaces into
          their final design
        </p>
        <MidOfficeFigure
          src={assets.finalDesign}
          alt="Annotated final design of login, dashboard, case list, and case overview"
        />
      </div>
    </section>
  );
}

export function MidOfficeStatus() {
  return (
    <section className="wp-section" aria-labelledby="mo-status-heading">
      <div className="page-container">
        <Label>11 · RELEASE APPROACH</Label>
        <h2 id="mo-status-heading" className="wp-h2">
          Strategy & Approach
        </h2>
        <p className="wp-body">
          To balance impact and risk, the release followed a structured two-phase migration,
          pairing an early foundation with a longer-term experience transformation.
        </p>

        <div className="wp-stack">
          <article className="wp-card">
            <h3 className="mo-phase__title">
              <span className="wp-num">01</span>
              PHASE 1: FOUNDATION & SEAMLESS TRANSITION
            </h3>
            <p className="wp-body">
              We introduced a modern interface by migrating all view-only experiences to the new
              front-end framework while maintaining the existing workflows users were familiar with.
            </p>
            <div className="wp-outcomes">
              <h3>What shipped in this phase</h3>
              <ul>
                {phaseOne.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="wp-card">
            <h3 className="mo-phase__title">
              <span className="wp-num">02</span>
              PHASE 2: INCREMENTAL EXPERIENCE TRANSFORMATION
            </h3>
            <p className="wp-body">
              With the new foundation in place, we gradually replaced legacy forms and editing
              experiences with redesigned, integrated components focused on usability and
              efficiency.
            </p>
            <div className="wp-outcomes">
              <h3>What this phase included</h3>
              <ul>
                {phaseTwo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function MidOfficeReflection() {
  return (
    <section className="wp-section" aria-labelledby="mo-reflection-heading">
      <div className="page-container">
        <Label>12 · REFLECTION</Label>
        <h2 id="mo-reflection-heading" className="wp-h2">
          What I Learned
        </h2>
        <blockquote className="mo-story">
          “This project reinforced the importance of slowing down before designing. Investing in
          research uncovered deeper workflow problems that visuals alone would never have solved.”
        </blockquote>
        <p className="wp-body">
          While there was significant pressure to move directly into UI creation, the decision to
          invest time in research, audits, and user understanding paid off. We uncovered problems
          that surface-level design would have missed entirely.
        </p>
        <p className="wp-body">
          The redesign became more than a visual refresh it became{' '}
          <H>
            a strategic transformation of how the platform works, scales, and supports its users on
            a daily basis.
          </H>
        </p>
        <div className="mo-cards-3">
          {lessons.map((lesson) => (
            <article key={lesson.title} className="wp-card mo-lesson">
              <h3>
                <img src={lesson.icon} alt="" />
                {lesson.title}
              </h3>
              <p>{lesson.body}</p>
            </article>
          ))}
        </div>

        <aside className="wp-disclaimer">
          <h3>DISCLAIMER</h3>
          <ol>
            <li>
              This project was developed in collaboration with product managers, developers,
              researchers, and other designers. The case study focuses on my specific contributions
              and design decisions. Some information has been altered or removed due to
              confidentiality requirements, but the process and design decisions accurately represent
              the work completed.
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

export function MidOfficeEnd() {
  return (
    <section className="wp-end" aria-label="End of case study">
      <div className="page-container">
        <h2>you&apos;ve reached the end!</h2>
        <p>Thanks for your attention :)</p>
        <Button icon={false} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          BACK TO THE TOP
        </Button>
      </div>
    </section>
  );
}
