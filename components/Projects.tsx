import React, { useState } from 'react';
import Section from './Section';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons';
import { useInView } from '../hooks/useInView';

type FilterKey = 'all' | 'fullstack' | 'ai' | 'ml';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'ai', label: 'AI / LLM' },
  { key: 'ml', label: 'ML & Data' },
];

const CATEGORY_LABELS: Record<string, string> = {
  fullstack: 'Full Stack',
  ai: 'AI / LLM',
  ml: 'ML & Data',
};

const CATEGORY_COLORS: Record<string, string> = {
  fullstack: 'bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300',
  ai: 'bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
  ml: 'bg-teal-100 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300',
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { ref, inView } = useInView();

  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/80 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-md lg:group-hover:shadow-slate-200/50 dark:lg:group-hover:shadow-slate-900/50"></div>

        <div className="z-10 sm:col-span-8">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3 className="font-semibold leading-snug text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Category badge */}
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[project.category]}`}>
                {CATEGORY_LABELS[project.category]}
              </span>
              {/* Period */}
              <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{project.period}</span>
            </div>
          </div>

          {/* Description bullets */}
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
            {project.description.map((desc, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500/60"></span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="flex items-center rounded-full bg-sky-50 dark:bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-transparent"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links row */}
          {(project.repoUrl || project.liveUrl) && (
            <div className="mt-3 flex items-center gap-4">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repo`}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200"
                >
                  <GithubIcon className="h-4 w-4" />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <Section id="projects" title="Projects">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
              activeFilter === f.key
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-200 dark:shadow-sky-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            {f.label}
            <span className="ml-1.5 text-xs opacity-70">
              {f.key === 'all' ? projectsData.length : projectsData.filter(p => p.category === f.key).length}
            </span>
          </button>
        ))}
      </div>

      <ul className="group/list">
        {filtered.map((project, index) => (
          <ProjectCard key={`${activeFilter}-${project.title}`} project={project} index={index} />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
