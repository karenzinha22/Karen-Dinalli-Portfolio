export type Experiment = {
  id: string;
  name: string;
  year: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export const experiments: Experiment[] = [
  {
    id: 'nomacred',
    name: 'NOMACRED',
    year: '2021',
    title: 'Building a lead-generation landing page.',
    body: 'A dedicated landing page designed to capture qualified leads, improve content discoverability, and increase user engagement.',
    imageSrc: '/images/projects/nomacred.png',
    imageAlt: 'NomaCred landing page shown on a laptop against a glass building',
    href: '#nomacred',
  },
  {
    id: 'mywave',
    name: 'MYWAVE',
    year: '2020',
    title: 'Turning tides into experiences',
    body: 'A surf app made by surfers, for surfers, connecting user needs with tide, forecast and community.',
    imageSrc: '/images/projects/mywave.png',
    imageAlt: 'MyWave surf app screens showing a welcome view and a forecast feed',
    href: '#mywave',
  },
  {
    id: 'marbefit',
    name: 'MARBEFIT',
    year: '2020',
    title: 'A product that helps users actually follow their fitness plan.',
    body: 'Habit-building through intelligent nudges, progress visualisation and accountability.',
    imageSrc: '/images/projects/marbefit.png',
    imageAlt: 'MarbeFit app screens showing a weekly workout plan and progress',
    href: '#marbefit',
  },
];
