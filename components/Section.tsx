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
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={title}
    >
      {/* Mobile sticky header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#FFE4C4]/90 dark:bg-slate-900/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
          {title}
        </h2>
      </div>
      {/* Desktop section title */}
      <h2 className="hidden lg:block mb-8 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
