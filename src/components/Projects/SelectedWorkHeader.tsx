import { Divider } from './Divider';
import './Projects.css';

type SelectedWorkHeaderProps = {
  headingId?: string;
};

export function SelectedWorkHeader({
  headingId = 'selected-work-heading',
}: SelectedWorkHeaderProps) {
  return (
    <header className="projects-section__header">
      <h2 id={headingId} className="projects-section__label">
        SELECTED WORK
      </h2>
      <Divider variant="full" className="projects-section__header-divider" />
    </header>
  );
}
