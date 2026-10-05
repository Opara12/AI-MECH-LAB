import { useState } from "react";
import { useLearning } from "../context/LearningContext";
import { allQuizzes } from "../data/quizData";
import { QuizModal } from "../components/quiz/QuizModal";
import {
  HelpCircle,
  CheckCircle2,
  Award,
  ChevronRight,
  Trophy,
  Star,
  BookOpen,
  RotateCcw,
  ClipboardList
} from "lucide-react";
export const QuizPage = () => {
  const { userProfile, navigateTo, course } = useLearning();
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [filterModule, setFilterModule] = useState("All");
  const allQuizList = Object.values(allQuizzes);
  const moduleIds = ["All", ...course.modules.map((m) => m.id)];
  const moduleLabels = { All: "All Modules" };
  course.modules.forEach((m) => {
    moduleLabels[m.id] = `Module ${m.moduleNumber}`;
  });
  const filtered = filterModule === "All" ? allQuizList : allQuizList.filter((q) => q.moduleId === filterModule);
  const totalQuizzes = allQuizList.length;
  const completedIds = Object.keys(userProfile.quizScores);
  const completedCount = allQuizList.filter((q) => completedIds.includes(q.id)).length;
  const avgScore = completedIds.length > 0 ? Math.round(
    completedIds.reduce((sum, id) => sum + (userProfile.quizScores[id] || 0), 0) / completedIds.length
  ) : 0;
  const masteredCount = allQuizList.filter(
    (q) => (userProfile.quizScores[q.id] ?? 0) >= q.passingScore
  ).length;
  return <div className="space-y-8 animate-in fade-in duration-300">
      {
    /* Quiz Modal Overlay */
  }
      {activeQuiz && <QuizModal quiz={activeQuiz} onClose={() => setActiveQuiz(null)} />}

      {
    /* Header */
  }
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            Knowledge Assessment
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Quiz Centre
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Test and reinforce your understanding of each lesson with targeted engineering quizzes.
          </p>
        </div>

        {
    /* Module Filter */
  }
        <div className="flex items-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/80 p-1 flex-wrap">
          {moduleIds.map((id) => <button
    key={id}
    onClick={() => setFilterModule(id)}
    className={`rounded-xl px-3 py-1.5 font-mono text-xs transition-colors ${filterModule === id ? "bg-cyan-600 text-white font-semibold" : "text-slate-400 hover:text-white"}`}
  >
              {moduleLabels[id] || id}
            </button>)}
        </div>
      </div>

      {
    /* Stats Row */
  }
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
    { label: "Total Quizzes", value: totalQuizzes, icon: ClipboardList, color: "text-cyan-400" },
    { label: "Completed", value: completedCount, icon: CheckCircle2, color: "text-emerald-400" },
    { label: "Mastered", value: masteredCount, icon: Trophy, color: "text-amber-400" },
    { label: "Avg Score", value: `${avgScore}%`, icon: Star, color: "text-purple-400" }
  ].map(({ label, value, icon: Icon, color }) => <div
    key={label}
    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2"
  >
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-mono text-[11px]">{label}</span>
              <Icon className={`h-4 w-4 ${color}`} />
            </div>
            <span className={`text-2xl font-bold font-mono ${color}`}>{value}</span>
          </div>)}
      </div>

      {
    /* Quiz Cards Grid */
  }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((quiz) => {
    const score = userProfile.quizScores[quiz.id];
    const attempted = score !== void 0;
    const passed = attempted && score >= quiz.passingScore;
    const relatedLesson = course.modules.flatMap((m) => m.lessons).find((l) => l.quizId === quiz.id);
    const relatedModule = course.modules.find((m) => m.id === quiz.moduleId);
    return <div
      key={quiz.id}
      className={`group flex flex-col justify-between rounded-3xl border bg-slate-900/60 p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 ${passed ? "border-emerald-800/50 hover:border-emerald-500/40" : attempted ? "border-amber-800/40 hover:border-amber-500/40" : "border-slate-800 hover:border-cyan-500/40"}`}
    >
              <div className="space-y-3">
                {
      /* Module + Status */
    }
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-cyan-400 border border-slate-700">
                    {relatedModule ? `Module ${relatedModule.moduleNumber}` : quiz.moduleId}
                  </span>
                  {passed ? <span className="flex items-center gap-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" />
                      Passed
                    </span> : attempted ? <span className="flex items-center gap-1 rounded-full bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 font-mono text-[10px] text-amber-400">
                      <RotateCcw className="h-3 w-3" />
                      Retry
                    </span> : <span className="flex items-center gap-1 rounded-full bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                      <HelpCircle className="h-3 w-3" />
                      Not Started
                    </span>}
                </div>

                {
      /* Title + Description */
    }
                <h3 className="font-bold text-sm text-white group-hover:text-cyan-200 transition-colors leading-tight">
                  {quiz.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{quiz.description}</p>

                {
      /* Score bar (if attempted) */
    }
                {attempted && <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-500">Your Score</span>
                      <span
      className={`font-mono text-xs font-bold ${passed ? "text-emerald-400" : "text-amber-400"}`}
    >
                        {score}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
      className={`h-full rounded-full transition-all ${passed ? "bg-emerald-500" : "bg-amber-500"}`}
      style={{ width: `${score}%` }}
    />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">
                      Passing: {quiz.passingScore}% · {quiz.questions.length} questions
                    </span>
                  </div>}

                {!attempted && <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
                    <span>{quiz.questions.length} questions</span>
                    <span>·</span>
                    <span>Pass: {quiz.passingScore}%</span>
                  </div>}
              </div>

              {
      /* Footer Actions */
    }
              <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-4">
                {relatedLesson && <button
      onClick={() => navigateTo("lesson", { lessonId: relatedLesson.id })}
      className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-400 transition-colors"
    >
                    <BookOpen className="h-3 w-3" />
                    <span>View Lesson</span>
                  </button>}
                <button
      onClick={() => setActiveQuiz(quiz)}
      className={`ml-auto flex items-center gap-1.5 rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all ${passed ? "bg-emerald-950 border border-emerald-800/50 text-emerald-400 hover:bg-emerald-900" : "bg-cyan-600 text-white hover:bg-cyan-500 shadow-md"}`}
    >
                  <span>{passed ? "Retake" : attempted ? "Retry" : "Start Quiz"}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>;
  })}
      </div>

      {
    /* Achievement Prompt */
  }
      {masteredCount === totalQuizzes && <div className="rounded-3xl border border-amber-800/50 bg-gradient-to-r from-amber-950/30 via-slate-950 to-slate-900 p-6 flex items-center gap-4 shadow-xl">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-950 border border-amber-800/50 text-2xl">
            🏆
          </div>
          <div>
            <h4 className="font-bold text-base text-white">Quiz Master Unlocked!</h4>
            <p className="text-xs text-slate-400 mt-1">
              You've passed all {totalQuizzes} quizzes. Check your achievements page for your earned
              badge.
            </p>
          </div>
          <button
    onClick={() => navigateTo("progress")}
    className="ml-auto flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-amber-500 transition-colors shrink-0"
  >
            <Award className="h-4 w-4" />
            View Achievements
          </button>
        </div>}
    </div>;
};
