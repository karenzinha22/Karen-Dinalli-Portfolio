import './Projects.css';

type DividerProps = {
  variant?: 'full' | 'short';
  className?: string;
};

export function Divider({ variant = 'full', className }: DividerProps) {
  const src =
    variant === 'full'
      ? '/icons/divider-long.svg'
      : '/icons/divider-short.svg';

  return (
    <div
      className={['projects-divider', `projects-divider--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <img src={src} alt="" />
    </div>
  );
}
