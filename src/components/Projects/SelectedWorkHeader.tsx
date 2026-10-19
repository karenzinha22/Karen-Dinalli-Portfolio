import { Divider } from './Divider';
import './Projects.css';

type SelectedWorkHeaderProps = {
  headingId?: string;
  label?: string;
};

export function SelectedWorkHeader({
  headingId = 'selected-work-heading',
  label = 'SELECTED WORK',
}: SelectedWorkHeaderProps) {
  return (
    <header className="projects-section__header">
      <h2 id={headingId} className="projects-section__label">
        {label}
      </h2>
      <Divider variant="full" className="projects-section__header-divider" />
    </header>
  );
}
