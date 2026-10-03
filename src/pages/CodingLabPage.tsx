import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import { allCodingChallenges } from '../data/codingData';
import { CodeEditor } from '../components/coding/CodeEditor';
import { Code2, Terminal, ChevronRight, Play, BookOpen } from 'lucide-react';

export const CodingLabPage: React.FC = () => {
  const { activeCodingChallengeId, navigateTo } = useLearning();

  const challengeKeys = Object.keys(allCodingChallenges);
  const [selectedId, setSelectedId] = useState<string>(
    activeCodingChallengeId || challengeKeys[0]
  );

  const currentChallenge = allCodingChallenges[selectedId] || allCodingChallenges[challengeKeys[0]];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Challenge Switcher */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
            BROWSER PYTHON RUNTIME
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Interactive Coding Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Write, run, and verify real Python, NumPy, and Scikit-Learn code directly in your browser.
          </p>
        </div>

        {/* Challenge Selector Chips */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
          {challengeKeys.map((key) => {
            const ch = allCodingChallenges[key];
            const isActive = ch.id === currentChallenge.id;
            return (
              <button
                key={ch.id}
                onClick={() => setSelectedId(ch.id)}
                className={`rounded-xl px-3 py-2 text-xs font-mono shrink-0 transition-all ${
                  isActive
                    ? 'bg-cyan-600 text-white font-bold shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {ch.title.split(':')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Code Editor Container */}
      <CodeEditor challenge={currentChallenge} />
    </div>
  );
};
