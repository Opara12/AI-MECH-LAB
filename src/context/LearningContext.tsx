import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Course, Lesson, Module } from '../types/course';
import { UserProfile, ExperienceLevel, LearningPreference } from '../types/user';
import { aiFundamentalsCourse } from '../data/courseData';
import { loadUserProfile, saveUserProfile } from '../services/storageService';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface LearningContextType {
  userProfile: UserProfile;
  course: Course;
  activeLesson: Lesson;
  activeModule: Module;
  activeTab: string;
  activeQuizId: string | null;
  activeCodingChallengeId: string | null;
  activeProjectId: string | null;
  toasts: ToastMessage[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  navigateTo: (
    tab: string,
    params?: {
      lessonId?: string;
      quizId?: string;
      challengeId?: string;
      projectId?: string;
    }
  ) => void;
  markLessonComplete: (lessonId: string) => void;
  recordQuizScore: (quizId: string, score: number) => void;
  recordProjectComplete: (projectId: string) => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  updateLearningPreferences: (
    level: ExperienceLevel,
    style: LearningPreference,
    track: string
  ) => void;
  showToast: (
    title: string,
    message: string,
    type?: 'success' | 'info' | 'warning' | 'error'
  ) => void;
  removeToast: (id: string) => void;
  getLessonById: (id: string) => Lesson | undefined;
  getNextLesson: (currentId: string) => Lesson | null;
  getPreviousLesson: (currentId: string) => Lesson | null;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfileState] = useState<UserProfile>(loadUserProfile());
  const [course] = useState<Course>(aiFundamentalsCourse);
  const [activeTab, setActiveTab] = useState<string>('landing');
  const [activeLessonId, setActiveLessonId] = useState<string>('lesson-1-1');
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [activeCodingChallengeId, setActiveCodingChallengeId] = useState<string | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Persist user profile changes
  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUserProfileState((prev) => {
      const next = { ...prev, ...updates };
      saveUserProfile(next);
      return next;
    });
  };

  // Find all lessons flattened
  const allLessons = course.modules.flatMap((m) => m.lessons);

  const getLessonById = (id: string) => {
    return allLessons.find((l) => l.id === id);
  };

  const activeLesson: Lesson = getLessonById(activeLessonId) || allLessons[0];
  const activeModule: Module =
    course.modules.find((m) => m.lessons.some((l) => l.id === activeLesson.id)) ||
    course.modules[0];

  const getNextLesson = (currentId: string): Lesson | null => {
    const idx = allLessons.findIndex((l) => l.id === currentId);
    if (idx >= 0 && idx < allLessons.length - 1) {
      return allLessons[idx + 1];
    }
    return null;
  };

  const getPreviousLesson = (currentId: string): Lesson | null => {
    const idx = allLessons.findIndex((l) => l.id === currentId);
    if (idx > 0) {
      return allLessons[idx - 1];
    }
    return null;
  };

  const showToast = (
    title: string,
    message: string,
    type: 'success' | 'info' | 'warning' | 'error' = 'info'
  ) => {
    const id = 'toast_' + Date.now() + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const navigateTo = (
    tab: string,
    params?: {
      lessonId?: string;
      quizId?: string;
      challengeId?: string;
      projectId?: string;
    }
  ) => {
    if (params?.lessonId) {
      setActiveLessonId(params.lessonId);
    }
    if (params?.quizId !== undefined) {
      setActiveQuizId(params.quizId);
    }
    if (params?.challengeId !== undefined) {
      setActiveCodingChallengeId(params.challengeId);
    }
    if (params?.projectId !== undefined) {
      setActiveProjectId(params.projectId);
    }

    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markLessonComplete = (lessonId: string) => {
    if (!userProfile.completedLessons.includes(lessonId)) {
      const nextCompleted = [...userProfile.completedLessons, lessonId];
      updateUserProfile({
        completedLessons: nextCompleted,
        totalHoursLearned: +(userProfile.totalHoursLearned + 0.4).toFixed(1)
      });
      showToast('Lesson Completed!', `Marked ${getLessonById(lessonId)?.title} as complete.`, 'success');
    }
  };

  const recordQuizScore = (quizId: string, score: number) => {
    const currentScores = { ...userProfile.quizScores, [quizId]: score };
    updateUserProfile({ quizScores: currentScores });
    if (score >= 80) {
      showToast('Quiz Mastered!', `Great job! You achieved ${score}% on the quiz.`, 'success');
    } else {
      showToast('Quiz Attempt Logged', `Score: ${score}%. Review the explanations to master the concepts.`, 'info');
    }
  };

  const recordProjectComplete = (projectId: string) => {
    if (!userProfile.completedProjects.includes(projectId)) {
      updateUserProfile({
        completedProjects: [...userProfile.completedProjects, projectId],
        totalHoursLearned: +(userProfile.totalHoursLearned + 3.0).toFixed(1)
      });
      showToast('Project Completed!', 'Congratulations on completing this hands-on engineering lab!', 'success');
    }
  };

  const updateLearningPreferences = (
    level: ExperienceLevel,
    style: LearningPreference,
    track: string
  ) => {
    updateUserProfile({
      experienceLevel: level,
      learningPreference: style,
      primaryTrack: track
    });
    showToast('Learning Path Customized', `Tailored curriculum to ${level} and ${style}.`, 'success');
  };

  return (
    <LearningContext.Provider
      value={{
        userProfile,
        course,
        activeLesson,
        activeModule,
        activeTab,
        activeQuizId,
        activeCodingChallengeId,
        activeProjectId,
        toasts,
        searchQuery,
        setSearchQuery,
        navigateTo,
        markLessonComplete,
        recordQuizScore,
        recordProjectComplete,
        updateUserProfile,
        updateLearningPreferences,
        showToast,
        removeToast,
        getLessonById,
        getNextLesson,
        getPreviousLesson
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = (): LearningContextType => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
