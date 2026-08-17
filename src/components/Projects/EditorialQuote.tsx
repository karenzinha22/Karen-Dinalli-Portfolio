import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

type EditorialQuoteProps = {
  children: string;
};

export function EditorialQuote({ children }: EditorialQuoteProps) {
  const ref = useScrollReveal<HTMLQuoteElement>();

  return (
    <blockquote ref={ref} className="editorial-quote reveal">
      <p className="editorial-quote__text">{children}</p>
    </blockquote>
  );
}
