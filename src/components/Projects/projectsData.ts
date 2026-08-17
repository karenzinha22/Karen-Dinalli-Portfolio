import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'webportal',
    number: '01',
    name: 'WEBPORTAL',
    statement:
      "When everything is connected, finding your way shouldn't be complicated.",
    accent: 'vermilion',
    categories: 'PRODUCT STRATEGY · IA · PRODUCT DESIGN',
    description: {
      paragraphs: [
        'Web Portal is a strategic redesign of Ohpen’s client portal, turning a legacy interface into a fast, modern, and scalable experience.',
        [
          { text: 'Built on the same cloud-native architecture as the core platform, ' },
          {
            text: 'it delivers a 50% more responsive UI, enables 4× faster iteration',
            highlight: true,
          },
          { text: ', and directly addresses top client pain points.' },
        ],
      ],
    },
    ctaLabel: 'VIEW CASE STUDY',
    ctaHref: '#webportal',
    imageSrc: '/images/projects/webportal.png',
    imageAlt: 'WebPortal interface mockup with editorial year graphic',
  },
  {
    id: 'midoffice',
    number: '02',
    name: 'MIDOFFICE',
    statement: 'Making a legacy mortgage platform feel less complicated.',
    accent: 'ochre',
    categories: 'PRODUCT DESIGN · UX RESEARCH · UX/UI',
    description: {
      paragraphs: [
        'Redesigning the MidOffice Portal, a key platform supporting mortgage origination and contract variations.',
        [
          { text: 'The new experience ' },
          {
            text: 'reduced application processing time by 25%, decreased errors by 30%',
            highlight: true,
          },
          {
            text: ', and streamlined underwriting workflows into a faster, more intuitive experience.',
          },
        ],
      ],
    },
    ctaLabel: 'VIEW CASE STUDY',
    ctaHref: '#midoffice',
    imageSrc: '/images/projects/midoffice.png',
    imageAlt: 'MidOffice interface mockup with editorial year graphic',
  },
  {
    id: 'credit-manager',
    number: '03',
    name: 'CREDIT MANAGER',
    statement: 'Making the next step easier to see.',
    accent: 'dust',
    categories: 'PRODUCT DESIGN · UX/UI · RESEARCH',
    description: {
      paragraphs: [
        [
          { text: 'Designed Credit Manager 2.0 from scratch, improving arrears management by ' },
          {
            text: 'increasing recovery rates by 18%, reducing case handling time by 30%',
            highlight: true,
          },
          { text: ', and helping customers stay on track with repayments.' },
        ],
      ],
    },
    ctaLabel: 'COMING SOON!',
    ctaIcon: false,
    imageSrc: '/images/projects/credit-manager.png',
    imageAlt: 'Credit Manager interface mockup with editorial year graphic',
  },
];

export const editorialQuotes = [
  "I'm interested in the messy part before the interface becomes clean.",
  'Before designing the answer, I want to understand the question.',
];
