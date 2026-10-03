import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import { ExperienceLevel, LearningPreference } from '../types/user';
import {
  SlidersHorizontal,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Cpu,
  GraduationCap,
  Code2,
  Activity,
  Layers
} from 'lucide-react';

export const AdaptiveLearningPage: React.FC = () => {
  const { userProfile, updateLearningPreferences, navigateTo } = useLearning();

  const [selectedLevel, setSelectedLevel] = useState<ExperienceLevel>(userProfile.experienceLevel);
  const [selectedPreference, setSelectedPreference] = useState<LearningPreference>(
    userProfile.learningPreference
  );
  const [selectedTrack, setSelectedTrack] = useState<string>(userProfile.primaryTrack);

  const levels: { level: ExperienceLevel; desc: string }[] = [
    {
      level: 'Complete Beginner',
      desc: 'No prior programming or math background. Focus on intuitive physical analogies and guided visual models.'
    },
    {
      level: 'Beginner',
      desc: 'Some familiarity with basic computers or STEM concepts. Ready for variables, sensor loops, and supervised ML.'
    },
    {
      level: 'Intermediate',
      desc: 'Comfortable writing basic Python scripts. Eager to master vector math, NumPy ndarrays, and Scikit-Learn pipelines.'
    },
    {
      level: 'Advanced',
      desc: 'Experienced software or hardware engineer looking to integrate edge neural networks and predictive maintenance.'
    }
  ];

  const preferences: { pref: LearningPreference; icon: any; desc: string }[] = [
    {
      pref: 'Simple explanations',
      icon: Sparkles,
      desc: 'Break down complex math into everyday metaphors (e.g. egg cartons for NumPy memory).'
    },
    {
      pref: 'Technical explanations',
      icon: Layers,
      desc: 'Rigorous mathematical formulation, equations, and algorithmic derivation.'
    },
    {
      pref: 'Practical projects',
      icon: Cpu,
      desc: 'Learn by constructing working machines, rovers, and motor failure prediction models.'
    },
    {
      pref: 'Visual explanations',
      icon: Activity,
      desc: 'Interactive visual concept graphs, decision boundary sliders, and architecture diagrams.'
    },
    {
      pref: 'Coding exercises',
      icon: Code2,
      desc: 'Hands-on keyboard practice writing Python sensor telemetry filters and array operations.'
    }
  ];

  // Dynamic pathway recommendation
  const getPersonalizedPath = () => {
    if (selectedLevel === 'Complete Beginner') {
      return [
        { step: 1, title: 'What is AI, ML & Deep Learning?', type: 'Concept Foundation', id: 'lesson-1-1' },
        { step: 2, title: 'Real-World Engineering Use Cases', type: 'Physical Applications', id: 'lesson-1-2' },
        { step: 3, title: 'Python Essentials for Mechatronics', type: 'Hands-on Programming', id: 'lesson-2-1' },
        { step: 4, title: 'Supervised Learning & Regression', type: 'Applied AI', id: 'lesson-4-2' },
        { step: 5, title: 'Industrial Motor Failure Capstone', type: 'Capstone Lab', id: 'lesson-4-4' }
      ];
    } else if (selectedLevel === 'Intermediate' || selectedLevel === 'Advanced') {
      return [
        { step: 1, title: 'NumPy Basics & Vectorized Arrays', type: 'High-Speed Computing', id: 'lesson-2-2' },
        { step: 2, title: 'Linear Algebra: Vectors & Matrices', type: 'Mathematical Geometry', id: 'lesson-3-1' },
        { step: 3, title: 'Probability & Statistics Uncertainty', type: 'Statistical Inference', id: 'lesson-3-2' },
        { step: 4, title: 'Classification & Decision Boundaries', type: 'Pattern Separation', id: 'lesson-4-3' },
        { step: 5, title: 'Dual-Model Industrial Capstone', type: 'Production Deployment', id: 'lesson-4-4' }
      ];
    }
    return [
      { step: 1, title: 'AI & Engineering Foundations', type: 'Core Vocabulary', id: 'lesson-1-1' },
      { step: 2, title: 'Python Telemetry Handling', type: 'Programming Basics', id: 'lesson-2-1' },
      { step: 3, title: 'NumPy Fast Arrays & Slicing', type: 'Numerical Tools', id: 'lesson-2-2' },
      { step: 4, title: 'Linear Algebra & Statistics', type: 'Mathematical Language', id: 'lesson-3-1' },
      { step: 5, title: 'Supervised Models & Capstone', type: 'Hands-On Project', id: 'lesson-4-4' }
    ];
  };

  const currentPath = getPersonalizedPath();

  const handleApply = () => {
    updateLearningPreferences(selectedLevel, selectedPreference, selectedTrack);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
            PERSONALIZED LEARNING ENGINE
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
          Adaptive Learning & Personalization
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Customize how AI Mech Lab tailors explanations, code depth, and project milestones to your background.
        </p>
      </div>

      {/* QUESTION 1: Experience Level */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-950 font-mono text-xs font-bold text-cyan-400 border border-cyan-800/40">
            1
          </span>
          <h3 className="font-bold text-base text-white">What's your experience level?</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {levels.map((lvl) => {
            const isSelected = selectedLevel === lvl.level;
            return (
              <button
                key={lvl.level}
                onClick={() => setSelectedLevel(lvl.level)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-950/40 ring-1 ring-cyan-500/50 shadow-lg'
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">{lvl.level}</span>
                  {isSelected && <CheckCircle2 className="h-4 w-4 text-cyan-400" />}
                </div>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{lvl.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* QUESTION 2: Preferred Learning Style */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-950 font-mono text-xs font-bold text-cyan-400 border border-cyan-800/40">
            2
          </span>
          <h3 className="font-bold text-base text-white">How do you prefer to learn?</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {preferences.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedPreference === p.pref;
            return (
              <button
                key={p.pref}
                onClick={() => setSelectedPreference(p.pref)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-950/40 ring-1 ring-emerald-500/50 shadow-lg'
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`h-4 w-4 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span className="font-bold text-sm text-white">{p.pref}</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* PERSONALIZED RECOMMENDATION BOX */}
      <div className="rounded-3xl border border-cyan-800/50 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-slate-900 p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold">
              <Sparkles className="h-4 w-4" />
              <span>YOUR AI LEARNING PATH</span>
            </div>
            <h3 className="mt-1 text-lg font-bold text-white">
              Based on your experience, we recommend this sequence:
            </h3>
          </div>

          <button
            onClick={handleApply}
            className="rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-6 py-2.5 text-xs font-bold text-white shadow-lg hover:from-cyan-500 hover:to-emerald-400 transition-all font-mono"
          >
            Save Learning Profile
          </button>
        </div>

        {/* Recommended Path Roadmap */}
        <div className="space-y-3">
          {currentPath.map((item) => (
            <div
              key={item.step}
              onClick={() => navigateTo('lesson', { lessonId: item.id })}
              className="group cursor-pointer flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 hover:border-cyan-500/50 hover:bg-slate-900 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-950 border border-cyan-800/40 font-mono text-xs font-bold text-cyan-400">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500">{item.type}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>Start Step</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
