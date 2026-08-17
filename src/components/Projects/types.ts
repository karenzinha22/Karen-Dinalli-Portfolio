export type ProjectAccent = 'vermilion' | 'ochre' | 'dust';

export type DescriptionPart = {
  text: string;
  highlight?: boolean;
};

export type ProjectDescription = {
  paragraphs: Array<string | DescriptionPart[]>;
};

export type Project = {
  id: string;
  number: string;
  name: string;
  statement: string;
  accent: ProjectAccent;
  categories: string;
  description: ProjectDescription;
  ctaLabel: string;
  ctaHref?: string;
  ctaIcon?: boolean;
  imageSrc: string;
  imageAlt: string;
};
