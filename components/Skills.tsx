import React from 'react';
import Section from './Section';
import { skillsData, certificationsData, publicationsData } from '../data/portfolioData';
import { ExternalLinkIcon } from './icons';
import { useInView } from '../hooks/useInView';

const SkillCategory: React.FC<{ category: typeof skillsData[0]; index: number }> = ({ category, index }) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500/50 hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-200 cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-10">
        {skillsData.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
};

export const Certifications: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <Section id="certifications" title="Certifications">
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <ul className="space-y-3">
          {certificationsData.map((cert, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500"></span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 underline underline-offset-2 decoration-slate-300 dark:decoration-slate-600 hover:decoration-sky-400"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.name}</span>
                )}
                <span className="text-slate-400 dark:text-slate-500"> — {cert.issuer}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export const Publications: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <Section id="publications" title="Publications">
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <ul className="space-y-5">
          {publicationsData.map((pub, index) => (
            <li key={index} className="group relative rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/40 p-5 hover:border-sky-300 dark:hover:border-sky-700/60 hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-slate-900/40 transition-all duration-300">
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200 pr-2">
                    {pub.title}
                  </h4>
                  <ExternalLinkIcon className="h-4 w-4 flex-shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-sky-500 transition-colors duration-200 mt-0.5" />
                </div>
                <p className="mt-1.5 text-xs font-medium text-sky-600 dark:text-sky-400">{pub.venue}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{pub.date}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{pub.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Skills;
