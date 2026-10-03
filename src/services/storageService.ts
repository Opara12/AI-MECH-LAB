import { UserProfile } from '../types/user';
import { allAchievements } from '../data/achievementsData';

const STORAGE_KEY = 'ai_mech_lab_user_profile_v1';

export const defaultUserProfile: UserProfile = {
  id: 'usr_student_01',
  name: 'Alex Rivera',
  title: 'Robotics & AI Student',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=80',
  experienceLevel: 'Beginner',
  learningPreference: 'Practical projects',
  primaryTrack: 'Mechatronics & Embedded AI',
  learningStreakDays: 14,
  totalHoursLearned: 18.5,
  completedLessons: ['lesson-1-1', 'lesson-1-2', 'lesson-2-1'],
  quizScores: {
    'quiz-1-1': 100,
    'quiz-1-2': 100,
    'quiz-2-1': 100
  },
  completedProjects: ['project-obstacle-rover'],
  builtKits: ['kit-obstacle-robot'],
  achievements: allAchievements,
  apiKeySet: false,
  apiKeyProvider: 'gemini'
};

export const loadUserProfile = (): UserProfile => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load profile from localStorage:', e);
  }
  return defaultUserProfile;
};

export const saveUserProfile = (profile: UserProfile): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile to localStorage:', e);
  }
};
