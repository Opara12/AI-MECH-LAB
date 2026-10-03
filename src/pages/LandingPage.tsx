import React, { useState, useEffect } from 'react';
import { useLearning } from '../context/LearningContext';
import {
  Cpu,
  Sparkles,
  ArrowRight,
  BookOpen,
  Wrench,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  ShieldCheck,
  Flame,
  Award,
  Zap,
  TrendingUp,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { navigateTo } = useLearning();

  // Simulated live sensor stream in hero
  const [telemetry, setTelemetry] = useState({
    rpm: 1750,
    vibration: 2.3,
    temp: 58.4,
    health: 98.7
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        rpm: Math.round(1740 + Math.random() * 25),
        vibration: +(2.1 + Math.random() * 0.4).toFixed(2),
        temp: +(58.0 + Math.random() * 0.9).toFixed(1),
        health: +(98.5 + Math.random() * 0.4).toFixed(1)
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      {/* Background Engineering Grid and Gradient Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#082f4915_1px,transparent_1px),linear-gradient(to_bottom,#082f4915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-cyan-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-emerald-600/10 blur-[140px]" />

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono font-medium text-cyan-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>AI MECH LAB 2.0 • BUILT FOR STUDENTS & CREATORS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Learn AI. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Build Systems.
              </span>{' '}
              <br />
              Create the Future.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              An intelligent learning platform that helps students move from understanding technology to actually building with it. Master Artificial Intelligence, Machine Learning, Robotics, and Mechatronics through structured curriculums, practical projects, and AI-assisted tutoring.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigateTo('dashboard')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-cyan-500/25 hover:from-cyan-400 hover:to-emerald-400 hover:scale-[1.02] transition-all font-mono"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => navigateTo('courses')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all font-mono backdrop-blur-sm"
              >
                <BookOpen className="h-4 w-4 text-cyan-400" />
                <span>Explore Courses</span>
              </button>
            </div>

            {/* Social Proof / Benchmarks */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 font-mono text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">11 Topics</span>
                <span className="text-[11px] text-slate-500">Core Source Curriculum</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-cyan-400 block">4 Modules</span>
                <span className="text-[11px] text-slate-500">Theory to Capstones</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-emerald-400 block">100% Free</span>
                <span className="text-[11px] text-slate-500">Open-Source Lab</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Visual Representation of AI & Robotics Laboratory (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-cyan-500/20">
              {/* Header with Lab Status */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-cyan-300">MECHATRONIC TELEMETRY HUB</span>
                </div>
                <span className="text-[10px] text-slate-500">PORT: 8080/STREAM</span>
              </div>

              {/* Live Virtual Motor Simulation Graphic */}
              <div className="my-5 rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-cyan-400 animate-spin" />
                    <div>
                      <h4 className="font-bold text-xs text-white">Induction Motor Testbed #04</h4>
                      <p className="text-[10px] text-slate-400 font-mono">Dual Supervised ML Pipeline</p>
                    </div>
                  </div>
                  <span className="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-800/40">
                    NORMAL
                  </span>
                </div>

                {/* Telemetry Numbers Grid */}
                <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5">
                    <span className="text-slate-500 text-[10px] block">Shaft Speed:</span>
                    <span className="text-base font-bold text-cyan-300">{telemetry.rpm} RPM</span>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5">
                    <span className="text-slate-500 text-[10px] block">RMS Vibration:</span>
                    <span className="text-base font-bold text-teal-300">{telemetry.vibration} mm/s</span>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5">
                    <span className="text-slate-500 text-[10px] block">Stator Temp:</span>
                    <span className="text-base font-bold text-amber-300">{telemetry.temp}°C</span>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5">
                    <span className="text-slate-500 text-[10px] block">Health Score:</span>
                    <span className="text-base font-bold text-emerald-300">{telemetry.health}%</span>
                  </div>
                </div>

                {/* Simulated Neural Network Weight Transform */}
                <div className="rounded-xl border border-cyan-900/50 bg-cyan-950/20 p-2.5 text-[11px] font-mono text-cyan-300 flex items-center justify-between">
                  <span>LinearRegression: 76.4°C</span>
                  <span>LogisticRisk: 11.2%</span>
                </div>
              </div>

              {/* Bottom Interactive Trigger */}
              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <span className="text-slate-400">Integrated Scikit-Learn</span>
                <button
                  onClick={() => navigateTo('projects')}
                  className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Launch Simulator</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AI MECH LAB? (THE 3 PROBLEMS & SOLUTIONS) */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="rounded-full bg-cyan-950 px-3 py-1 font-mono text-xs font-semibold text-cyan-400 border border-cyan-800/40">
            THE PARADIGM SHIFT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why AI Mech Lab?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Traditional education separates software theory from physical hardware reality. AI Mech Lab solves the three critical barriers holding students and engineers back.
          </p>
        </div>

        {/* 3 Problems & Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 hover:border-cyan-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-950/50 border border-rose-800/50 text-rose-400 font-mono font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-white">The Problem: Unstructured Learning</h3>
              <p className="text-xs text-rose-300/80 leading-relaxed">
                Random YouTube tutorials, disconnected GitHub repos, and fragmented blogs leave students overwhelmed without a coherent learning roadmap.
              </p>
              <div className="rounded-2xl border border-cyan-800/40 bg-cyan-950/20 p-4 space-y-2 mt-4">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>The AI Mech Lab Solution</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A structured 4-module progression from AI foundations, Python syntax, and linear algebra to full industrial predictive maintenance models.
                </p>
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 hover:border-cyan-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-950/50 border border-amber-800/50 text-amber-400 font-mono font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-white">The Problem: Dense Technical Theory</h3>
              <p className="text-xs text-amber-300/80 leading-relaxed">
                Abstract mathematical equations, obscure matrix proofs, and confusing terminology create high barriers to understanding core machine learning.
              </p>
              <div className="rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-4 space-y-2 mt-4">
                <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-bold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>The AI Mech Lab Solution</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interactive visual concept models, real mechatronic analogies, and an integrated AI Tutor that explains any concept like you are 14.
                </p>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 hover:border-cyan-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-950/50 border border-purple-800/50 text-purple-400 font-mono font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-white">The Problem: Hardware & Lab Barriers</h3>
              <p className="text-xs text-purple-300/80 leading-relaxed">
                Access to robotics hardware, microcontrollers, and sensors is costly, confusing to source, and plagued by voltage and compatibility pitfalls.
              </p>
              <div className="rounded-2xl border border-teal-800/40 bg-teal-950/20 p-4 space-y-2 mt-4">
                <div className="flex items-center gap-2 text-teal-300 font-mono text-xs font-bold">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" />
                  <span>The AI Mech Lab Solution</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A verified Hardware Lab with automated electrical compatibility checkers, project bill-of-materials generators, and browser simulators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM HIGHLIGHTS PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-800/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
              Primary Course
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              AI Fundamentals for Mechatronics
            </h2>
          </div>
          <button
            onClick={() => navigateTo('courses')}
            className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors self-start md:self-auto"
          >
            <span>View Full 4-Module Curriculum</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
            <span className="rounded-lg bg-cyan-950 px-2 py-0.5 font-mono text-[10px] text-cyan-400 border border-cyan-800/40">
              MODULE 1
            </span>
            <h4 className="font-bold text-white text-base">Introduction to AI</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI vs ML vs Deep Learning, predictive maintenance, Airbus generative design, and AI ethics.
            </p>
            <span className="text-[11px] font-mono text-slate-500 block pt-2 border-t border-slate-800">
              3 In-Depth Lessons
            </span>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
            <span className="rounded-lg bg-emerald-950 px-2 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-800/40">
              MODULE 2
            </span>
            <h4 className="font-bold text-white text-base">Python & NumPy</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Variables, loops for streaming telemetry, functions, and vectorized high-speed C-based NumPy arrays.
            </p>
            <span className="text-[11px] font-mono text-slate-500 block pt-2 border-t border-slate-800">
              2 Coding Labs Included
            </span>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
            <span className="rounded-lg bg-purple-950 px-2 py-0.5 font-mono text-[10px] text-purple-400 border border-purple-800/40">
              MODULE 3
            </span>
            <h4 className="font-bold text-white text-base">Mathematics for AI</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sensor coordinate vectors, dot products, dataset matrices, uncertainty probability, and standardization.
            </p>
            <span className="text-[11px] font-mono text-slate-500 block pt-2 border-t border-slate-800">
              Applied Math & Code
            </span>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
            <span className="rounded-lg bg-amber-950 px-2 py-0.5 font-mono text-[10px] text-amber-400 border border-amber-800/40">
              MODULE 4
            </span>
            <h4 className="font-bold text-white text-base">Machine Learning & Capstone</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Supervised regression and classification, ending in a dual-model industrial motor failure prediction pipeline.
            </p>
            <span className="text-[11px] font-mono text-slate-500 block pt-2 border-t border-slate-800">
              Complete Capstone Project
            </span>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/70 via-slate-900 to-emerald-950/70 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Build Intelligent Systems?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators and students mastering the future of AI, robotics, and physical computing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('dashboard')}
              className="w-full sm:w-auto rounded-2xl bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg hover:bg-cyan-400 transition-all font-mono"
            >
              Launch Student Dashboard
            </button>
            <button
              onClick={() => navigateTo('hardware')}
              className="w-full sm:w-auto rounded-2xl border border-slate-700 bg-slate-900/90 px-8 py-4 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-all font-mono"
            >
              Explore Hardware Lab
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 px-4 text-center font-mono text-xs text-slate-500">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-cyan-400" />
            <span className="font-bold text-slate-300">AI MECH LAB</span>
            <span>— The AI & Mechatronics Learning Ecosystem</span>
          </div>
          <p>© 2026 AI Mech Lab. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};
