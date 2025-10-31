import React from 'react';
import type { SubTopic } from '../types';

interface MathsPageProps {
  subtopics: SubTopic[];
  onBack: () => void;
}

const MathsPage: React.FC<MathsPageProps> = ({ subtopics, onBack }) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center animate-fade-in">
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-sky-800 tracking-tight">
          Maths Topics
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Select a topic to begin your lesson.
        </p>
      </header>
      
      <main className="flex flex-col items-center gap-6">
        {subtopics.map(topic => (
          <a
            key={topic.name}
            href={topic.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full max-w-md
              block
              p-6
              rounded-xl
              bg-sky-100
              text-sky-800
              shadow-lg shadow-sky-200
              transform
              transition-all
              duration-300
              ease-in-out
              hover:bg-sky-200
              hover:scale-105
              hover:shadow-xl
              text-xl
              font-semibold
            "
          >
            {topic.name}
          </a>
        ))}
      </main>

      <footer className="mt-12">
        <button
          onClick={onBack}
          aria-label="Back to subjects"
          className="
            px-6
            py-3
            rounded-lg
            bg-gray-200
            text-gray-700
            font-semibold
            transition-colors
            hover:bg-gray-300
            focus:outline-none
            focus:ring-2
            focus:ring-gray-400
            focus:ring-offset-2
          "
        >
          &larr; Back to Subjects
        </button>
      </footer>
    </div>
  );
};

export default MathsPage;
