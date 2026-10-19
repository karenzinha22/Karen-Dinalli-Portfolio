import type { ReactNode } from 'react';
import { MidOfficeLightbox } from './MidOfficeLightbox';

type MidOfficeFigureProps = {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
};

export function MidOfficeFigure({ src, alt, children, className }: MidOfficeFigureProps) {
  return (
    <div className={['wp-figure', className].filter(Boolean).join(' ')}>
      <MidOfficeLightbox src={src} alt={alt}>
        {children ?? <img src={src} alt={alt} />}
      </MidOfficeLightbox>
    </div>
  );
}
