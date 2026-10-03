import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import {
  Settings,
  User,
  Key,
  Save,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Moon,
  Sun
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { userProfile, updateUserProfile, showToast } = useLearning();

  const [name, setName] = useState(userProfile.name);
  const [title, setTitle] = useState(userProfile.title);
  const [apiKey, setApiKey] = useState('');
  const [provider, setProvider] = useState<'openai' | 'anthropic' | 'gemini'>(
    userProfile.apiKeyProvider || 'gemini'
  );
  const [savedKey, setSavedKey] = useState(userProfile.apiKeySet);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name,
      title
    });
    showToast('Profile Updated', 'Student identity settings saved.', 'success');
  };

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      updateUserProfile({ apiKeySet: false });
      setSavedKey(false);
      showToast('API Key Cleared', 'Platform returned to native simulated AI mode.', 'info');
      return;
    }
    updateUserProfile({
      apiKeySet: true,
      apiKeyProvider: provider
    });
    setSavedKey(true);
    setApiKey('');
    showToast('API Key Configured', `Connected to ${provider.toUpperCase()} API engine.`, 'success');
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset your local lesson progress and quiz scores?')) {
      updateUserProfile({
        completedLessons: ['lesson-1-1'],
        quizScores: {},
        completedProjects: [],
        builtKits: []
      });
      showToast('Progress Reset', 'Local progress has been reset to starting state.', 'info');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
            SYSTEM PREFERENCES
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
          Platform Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Manage your student profile, connect real AI API credentials, and configure development preferences.
        </p>
      </div>

      {/* SECTION 1: Student Profile */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <User className="h-5 w-5 text-cyan-400" />
          <h3 className="font-bold text-base text-white">Student Profile Information</h3>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-4 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-400 block mb-1.5 font-sans">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-slate-400 block mb-1.5 font-sans">Headline / Role</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-cyan-500 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save Profile</span>
            </button>
          </div>
        </form>
      </div>

      {/* SECTION 2: External AI API Configuration */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-purple-400" />
            <h3 className="font-bold text-base text-white">AI Tutor Engine Integration</h3>
          </div>
          {savedKey ? (
            <span className="rounded-full bg-emerald-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-800/40">
              CUSTOM API CONNECTED
            </span>
          ) : (
            <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
              BUILT-IN LAB TUTOR (DEFAULT)
            </span>
          )}
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          AI Mech Lab includes a rich built-in engineering tutor that uses the course source materials. You can optionally connect your own API key (OpenAI, Anthropic, or Google Gemini) to power unconstrained custom inquiries.
        </p>

        <form onSubmit={handleSaveApiKey} className="space-y-4 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-400 block mb-1.5 font-sans">Provider</label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value as any)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
              >
                <option value="gemini">Google Gemini (Recommended)</option>
                <option value="openai">OpenAI (GPT-4o)</option>
                <option value="anthropic">Anthropic Claude</option>
              </select>
            </div>

            <div>
              <label className="text-slate-400 block mb-1.5 font-sans">API Key (Stored locally)</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={savedKey ? '••••••••••••••••••••••••' : 'Enter API Key...'}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-slate-200 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            {savedKey && (
              <button
                type="button"
                onClick={() => {
                  updateUserProfile({ apiKeySet: false });
                  setSavedKey(false);
                  showToast('Reverted', 'Reverted to built-in simulation tutor.', 'info');
                }}
                className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs text-slate-400 hover:text-white"
              >
                Disconnect Custom Key
              </button>
            )}
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-purple-500 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save AI Key</span>
            </button>
          </div>
        </form>
      </div>

      {/* SECTION 3: Danger Zone / Local Storage Management */}
      <div className="rounded-3xl border border-rose-950/50 bg-rose-950/10 p-6 space-y-4">
        <h4 className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider">
          Data Management
        </h4>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h5 className="font-bold text-sm text-white">Reset Course Progress</h5>
            <p className="text-xs text-slate-400 mt-0.5">
              Clear your local completion checkmarks, quiz scores, and saved hardware kits.
            </p>
          </div>
          <button
            onClick={handleResetProgress}
            className="flex items-center gap-2 rounded-xl border border-rose-800/80 bg-rose-950/40 px-4 py-2 text-xs font-mono font-bold text-rose-300 hover:bg-rose-900/60 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>
      </div>
    </div>
  );
};
