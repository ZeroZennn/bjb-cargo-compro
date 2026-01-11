import { ReactNode } from 'react';

export default function SectionWrapper({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <section className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}