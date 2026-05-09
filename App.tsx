import React, { useState, useEffect, useRef } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills, { Certifications, Publications } from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, SunIcon, MoonIcon, DownloadIcon } from './components/icons';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const mainRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map(link => document.querySelector(link.href) as HTMLElement)
        .filter(Boolean);
      let currentSection = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const isActive = activeSection === href.substring(1);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.querySelector(href) as HTMLElement;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    return (
      <a href={href} onClick={handleClick} className="group flex items-center py-2">
        <span
          className={`mr-4 h-px transition-all duration-300 ${
            isActive
              ? 'w-16 bg-teal-600 dark:bg-teal-300'
              : 'w-8 bg-slate-300 dark:bg-slate-700 group-hover:w-16 group-hover:bg-teal-500 dark:group-hover:bg-teal-300'
          }`}
        />
        <span
          className={`text-xs font-bold uppercase tracking-[0.22em] transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 ${
            isActive ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-500'
          }`}
        >
          {children}
        </span>
      </a>
    );
  };

  const SocialLink: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({
    href, children, 'aria-label': ariaLabel,
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="block text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
    >
      {children}
    </a>
  );

  const gradientColor = isDark
    ? 'rgba(13, 148, 136, 0.18)'
    : 'rgba(20, 184, 166, 0.12)';

  return (
    <div
      className="min-h-screen bg-[#F7F4EE] dark:bg-slate-950 font-sans leading-relaxed text-slate-600 dark:text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-950 transition-colors duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 80%)`,
      }}
    >
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                <a href="/">{profileData.name}</a>
              </h1>

              <h2 className="mt-3 max-w-xl text-lg font-medium tracking-tight text-teal-700 dark:text-teal-300 sm:text-xl">
                {profileData.title}
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-slate-600 dark:text-slate-400">
                Backend engineer building production ML pipelines and distributed systems. Currently at the University of Oklahoma.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-teal-50/70 px-3 py-1.5 text-xs font-medium text-teal-700 dark:border-teal-800/60 dark:bg-teal-400/10 dark:text-teal-300">
                <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                Open to full-time SWE / ML roles
              </div>

              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  download="Rahul_Juluru_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-teal-500 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-700 dark:border-teal-400 dark:bg-teal-400/10 dark:text-teal-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-slate-950 transition-all duration-300"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download Resume
                </a>
              </div>

              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-12 w-max">
                  {navLinks.map(link => (
                    <li key={link.name}>
                      <NavLink href={link.href}>{link.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-8 flex items-center space-x-5">
              <SocialLink href={profileData.github} aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={profileData.linkedin} aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={`mailto:${profileData.email}`} aria-label="Email">
                <MailIcon className="h-5 w-5" />
              </SocialLink>

              <span className="h-5 w-px bg-slate-300 dark:bg-slate-700" />

              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
              >
                {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            </div>
          </header>

          <main ref={mainRef} className="pt-24 lg:w-7/12 lg:py-24">
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <Publications />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
