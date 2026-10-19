import type { ReactNode } from 'react';
import { Divider } from '../Projects/Divider';
import './EditorialStatement.css';

type EditorialStatementProps = {
  children: ReactNode;
};

export function EditorialStatement({ children }: EditorialStatementProps) {
  return (
    <section className="editorial-statement" aria-label="Editorial quote">
      <div className="page-container editorial-statement__inner">
        <Divider variant="full" />
        <blockquote className="editorial-statement__quote">
          <p className="editorial-statement__text">{children}</p>
        </blockquote>
        <Divider variant="full" />
      </div>
    </section>
  );
}
