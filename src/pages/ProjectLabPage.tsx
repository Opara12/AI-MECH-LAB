import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import { allProjects } from '../data/projectData';
import { Project } from '../types/project';
import { ProjectCard } from '../components/project/ProjectCard';
import { ProjectDetailModal } from '../components/project/ProjectDetailModal';
import { FolderGit2, Wrench, Sparkles, Filter } from 'lucide-react';

export const ProjectLabPage: React.FC = () => {
  const { userProfile, activeProjectId } = useLearning();
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    activeProjectId ? allProjects.find((p) => p.id === activeProjectId) || null : null
  );
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const filteredProjects = allProjects.filter((p) => {
    if (filterDifficulty === 'All') return true;
    return p.difficulty === filterDifficulty;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            Hands-On Engineering
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Project Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Build production-grade machine learning models, mobile rovers, and optical defect detectors.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/80 p-1">
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => setFilterDifficulty(diff)}
              className={`rounded-xl px-3 py-1.5 font-mono text-xs transition-colors ${
                filterDifficulty === diff
                  ? 'bg-cyan-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            onSelect={(p) => setSelectedProject(p)}
          />
        ))}
      </div>
    </div>
  );
};
