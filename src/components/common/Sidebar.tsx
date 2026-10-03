import React from 'react';
import { useLearning } from '../../context/LearningContext';
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Sparkles,
  Code2,
  FolderGit2,
  Cpu,
  SlidersHorizontal,
  Trophy,
  Users,
  Settings,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { activeTab, navigateTo, userProfile, activeLesson } = useLearning();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: '' },
    { id: 'courses', label: 'Courses', icon: BookOpen, badge: '4 Mod' },
    { id: 'lesson', label: 'My Learning', icon: GraduationCap, badge: activeLesson.topicNumber },
    { id: 'tutor', label: 'AI Tutor', icon: Sparkles, badge: 'Active' },
    { id: 'coding', label: 'Coding Lab', icon: Code2, badge: 'Python' },
    { id: 'quiz', label: 'Quiz Centre', icon: HelpCircle, badge: 'Assess' },
    { id: 'projects', label: 'Project Lab', icon: FolderGit2, badge: 'Capstone' },
    { id: 'hardware', label: 'Hardware Lab', icon: Cpu, badge: 'Verified' },
    { id: 'adaptive', label: 'Adaptive Path', icon: SlidersHorizontal, badge: '' },
    { id: 'progress', label: 'Achievements', icon: Trophy, badge: '8 Badges' },
    { id: 'community', label: 'Community', icon: Users, badge: '' },
    { id: 'settings', label: 'Settings', icon: Settings, badge: '' }
  ];

  const handleNav = (tabId: string) => {
    navigateTo(tabId);
    onClose();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-800 bg-slate-950/95 p-4 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            {/* User Profile Mini Banner */}
            <div className="mb-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3">
              <div className="flex items-center gap-3">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="h-10 w-10 rounded-xl object-cover ring-2 ring-cyan-500/30"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-white">
                    {userProfile.name}
                  </h3>
                  <p className="truncate text-[11px] text-cyan-400 font-mono">
                    {userProfile.experienceLevel}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[10px] font-mono">
                <span className="text-slate-400">Lessons Finished</span>
                <span className="text-emerald-400 font-bold">
                  {userProfile.completedLessons.length} / 11
                </span>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="space-y-1">
              <p className="px-3 pb-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Learning Workspace
              </p>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-950/90 to-slate-900 text-cyan-300 border border-cyan-800/60 shadow-lg shadow-cyan-950/30 font-semibold'
                        : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-4 w-4 transition-colors ${
                          isActive
                            ? 'text-cyan-400'
                            : 'text-slate-500 group-hover:text-slate-300'
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-mono font-medium ${
                          isActive
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Quick Resume Card */}
          <div className="mt-4 rounded-2xl border border-cyan-900/40 bg-gradient-to-br from-cyan-950/30 to-slate-950 p-3.5 shadow-inner">
            <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
              <span>Active Lesson</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <p className="mt-1 text-xs font-medium text-white line-clamp-1">
              {activeLesson.topicNumber} {activeLesson.title}
            </p>
            <button
              onClick={() => handleNav('lesson')}
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md hover:bg-cyan-500 transition-colors"
            >
              <span>Continue</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
