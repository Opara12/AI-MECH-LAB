import React, { useState } from 'react';
import { Copy, Check, Terminal, Play } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

interface CodeBlockProps {
  code: string;
  language?: string;
  caption?: string;
  executable?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  caption,
  executable = true
}) => {
  const [copied, setCopied] = useState(false);
  const { navigateTo } = useLearning();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\\n');

  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-2 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
            {language}
          </span>
          {caption && <span className="text-slate-500 font-sans hidden sm:inline">| {caption}</span>}
        </div>
        <div className="flex items-center gap-2">
          {executable && (
            <button
              onClick={() => navigateTo('coding')}
              className="flex items-center gap-1 rounded-md bg-cyan-950/70 border border-cyan-800/50 px-2 py-1 text-[11px] font-medium text-cyan-400 hover:bg-cyan-900/60 hover:text-cyan-300 transition-colors"
            >
              <Play className="h-3 w-3 fill-cyan-400" />
              <span>Run in Lab</span>
            </button>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-md bg-slate-800/70 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto p-4 text-xs font-mono leading-relaxed text-slate-200">
        <pre className="table">
          {lines.map((line, idx) => (
            <div key={idx} className="table-row">
              <span className="table-cell select-none pr-4 text-right text-[11px] text-slate-600">
                {idx + 1}
              </span>
              <span className="table-cell">
                {/* Syntax coloring keywords */}
                {line.startsWith('#') ? (
                  <span className="text-slate-500 italic">{line}</span>
                ) : (
                  line
                    .split(' ')
                    .map((word, wIdx) => {
                      if (['import', 'from', 'as', 'def', 'return', 'for', 'in', 'if', 'else', 'elif', 'while', 'True', 'False', 'None'].includes(word)) {
                        return <span key={wIdx} className="text-purple-400 font-bold">{word} </span>;
                      }
                      if (word.startsWith('"') || word.startsWith("'") || word.endsWith('"') || word.endsWith("'")) {
                        return <span key={wIdx} className="text-emerald-300">{word} </span>;
                      }
                      if (word.includes('(') && !word.startsWith('(')) {
                        const [fn, rest] = word.split('(');
                        return (
                          <span key={wIdx}>
                            <span className="text-cyan-300">{fn}</span>({rest}
                          </span>
                        );
                      }
                      return word + ' ';
                    })
                )}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};
