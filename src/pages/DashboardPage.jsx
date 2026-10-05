import { useLearning } from "../context/LearningContext";
import {
  GraduationCap,
  Flame,
  BookOpen,
  FolderGit2,
  ChevronRight,
  Play,
  Sparkles,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Zap
} from "lucide-react";
import { ProgressBar } from "../components/common/ProgressBar";
export const DashboardPage = () => {
  const { userProfile, course, activeLesson, navigateTo, getLessonById } = useLearning();
  const totalLessons = course.totalLessons;
  const completedCount = userProfile.completedLessons.length;
  const overallProgress = Math.round(completedCount / totalLessons * 100);
  const recommendedTopics = [
    {
      id: "lesson-2-2",
      title: "NumPy Basics & High-Speed Arrays",
      module: "Module 2: Programming Fundamentals",
      duration: "24 mins",
      level: "Beginner",
      tag: "Vectorization"
    },
    {
      id: "lesson-3-1",
      title: "Linear Algebra Essentials: Vectors & Matrices",
      module: "Module 3: Mathematics for AI",
      duration: "22 mins",
      level: "Intermediate",
      tag: "Math Foundations"
    },
    {
      id: "lesson-4-4",
      title: "Industrial Motor Failure Predictor Capstone",
      module: "Module 4: Applied Machine Learning",
      duration: "30 mins",
      level: "Advanced",
      tag: "Scikit-Learn"
    }
  ];
  return <div className="space-y-8 animate-in fade-in duration-300">
      {
    /* Welcome Banner */
  }
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="rounded-full bg-cyan-950/80 px-3 py-1 font-mono text-xs font-semibold text-cyan-400 border border-cyan-800/40">
              STUDENT WORKSPACE
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, {userProfile.name} 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Continue your AI learning journey. You're currently mastering the mathematical and programming fundamentals of physical mechatronic systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
    onClick={() => navigateTo("adaptive")}
    className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/90 px-4 py-3 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors font-mono"
  >
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>Adaptive Path</span>
            </button>
            <button
    onClick={() => navigateTo("lesson", { lessonId: activeLesson.id })}
    className="flex items-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-xs font-bold text-white shadow-lg hover:bg-cyan-500 transition-colors font-mono"
  >
              <Play className="h-4 w-4 fill-white" />
              <span>Resume Study</span>
            </button>
          </div>
        </div>
      </div>

      {
    /* METRIC CARDS (5 Core Student Metrics) */
  }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {
    /* Overall Progress */
  }
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Overall Progress</span>
            <GraduationCap className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white">{overallProgress}%</span>
            <span className="text-[11px] text-slate-500 font-mono">Curriculum</span>
          </div>
          <ProgressBar progress={overallProgress} showPercentage={false} size="sm" color="cyan" />
        </div>

        {
    /* Current Course */
  }
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Current Track</span>
            <BookOpen className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white truncate">{course.title}</h4>
            <span className="text-[11px] text-emerald-400 font-mono">Beginner Track</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono block">4 Modules • 11 Topics</span>
        </div>

        {
    /* Learning Streak */
  }
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Streak Days</span>
            <Flame className="h-5 w-5 text-amber-500 fill-amber-500 animate-pulse" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-amber-400">
              {userProfile.learningStreakDays}
            </span>
            <span className="text-[11px] text-slate-500 font-mono">Days in a row</span>
          </div>
          <span className="text-[10px] text-amber-400/80 font-mono block">🔥 Daily Habit Formed</span>
        </div>

        {
    /* Completed Lessons */
  }
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Lessons Done</span>
            <CheckCircle2 className="h-5 w-5 text-purple-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white">
              {completedCount} <span className="text-slate-500 text-sm">/ {totalLessons}</span>
            </span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono block">
            {totalLessons - completedCount} lessons remaining
          </span>
        </div>

        {
    /* Projects Completed */
  }
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-xs">Projects Built</span>
            <FolderGit2 className="h-5 w-5 text-teal-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-teal-300">
              {userProfile.completedProjects.length}
            </span>
            <span className="text-[11px] text-slate-500 font-mono">Engineering Labs</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono block">
            {userProfile.builtKits.length} Verified Hardware Kits
          </span>
        </div>
      </div>

      {
    /* CONTINUE LEARNING SECTION */
  }
      <div className="rounded-3xl border border-cyan-800/40 bg-gradient-to-r from-slate-950 via-cyan-950/20 to-slate-950 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <h3 className="font-bold text-base text-white">Continue Learning</h3>
          </div>
          <span className="font-mono text-xs text-cyan-400">Next Up in Sequence</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-cyan-950 px-2 py-0.5 font-mono text-xs font-bold text-cyan-400 border border-cyan-800/40">
                Topic {activeLesson.topicNumber}
              </span>
              <span className="font-mono text-xs text-slate-400">
                {activeLesson.durationMinutes} mins • Reading & Code
              </span>
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight">{activeLesson.title}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
              {activeLesson.summary}
            </p>
            <div className="pt-2 max-w-md">
              <ProgressBar progress={overallProgress} label="Course Progress" color="cyan" size="sm" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
    onClick={() => navigateTo("lesson", { lessonId: activeLesson.id })}
    className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-8 py-3.5 text-xs font-bold text-white shadow-xl shadow-cyan-500/20 hover:from-cyan-500 hover:to-emerald-400 transition-all font-mono"
  >
              <Play className="h-4 w-4 fill-white" />
              <span>Continue Learning</span>
            </button>
          </div>
        </div>
      </div>

      {
    /* RECOMMENDED FOR YOU (Based on source material topics) */
  }
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Recommended for You</h3>
            <p className="text-xs text-slate-400">
              Curated lessons and project labs from the uploaded AI curriculum.
            </p>
          </div>
          <button
    onClick={() => navigateTo("courses")}
    className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
  >
            <span>View All</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recommendedTopics.map((rec) => <div
    key={rec.id}
    onClick={() => navigateTo("lesson", { lessonId: rec.id })}
    className="group cursor-pointer flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-xl"
  >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-cyan-400 border border-slate-700">
                    {rec.tag}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">{rec.duration}</span>
                </div>
                <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {rec.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono">{rec.module}</p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs font-mono text-cyan-400">
                <span>Start Lesson</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>)}
        </div>
      </div>

      {
    /* QUICK LAB SHORTCUTS: CODING & HARDWARE */
  }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
    /* Coding Lab Teaser */
  }
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
              <Zap className="h-4 w-4" />
              <span>INTERACTIVE CODING LAB</span>
            </div>
            <h4 className="text-base font-bold text-white">Python Sensor Telemetry Filter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Practice real-time vibration filtering and anomaly detection algorithms in our browser-based Python sandbox.
            </p>
          </div>
          <button
    onClick={() => navigateTo("coding")}
    className="mt-5 self-start flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-mono font-semibold text-cyan-300 hover:bg-slate-700 transition-colors"
  >
            <span>Open Coding Lab</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {
    /* Hardware Lab Teaser */
  }
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
              <Cpu className="h-4 w-4" />
              <span>HARDWARE LAB & BOM BUILDER</span>
            </div>
            <h4 className="text-base font-bold text-white">Verified Robotics & Sensor Kits</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore Arduino, ESP32, and Raspberry Pi modules verified by AI Mech Lab with built-in logic-level validation.
            </p>
          </div>
          <button
    onClick={() => navigateTo("hardware")}
    className="mt-5 self-start flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-mono font-semibold text-emerald-300 hover:bg-slate-700 transition-colors"
  >
            <span>Configure Kit</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>;
};
