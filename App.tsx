import React, { useState } from 'react';
import SubjectCard from './components/SubjectCard';
import MathsPage from './components/MathsPage';
import { SUBJECTS } from './constants';
import type { Subject } from './types';

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handleBack = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        {selectedSubject && selectedSubject.subtopics ? (
          <MathsPage subtopics={selectedSubject.subtopics} onBack={handleBack} />
        ) : (
          <>
            <header className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                Subject Gateway
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your field of study. A world of knowledge awaits.
              </p>
            </header>

            <main>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {SUBJECTS.map((subject) => (
                  <SubjectCard
                    key={subject.name}
                    subject={subject}
                    onClick={(e) => {
                      if (subject.subtopics && subject.subtopics.length > 0) {
                        e.preventDefault();
                        setSelectedSubject(subject);
                      }
                    }}
                  />
                ))}
              </div>
            </main>

            <footer className="text-center mt-16 text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Subject Gateway. All Rights Reserved.</p>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
