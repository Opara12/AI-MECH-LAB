import { useState } from "react";
import { useLearning } from "../../context/LearningContext";
import {
  Cpu,
  Search,
  Bell,
  Sparkles,
  Menu,
  X,
  Settings,
  Flame,
  Award,
  BookOpen
} from "lucide-react";
export const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const { userProfile, navigateTo, activeTab, searchQuery, setSearchQuery } = useLearning();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notifications = [
    {
      id: "n1",
      title: "14-Day Streak Unlocked! \u{1F525}",
      text: "You earned the Relentless Momentum badge for daily consistency.",
      time: "10m ago",
      unread: true
    },
    {
      id: "n2",
      title: "Quiz Mastered: Python Essentials",
      text: "You scored 100% on Module 2, Topic 2.1.",
      time: "2h ago",
      unread: false
    },
    {
      id: "n3",
      title: "New Hardware Kit Available",
      text: "Predictive Maintenance Telemetry Hub is verified and ready in Hardware Lab.",
      time: "1d ago",
      unread: false
    }
  ];
  return <header className="sticky top-0 z-40 w-full border-b border-cyan-900/30 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {
    /* Left: Brand Logo & Mobile Menu */
  }
        <div className="flex items-center gap-3">
          {activeTab !== "landing" && <button
    onClick={onToggleSidebar}
    className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-cyan-400 lg:hidden"
    aria-label="Toggle Navigation"
  >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>}

          <div
    onClick={() => navigateTo("landing")}
    className="flex cursor-pointer items-center gap-3 group"
  >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-emerald-500 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/40 transition-transform group-hover:scale-105">
              <Cpu className="h-6 w-6 text-white" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border border-slate-950" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  AI MECH LAB
                </span>
                <span className="rounded bg-cyan-950/80 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-800/40">
                  v2.4
                </span>
              </div>
              <p className="hidden text-[10px] text-slate-400 sm:block font-mono tracking-wider">
                ENGINEERING LEARNING ECOSYSTEM
              </p>
            </div>
          </div>
        </div>

        {
    /* Center: Search & Navigation quicklinks */
  }
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
              <Search className="h-4 w-4" />
            </div>
            <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search topics, modules, code, hardware (e.g. NumPy, motors, regression)..."
    className="w-full rounded-xl border border-slate-800 bg-slate-900/60 py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
  />
          </div>
        </div>

        {
    /* Right: Actions, Streaks, Notifications, Profile */
  }
        <div className="flex items-center gap-2 sm:gap-4">
          {
    /* Learning Streak Badge */
  }
          <div
    onClick={() => navigateTo("progress")}
    className="flex cursor-pointer items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-400 hover:bg-amber-500/20 transition-colors"
    title="14-Day Continuous Daily Learning Streak"
  >
            <Flame className="h-4 w-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span className="font-mono">{userProfile.learningStreakDays}d</span>
          </div>

          {
    /* Quick AI Tutor Shortcut */
  }
          <button
    onClick={() => navigateTo("tutor")}
    className="hidden sm:flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all shadow-sm"
  >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>AI Tutor</span>
          </button>

          {
    /* Notifications Dropdown */
  }
          <div className="relative">
            <button
    onClick={() => {
      setShowNotifications(!showNotifications);
      setShowProfileMenu(false);
    }}
    className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-cyan-400 transition-colors"
    aria-label="Notifications"
  >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-cyan-400" />
            </button>

            {showNotifications && <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl z-50">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="font-semibold text-sm text-white">Notifications</h4>
                  <span className="text-[10px] text-cyan-400 font-mono">3 updates</span>
                </div>
                <div className="mt-3 space-y-2.5 max-h-72 overflow-y-auto">
                  {notifications.map((n) => <div
    key={n.id}
    className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-2.5 hover:border-cyan-800/50 transition-colors"
  >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-white">{n.title}</span>
                        <span className="text-[10px] text-slate-500">{n.time}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">{n.text}</p>
                    </div>)}
                </div>
                <div className="mt-3 border-t border-slate-800 pt-2 text-center">
                  <button
    onClick={() => setShowNotifications(false)}
    className="text-[11px] text-cyan-400 hover:underline font-mono"
  >
                    Close
                  </button>
                </div>
              </div>}
          </div>

          {
    /* Profile Dropdown */
  }
          <div className="relative">
            <button
    onClick={() => {
      setShowProfileMenu(!showProfileMenu);
      setShowNotifications(false);
    }}
    className="flex items-center gap-2 rounded-full p-0.5 ring-2 ring-cyan-500/30 hover:ring-cyan-400 transition-all"
  >
              <img
    src={userProfile.avatar}
    alt={userProfile.name}
    className="h-8 w-8 rounded-full object-cover"
  />
            </button>

            {showProfileMenu && <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-800 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl z-50">
                <div className="border-b border-slate-800 pb-3 px-2">
                  <p className="font-medium text-sm text-white">{userProfile.name}</p>
                  <p className="text-[11px] text-cyan-400 font-mono">{userProfile.title}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                      {userProfile.experienceLevel}
                    </span>
                    <span className="rounded bg-emerald-950 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-800/40">
                      {userProfile.completedLessons.length}/11 Lessons
                    </span>
                  </div>
                </div>

                <div className="py-2 text-xs text-slate-300 space-y-1">
                  <button
    onClick={() => {
      navigateTo("dashboard");
      setShowProfileMenu(false);
    }}
    className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
  >
                    <BookOpen className="h-4 w-4" />
                    Student Dashboard
                  </button>
                  <button
    onClick={() => {
      navigateTo("adaptive");
      setShowProfileMenu(false);
    }}
    className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
  >
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    Adaptive Learning Path
                  </button>
                  <button
    onClick={() => {
      navigateTo("progress");
      setShowProfileMenu(false);
    }}
    className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
  >
                    <Award className="h-4 w-4 text-amber-400" />
                    Achievements & Stats
                  </button>
                  <button
    onClick={() => {
      navigateTo("settings");
      setShowProfileMenu(false);
    }}
    className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
  >
                    <Settings className="h-4 w-4" />
                    Platform Settings & API
                  </button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </header>;
};
