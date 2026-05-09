import React from 'react';
import Section from './Section';
import { experienceData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const ExperienceItem: React.FC<{ exp: typeof experienceData[0]; index: number }> = ({ exp, index }) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`group relative grid pb-1 transition-all duration-700 sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/80 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-md lg:group-hover:shadow-slate-200/50 dark:lg:group-hover:shadow-slate-900/50"></div>

      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 sm:col-span-2"
        aria-label={exp.period}
      >
        {exp.period}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-semibold leading-snug">
          <span className="text-slate-800 dark:text-slate-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
            {exp.role}
          </span>
          <span className="text-slate-400 dark:text-slate-500"> · </span>
          <span className="text-slate-600 dark:text-slate-300">{exp.company}</span>
        </h3>
        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{exp.location}</p>

        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          {exp.description.map((desc, i) => (
            <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500/60"></span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

        {exp.tags && exp.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {exp.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-teal-100 dark:bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
