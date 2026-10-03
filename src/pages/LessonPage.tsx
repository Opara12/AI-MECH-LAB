import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import { allQuizzes } from '../data/quizData';
import { QuizModal } from '../components/quiz/QuizModal';
import { AITutorPanel } from '../components/tutor/AITutorPanel';
import { CodeBlock } from '../components/lesson/CodeBlock';
import { InteractiveDiagram } from '../components/lesson/InteractiveDiagram';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  BookOpen,
  Layers,
  Award,
  Circle,
  Lightbulb,
  AlertTriangle,
  Play,
  Terminal,
  Menu,
  X
} from 'lucide-react';

export const LessonPage: React.FC = () => {
  const {
    activeLesson,
    activeModule,
    course,
    userProfile,
    markLessonComplete,
    navigateTo,
    getNextLesson,
    getPreviousLesson
  } = useLearning();

  const [activeQuizModal, setActiveQuizModal] = useState<boolean>(false);
  const [showTutorMobile, setShowTutorMobile] = useState<boolean>(false);
  const [showNavMobile, setShowNavMobile] = useState<boolean>(false);

  const isCompleted = userProfile.completedLessons.includes(activeLesson.id);
  const nextLesson = getNextLesson(activeLesson.id);
  const prevLesson = getPreviousLesson(activeLesson.id);

  const currentQuiz = activeLesson.quizId ? allQuizzes[activeLesson.quizId] : null;

  return (
    <div className="relative animate-in fade-in duration-300">
      {/* Quiz Modal */}
      {activeQuizModal && currentQuiz && (
        <QuizModal quiz={currentQuiz} onClose={() => setActiveQuizModal(false)} />
      )}

      {/* Top Mobile Bar for Lesson Sidebar & AI Tutor Toggle */}
      <div className="flex lg:hidden items-center justify-between border-b border-slate-800 bg-slate-950 p-3 mb-4 rounded-2xl">
        <button
          onClick={() => setShowNavMobile(!showNavMobile)}
          className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800"
        >
          <Menu className="h-4 w-4" />
          <span>Curriculum Outline</span>
        </button>

        <button
          onClick={() => setShowTutorMobile(!showTutorMobile)}
          className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-800/40"
        >
          <Sparkles className="h-4 w-4" />
          <span>AI Tutor ({activeLesson.topicNumber})</span>
        </button>
      </div>

      {/* 3-COLUMN PROFESSIONAL LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Course Outline Syllabus (3 Cols) */}
        <div
          className={`lg:col-span-3 rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-xl space-y-4 ${
            showNavMobile ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-cyan-400" />
              <h4 className="font-bold text-xs text-white uppercase tracking-wider font-mono">
                Course Syllabus
              </h4>
            </div>
            <span className="font-mono text-[10px] text-cyan-400">
              {userProfile.completedLessons.length} / {course.totalLessons} Done
            </span>
          </div>

          {/* Module & Topics Tree */}
          <div className="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
            {course.modules.map((m) => (
              <div key={m.id} className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-[11px] font-bold text-slate-400 px-2 py-1">
                  <span>MOD 0{m.moduleNumber}: {m.title.split(':')[0]}</span>
                </div>

                <div className="space-y-1">
                  {m.lessons.map((les) => {
                    const isCurrent = les.id === activeLesson.id;
                    const isDone = userProfile.completedLessons.includes(les.id);

                    return (
                      <button
                        key={les.id}
                        onClick={() => {
                          navigateTo('lesson', { lessonId: les.id });
                          setShowNavMobile(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs transition-all ${
                          isCurrent
                            ? 'bg-cyan-950 text-cyan-300 font-semibold border border-cyan-800/60 shadow-sm'
                            : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          {isDone ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          ) : (
                            <Circle className="h-3.5 w-3.5 text-slate-600 shrink-0" />
                          )}
                          <span className="truncate">
                            <span className="font-mono text-[10px] text-cyan-400 mr-1.5">
                              {les.topicNumber}
                            </span>
                            {les.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN: Comprehensive Educational Content (6 Cols Desktop) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Lesson Header Banner */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <span className="rounded-md bg-cyan-950 px-2 py-0.5 border border-cyan-800/40">
                  TOPIC {activeLesson.topicNumber}
                </span>
                <span>• {activeModule.title}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                {activeLesson.durationMinutes} min read
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeLesson.title}
            </h1>
            <p className="text-xs sm:text-sm text-cyan-300/80 font-mono">
              {activeLesson.subtitle}
            </p>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block font-mono text-[11px] uppercase mb-1">
                Lesson Summary
              </strong>
              {activeLesson.summary}
            </div>
          </div>

          {/* Educational Content Sections */}
          <div className="space-y-6">
            {activeLesson.sections.map((sec) => (
              <div
                key={sec.id}
                className="rounded-3xl border border-slate-800/80 bg-slate-950 p-6 sm:p-8 shadow-lg space-y-4"
              >
                {sec.heading && (
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-slate-800/80 pb-2">
                    {sec.heading}
                  </h3>
                )}

                {/* Paragraphs */}
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Callout Notes / Warnings / Engineering Rules */}
                {sec.callout && (
                  <div
                    className={`rounded-2xl border p-4 text-xs space-y-1 ${
                      sec.callout.type === 'engineering'
                        ? 'border-cyan-800/50 bg-cyan-950/20 text-cyan-200'
                        : sec.callout.type === 'warning'
                        ? 'border-rose-800/50 bg-rose-950/20 text-rose-200'
                        : sec.callout.type === 'formula'
                        ? 'border-purple-800/50 bg-purple-950/20 text-purple-200 font-mono'
                        : 'border-amber-800/50 bg-amber-950/20 text-amber-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase">
                      <Lightbulb className="h-4 w-4" />
                      <span>{sec.callout.title}</span>
                    </div>
                    <p className="leading-relaxed text-slate-200">{sec.callout.text}</p>
                  </div>
                )}

                {/* Interactive Diagram / Visualization */}
                {sec.diagram && (
                  <InteractiveDiagram
                    type={sec.diagram.type}
                    title={sec.diagram.title}
                    description={sec.diagram.description}
                  />
                )}

                {/* Code Snippets */}
                {sec.codeSnippet && (
                  <CodeBlock
                    code={sec.codeSnippet.code}
                    language={sec.codeSnippet.language}
                    caption={sec.codeSnippet.caption}
                  />
                )}

                {/* Key Takeaways */}
                {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                  <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      Key Takeaways
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {sec.keyTakeaways.map((kt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{kt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Lesson Quiz Banner (If Available) */}
          {currentQuiz && (
            <div className="rounded-3xl border border-cyan-800/60 bg-gradient-to-r from-cyan-950/40 via-slate-950 to-slate-900 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                  <HelpCircle className="h-4 w-4" />
                  <span>CHECK YOUR COMPREHENSION</span>
                </div>
                <h4 className="mt-1 text-base font-bold text-white">
                  Topic {activeLesson.topicNumber} Interactive Assessment
                </h4>
                <p className="text-xs text-slate-400">
                  4 targeted engineering questions extracted from the lesson material.
                </p>
              </div>
              <button
                onClick={() => setActiveQuizModal(true)}
                className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-cyan-500 transition-colors font-mono shrink-0"
              >
                <span>Take Quiz</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* BOTTOM CONTROLS: PREVIOUS, COMPLETE, NEXT */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              {prevLesson ? (
                <button
                  onClick={() => navigateTo('lesson', { lessonId: prevLesson.id })}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-mono text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous Lesson</span>
                </button>
              ) : (
                <div />
              )}
            </div>

            {/* Mark as Complete CTA */}
            <button
              onClick={() => markLessonComplete(activeLesson.id)}
              className={`flex items-center gap-2 rounded-2xl px-6 py-3 text-xs font-bold font-mono transition-all shadow-lg ${
                isCompleted
                  ? 'border border-emerald-800/50 bg-emerald-950 text-emerald-400'
                  : 'bg-cyan-600 text-white hover:bg-cyan-500'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>{isCompleted ? 'Completed ✓' : 'Mark as Complete'}</span>
            </button>

            <div>
              {nextLesson && (
                <button
                  onClick={() => navigateTo('lesson', { lessonId: nextLesson.id })}
                  className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-mono font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  <span>Next Lesson</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: AI Tutor Panel (3 Cols Desktop / Drawer on Mobile) */}
        <div
          className={`lg:col-span-3 sticky top-20 ${
            showTutorMobile ? 'block' : 'hidden lg:block'
          }`}
        >
          <AITutorPanel embedded={true} />
        </div>
      </div>
    </div>
  );
};
