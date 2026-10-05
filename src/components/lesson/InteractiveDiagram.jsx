import { useState } from "react";
import {
  Layers,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
export const InteractiveDiagram = ({ type, title, description }) => {
  const [selectedBox, setSelectedBox] = useState("ai");
  const [decisionThreshold, setDecisionThreshold] = useState(50);
  const [simVibration, setSimVibration] = useState(5.2);
  const [simTemp, setSimTemp] = useState(72);
  return <div className="my-6 rounded-2xl border border-cyan-900/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-cyan-400" />
          <h4 className="font-semibold text-sm text-white">{title}</h4>
        </div>
        <span className="rounded bg-cyan-950 px-2 py-0.5 font-mono text-[10px] text-cyan-400 border border-cyan-800/40">
          Interactive Visualizer
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-400 leading-relaxed">{description}</p>

      {
    /* DIAGRAM 1: Nested AI Hierarchy */
  }
      {type === "nested-ai" && <div className="mt-5 space-y-4">
          <div className="relative mx-auto max-w-lg rounded-2xl border border-cyan-600/40 bg-cyan-950/20 p-5 text-center shadow-lg transition-all">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-cyan-300">
              <span>ARTIFICIAL INTELLIGENCE (AI)</span>
              <span className="text-[10px] text-cyan-400">Broadest Goal Category</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Systems performing tasks requiring human intelligence (e.g. 1990s Rule-Based Chess, Expert Systems)
            </p>

            {
    /* Nested ML */
  }
            <div className="mt-4 rounded-xl border border-emerald-500/50 bg-emerald-950/30 p-4 text-center">
              <div className="flex items-center justify-between font-mono text-xs font-bold text-emerald-300">
                <span>MACHINE LEARNING (ML)</span>
                <span className="text-[10px] text-emerald-400">Learns from Data</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Algorithms that discover patterns from examples rather than explicit rules (e.g. Linear Regression, Random Forest)
              </p>

              {
    /* Nested DL */
  }
              <div className="mt-4 rounded-lg border border-purple-500/50 bg-purple-950/40 p-3 text-center">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-purple-300">
                  <span>DEEP LEARNING (DL)</span>
                  <span className="text-[10px] text-purple-400">Multi-Layer Neural Nets</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Stacked neural network layers for unstructured data (e.g. Computer Vision defect cameras, LLMs)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-2.5">
              <span className="text-cyan-400 font-semibold block">Explainability</span>
              <p className="text-slate-400 mt-1 text-[11px]">Rule-based is 100% auditable; Deep Learning is hardest to explain.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-2.5">
              <span className="text-emerald-400 font-semibold block">Data Requirement</span>
              <p className="text-slate-400 mt-1 text-[11px]">Rules need 0 data; ML needs thousands; DL needs millions of samples.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-2.5">
              <span className="text-purple-400 font-semibold block">Flexibility</span>
              <p className="text-slate-400 mt-1 text-[11px]">Rules are brittle; DL handles complex noise, audio, and visual defects.</p>
            </div>
          </div>
        </div>}

      {
    /* DIAGRAM 2: Rule-Based vs Machine Learning */
  }
      {type === "rule-vs-ml" && <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <h5 className="font-mono text-xs font-bold text-amber-400">TRADITIONAL RULE-BASED LOGIC</h5>
            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-xs text-slate-300">
              <div className="rounded bg-slate-800 p-2 border border-slate-700">Rules (Human)</div>
              <span>+</span>
              <div className="rounded bg-slate-800 p-2 border border-slate-700">Data (Sensors)</div>
              <ArrowRight className="h-4 w-4 text-slate-500" />
              <div className="rounded bg-amber-950 text-amber-300 p-2 border border-amber-800/60 font-bold">Answers</div>
            </div>
            <p className="mt-3 text-[11px] text-slate-400 leading-relaxed">
              Programmer writes "if temp &gt; 80: alarm()". Predictable, but brittle. Breaks whenever an unexpected real-world scenario occurs.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-800/60 bg-cyan-950/20 p-4">
            <h5 className="font-mono text-xs font-bold text-cyan-400">MACHINE LEARNING PARADIGM</h5>
            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-xs text-slate-300">
              <div className="rounded bg-slate-800 p-2 border border-slate-700">Data (Sensors)</div>
              <span>+</span>
              <div className="rounded bg-slate-800 p-2 border border-slate-700">Answers (Labels)</div>
              <ArrowRight className="h-4 w-4 text-cyan-400" />
              <div className="rounded bg-cyan-950 text-cyan-300 p-2 border border-cyan-800/60 font-bold">Learned Model</div>
            </div>
            <p className="mt-3 text-[11px] text-slate-400 leading-relaxed">
              System learns the mathematical mapping function itself from historical training examples.
            </p>
          </div>
        </div>}

      {
    /* DIAGRAM 3: Predictive Maintenance */
  }
      {type === "predictive-maintenance" && <div className="mt-5 space-y-3 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-rose-900/50 bg-rose-950/20 p-3">
              <span className="text-rose-400 font-bold block">1. Reactive (Break-Fix)</span>
              <p className="text-[11px] text-slate-400 mt-1">Run until catastrophic failure. Unplanned downtime costs \$22,000/hr in lost output.</p>
            </div>
            <div className="rounded-xl border border-amber-900/50 bg-amber-950/20 p-3">
              <span className="text-amber-400 font-bold block">2. Scheduled (Calendar)</span>
              <p className="text-[11px] text-slate-400 mt-1">Replace parts every 90 days. Discards bearings that still had 60% useful life remaining.</p>
            </div>
            <div className="rounded-xl border border-emerald-800 bg-emerald-950/30 p-3 shadow-md">
              <span className="text-emerald-400 font-bold block">3. Predictive (AI Telemetry)</span>
              <p className="text-[11px] text-slate-400 mt-1">Live vibration analysis catches micro-spalling 3 weeks early. Zero unplanned downtime.</p>
            </div>
          </div>
        </div>}

      {
    /* DIAGRAM 4: Decision Boundary Simulator */
  }
      {type === "decision-boundary" && <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-slate-300">Decision Threshold Slider:</span>
            <span className="font-bold text-cyan-400">{decisionThreshold}% Probability</span>
          </div>
          <input
    type="range"
    min="10"
    max="90"
    value={decisionThreshold}
    onChange={(e) => setDecisionThreshold(Number(e.target.value))}
    className="w-full accent-cyan-400 cursor-pointer"
  />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
            <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Predicted Worn:</span>
              <span className="text-rose-400 font-bold">{decisionThreshold < 50 ? "38 Motors" : "14 Motors"}</span>
            </div>
            <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">False Alarms:</span>
              <span className="text-amber-400 font-bold">{decisionThreshold < 40 ? "High (8)" : "Low (1)"}</span>
            </div>
            <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Missed Defects:</span>
              <span className="text-rose-300 font-bold">{decisionThreshold > 70 ? "Risk High (3)" : "Zero (0)"}</span>
            </div>
            <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Recommended:</span>
              <span className="text-emerald-400 font-bold">50% Balanced</span>
            </div>
          </div>
        </div>}

      {
    /* DIAGRAM 5: Capstone Pipeline */
  }
      {type === "capstone-pipeline" && <div className="mt-5 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
            {
    /* Input Features */
  }
            <div className="w-full md:w-1/3 rounded-xl border border-cyan-800/50 bg-cyan-950/30 p-3 text-center">
              <span className="text-cyan-400 font-bold block">SHARED SENSOR FEATURES</span>
              <div className="mt-2 space-y-1 text-[11px] text-slate-300">
                <div className="rounded bg-slate-900 p-1">runtime_hrs: 600h</div>
                <div className="rounded bg-slate-900 p-1">load_pct: 89%</div>
                <div className="rounded bg-slate-900 p-1">vibration: 6.0 mm/s</div>
              </div>
            </div>

            <div className="flex flex-col items-center text-slate-500">
              <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0 text-cyan-400" />
            </div>

            {
    /* Dual Models */
  }
            <div className="w-full md:w-2/3 space-y-2">
              <div className="rounded-xl border border-blue-800/60 bg-blue-950/20 p-2.5 flex items-center justify-between">
                <div>
                  <span className="text-blue-400 font-bold block text-[11px]">MODEL 1: LinearRegression</span>
                  <span className="text-[10px] text-slate-400">Continuous Target: temperature_c</span>
                </div>
                <span className="text-xs font-bold text-white bg-blue-900/80 px-2 py-1 rounded border border-blue-700">
                  76.4°C
                </span>
              </div>

              <div className="rounded-xl border border-purple-800/60 bg-purple-950/20 p-2.5 flex items-center justify-between">
                <div>
                  <span className="text-purple-400 font-bold block text-[11px]">MODEL 2: LogisticRegression</span>
                  <span className="text-[10px] text-slate-400">Binary Target: failed_within_30d</span>
                </div>
                <span className="text-xs font-bold text-rose-300 bg-rose-950/80 px-2 py-1 rounded border border-rose-800">
                  89% Risk (FAIL)
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-3 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono">
              <CheckCircle2 className="h-4 w-4" />
              <span>Step 5: Physical Domain Sanity Check</span>
            </div>
            <p className="mt-1 text-slate-300 text-[11px]">
              Elevated runtime (600h) and heavy load (89%) physically validate the 76.4°C thermal dissipation, while 6.0 mm/s vibration indicates severe rotor imbalance. Prediction verified against domain engineering physics!
            </p>
          </div>
        </div>}
    </div>;
};
