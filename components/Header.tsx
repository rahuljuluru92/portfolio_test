import React, { useState, useEffect } from 'react';
import { profileData } from '../data/portfolioData';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.querySelector(link.href));
      let currentSection = '';
      
      sections.forEach(section => {
        if (section) {
          // FIX: Cast section to HTMLElement to access offsetTop property.
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute('id') || '';
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ href: string; children: React.ReactNode; isMobile?: boolean }> = ({ href, children, isMobile = false }) => {
    const isActive = activeSection === href.substring(1);
    return (
      <a
        href={href}
        onClick={() => isMobile && setIsOpen(false)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive
            ? 'text-sky-400'
            : 'text-slate-300 hover:text-sky-400'
        }`}
      >
        <span className={`capitalize ${isActive ? 'font-semibold' : ''}`}>{children}</span>
      </a>
    );
  };
  

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-slate-200 hover:text-sky-400 transition-colors">
              {profileData.name}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} isMobile>{link.name}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
