import React, { useState, useEffect } from 'react';
import { CodingChallenge } from '../../types/coding';
import { executeCode } from '../../services/codeRunnerService';
import { useLearning } from '../../context/LearningContext';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Terminal,
  FileCode,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Send
} from 'lucide-react';

interface CodeEditorProps {
  challenge: CodingChallenge;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ challenge }) => {
  const { showToast } = useLearning();
  const [userCode, setUserCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [executionPassed, setExecutionPassed] = useState<boolean | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [activeHintIdx, setActiveHintIdx] = useState(0);

  // Sync starter code when challenge changes
  useEffect(() => {
    setUserCode(challenge.starterCode);
    setOutput('');
    setExecutionPassed(null);
  }, [challenge.id]);

  const handleRun = async () => {
    setIsRunning(true);
    const result = await executeCode(userCode, challenge.id, challenge.expectedOutput);
    setIsRunning(false);
    setOutput(result.stdout || result.stderr);
    setExecutionPassed(result.passed);

    if (result.passed) {
      showToast('Challenge Passed!', 'Code executed cleanly and produced the expected telemetry.', 'success');
    } else {
      showToast('Output Discrepancy', 'Review instructions and expected outputs.', 'warning');
    }
  };

  const handleReset = () => {
    setUserCode(challenge.starterCode);
    setOutput('');
    setExecutionPassed(null);
  };

  const lines = userCode.split('\n');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-[720px]">
      {/* LEFT: Instructions & Specifications (4 Cols) */}
      <div className="lg:col-span-4 flex flex-col rounded-3xl border border-slate-800 bg-slate-950 p-5 shadow-xl justify-between">
        <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-cyan-950 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
                {challenge.difficulty.toUpperCase()}
              </span>
              <span className="font-mono text-[11px] text-slate-500">
                ~{challenge.estimatedMinutes} mins
              </span>
            </div>
            <h3 className="mt-2 text-lg font-bold text-white tracking-tight">
              {challenge.title}
            </h3>
          </div>

          {/* Instructions List */}
          <div className="space-y-2 border-t border-slate-800/80 pt-3">
            <h5 className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Instructions
            </h5>
            <ol className="space-y-2 text-xs text-slate-300">
              {challenge.instructions.map((inst, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 font-mono text-[10px] font-bold text-cyan-400">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{inst}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Expected Output Box */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
              Target Output Format
            </span>
            <pre className="font-mono text-xs text-emerald-300 bg-slate-950 p-2.5 rounded-xl overflow-x-auto whitespace-pre">
              {challenge.expectedOutput.replace(/\\n/g, '\n')}
            </pre>
          </div>

          {/* Hints Accordion */}
          {challenge.hints && challenge.hints.length > 0 && (
            <div className="rounded-2xl border border-amber-900/30 bg-amber-950/10 p-3.5">
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex w-full items-center justify-between text-xs font-mono font-semibold text-amber-400"
              >
                <div className="flex items-center gap-1.5">
                  <Lightbulb className="h-4 w-4" />
                  <span>Stuck? Need a Hint ({challenge.hints.length})</span>
                </div>
                {showHints ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>

              {showHints && (
                <div className="mt-3 space-y-2 text-xs text-slate-300 pt-2 border-t border-amber-900/30">
                  <p className="leading-relaxed">{challenge.hints[activeHintIdx]}</p>
                  {challenge.hints.length > 1 && (
                    <div className="flex justify-between items-center pt-2 text-[10px] font-mono">
                      <button
                        onClick={() => setActiveHintIdx((prev) => Math.max(0, prev - 1))}
                        disabled={activeHintIdx === 0}
                        className="text-amber-400 disabled:opacity-40"
                      >
                        Previous Hint
                      </button>
                      <span className="text-slate-500">
                        {activeHintIdx + 1} / {challenge.hints.length}
                      </span>
                      <button
                        onClick={() => setActiveHintIdx((prev) => Math.min(challenge.hints.length - 1, prev + 1))}
                        disabled={activeHintIdx === challenge.hints.length - 1}
                        className="text-amber-400 disabled:opacity-40"
                      >
                        Next Hint
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Solution Peek (For learning) */}
        <div className="pt-4 border-t border-slate-800">
          <button
            onClick={() => setUserCode(challenge.solutionCode)}
            className="w-full text-center text-[11px] font-mono text-slate-500 hover:text-cyan-400 transition-colors"
          >
            Load Reference Solution
          </button>
        </div>
      </div>

      {/* CENTER: Code Editor (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col rounded-3xl border border-slate-800 bg-slate-950 shadow-xl overflow-hidden">
        {/* Editor Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <FileCode className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold">solution.py</span>
            <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">
              Python 3.11
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[11px] text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              title="Reset Code"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Code Input Area with line numbers */}
        <div className="flex-1 flex overflow-hidden bg-slate-950 p-2 font-mono text-xs">
          {/* Line Numbers */}
          <div className="select-none py-2 px-2 text-right text-slate-600 font-mono text-[11px] leading-6 border-r border-slate-800/60">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Textarea Code Input */}
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            spellCheck={false}
            className="flex-1 resize-none bg-transparent p-2 text-cyan-100 placeholder-slate-600 focus:outline-none font-mono text-xs leading-6 selection:bg-cyan-900/50"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/60 p-3 px-4">
          <span className="text-[11px] font-mono text-slate-500">
            Ready for local execution
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-500 hover:to-emerald-400 disabled:opacity-50 transition-all font-mono"
            >
              <Play className="h-3.5 w-3.5 fill-white" />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT: Execution Output & Test Results (3 Cols) */}
      <div className="lg:col-span-3 flex flex-col rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-xl justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <h5 className="font-semibold text-xs text-white">Execution Console</h5>
            </div>
            {executionPassed !== null && (
              <span
                className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold ${
                  executionPassed
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                    : 'bg-rose-950 text-rose-400 border border-rose-800/40'
                }`}
              >
                {executionPassed ? 'PASSED' : 'CHECK NEEDED'}
              </span>
            )}
          </div>

          {/* Terminal Box */}
          <div className="mt-3 rounded-2xl border border-slate-800 bg-black/80 p-3.5 font-mono text-xs text-slate-200 min-h-[220px] max-h-[340px] overflow-y-auto">
            {output ? (
              <pre className="whitespace-pre-wrap leading-relaxed">
                {output.replace(/\\n/g, '\n')}
              </pre>
            ) : (
              <div className="text-slate-600 italic py-8 text-center">
                Click "Run Code" to execute Python script in simulated runtime.
              </div>
            )}
          </div>

          {/* Test Case Status */}
          {challenge.testCases && (
            <div className="mt-4 space-y-2">
              <span className="font-mono text-[10px] uppercase text-slate-500 tracking-wider">
                Automated Verification
              </span>
              {challenge.testCases.map((tc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/50 p-2 text-xs"
                >
                  <span className="text-slate-300 font-mono text-[11px] truncate max-w-[180px]">
                    {tc.name}
                  </span>
                  {executionPassed === true ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  ) : executionPassed === false ? (
                    <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
                  ) : (
                    <span className="text-[10px] text-slate-600 font-mono">Pending</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Status */}
        <div className="pt-4 border-t border-slate-800 text-center">
          <p className="text-[10px] font-mono text-slate-500">
            Backend API ready: Judge0 / Pyodide hook configured.
          </p>
        </div>
      </div>
    </div>
  );
};
