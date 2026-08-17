import type { ReactNode } from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary';

type BaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: boolean;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

function ArrowIcon() {
  return (
    <span className="button__icon" aria-hidden="true">
      <svg
        className="button__icon-svg"
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.25 5.25L12.75 12.75M6 12.75H12.75V6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    children,
    icon = true,
    className,
    href,
    ...rest
  } = props;

  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span className="button__label">{children}</span>
      {icon && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  const { onClick, type = 'button' } = rest as ButtonAsButton;

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
