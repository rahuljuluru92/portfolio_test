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

const CATEGORY_ACCENTS: Record<string, { ring: string; gradient: string; chip: string; accent: string }> = {
  fullstack: {
    ring: 'border-violet-200/70 dark:border-violet-500/30',
    gradient: 'from-violet-500/20 via-teal-500/15 to-slate-100 dark:to-slate-900',
    chip: 'bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300',
    accent: 'text-violet-700 dark:text-violet-300',
  },
  ai: {
    ring: 'border-amber-200/70 dark:border-amber-500/30',
    gradient: 'from-amber-500/20 via-teal-500/15 to-slate-100 dark:to-slate-900',
    chip: 'bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
    accent: 'text-amber-700 dark:text-amber-300',
  },
  ml: {
    ring: 'border-teal-200/70 dark:border-teal-500/30',
    gradient: 'from-teal-500/20 via-emerald-500/15 to-slate-100 dark:to-slate-900',
    chip: 'bg-teal-100 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300',
    accent: 'text-teal-700 dark:text-teal-300',
  },
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { ref, inView } = useInView();
  const accent = CATEGORY_ACCENTS[project.category];

  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <article className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm shadow-slate-100/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/60 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-slate-950/40 dark:hover:border-teal-500/30 dark:hover:shadow-slate-950/60">
        <div className={`relative mb-5 overflow-hidden rounded-xl border ${accent.ring} bg-gradient-to-br ${accent.gradient} p-4`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${accent.accent}`}>
                {CATEGORY_LABELS[project.category]}
              </p>
              <p className="mt-2 max-w-xs text-sm font-medium text-slate-700 dark:text-slate-300">
                {project.visualNote ?? 'Production system with measurable impact'}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/60 dark:text-slate-200">
              <span className={`h-2 w-2 rounded-full ${project.category === 'ml' ? 'bg-teal-500' : project.category === 'ai' ? 'bg-amber-500' : 'bg-violet-500'}`} />
              {project.period}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {project.metrics?.length ? (
              project.metrics.map(metric => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/70 bg-white/70 px-3 py-3 text-center shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/60"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{metric.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="rounded-xl border border-white/70 bg-white/70 px-3 py-3 text-center shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/60">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Impact</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Measured</div>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/70 px-3 py-3 text-center shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/60">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">System</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Built</div>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/70 px-3 py-3 text-center shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/60">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Scale</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Ready</div>
                </div>
              </>
            )}
          </div>

          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-6 h-28 w-28 rounded-full bg-teal-500/15 blur-3xl" />
        </div>

        <div className="grid gap-4 sm:grid-cols-8 sm:gap-8 md:gap-4">
          <div className="sm:col-span-8">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <h3 className="text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                {project.title}
              </h3>
              <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{project.period}</span>
            </div>

            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {project.description.map((desc, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500/60" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center rounded-full border border-teal-200/70 bg-teal-50/70 px-3 py-1 text-xs font-medium text-teal-700 dark:border-teal-500/20 dark:bg-teal-400/10 dark:text-teal-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.repoUrl || project.liveUrl) && (
              <div className="mt-4 flex items-center gap-4">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repo`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200"
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
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
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-200 ${
              activeFilter === f.key
                ? 'bg-teal-600 text-white shadow-sm shadow-teal-200 dark:shadow-teal-900/40'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200'
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
