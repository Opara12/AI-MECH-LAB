import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  label?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'emerald' | 'amber' | 'purple';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  showPercentage = true,
  size = 'md',
  color = 'cyan'
}) => {
  const clamped = Math.min(100, Math.max(0, Math.round(progress)));

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  const colorGradients = {
    cyan: 'from-cyan-500 to-blue-500 shadow-cyan-500/20',
    emerald: 'from-emerald-500 to-teal-400 shadow-emerald-500/20',
    amber: 'from-amber-500 to-orange-500 shadow-amber-500/20',
    purple: 'from-purple-500 to-indigo-500 shadow-purple-500/20'
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="mb-1.5 flex items-center justify-between text-xs font-mono">
          {label && <span className="text-slate-400">{label}</span>}
          {showPercentage && <span className="font-semibold text-slate-200">{clamped}%</span>}
        </div>
      )}
      <div className={`w-full overflow-hidden rounded-full bg-slate-800/80 ${sizeClasses[size]} p-0.5`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorGradients[color]} shadow-md transition-all duration-500 ease-out`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};
