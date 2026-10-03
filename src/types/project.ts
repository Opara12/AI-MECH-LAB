export interface ProjectStep {
  stepNumber: number;
  title: string;
  description: string;
  codeSnippet?: string;
  keyFormula?: string;
  expectedOutcome: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  technologies: string[];
  estimatedTime: string;
  skills: string[];
  hardwareRequired?: string[];
  datasetDescription?: string;
  sampleInput?: Record<string, any>;
  steps: ProjectStep[];
  interactiveDemo?: {
    type: 'motor-failure-predictor' | 'sensor-anomaly-detector' | 'vision-defect-checker';
    defaultFeatures: Record<string, number>;
  };
  progress?: number;
}
