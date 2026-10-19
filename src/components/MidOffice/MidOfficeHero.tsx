import { Link } from 'react-router';
import { assets } from './midofficeAssets';

export function MidOfficeHero() {
  return (
    <header className="wp-hero">
      <div className="page-container">
        <Link to="/projects" className="wp-hero__back">
          <span className="wp-m-inline" aria-hidden="true">
            ←{' '}
          </span>
          Back
        </Link>
        <div className="wp-hero__rule" />

        <div className="wp-hero__intro">
          <p className="wp-hero__badge">IN PROGRESS</p>
          <h1 id="midoffice-heading" className="wp-hero__title">
            MidOffice
          </h1>
          <p className="mo-hero__subtitle">Redesigning a 12-Year-Old Mortgage Platform</p>
          <p className="wp-hero__lede">
            Transforming a legacy mortgage MidOffice platform into a scalable, modern, and
            user-centered experience through UX research, frontend migration, and strategic
            redesign.
          </p>
        </div>

        <dl className="wp-meta">
          <div>
            <dt>ROLE</dt>
            <dd>Product Designer</dd>
          </div>
          <div>
            <dt>TEAM</dt>
            <dd>Product designer, product manager, technical lead, engineering and architect</dd>
          </div>
          <div>
            <dt>SCOPE</dt>
            <dd>
              Redesign, research, user Interview, information architecture, accessibility, ux
              strategy.
            </dd>
          </div>
          <div>
            <dt>
              <span className="wp-d-inline">Year</span>
              <span className="wp-m-inline">YEAR</span>
            </dt>
            <dd>2025-2026</dd>
          </div>
        </dl>

        <div className="wp-hero__visual">
          <img src={assets.hero} alt="Tablet showing the MidOffice case list" />
        </div>
      </div>
    </header>
  );
}
