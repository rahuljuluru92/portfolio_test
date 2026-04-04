import React from 'react';
import Section from './Section';
import { profileData } from '../data/portfolioData';
import { MailIcon, LinkedinIcon, GithubIcon, DownloadIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-7">
          I'm actively seeking full-time software engineering roles and internships (F1 / OPT eligible).
          Whether you have a question, an opportunity, or just want to connect — my inbox is always open.
        </p>

        {/* Primary CTA */}
        <a
          href={`mailto:${profileData.email}`}
          className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-base hover:bg-sky-500 transition-colors duration-300 shadow-md shadow-sky-200 dark:shadow-sky-900/30"
        >
          Say Hello
        </a>

        {/* Secondary: Download Resume */}
        <div className="mt-4">
          <a
            href="/resume.pdf"
            download="Rahul_Juluru_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center items-center space-x-8">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-7 h-7" />
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="w-7 h-7" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="text-slate-400 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
            aria-label="Email"
          >
            <MailIcon className="w-7 h-7" />
          </a>
        </div>

        {/* Availability note */}
        <p className="mt-8 text-xs text-slate-400 dark:text-slate-500">
          Based in Norman, OK · F1 Student · Open to full-time roles & internships · Available May 2026
        </p>
      </div>
    </Section>
  );
};

export default Contact;
