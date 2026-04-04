
import React from 'react';
import { profileData } from '../data/portfolioData';
import { MailIcon, LinkedinIcon, GithubIcon } from './icons';

const SocialLink: React.FC<{href: string; children: React.ReactNode; 'aria-label': string}> = ({ href, children, 'aria-label': ariaLabel }) => (
    <a href={href} 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label={ariaLabel}
       className="block text-slate-400 hover:text-sky-400 transition-colors duration-300">
        {children}
    </a>
);


const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20 sm:py-32 animate-fade-in-up">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl lg:text-7xl">
          {profileData.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-2xl lg:text-4xl">
          {profileData.title}
        </h2>
        <p className="mt-4 max-w-xl text-slate-400">
             I build full stack applications and LLM-powered systems, turning complex ideas into scalable, production-ready software.
        </p>
      </div>
      <div className="mt-8 flex items-center gap-x-6">
        <a
          href="#contact"
          className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors duration-300"
        >
          Get in touch
        </a>
        <a href="#projects" className="text-sm font-semibold leading-6 text-slate-300 hover:text-sky-400 transition-colors duration-300">
          View my work <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="mt-12 flex items-center space-x-6">
        <SocialLink href={`mailto:${profileData.email}`} aria-label="Email">
            <MailIcon className="h-6 w-6"/>
        </SocialLink>
        <SocialLink href={profileData.linkedin} aria-label="LinkedIn">
            <LinkedinIcon className="h-6 w-6"/>
        </SocialLink>
        <SocialLink href={profileData.github} aria-label="GitHub">
            <GithubIcon className="h-6 w-6"/>
        </SocialLink>
      </div>
    </section>
  );
};

export default Hero;
