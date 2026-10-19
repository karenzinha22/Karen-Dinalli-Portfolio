import { H, Label } from '../WebPortal/WebPortalPrimitives';
import { MidOfficeFigure } from './MidOfficeFigure';
import { assets } from './midofficeAssets';

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

const keyNumbers = [
  { value: '7/7', label: 'Users cited task ownership as a critical gap' },
  { value: '4/7', label: 'Users reported performance delays affecting daily work' },
  { value: '7/7', label: 'Users lack notifications for changes or assignments' },
  { value: '4/7', label: 'Users need better filtering and search capabilities' },
];

const opportunities = [
  {
    title: 'TASK OWNERSHIP & ASSIGNMENT',
    tag: 'TASK MANAGEMENT',
    body: 'Introduce file ownership visibility in task list and assessments. Enable assigning dossiers to specific team members with status indicators.',
  },
  {
    title: 'IN-PLATFORM ALERT SYSTEM',
    tag: 'NOTIFICATIONS',
    body: 'Build a notification layer for document uploads, task assignments, and status changes eliminating blind spots across all user types.',
  },
  {
    title: 'SEARCH, FILTERS & STEP FLOW',
    tag: 'NAVIGATION',
    body: 'Enable partial-match and address-based search. Introduce advanced filtering in task list. Reduce back-and-forth between workflow steps.',
  },
  {
    title: 'READABILITY & VISUAL CLARITY',
    tag: 'UI & ACCESSIBILITY',
    body: 'Increase font size, improve contrast ratios, clarify progress bar labels, and simplify dense screens like Property Details for role-relevant views.',
  },
];

export function MidOfficeResearch() {
  return (
    <section className="wp-section" aria-labelledby="mo-research-heading">
      <div className="page-container">
        <Label>5.0 · DISCOVERY & RESEARCH</Label>
        <div className="wp-split">
          <div>
            <h2 id="mo-research-heading" className="wp-h2">
              Starting With Research First
            </h2>
            <p className="wp-body">
              Against strong pressure to jump straight into UI, the design team pushed for a
              research-first approach.
            </p>
            <p className="wp-body">
              We believed it was critical to fully understand{' '}
              <H>
                user pain points, current workflows, navigation behavior, permissions complexity,
                and existing usability issues
              </H>{' '}
              before creating a single screen.
            </p>
          </div>
          <div className="wp-stack">
            <article className="wp-card wp-stat">
              <p className="wp-stat__value">7</p>
              <p className="wp-stat__label">External user interviews</p>
            </article>
            <article className="wp-card wp-stat">
              <p className="wp-stat__value">2</p>
              <p className="wp-stat__label">Rounds of usability testing</p>
            </article>
            <article className="wp-card wp-stat">
              <p className="wp-stat__value">2</p>
              <p className="wp-stat__label">Markets: Netherlands & UK</p>
            </article>
          </div>
        </div>

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

export function MidOfficeFindings() {
  return (
    <section className="wp-section" aria-labelledby="mo-findings-heading">
      <div className="page-container">
        <Label>6.0 · KEY FINDINGS</Label>
        <h2 id="mo-findings-heading" className="wp-h2 wp-center">
          What We Uncovered
        </h2>
        <p className="wp-body wp-center">
          Research surfaced critical <H>pain points</H> that couldn&apos;t have been identified
          through design assumptions alone.
        </p>

        <div className="wp-split mo-block">
          <div>
            <h3 className="wp-h3">Qualitative Research Interview</h3>
            <p className="wp-body">
              We followed up with remote interviews to explore <H>pain points</H> more deeply.
              Underwriters consistently described the platform as slow and inconsistent, with too
              much information, overly complex steps that could be simplified, and missing
              functionalities that should be added to the new design to better support their daily
              tasks.
            </p>
          </div>
          <MidOfficeFigure
            src={assets.userResearch}
            alt="Remote interview reviewing a legacy MidOffice loan screen"
          />
        </div>

        <div className="wp-split mo-block">
          <h3 className="wp-h3">Key numbers</h3>
          <div className="mo-keynums">
            {keyNumbers.map((stat) => (
              <article key={stat.label} className="wp-card wp-stat">
                <p className="wp-stat__value">{stat.value}</p>
                <p className="wp-stat__label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <MidOfficeFigure
          className="mo-block"
          src={assets.affinity}
          alt="Affinity mapping grouping of interview insights across usability, navigation, missing features, UI design, and functionality"
        />

        <blockquote className="mo-pullquote">
          “Small things like inconsistent screens and too much scrolling really slow you down.”
          <cite>Anonymous User</cite>
        </blockquote>

        <h3 className="wp-subhead">DESIGN OPPORTUNITIES</h3>
        <div className="mo-cards-2">
          {opportunities.map((item) => (
            <article key={item.title} className="wp-card">
              <h3 className="wp-card__title">{item.title}</h3>
              <p className="mo-tag">{item.tag}</p>
              <p className="wp-body">{item.body}</p>
            </article>
          ))}
        </div>

        <article className="wp-dark mo-block">
          <h3>BASED ON THESE FINDINGS</h3>
          <p>
            We identified the key use cases for Underwriters, Multi-Case Managers, Approval Users
            and Read-Only Users through UX research. Using these insights, we defined a 5-month
            design sprint to deliver the MVP designs. We also collaborated closely with the
            engineering team to ensure alignment and maintain a fast project turnaround.
          </p>
          <p className="mo-dark-note">
            This redesign was the start of a new era for MidOffice focused on consistency,
            scalability and user clarity.
          </p>
        </article>
      </div>
    </section>
  );
}
