export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint?: string;
  topicRef?: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  moduleId: string;
  title: string;
  description: string;
  passingScore: number; // e.g. 70 or 80
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  quizId: string;
  score: number;
  total: number;
  passed: boolean;
  selectedAnswers: Record<string, number>;
  timestamp: string;
}
