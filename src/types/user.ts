export type ExperienceLevel = 'Complete Beginner' | 'Beginner' | 'Intermediate' | 'Advanced';

export type LearningPreference =
  | 'Simple explanations'
  | 'Technical explanations'
  | 'Practical projects'
  | 'Visual explanations'
  | 'Coding exercises';

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: 'learning' | 'quiz' | 'coding' | 'project' | 'hardware';
  unlocked: boolean;
  unlockedAt?: string;
  progress: number; // 0 to 100
}

export interface UserProfile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  experienceLevel: ExperienceLevel;
  learningPreference: LearningPreference;
  primaryTrack: string;
  learningStreakDays: number;
  totalHoursLearned: number;
  completedLessons: string[];
  quizScores: Record<string, number>; // quizId -> score %
  completedProjects: string[];
  builtKits: string[];
  achievements: Achievement[];
  apiKeySet: boolean;
  apiKeyProvider?: 'openai' | 'anthropic' | 'gemini';
}
