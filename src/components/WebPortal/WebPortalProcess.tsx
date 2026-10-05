import { H, Label, WpPicture } from './WebPortalPrimitives';
import { WebPortalLightbox } from './WebPortalLightbox';
import { assets } from './webportalAssets';

export function WebPortalProcess() {
  return (
    <section className="wp-section" aria-labelledby="wp-process-heading">
      <div className="page-container">
        <Label>5.0 · DESIGN PROCESS</Label>
        <h2 id="wp-process-heading" className="wp-h2">
          Vision & Hypothesis
        </h2>
        <p className="wp-body">
          Deliver the smallest valuable increment first, then build iteratively. Each phase stands
          on its own with testable value — making sequencing as important as the UX/UI decisions.
        </p>
        <div className="wp-card wp-figure" style={{ marginTop: '1.5rem' }}>
          <WebPortalLightbox
            src={assets.timeline}
            alt="Roadmap Timeline for the Web Portal 2.0 product design work"
          >
            <img src={assets.timeline} alt="Roadmap Timeline for the Web Portal 2.0 product design work" />
          </WebPortalLightbox>
        </div>

        <div className="wp-split" style={{ marginTop: 'clamp(2.5rem, 6vh, 4rem)' }}>
          <div>
            <p className="wp-kicker wp-d">5.1 · AUDIT (RUNNING IN PARALLEL)</p>
            <p className="wp-kicker wp-m">5.1 · UX FOUNDATION</p>
            <h2 className="wp-h2">UX audit of the platform</h2>
            <p className="wp-body">
              Alongside research, I performed a continuous UX audit of the platform.
            </p>
          </div>
          <div className="wp-stack">
            <div className="wp-figure">
              <WebPortalLightbox
                src={assets.audit0}
                lightboxSrc={assets.audit3}
                alt="Annotated UX audit of the legacy Web Portal"
              >
                <img src={assets.audit0} alt="Annotated UX audit of the legacy Web Portal" />
              </WebPortalLightbox>
            </div>
            <p className="wp-quote-rule">
              Too much, without structure — the legacy Web Portal exposes complex workflows
              without clear navigation or context, slowing users down and reducing confidence in
              their actions.
            </p>
          </div>
        </div>

        <div className="wp-split" style={{ marginTop: 'clamp(2.5rem, 6vh, 4rem)' }}>
          <div>
            <p className="wp-kicker">5.2 · IA</p>
            <h2 className="wp-h2">First mockups</h2>
            <p className="wp-body">
              With a clear understanding of user needs for this first phase, I translated the
              Information Architecture into initial mockups and iterative explorations.
            </p>
            <p className="wp-body">
              These early concepts were designed to test how the new structure would support real
              workflows, allowing us to quickly validate ideas and refine them through
              collaborative workshops with users and stakeholders.
            </p>
          </div>
          <div>
            <div className="wp-figure">
              <WebPortalLightbox
                src={assets.ia}
                alt="Information architecture mockups for dashboard, navigation, search, and client overview"
              >
                <img
                  src={assets.ia}
                  alt="Information architecture mockups for dashboard, navigation, search, and client overview"
                />
              </WebPortalLightbox>
            </div>
            <p className="wp-caption">
              *Mockups created with Claude, V0, and Lovable. Prompts were developed using ChatGPT,
              enabling us to generate and explore multiple variations of the concept.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebPortalWorkshop() {
  return (
    <section className="wp-section" aria-labelledby="wp-workshop-heading">
      <div className="page-container">
        <Label>
          <span className="wp-d-inline">UX VALIDATION WORKSHOP</span>
          <span className="wp-m-inline">6.0 · VALIDATION WORKSHOP</span>
        </Label>
        <div className="wp-workshop">
          <div>
            <h2 id="wp-workshop-heading" className="wp-h2">
              UX Validation & Design Alignment Workshop
            </h2>
            <p className="wp-body">
              This session brought together key stakeholders to align on{' '}
              <H>
                UX research findings, validate core insights, and define the direction for the Web
                Portal MVP
              </H>
              . During the workshop, we reviewed interview results, confirmed key user needs, and
              discussed early design mock-ups focused on search and client overview.
            </p>
          </div>
          <img
            src={assets.meeting}
            alt="Workshop with stakeholders reviewing Web Portal designs around a table"
          />
        </div>
      </div>
    </section>
  );
}

export function WebPortalDesign() {
  return (
    <section className="wp-section" aria-labelledby="wp-design-heading">
      <div className="page-container">
        <Label id="wp-design-heading">
          <span className="wp-d-inline">DESIGN</span>
          <span className="wp-m-inline">7.0 · DESIGN</span>
        </Label>
        <p className="wp-body wp-center">
          Turning insights from user interviews, UX validation, and design alignment into a real
          product.
        </p>

        <h3 className="wp-subhead">SEARCH EXPERIENCE</h3>
        <div className="wp-figure wp-figure--cream">
          <WebPortalLightbox
            src={assets.searchDesktop}
            alt="Search experience flow from client search to results table"
          >
            <WpPicture
              desktop={assets.searchDesktop}
              mobile={assets.searchMobile}
              alt="Search experience flow from client search to results table"
            />
          </WebPortalLightbox>
        </div>
        <p className="wp-flow">
          <strong>Advisor Search Experience:</strong> The user logs in → Search Client is
          immediately available → Types to search → Autocomplete suggestions with recent searches
          appear → Presses Enter to view results → Results table displayed with key columns →
          Multiple accounts listed for selection.
        </p>
        <article className="wp-card wp-outcomes">
          <h3>SEARCH EXPERIENCE OUTCOMES</h3>
          <ul>
            <li>Instant client discovery with real-time search results as the user types.</li>
            <li>
              Faster navigation through keyboard shortcuts and full keyboard support for power
              users.
            </li>
            <li>Improved search accuracy with match highlighting.</li>
            <li>Reduced visual clutter by grouping results into clear categories.</li>
            <li>
              A scalable search foundation capable of supporting future entities and products.
            </li>
          </ul>
        </article>

        <h3 className="wp-subhead">CLIENT OVERVIEW EXPERIENCE</h3>
        <div className="wp-figure wp-figure--cream">
          <WebPortalLightbox
            src={assets.overviewDesktop}
            alt="Client overview experience flow with accounts, KPIs, and related widgets"
          >
            <WpPicture
              desktop={assets.overviewDesktop}
              mobile={assets.overviewMobile}
              alt="Client overview experience flow with accounts, KPIs, and related widgets"
            />
          </WebPortalLightbox>
        </div>
        <p className="wp-flow">
          <strong>Advisor Client Overview Experience:</strong> Advisor selects a client → Client
          Overview opens → Left panel lists all associated accounts → Selecting an account updates
          the right panel → Quick access to client details, accounts, recent activities, documents,
          alerts.
        </p>
        <article className="wp-card wp-outcomes">
          <h3>CLIENT OVERVIEW OUTCOMES</h3>
          <ul>
            <li>A single source of truth for all client information.</li>
            <li>Faster account analysis through a clear tabbed interface.</li>
            <li>At-a-glance insights using KPI cards and summary widgets.</li>
            <li>Improved relationship management with quick access to contact information.</li>
            <li>
              A modular dashboard that can easily accommodate future widgets and product types.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
