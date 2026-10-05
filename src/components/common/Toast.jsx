import { useLearning } from "../../context/LearningContext";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from "lucide-react";
export const ToastContainer = () => {
  const { toasts, removeToast } = useLearning();
  if (toasts.length === 0) return null;
  return <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
    const icons = {
      success: <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />,
      info: <Info className="h-5 w-5 text-cyan-400 shrink-0" />,
      warning: <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />,
      error: <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />
    };
    const borders = {
      success: "border-emerald-500/40 bg-slate-900/95 text-emerald-200",
      info: "border-cyan-500/40 bg-slate-900/95 text-cyan-200",
      warning: "border-amber-500/40 bg-slate-900/95 text-amber-200",
      error: "border-rose-500/40 bg-slate-900/95 text-rose-200"
    };
    return <div
      key={toast.id}
      className={`pointer-events-auto flex items-start gap-3 rounded-2xl border p-3.5 shadow-2xl backdrop-blur-xl transition-all animate-in slide-in-from-right-4 duration-300 ${borders[toast.type]}`}
    >
            {icons[toast.type]}
            <div className="flex-1 min-w-0">
              <h5 className="font-semibold text-xs text-white tracking-wide">{toast.title}</h5>
              <p className="mt-0.5 text-xs text-slate-300 leading-relaxed">{toast.message}</p>
            </div>
            <button
      onClick={() => removeToast(toast.id)}
      className="text-slate-400 hover:text-white transition-colors"
    >
              <X className="h-4 w-4" />
            </button>
          </div>;
  })}
    </div>;
};
