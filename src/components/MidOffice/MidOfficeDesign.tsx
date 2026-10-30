import { H, Label } from '../WebPortal/WebPortalPrimitives';
import { MidOfficeFigure } from './MidOfficeFigure';
import { assets } from './midofficeAssets';

const storyOneFeedback = [
  'Replaced the traditional homepage with a role-based dashboard.',
  'Surfaced key information and tasks based on user permissions.',
  'Introduced a persistent sidebar for quick navigation.',
  'Enabled direct access to the Case List and Case Overview.',
  'Designed to reduce clicks and improve workflow efficiency.',
];

const storyTwoFeedback = [
  'Made the Task page a third entry point from the sidebar menu navigation.',
  'Prioritised Tasks Assigned to Me and Tasks for My Cases.',
  'Provided a clear summary of task status and workload.',
  'Made priorities and upcoming actions more visible.',
  'Designed to reduce scanning the full task list for relevant work.',
];

const screenReasons = [
  '2 user archetypes',
  'Role-based permission model',
  'High-frequency workflows',
  'Foundation for design system',
];

export function MidOfficeProcess() {
  return (
    <section className="wp-section" aria-labelledby="mo-process-heading">
      <div className="page-container">
        <Label>7.0 · DESIGN PROCESS</Label>
        <h2 id="mo-process-heading" className="wp-h2">
          From Insights to Solutions
        </h2>
        <p className="wp-body">
          With a clear understanding of user needs, I dove into wire-framing and iterations,
          focusing on:{' '}
          <H>
            simplifying complex workflows, unifying the visual design, and integrating user
            feedback throughout the process.
          </H>
        </p>

        <div className="wp-split mo-block">
          <div>
            <p className="wp-kicker">FLOWS AND SKETCHING</p>
            <h3 className="wp-h3">First mockups</h3>
            <p className="wp-body">
              We mapped core MidOffice workflows across different user roles, exploring various
              scenarios and decision paths before defining the final experience.
            </p>
          </div>
          <MidOfficeFigure
            src={assets.sketching}
            alt="Hand-drawn sketches of the task list, case list, dashboard, and case overview"
          />
        </div>

        <h3 className="wp-subhead">FIRST SCENARIO: CASE LIST</h3>
        <MidOfficeFigure
          src={assets.caseList}
          alt="Case list scenario from login to dashboard, case list, and case overview"
        />
        <MidOfficeFigure
          className="mo-block"
          src={assets.caseMockup}
          alt="Case list insights and low-fidelity wireframes for login, dashboard, case list, and case overview"
        />

        <h3 className="wp-subhead">SECOND SCENARIO: TASK LIST</h3>
        <MidOfficeFigure
          src={assets.taskList}
          alt="Task list scenario from login to dashboard, task list, and the task"
        />
        <MidOfficeFigure
          className="mo-block"
          src={assets.taskMockup}
          alt="Task list insights and low-fidelity wireframes for task groups, assigned tasks, and assessments"
        />

        <p className="wp-flow">
          Starting with low-fidelity wireframes to validate layouts and workflows quickly then
          moving to AI-assisted high-fidelity exploration.
        </p>
      </div>
    </section>
  );
}

export function MidOfficeScreens() {
  return (
    <section className="wp-section" aria-labelledby="mo-screens-heading">
      <div className="page-container">
        <Label>8.0 · CORE SCREENS</Label>
        <h2 id="mo-screens-heading" className="wp-h2">
          The Two Pillars
        </h2>
        <p className="wp-body">
          Phase 1 focuses on the primary operational areas: the highest-frequency workflows that
          form the foundation of the new experience.
        </p>

        <article className="wp-card mo-block">
          <h3 className="wp-card__title mo-marker-title">
            <img src={assets.marker} alt="" />
            Why these screens first
          </h3>
          <p className="wp-body">
            Rather than redesigning the full product at once, Phase 1 targets the 2 user types
            with the highest daily usage and the most reported UX friction. Getting these right
            establishes the design language, interaction patterns, and component library that the
            rest of the product inherits.
          </p>
          <ul className="mo-chips">
            {screenReasons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <h3 className="wp-subhead">USER STORY 1</h3>
        <blockquote className="mo-story">
          As a user, I want immediate access to my most relevant information and actions so that I
          can start working on cases without navigating through multiple screens.
        </blockquote>
        <div className="mo-panel">
          <MidOfficeFigure
            src={assets.oldDesign}
            alt="Legacy home, dashboard, case list, and case overview before the redesign"
          />
        </div>
        <article className="wp-card wp-outcomes mo-block">
          <h3>BASED ON USER FEEDBACK</h3>
          <ul>
            {storyOneFeedback.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <h3 className="wp-subhead">USER STORY 2</h3>
        <blockquote className="mo-story">
          As a task executor, I want to work through my task queue in a distraction-free
          environment with auto-advance, so that I can maintain momentum and complete work
          efficiently.
        </blockquote>
        <div className="mo-panel">
          <MidOfficeFigure
            src={assets.oldDesignTask}
            alt="Legacy task list and check early assessment view before the redesign"
          />
        </div>
        <article className="wp-card wp-outcomes">
          <h3>BASED ON USER FEEDBACK</h3>
          <ul>
            {storyTwoFeedback.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
