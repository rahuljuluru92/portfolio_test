import React, { useState } from 'react';
import Section from './Section';
import { profileData } from '../data/portfolioData';
import { MailIcon, LinkedinIcon, GithubIcon, DownloadIcon } from './icons';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone you should meet'}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || 'N/A'}`,
        `Email: ${email || 'N/A'}`,
        '',
        message || 'Hi Rahul, I wanted to get in touch.',
      ].join('\n')
    );

    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700 dark:text-teal-300">
              Available for full-time roles
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Let&apos;s build something production-ready.
            </h3>
            <p className="mt-3 max-w-xl text-base font-light leading-8 text-slate-600 dark:text-slate-400">
              I&apos;m open to backend, platform, AI/ML, and distributed systems roles starting May 2026. Based in Norman, OK and open to relocation.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="min-w-0 rounded-2xl border border-teal-200/70 bg-teal-50/70 p-4 dark:border-teal-500/20 dark:bg-teal-400/10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">Email</p>
              <a
                href={`mailto:${profileData.email}`}
                className="mt-2 inline-flex flex-wrap items-center gap-2 break-all text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-teal-700 dark:hover:text-teal-300"
              >
                <MailIcon className="h-4 w-4" />
                {profileData.email}
              </a>
            </div>

            <div className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Resume</p>
              <a
                href="/resume.pdf"
                download="Rahul_Juluru_Resume.pdf"
                className="mt-2 inline-flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-teal-700 dark:hover:text-teal-300"
              >
                <DownloadIcon className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors duration-300 hover:text-teal-700 dark:hover:text-teal-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-7 w-7" />
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors duration-300 hover:text-teal-700 dark:hover:text-teal-300"
              aria-label="GitHub"
            >
              <GithubIcon className="h-7 w-7" />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100 dark:focus:border-teal-400 dark:focus:ring-teal-900/40"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100 dark:focus:border-teal-400 dark:focus:ring-teal-900/40"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={6}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100 dark:focus:border-teal-400 dark:focus:ring-teal-900/40"
                placeholder="Tell me a little about the role or project."
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-teal-200 transition-all duration-300 hover:bg-teal-500 hover:shadow-md hover:shadow-teal-200 dark:shadow-teal-900/30 dark:hover:shadow-teal-900/40"
              >
                Open Email Draft
              </button>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:border-teal-500/40 dark:hover:text-teal-300"
              >
                Send Direct Email
              </a>
            </div>

            <p className="text-xs leading-6 text-slate-400 dark:text-slate-500">
              Based in Norman, OK · Available May 2026 · Open to full-time SWE, backend, and AI/ML roles
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
