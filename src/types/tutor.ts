export interface TutorMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: string;
  suggestedFollowUps?: string[];
  codeBlock?: {
    language: string;
    code: string;
  };
}

export interface TutorContext {
  lessonId?: string;
  lessonTitle?: string;
  moduleTitle?: string;
  currentCode?: string;
}
