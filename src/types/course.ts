export interface LessonSection {
  id: string;
  heading?: string;
  content: string[];
  callout?: {
    type: 'note' | 'tip' | 'warning' | 'engineering' | 'formula';
    title: string;
    text: string;
  };
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
    executable?: boolean;
  };
  diagram?: {
    type: 'nested-ai' | 'rule-vs-ml' | 'predictive-maintenance' | 'generative-design' | 'vector-space' | 'decision-boundary' | 'capstone-pipeline';
    title: string;
    description: string;
  };
  keyTakeaways?: string[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  topicNumber: string; // e.g. "1.1"
  title: string;
  subtitle: string;
  durationMinutes: number;
  summary: string;
  learningObjectives: string[];
  sections: LessonSection[];
  quizId?: string;
  codingLabId?: string;
  completed?: boolean;
}

export interface Module {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  badge: string;
  lessons: Lesson[];
  progress?: number;
}

export interface Instructor {
  name: string;
  role: string;
  organization: string;
  avatar: string;
  bio: string;
}

export interface Course {
  id: string;
  title: string;
  headline: string;
  track: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  totalLessons: number;
  totalModules: number;
  description: string;
  learningObjectives: string[];
  requirements: string[];
  skillsGained: string[];
  instructors: Instructor[];
  modules: Module[];
}
