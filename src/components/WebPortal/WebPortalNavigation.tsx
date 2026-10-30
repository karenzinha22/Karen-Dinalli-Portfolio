import { H, Label } from './WebPortalPrimitives';
import { WebPortalLightbox } from './WebPortalLightbox';

const auditNavigation = '/images/case-studies/webportal/audit-navigation.png';
const auditReport = '/images/case-studies/webportal/webportal-audit-report.png';
const cardSorting = '/images/case-studies/webportal/crad-sorting-result.png';
const moduleStructure = '/images/case-studies/webportal/module-structure.png';

function NavFigure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <>
      <div className="wp-figure">
        <WebPortalLightbox src={src} alt={alt}>
          <img src={src} alt={alt} />
        </WebPortalLightbox>
      </div>
      <p className="wp-caption">{caption}</p>
    </>
  );
}

export function WebPortalNavigation() {
  return (
    <section className="wp-section" aria-labelledby="wp-nav-heading">
      <div className="page-container">
        <Label>6.0 · NAVIGATION & INFORMATION ARCHITECTURE</Label>
        <h2 id="wp-nav-heading" className="wp-h2">
          From a confusing menu to a clearer navigation structure
        </h2>

        <h3 className="wp-subhead">1. FULL NAVIGATION AUDIT</h3>
        <p className="wp-body">
          In my first meeting with the Product Manager, I proposed researching the navigation
          before redesigning it. The audit mapped a menu of{' '}
          <H>15 modules and about 157 entries</H>, with long lists and no clear place for tasks.
        </p>
        <NavFigure
          src={auditNavigation}
          alt="Annotated audit of the Web Portal header and menus across 15 modules"
          caption="The original menu put the whole platform in one bar. Categories were unclear, and tasks were hard to place."
        />

        <h3 className="wp-subhead">2. WHY CLIENTS FIRST</h3>
        <p className="wp-body">
          The Client module held <H>36 sub-menus</H> and represented{' '}
          <H>approximately 37% of advisor clicks</H>. The first phase focused there.
        </p>
        <NavFigure
          src={auditReport}
          alt="Web Portal audit report showing the menu inventory, with Clients holding 36 of about 157 entries"
          caption="Clients accounted for 36 of about 157 navigation entries, which made it the first module to restructure."
        />

        <h3 className="wp-subhead">3. FROM RESEARCH TO A PROPOSED STRUCTURE</h3>
        <p className="wp-body">
          Card sorting on the Client module showed which sub-menus users expected to find
          together. The proposal groups the original{' '}
          <H>36 sub-menus into 20 across five tabs</H>: Client Info, Documents & Reports,
          Savings, Movements, and Payments. This is a proposed simplification informed by
          research, not a measured improvement or a shipped result.
        </p>
        <p className="wp-body">
          A contextual sidebar was familiar and scalable. A tab-based structure kept global
          navigation visible and anchored users in the client context.{' '}
          <H>I recommended the tab-based approach</H> as the design direction.
        </p>
        <NavFigure
          src={cardSorting}
          alt="Card sorting result proposing five client sections: Client Info, Documents and Reports, Savings, Movements, and Payments"
          caption="The five sections sit inside the client, while global navigation stays available."
        />

        <h3 className="wp-subhead">4. APPLYING THE STRUCTURE</h3>
        <p className="wp-body">
          The same five sections hold different items when Savings or Investments is the active
          account type.
        </p>
        <NavFigure
          src={moduleStructure}
          alt="Proposed module structure showing Savings and Investments variations across the same five sections"
          caption="Savings and Investments are variations of one proposed architecture, not a second menu."
        />
      </div>
    </section>
  );
}
