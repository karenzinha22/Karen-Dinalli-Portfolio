import type { ReactNode } from 'react';
import { assets } from './webportalAssets';

export function H({ children }: { children: ReactNode }) {
  return <span className="wp-hl">{children}</span>;
}

export function Label({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <p className="wp-label" id={id}>
      {children}
    </p>
  );
}

export function WpPicture({
  desktop,
  mobile,
  alt,
  className,
}: {
  desktop: string;
  mobile: string;
  alt: string;
  className?: string;
}) {
  return (
    <picture className={className}>
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img src={desktop} alt={alt} />
    </picture>
  );
}

export { assets };
