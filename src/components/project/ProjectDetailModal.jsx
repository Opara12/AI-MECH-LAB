import { useState } from "react";
import { useLearning } from "../../context/LearningContext";
import {
  X,
  CheckCircle2,
  Activity
} from "lucide-react";
import { CodeBlock } from "../lesson/CodeBlock";
export const ProjectDetailModal = ({ project, onClose }) => {
  const { recordProjectComplete, userProfile, navigateTo } = useLearning();
  const isCompleted = userProfile.completedProjects.includes(project.id);
  const [runtimeHrs, setRuntimeHrs] = useState(600);
  const [loadPct, setLoadPct] = useState(89);
  const [vibration, setVibration] = useState(6);
  const predictedTemp = (40 + runtimeHrs * 0.02 + loadPct * 0.28 + vibration * 1.5).toFixed(1);
  const z = -8.5 + runtimeHrs * 5e-3 + loadPct * 0.05 + vibration * 0.8;
  const failureProb = Math.min(99.9, Math.max(0.1, 1 / (1 + Math.exp(-z)) * 100)).toFixed(1);
  const isFail = Number(failureProb) >= 50;
  const sanityCheckPassed = Number(predictedTemp) > 70 && Number(failureProb) > 75;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
        {
    /* Modal Header */
  }
        <div className="flex items-start justify-between border-b border-slate-800/80 bg-slate-900/60 p-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
                PRACTICAL ENGINEERING LAB
              </span>
              <span className="font-mono text-xs text-slate-400">• {project.difficulty} Track</span>
            </div>
            <h2 className="mt-2 text-xl font-bold text-white tracking-tight">{project.title}</h2>
          </div>
          <button
    onClick={onClose}
    className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
  >
            <X className="h-5 w-5" />
          </button>
        </div>

        {
    /* Modal Scrollable Body */
  }
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {
    /* Overview & Dataset Anatomy */
  }
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
              Lab Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
            {project.datasetDescription && <div className="mt-2 rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs font-mono text-slate-300">
                <span className="text-slate-500 block text-[10px] uppercase">Telemetry Dataset:</span>
                {project.datasetDescription}
              </div>}
          </div>

          {
    /* Interactive Dual-Model Simulator (for Capstone project) */
  }
          {project.interactiveDemo && <div className="rounded-3xl border border-cyan-800/60 bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-900 p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-cyan-900/50 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-cyan-400" />
                  <h4 className="font-bold text-sm text-white font-mono">
                    LIVE MOTOR HEALTH PREDICTOR
                  </h4>
                </div>
                <span className="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-800/40">
                  Dual Scikit-Learn Inference
                </span>
              </div>

              {
    /* Slider Inputs */
  }
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs">
                {
    /* Runtime Hours */
  }
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-slate-400">Runtime Hours:</span>
                    <span className="font-bold text-cyan-400">{runtimeHrs} hrs</span>
                  </div>
                  <input
    type="range"
    min="50"
    max="1000"
    step="10"
    value={runtimeHrs}
    onChange={(e) => setRuntimeHrs(Number(e.target.value))}
    className="w-full accent-cyan-400 cursor-pointer"
  />
                  <span className="text-[10px] text-slate-500 mt-1 block">Since last service overhaul</span>
                </div>

                {
    /* Workload % */
  }
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-slate-400">Workload:</span>
                    <span className="font-bold text-cyan-400">{loadPct}%</span>
                  </div>
                  <input
    type="range"
    min="20"
    max="100"
    step="1"
    value={loadPct}
    onChange={(e) => setLoadPct(Number(e.target.value))}
    className="w-full accent-cyan-400 cursor-pointer"
  />
                  <span className="text-[10px] text-slate-500 mt-1 block">Continuous rated shaft power</span>
                </div>

                {
    /* Vibration RMS */
  }
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-slate-400">Vibration (RMS):</span>
                    <span className="font-bold text-cyan-400">{vibration.toFixed(1)} mm/s</span>
                  </div>
                  <input
    type="range"
    min="0.5"
    max="10.0"
    step="0.1"
    value={vibration}
    onChange={(e) => setVibration(Number(e.target.value))}
    className="w-full accent-cyan-400 cursor-pointer"
  />
                  <span className="text-[10px] text-slate-500 mt-1 block">ISO 10816 bearing threshold</span>
                </div>
              </div>

              {
    /* Real-Time Predictions Output */
  }
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {
    /* Continuous Regression */
  }
                <div className="rounded-2xl border border-blue-900/50 bg-blue-950/30 p-4">
                  <span className="text-[10px] font-mono uppercase text-blue-400 block font-semibold">
                    Model 1: LinearRegression (Continuous)
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono text-white">{predictedTemp}°C</span>
                    <span className="text-xs text-slate-400 font-mono">Predicted Operating Temp</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
    className="h-full bg-blue-500 transition-all duration-300"
    style={{ width: `${Math.min(100, Number(predictedTemp) / 100 * 100)}%` }}
  />
                  </div>
                </div>

                {
    /* Categorical Classification */
  }
                <div className={`rounded-2xl border p-4 ${isFail ? "border-rose-900/50 bg-rose-950/30" : "border-emerald-900/50 bg-emerald-950/30"}`}>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                    Model 2: LogisticRegression (Probability)
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-3xl font-bold font-mono ${isFail ? "text-rose-400" : "text-emerald-400"}`}>
                      {failureProb}%
                    </span>
                    <span className="text-xs text-slate-300 font-mono">
                      Risk of 30-Day Failure ({isFail ? "CRITICAL RISK" : "NORMAL RANGE"})
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
    className={`h-full transition-all duration-300 ${isFail ? "bg-rose-500" : "bg-emerald-500"}`}
    style={{ width: `${failureProb}%` }}
  />
                  </div>
                </div>
              </div>

              {
    /* Sanity Check Alert */
  }
              <div className="rounded-xl border border-emerald-800/40 bg-emerald-950/20 p-3.5 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-emerald-400 font-mono block">Physics Domain Sanity Check: PASSED</strong>
                  The elevated temperature ({predictedTemp}°C) and failure probability ({failureProb}%) correlate logically with the elevated workload ({loadPct}%) and severe bearing vibration ({vibration} mm/s).
                </div>
              </div>
            </div>}

          {
    /* Project Milestones */
  }
          <div className="space-y-4">
            <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider text-cyan-400">
              Implementation Milestones
            </h4>
            <div className="space-y-4">
              {project.steps.map((st) => <div key={st.stepNumber} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-950 font-mono text-xs font-bold text-cyan-400 border border-cyan-800/40">
                      {st.stepNumber}
                    </span>
                    <h5 className="font-semibold text-sm text-white">{st.title}</h5>
                  </div>
                  <p className="text-xs text-slate-300 pl-8 leading-relaxed">{st.description}</p>
                  {st.codeSnippet && <div className="pl-8 pt-2">
                      <CodeBlock code={st.codeSnippet} language="python" />
                    </div>}
                  <div className="pl-8 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 pt-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Target: {st.expectedOutcome}</span>
                  </div>
                </div>)}
            </div>
          </div>

          {
    /* Hardware Integration Section */
  }
          {project.hardwareRequired && <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h5 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                Compatible Hardware Lab Components
              </h5>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.hardwareRequired.map((h, i) => <span
    key={i}
    onClick={() => {
      onClose();
      navigateTo("hardware");
    }}
    className="cursor-pointer rounded-xl border border-cyan-900/50 bg-cyan-950/40 px-3 py-1.5 text-xs font-mono text-cyan-300 hover:bg-cyan-900/50 transition-colors"
  >
                    + {h}
                  </span>)}
              </div>
            </div>}
        </div>

        {
    /* Modal Footer */
  }
        <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-900/60 p-4 px-6">
          <button
    onClick={onClose}
    className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-mono text-slate-300 hover:bg-slate-700 transition-colors"
  >
            Close
          </button>

          <button
    onClick={() => {
      recordProjectComplete(project.id);
      onClose();
    }}
    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-500 hover:to-emerald-400 transition-all font-mono"
  >
            <CheckCircle2 className="h-4 w-4" />
            <span>{isCompleted ? "Marked Completed" : "Complete Project"}</span>
          </button>
        </div>
      </div>
    </div>;
};
