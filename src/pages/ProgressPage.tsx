import React from 'react';
import { useLearning } from '../context/LearningContext';
import {
  Trophy,
  Flame,
  Clock,
  CheckCircle2,
  Award,
  GraduationCap,
  Sparkles,
  BarChart3,
  Cpu,
  Layers
} from 'lucide-react';
import { ProgressBar } from '../components/common/ProgressBar';

export const ProgressPage: React.FC = () => {
  const { userProfile, course } = useLearning();

  const completedCount = userProfile.completedLessons.length;
  const overallProgress = Math.round((completedCount / course.totalLessons) * 100);

  // Compute average quiz score
  const quizVals = Object.values(userProfile.quizScores);
  const avgQuizScore =
    quizVals.length > 0 ? Math.round(quizVals.reduce((a, b) => a + b, 0) / quizVals.length) : 0;

  const skills = [
    { name: 'AI & DL Theory', level: 85, color: 'cyan' },
    { name: 'Python Programming', level: 90, color: 'emerald' },
    { name: 'NumPy Vectorization', level: 75, color: 'cyan' },
    { name: 'Linear Algebra & Vectors', level: 60, color: 'purple' },
    { name: 'Supervised ML & Scikit-Learn', level: 80, color: 'amber' },
    { name: 'Embedded Hardware & Robotics', level: 70, color: 'emerald' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            STUDENT ANALYTICS
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Progress & Achievements
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Track your verified milestones, concept mastery, and laboratory credentials.
          </p>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Curriculum Progress</span>
            <GraduationCap className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-white">{overallProgress}%</div>
          <ProgressBar progress={overallProgress} showPercentage={false} size="sm" color="cyan" />
          <span className="text-[10px] text-slate-500 font-mono block">
            {completedCount} of {course.totalLessons} lessons finished
          </span>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Learning Habit</span>
            <Flame className="h-5 w-5 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-3xl font-bold font-mono text-amber-400">
            {userProfile.learningStreakDays} Days
          </div>
          <ProgressBar progress={100} showPercentage={false} size="sm" color="amber" />
          <span className="text-[10px] text-amber-400/80 font-mono block">Active daily learning streak</span>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Assessment Average</span>
            <Award className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-emerald-300">
            {avgQuizScore}%
          </div>
          <ProgressBar progress={avgQuizScore} showPercentage={false} size="sm" color="emerald" />
          <span className="text-[10px] text-slate-500 font-mono block">
            Across {quizVals.length} completed topic quizzes
          </span>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Time Logged</span>
            <Clock className="h-5 w-5 text-purple-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-purple-300">
            {userProfile.totalHoursLearned}h
          </div>
          <ProgressBar progress={Math.min(100, (userProfile.totalHoursLearned / 20) * 100)} showPercentage={false} size="sm" color="purple" />
          <span className="text-[10px] text-slate-500 font-mono block">Of 20 total estimated hours</span>
        </div>
      </div>

      {/* Skill Competency Breakdown */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Skill Matrix & Competency</h3>
            <p className="text-xs text-slate-400">
              Evaluated across quiz answers, code executions, and project completions.
            </p>
          </div>
          <BarChart3 className="h-5 w-5 text-cyan-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">{s.name}</span>
                <span className="text-cyan-400 font-bold">{s.level}%</span>
              </div>
              <ProgressBar progress={s.level} showPercentage={false} size="md" color={s.color as any} />
            </div>
          ))}
        </div>
      </div>

      {/* ACHIEVEMENTS GRID (8 Badges) */}
      <div className="space-y-4">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Verified Engineering Badges</h3>
            <p className="text-xs text-slate-400">
              Earn credentials by mastering core topics, running code, and configuring hardware.
            </p>
          </div>
          <span className="font-mono text-xs text-emerald-400 font-bold">
            {userProfile.achievements.filter((a) => a.unlocked).length} of {userProfile.achievements.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {userProfile.achievements.map((ach) => (
            <div
              key={ach.id}
              className={`rounded-3xl border p-5 flex flex-col justify-between transition-all ${
                ach.unlocked
                  ? 'border-cyan-500/40 bg-slate-900/80 shadow-lg shadow-cyan-950/20'
                  : 'border-slate-800 bg-slate-900/30 opacity-60'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      ach.unlocked
                        ? 'bg-gradient-to-tr from-cyan-600 to-emerald-500 text-white shadow-md ring-2 ring-cyan-400/40'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    <Trophy className="h-6 w-6" />
                  </div>
                  {ach.unlocked ? (
                    <span className="rounded-full bg-emerald-950 px-2.5 py-0.5 font-mono text-[9px] font-bold text-emerald-400 border border-emerald-800/40">
                      UNLOCKED
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 font-mono text-[9px] text-slate-500">
                      LOCKED
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-sm text-white">{ach.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                {ach.unlocked && ach.unlockedAt ? `Earned: ${ach.unlockedAt}` : 'Milestone Incomplete'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
