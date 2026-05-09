import React from 'react';
import Section from './Section';
import { skillsData, certificationsData, publicationsData } from '../data/portfolioData';
import { ExternalLinkIcon } from './icons';
import { useInView } from '../hooks/useInView';

const featuredSkills = skillsData
  .flatMap(category => category.skills.map(skill => ({ ...skill, category: category.title })))
  .filter(skill => typeof skill.level === 'number')
  .sort((a, b) => (b.level ?? 0) - (a.level ?? 0))
  .slice(0, 10);

const SkillCategory: React.FC<{ category: typeof skillsData[0]; index: number }> = ({ category, index }) => {
  const { ref, inView } = useInView();
  const highlighted = category.skills.filter(skill => typeof skill.level === 'number').slice(0, 4);
  const remaining = category.skills.filter(skill => typeof skill.level !== 'number');

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
        {category.title}
      </h3>

      {highlighted.length > 0 && (
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          {highlighted.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="rounded-xl border border-slate-200/80 bg-white/70 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 cursor-default ${
              typeof skill.level === 'number'
                ? 'border border-teal-200/70 bg-teal-50/80 text-teal-700 dark:border-teal-500/20 dark:bg-teal-400/10 dark:text-teal-300'
                : 'border border-slate-200 bg-slate-100 text-slate-700 hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-teal-500/40 dark:hover:text-teal-300'
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>

      {remaining.length > 0 && (
        <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
          Includes: {remaining.map(skill => skill.name).join(' · ')}
        </p>
      )}
    </div>
  );
};

export const Skills: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <Section id="skills" title="Skills">
      <div
        ref={ref}
        className={`mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="rounded-2xl border border-teal-200/60 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-5 shadow-sm dark:border-teal-500/20 dark:from-slate-900/80 dark:via-slate-900/90 dark:to-slate-950">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700 dark:text-teal-300">
                Core strengths
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                A quick visual read on the areas I build in most often. These are the skills that show up repeatedly across shipped projects, internships, and production work.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {featuredSkills.map(skill => (
              <div key={`${skill.category}-${skill.name}`} className="rounded-xl border border-white/70 bg-white/80 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-950/60">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500"></span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200 underline underline-offset-2 decoration-slate-300 dark:decoration-slate-600 hover:decoration-teal-400"
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
            <li key={index} className="group relative rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:border-teal-300/60 hover:shadow-md hover:shadow-slate-100 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-teal-500/30 dark:hover:shadow-slate-950/40">
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="pr-2 text-sm font-semibold leading-snug text-slate-800 dark:text-slate-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-200">
                    {pub.title}
                  </h4>
                  <ExternalLinkIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-teal-500 transition-colors duration-200" />
                </div>
                <p className="mt-1.5 text-xs font-medium text-teal-700 dark:text-teal-300">{pub.venue}</p>
                <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{pub.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{pub.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Skills;
