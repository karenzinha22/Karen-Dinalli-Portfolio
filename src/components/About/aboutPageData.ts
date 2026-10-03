import { footerLinks } from '../Footer/footerData';

export const cvHref = footerLinks.find((link) => link.label === 'RESUME')!.href;
export const linkedInHref = footerLinks.find((link) => link.label === 'LINKEDIN')!.href;
export const emailHref = footerLinks.find((link) => link.label === 'EMAIL')!.href;

export const experience = [
  {
    years: '2024 - NOW',
    company: 'Ohpen',
    role: 'Product Designer',
  },
  {
    years: '2021 - 2024',
    company: 'Ohpen',
    role: 'UX/UI Designer',
  },
  {
    years: '2017 - 2021',
    company: 'Kirby Group',
    role: 'Senior Visual Designer',
  },
  {
    years: '2015 - 2017',
    company: 'Future Analytics Consulting Limited',
    role: 'Senior Visual Designer',
  },
] as const;

export const principles = [
  {
    number: '01.',
    title: 'Clarity before polish',
    body: 'I prioritize clear flows, states, and decisions, connecting user needs with real business opportunities before visual refinement.',
  },
  {
    number: '02.',
    title: 'User needs drive business goals',
    body: 'Strong products balance usability, operational reality, and long-term strategy, especially in complex fintech environments.',
  },
  {
    number: '03.',
    title: 'Design systems, not screens',
    body: 'Individual screens are decisions. Patterns are principles. Building consistent, scalable systems means every future decision already has a foundation to stand on.',
  },
  {
    number: '04.',
    title: 'Prototype to learn',
    body: 'Prototypes surface assumptions, align teams, and move decisions forward faster than discussion alone.',
  },
  {
    number: '05.',
    title: 'Progress over perfection',
    body: 'I ship thoughtfully, learn from feedback, and iterate. Design evolves with the product and its users.',
  },
  {
    number: '06.',
    title: 'Make the work visible',
    body: 'Design doesn’t happen in a vacuum. Sharing process, rationale, and open questions builds trust with teams and surfaces better solutions through collaboration.',
  },
] as const;

export const skillColumns = [
  {
    title: 'Product Thinking',
    icon: 'cloud' as const,
    items: [
      'Product Strategy',
      'Problem Framing',
      'Hypothesis-driven Design',
      'Feature Prioritization',
      'Business Thinking',
    ],
  },
  {
    title: 'UX Research & Discovery',
    icon: 'bulb' as const,
    items: [
      'User Interviews',
      'Usability Testing',
      'Journey Mapping',
      'Information Architecture',
      'Competitive Analysis',
      'Behavioral Analysis',
      'Survey Design',
      'Component Libraries',
      'Accessibility (WCAG)',
    ],
  },
  {
    title: 'UI Design',
    icon: 'tools' as const,
    items: [
      'UX Research',
      'Usability Testing',
      'Information Architecture',
      'Responsive Design',
      'Prototyping',
      'UX Audit',
      'Design Systems',
      'Accessibility',
      'Design Sprint',
      'Wireframing',
    ],
  },
] as const;

export const dailyTools = [
  'FIGMA',
  'FIGJAM',
  'CLAUDE',
  'CLAUDE CODE',
  'CURSOR',
  'AMPLITUDE',
  'MIRO',
  'LOVABLE',
  'GITHUB',
] as const;
