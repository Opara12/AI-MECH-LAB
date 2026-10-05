import { useLearning } from "../../context/LearningContext";
import {
  Clock,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { ProgressBar } from "../common/ProgressBar";
export const ProjectCard = ({ project, onSelect }) => {
  const { userProfile } = useLearning();
  const isCompleted = userProfile.completedProjects.includes(project.id);
  const difficultyColors = {
    Beginner: "text-emerald-400 bg-emerald-950/60 border-emerald-800/40",
    Intermediate: "text-amber-400 bg-amber-950/60 border-amber-800/40",
    Advanced: "text-purple-400 bg-purple-950/60 border-purple-800/40"
  };
  return <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/30">
      <div>
        {
    /* Top Badges */
  }
        <div className="flex items-center justify-between">
          <span
    className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold border ${difficultyColors[project.difficulty]}`}
  >
            {project.difficulty}
          </span>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
            <Clock className="h-3.5 w-3.5" />
            <span>{project.estimatedTime}</span>
          </div>
        </div>

        {
    /* Project Title */
  }
        <h4 className="mt-4 text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h4>
        <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {
    /* Tech Badges */
  }
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech, i) => <span
    key={i}
    className="rounded-md bg-slate-800/90 px-2 py-0.5 font-mono text-[10px] text-slate-300 border border-slate-700/50"
  >
              {tech}
            </span>)}
          {project.technologies.length > 4 && <span className="rounded-md bg-slate-800/90 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
              +{project.technologies.length - 4}
            </span>}
        </div>
      </div>

      {
    /* Footer & CTA */
  }
      <div className="mt-6 border-t border-slate-800/80 pt-4">
        {project.progress !== void 0 && project.progress > 0 && !isCompleted && <div className="mb-3">
            <ProgressBar progress={project.progress} label="Lab Progress" size="sm" />
          </div>}

        <div className="flex items-center justify-between">
          {isCompleted ? <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>Completed</span>
            </div> : <span className="text-[11px] font-mono text-slate-500">
              {project.steps.length} Milestones
            </span>}

          <button
    onClick={() => onSelect(project)}
    className="flex items-center gap-1.5 rounded-xl bg-cyan-600/90 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-cyan-500 transition-colors font-mono"
  >
            <span>{isCompleted ? "Review Lab" : "Start Project"}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>;
};
