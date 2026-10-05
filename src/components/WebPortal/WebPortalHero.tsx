import { Link } from 'react-router';
import { assets } from './webportalAssets';

export function WebPortalHero() {
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
          <p className="wp-hero__badge wp-d">IN PROGRESS</p>
          <p className="wp-hero__project wp-m">PROJECT 001</p>
          <h1 id="webportal-heading" className="wp-hero__title">
            Web Portal 2.0
          </h1>
          <p className="wp-hero__lede wp-d">
            Transforming a complex legacy banking platform into a scalable, intuitive
            experience.
          </p>
          <p className="wp-hero__lede wp-m">
            Transforming an existing high-stakes banking platform into a modern, intuitive
            experience.
          </p>
        </div>

        <dl className="wp-meta">
          <div>
            <dt>ROLE</dt>
            <dd>Product Designer</dd>
          </div>
          <div>
            <dt>TEAM</dt>
            <dd>Product designer, product manager, technical lead and engineering</dd>
          </div>
          <div>
            <dt>SCOPE</dt>
            <dd>
              Research, user Interview, information architecture, accessibility, ux strategy,
              redesign
            </dd>
          </div>
          <div>
            <dt>
              <span className="wp-d-inline">Year</span>
              <span className="wp-m-inline">YEAR</span>
            </dt>
            <dd>2026</dd>
          </div>
        </dl>

        <div className="wp-hero__visual">
          <img
            src={assets.hero}
            alt="Laptop showing the Web Portal 2.0 client search workspace"
          />
        </div>
      </div>
    </header>
  );
}
