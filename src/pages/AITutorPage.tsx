import React from 'react';
import { useLearning } from '../context/LearningContext';
import { AITutorPanel } from '../components/tutor/AITutorPanel';
import { Sparkles, BookOpen, Layers, Bot } from 'lucide-react';

export const AITutorPage: React.FC = () => {
  const { course, activeLesson, navigateTo } = useLearning();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
              AI TUTOR WORKSPACE
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Personal Engineering Mentor
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Ask questions, request intuitive physical analogies, review code snippets, or practice quiz questions.
          </p>
        </div>

        {/* Lesson Context Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">Active Context:</span>
          <select
            value={activeLesson.id}
            onChange={(e) => navigateTo('tutor', { lessonId: e.target.value })}
            className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-mono text-cyan-300 focus:border-cyan-500 focus:outline-none"
          >
            {course.modules.flatMap((m) =>
              m.lessons.map((l) => (
                <option key={l.id} value={l.id}>
                  Topic {l.topicNumber}: {l.title}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* Main Full-Size Tutor Container */}
      <div className="mx-auto max-w-4xl">
        <AITutorPanel embedded={false} />
      </div>
    </div>
  );
};
