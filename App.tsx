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

const TYPING_ROLES = [
  'Full Stack Engineer',
  'LLM Systems Builder',
  'AI/ML Engineer',
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const mainRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Dark mode
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  // Typing animation
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
        .filter(s => s);
      let currentSection = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
        if (typedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setTypedText(currentRole.slice(0, typedText.length - 1));
        if (typedText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % TYPING_ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

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
          className={`nav-indicator mr-4 h-px transition-all duration-300 bg-slate-400 dark:bg-slate-600 group-hover:w-16 group-hover:bg-slate-700 dark:group-hover:bg-slate-200 ${
            isActive ? 'w-16 bg-slate-700 dark:bg-slate-200' : 'w-8'
          }`}
        ></span>
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 ${
            isActive ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400 dark:text-slate-500'
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
      className="block text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-slate-200 transition-colors duration-300"
    >
      {children}
    </a>
  );

  const gradientColor = isDark
    ? 'rgba(29, 78, 216, 0.15)'
    : 'rgba(56, 189, 248, 0.10)';

  return (
    <div
      className="min-h-screen bg-[#FFE4C4] dark:bg-slate-900 font-sans leading-relaxed text-slate-600 dark:text-slate-400 antialiased selection:bg-sky-300 selection:text-sky-900 transition-colors duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 80%)`,
      }}
    >
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* ── Sidebar ──────────────────────────────── */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Name */}
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl">
                <a href="/">{profileData.name}</a>
              </h1>

              {/* Typing title */}
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-700 dark:text-slate-300 sm:text-xl min-h-[1.75rem]">
                {typedText}
                <span className="inline-block w-0.5 h-5 bg-sky-500 ml-0.5 animate-blink align-middle" />
              </h2>

              {/* Open to Work badge */}
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide">
                  Seeking Full-Time SWE / ML Roles
                </span>
              </div>

              {/* Tagline */}
              <p className="mt-4 max-w-xs leading-normal text-slate-500 dark:text-slate-400">
                Full-Stack Engineer building AI-powered systems.
              </p>

              {/* Quick Stats */}
              <div className="mt-5 flex items-center gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500">
                <span className="flex flex-col items-center">
                  <span className="text-lg font-bold text-slate-700 dark:text-slate-300">10+</span>
                  Projects
                </span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="flex flex-col items-center">
                  <span className="text-lg font-bold text-slate-700 dark:text-slate-300">3.5+</span>
                  Yrs Experience
                </span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="flex flex-col items-center">
                  <span className="text-lg font-bold text-slate-700 dark:text-slate-300">3</span>
                  Prod Systems
                </span>
              </div>

              {/* Download Resume */}
              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  download="Rahul_Juluru_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-sky-500 bg-sky-500/10 dark:bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-900 transition-all duration-300"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download Resume
                </a>
              </div>

              {/* Nav */}
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

            {/* Social + Theme Toggle */}
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

              {/* Divider */}
              <span className="h-5 w-px bg-slate-300 dark:bg-slate-700" />

              {/* Dark/Light toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-slate-200 transition-colors duration-300"
              >
                {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            </div>
          </header>

          {/* ── Main Content ─────────────────────────── */}
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
