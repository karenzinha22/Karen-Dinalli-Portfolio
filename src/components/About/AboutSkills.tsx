import { useScrollReveal } from '../../hooks/useScrollReveal';
import { dailyTools, skillColumns } from './aboutPageData';

function SkillIcon({ name }: { name: (typeof skillColumns)[number]['icon'] }) {
  if (name === 'cloud') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.5 18H17a4.5 4.5 0 0 0 .4-8.98A6 6 0 0 0 6.2 11.1 3.75 3.75 0 0 0 7.5 18Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'bulb') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.4 10.95c.5.37.9.93 1.05 1.55h4.7c.15-.62.55-1.18 1.05-1.55A6 6 0 0 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.2 4.8a3.2 3.2 0 0 1 4.5 4.5L16 12l-4-4 2.2-3.2ZM10 14l-4.5 4.5 2 2L12 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9l6 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AboutSkills() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const columnsRef = useScrollReveal<HTMLDivElement>();
  const toolsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-skills" aria-labelledby="about-skills-heading">
      <div className="page-container">
        <div className="about-skills__top">
          <div ref={introRef} className="about-skills__intro reveal">
            <p className="about-page__eyebrow reveal-stagger">TOOLS & SKILLS</p>
            <h2 id="about-skills-heading" className="about-page__display about-page__display--section reveal-stagger" data-delay="2">
              <span>What I</span>
              <span>
                work <span className="about-page__accent">with.</span>
              </span>
            </h2>
            <p className="about-skills__copy reveal-stagger" data-delay="3">
              A mix of mindset, methods and tools that helps me turn complex
              problems into meaningful products.
            </p>
          </div>

          <div ref={columnsRef} className="about-skills__columns reveal">
            {skillColumns.map((column) => (
              <div key={column.title} className="about-skills__column">
                <div className="about-skills__icon">
                  <SkillIcon name={column.icon} />
                </div>
                <h3 className="about-skills__column-title">{column.title}</h3>
                <ul className="about-skills__list">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div ref={toolsRef} className="about-skills__tools reveal">
          <div className="about-skills__tools-label">
            <p className="about-skills__tools-title">TOOLS</p>
            <p className="about-skills__tools-caption">I use daily</p>
          </div>
          <ul className="about-skills__tags">
            {dailyTools.map((tool) => (
              <li key={tool}>
                <span className="about-skills__tag">{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
