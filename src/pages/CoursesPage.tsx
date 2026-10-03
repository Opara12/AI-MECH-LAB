import React from 'react';
import { useLearning } from '../context/LearningContext';
import {
  BookOpen,
  GraduationCap,
  Clock,
  Layers,
  ChevronRight,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProgressBar } from '../components/common/ProgressBar';

export const CoursesPage: React.FC = () => {
  const { course, userProfile, navigateTo } = useLearning();

  const completedCount = userProfile.completedLessons.length;
  const progressPercent = Math.round((completedCount / course.totalLessons) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            Curriculum Catalog
          </span>
          <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            AI & Mechatronics Courses
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Structured educational pathways transformed from verified laboratory source materials.
          </p>
        </div>
      </div>

      {/* Featured Primary Course Card */}
      <div className="rounded-3xl border border-cyan-800/50 bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-950 p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
                PRIMARY TRACK
              </span>
              <span className="rounded-lg bg-emerald-950 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-800/40">
                {course.level}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {course.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {course.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
            <button
              onClick={() => navigateTo('course-detail')}
              className="flex items-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-xs font-bold text-white shadow-lg hover:bg-cyan-500 transition-colors font-mono"
            >
              <span>View Full Syllabus</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <span className="font-mono text-xs text-slate-400">
              Estimated: {course.estimatedHours} Hours
            </span>
          </div>
        </div>

        {/* Progress & Module Stats */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          <ProgressBar progress={progressPercent} label="Student Course Completion" size="md" color="cyan" />
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono pt-3 border-t border-slate-800/80">
            <div>
              <span className="text-slate-500 block">Total Modules:</span>
              <span className="text-white font-bold">{course.totalModules} Core Modules</span>
            </div>
            <div>
              <span className="text-slate-500 block">Total Lessons:</span>
              <span className="text-white font-bold">{course.totalLessons} Lessons</span>
            </div>
            <div>
              <span className="text-slate-500 block">Finished:</span>
              <span className="text-emerald-400 font-bold">{completedCount} of {course.totalLessons}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Applied Project:</span>
              <span className="text-cyan-300 font-bold">Motor Fleet Capstone</span>
            </div>
          </div>
        </div>

        {/* Module Previews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {course.modules.map((m) => (
            <div
              key={m.id}
              onClick={() => navigateTo('course-detail')}
              className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-cyan-500/40 hover:bg-slate-900 transition-all space-y-2"
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-cyan-400 font-bold">MODULE 0{m.moduleNumber}</span>
                <span className="text-slate-500">{m.lessons.length} Lessons</span>
              </div>
              <h4 className="font-bold text-xs text-white line-clamp-1">{m.title}</h4>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Roadmap Tracks */}
      <div className="space-y-4">
        <h3 className="font-mono text-sm font-bold text-slate-400 uppercase tracking-wider">
          Future Advanced Learning Tracks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 space-y-3 opacity-80">
            <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400 border border-slate-700">
              COMING NEXT • INTERMEDIATE
            </span>
            <h4 className="text-base font-bold text-white">Edge Robotics & Embedded AI (ESP32 / Jetson)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deploy TensorFlow Lite micro models directly onto microcontrollers for edge acoustic bearing diagnostics and autonomous rover navigation.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 space-y-3 opacity-80">
            <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400 border border-slate-700">
              COMING NEXT • ADVANCED
            </span>
            <h4 className="text-base font-bold text-white">Deep Reinforcement Learning & Robotic Kinematics</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Train multi-axis robotic arms in PyBullet physics simulation using PPO and SAC algorithms, transferring learned policies to physical servo hardware.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
