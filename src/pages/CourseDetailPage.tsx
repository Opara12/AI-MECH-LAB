import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import {
  BookOpen,
  GraduationCap,
  Clock,
  Layers,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  Play,
  Award,
  Check,
  ArrowLeft,
  Users
} from 'lucide-react';
import { ProgressBar } from '../components/common/ProgressBar';

export const CourseDetailPage: React.FC = () => {
  const { course, userProfile, navigateTo } = useLearning();
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'module-1': true,
    'module-2': true,
    'module-3': false,
    'module-4': true
  });

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  const completedCount = userProfile.completedLessons.length;
  const overallProgress = Math.round((completedCount / course.totalLessons) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Breadcrumb & Back */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <button
          onClick={() => navigateTo('courses')}
          className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Courses</span>
        </button>
        <span>/</span>
        <span className="text-white font-semibold">{course.title}</span>
      </div>

      {/* Course Hero Banner */}
      <div className="rounded-3xl border border-cyan-800/40 bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-950 p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
                {course.track.toUpperCase()}
              </span>
              <span className="rounded-lg bg-emerald-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-800/40">
                {course.level}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {course.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {course.description}
            </p>
          </div>

          {/* Quick Metrics Widget */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 font-mono text-xs space-y-3 min-w-[240px]">
            <div className="flex justify-between">
              <span className="text-slate-400">Estimated Time:</span>
              <span className="font-bold text-white">{course.estimatedHours} Hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Modules:</span>
              <span className="font-bold text-white">{course.totalModules}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Lessons:</span>
              <span className="font-bold text-white">{course.totalLessons}</span>
            </div>
            <div className="pt-2 border-t border-slate-800">
              <ProgressBar progress={overallProgress} label="Course Progress" size="sm" color="cyan" />
            </div>
          </div>
        </div>
      </div>

      {/* 2-Column Layout: Modules Syllabus (8 Cols) & Sidebar Metadata (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Expandable Modules Syllabus (8 Cols) */}
        <div className="lg:col-span-8 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white">Course Curriculum Modules</h3>
            <span className="font-mono text-xs text-slate-500">
              {completedCount} of {course.totalLessons} completed
            </span>
          </div>

          {/* Expandable Module Accordions */}
          <div className="space-y-4">
            {course.modules.map((mod) => {
              const isExpanded = !!expandedModules[mod.id];
              const modCompleted = mod.lessons.filter((l) =>
                userProfile.completedLessons.includes(l.id)
              ).length;
              const modProgress = Math.round((modCompleted / mod.lessons.length) * 100);

              return (
                <div
                  key={mod.id}
                  className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all shadow-md"
                >
                  {/* Module Header Bar */}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="flex w-full items-center justify-between p-5 text-left hover:bg-slate-900 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-cyan-400">
                          MODULE 0{mod.moduleNumber}
                        </span>
                        <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                          {mod.lessons.length} Lessons
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white">{mod.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                        {mod.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 ml-3">
                      <div className="hidden sm:block text-right font-mono text-xs">
                        <span className="text-slate-400 block text-[10px]">Progress</span>
                        <span className="font-bold text-emerald-400">{modProgress}%</span>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Lessons List */}
                  {isExpanded && (
                    <div className="border-t border-slate-800/80 bg-slate-950/40 p-3 space-y-2">
                      {mod.lessons.map((lesson) => {
                        const isDone = userProfile.completedLessons.includes(lesson.id);
                        return (
                          <div
                            key={lesson.id}
                            onClick={() => navigateTo('lesson', { lessonId: lesson.id })}
                            className="group flex cursor-pointer items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/40 p-3.5 hover:border-cyan-500/50 hover:bg-slate-900 transition-all"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {isDone ? (
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                              ) : (
                                <Circle className="h-5 w-5 text-slate-600 shrink-0 group-hover:text-cyan-400" />
                              )}
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-xs font-semibold text-cyan-300">
                                    Topic {lesson.topicNumber}
                                  </span>
                                  <span className="text-slate-500 text-[10px] font-mono">• {lesson.durationMinutes} min</span>
                                </div>
                                <h5 className="font-medium text-xs sm:text-sm text-slate-200 group-hover:text-white truncate">
                                  {lesson.title}
                                </h5>
                              </div>
                            </div>

                            <button className="flex items-center gap-1 rounded-xl bg-slate-800 px-3 py-1.5 font-mono text-xs text-slate-300 group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
                              <span>{isDone ? 'Review' : 'Start'}</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Instructors, Requirements & Skills (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Learning Objectives */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
            <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Learning Objectives
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {course.learningObjectives.slice(0, 5).map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills You Will Gain */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
            <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Skills You'll Gain
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.skillsGained.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-xl border border-slate-700 bg-slate-800/80 px-2.5 py-1 font-mono text-[11px] text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Instructor Bios */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
            <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Course Instructors
            </h4>
            <div className="space-y-4">
              {course.instructors.map((inst, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img
                    src={inst.avatar}
                    alt={inst.name}
                    className="h-10 w-10 rounded-xl object-cover ring-1 ring-cyan-500/30"
                  />
                  <div>
                    <h5 className="font-bold text-xs text-white">{inst.name}</h5>
                    <p className="text-[10px] text-cyan-400 font-mono">{inst.role}</p>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{inst.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-2 text-xs text-slate-400">
            <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
              Course Requirements
            </h4>
            <p>• No advanced hardware or setup required.</p>
            <p>• All Python code and simulators run directly in browser.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
