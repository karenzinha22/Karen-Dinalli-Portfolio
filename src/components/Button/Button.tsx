import type { ReactNode } from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'light';
type ArrowDirection = 'diagonal' | 'right';

type BaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: boolean;
  arrowDirection?: ArrowDirection;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

function ArrowIcon({ direction }: { direction: ArrowDirection }) {
  if (direction === 'right') {
    return (
      <span className="button__icon button__icon--right" aria-hidden="true">
        <svg
          className="button__icon-svg"
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9H14M14 9L10 5M14 9L10 13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="button__icon button__icon--diagonal" aria-hidden="true">
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
    arrowDirection = 'diagonal',
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
      {icon && <ArrowIcon direction={arrowDirection} />}
    </>
  );

  if (href) {
    const { target, rel } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} target={target} rel={rel}>
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
