import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="mb-20 scroll-mt-16 md:mb-28 lg:mb-40 lg:scroll-mt-24"
      aria-label={title}
    >
      {/* Mobile sticky header */}
      <div className="sticky top-0 z-20 -mx-6 mb-5 w-screen bg-[#F7F4EE]/92 dark:bg-slate-950/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-800 dark:text-slate-200">
          {title}
        </h2>
      </div>
      {/* Desktop section title */}
      <h2 className="hidden lg:block mb-10 text-xs font-semibold uppercase tracking-[0.28em] text-teal-700 dark:text-teal-300">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
