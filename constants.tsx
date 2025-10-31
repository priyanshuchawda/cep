import React from 'react';
import type { Subject } from './types';

const MathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8v2H8V7zM8 11h8v2H8v-2zM8 15h8v2H8v-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v2M8 3v2" />
  </svg>
);

const BioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 00-5 5h10a5 5 0 00-5-5z" />
  </svg>
);

const ChemistryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5M5.25 3.75h13.5a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75v16.5m4.5-16.5v16.5" />
  </svg>
);

export const SUBJECTS: Subject[] = [
  {
    name: 'Maths',
    description: 'Dive into the world of numbers and logic.',
    icon: <MathIcon />,
    subtopics: [
      { name: 'Surface area and volume', url: 'https://areavolume.netlify.app' },
      { name: 'Quadratic equations', url: 'https://factoeq.netlify.app/' },
    ],
    bgColor: 'bg-sky-100',
    hoverBgColor: 'hover:bg-sky-200',
    textColor: 'text-sky-800',
    shadowColor: 'shadow-sky-200',
  },
  {
    name: 'Biology',
    description: 'Explore the wonders of life and nature.',
    icon: <BioIcon />,
    url: 'https://biocell.netlify.app',
    bgColor: 'bg-emerald-100',
    hoverBgColor: 'hover:bg-emerald-200',
    textColor: 'text-emerald-800',
    shadowColor: 'shadow-emerald-200',
  },
  {
    name: 'Chemistry',
    description: 'Discover the building blocks of matter.',
    icon: <ChemistryIcon />,
    url: 'https://perio.netlify.app',
    bgColor: 'bg-rose-100',
    hoverBgColor: 'hover:bg-rose-200',
    textColor: 'text-rose-800',
    shadowColor: 'shadow-rose-200',
  },
];
