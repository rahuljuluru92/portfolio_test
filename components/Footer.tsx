import React from 'react';
import { profileData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-md pb-16 sm:pb-0">
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
        Designed &amp; built by{' '}
        <span className="font-semibold text-slate-500 dark:text-slate-400">{profileData.name}</span>
        {' '}with React, TypeScript &amp; Tailwind CSS.
      </p>
      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
        &copy; {currentYear} · All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
