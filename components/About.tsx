import React from 'react';
import Section from './Section';
import { profileData, educationData } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-base font-light leading-8 text-slate-600 dark:text-slate-400 mb-5">
            {profileData.about}
          </p>
          <p className="text-sm italic text-teal-700/80 dark:text-teal-300/80">
            Currently exploring: agentic AI systems, distributed inference, and large-scale system design.
          </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400 mb-5">
            Education
          </h3>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="border-l-2 border-teal-500/40 pl-4">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm leading-snug">
                  {edu.degree} in {edu.field}
                </h4>
                <p className="text-sm font-medium text-teal-700 dark:text-teal-300 mt-0.5">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{edu.location}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{edu.period}</p>
                {edu.gpa && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    GPA: {edu.gpa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
