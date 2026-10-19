import { SelectedWorkHeader } from '../Projects/SelectedWorkHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { dailyTools, skillColumns } from './aboutPageData';

const skillIcons = {
  cloud: '/icons/skill-cloud.png',
  bulb: '/icons/skill-bulb.png',
  tools: '/icons/skill-tools.png',
} as const;

function SkillIcon({ name }: { name: (typeof skillColumns)[number]['icon'] }) {
  return (
    <img src={skillIcons[name]} alt="" width={24} height={24} />
  );
}

export function AboutSkills() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const columnsRef = useScrollReveal<HTMLDivElement>();
  const toolsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-skills" aria-labelledby="about-skills-heading">
      <div className="page-container projects-section__inner">
        <SelectedWorkHeader label="TOOLS & SKILLS" headingId="about-skills-label" />
        <div className="about-skills__body">
        <div className="about-skills__top">
          <div ref={introRef} className="about-skills__intro reveal">
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
                <div className="about-skills__head">
                  <div className="about-skills__icon">
                    <SkillIcon name={column.icon} />
                  </div>
                  <h3 className="about-skills__column-title">{column.title}</h3>
                </div>
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
            <p className="about-skills__tools-title">
              <span className="about-skills__tools-title-desktop">TOOLS</span>
              <span className="about-skills__tools-title-mobile">TOOLBOX</span>
            </p>
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
      </div>
    </section>
  );
}
