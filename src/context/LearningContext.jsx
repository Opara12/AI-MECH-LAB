import { createContext, useContext, useState } from "react";
import { aiFundamentalsCourse } from "../data/courseData";
import { loadUserProfile, saveUserProfile } from "../services/storageService";
const LearningContext = createContext(void 0);
export const LearningProvider = ({ children }) => {
  const [userProfile, setUserProfileState] = useState(loadUserProfile());
  const [course] = useState(aiFundamentalsCourse);
  const [activeTab, setActiveTab] = useState("landing");
  const [activeLessonId, setActiveLessonId] = useState("lesson-1-1");
  const [activeQuizId, setActiveQuizId] = useState(null);
  const [activeCodingChallengeId, setActiveCodingChallengeId] = useState(null);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const updateUserProfile = (updates) => {
    setUserProfileState((prev) => {
      const next = { ...prev, ...updates };
      saveUserProfile(next);
      return next;
    });
  };
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const getLessonById = (id) => {
    return allLessons.find((l) => l.id === id);
  };
  const activeLesson = getLessonById(activeLessonId) || allLessons[0];
  const activeModule = course.modules.find((m) => m.lessons.some((l) => l.id === activeLesson.id)) || course.modules[0];
  const getNextLesson = (currentId) => {
    const idx = allLessons.findIndex((l) => l.id === currentId);
    if (idx >= 0 && idx < allLessons.length - 1) {
      return allLessons[idx + 1];
    }
    return null;
  };
  const getPreviousLesson = (currentId) => {
    const idx = allLessons.findIndex((l) => l.id === currentId);
    if (idx > 0) {
      return allLessons[idx - 1];
    }
    return null;
  };
  const showToast = (title, message, type = "info") => {
    const id = "toast_" + Date.now() + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  const navigateTo = (tab, params) => {
    if (params?.lessonId) {
      setActiveLessonId(params.lessonId);
    }
    if (params?.quizId !== void 0) {
      setActiveQuizId(params.quizId);
    }
    if (params?.challengeId !== void 0) {
      setActiveCodingChallengeId(params.challengeId);
    }
    if (params?.projectId !== void 0) {
      setActiveProjectId(params.projectId);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const markLessonComplete = (lessonId) => {
    if (!userProfile.completedLessons.includes(lessonId)) {
      const nextCompleted = [...userProfile.completedLessons, lessonId];
      updateUserProfile({
        completedLessons: nextCompleted,
        totalHoursLearned: +(userProfile.totalHoursLearned + 0.4).toFixed(1)
      });
      showToast("Lesson Completed!", `Marked ${getLessonById(lessonId)?.title} as complete.`, "success");
    }
  };
  const recordQuizScore = (quizId, score) => {
    const currentScores = { ...userProfile.quizScores, [quizId]: score };
    updateUserProfile({ quizScores: currentScores });
    if (score >= 80) {
      showToast("Quiz Mastered!", `Great job! You achieved ${score}% on the quiz.`, "success");
    } else {
      showToast("Quiz Attempt Logged", `Score: ${score}%. Review the explanations to master the concepts.`, "info");
    }
  };
  const recordProjectComplete = (projectId) => {
    if (!userProfile.completedProjects.includes(projectId)) {
      updateUserProfile({
        completedProjects: [...userProfile.completedProjects, projectId],
        totalHoursLearned: +(userProfile.totalHoursLearned + 3).toFixed(1)
      });
      showToast("Project Completed!", "Congratulations on completing this hands-on engineering lab!", "success");
    }
  };
  const updateLearningPreferences = (level, style, track) => {
    updateUserProfile({
      experienceLevel: level,
      learningPreference: style,
      primaryTrack: track
    });
    showToast("Learning Path Customized", `Tailored curriculum to ${level} and ${style}.`, "success");
  };
  return <LearningContext.Provider
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
    </LearningContext.Provider>;
};
export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error("useLearning must be used within a LearningProvider");
  }
  return context;
};
