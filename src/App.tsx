import React, { useState } from 'react';
import { LearningProvider, useLearning } from './context/LearningContext';
import { Navbar } from './components/common/Navbar';
import { Sidebar } from './components/common/Sidebar';
import { ToastContainer } from './components/common/Toast';

import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LessonPage } from './pages/LessonPage';
import { AITutorPage } from './pages/AITutorPage';
import { CodingLabPage } from './pages/CodingLabPage';
import { ProjectLabPage } from './pages/ProjectLabPage';
import { HardwareLabPage } from './pages/HardwareLabPage';
import { AdaptiveLearningPage } from './pages/AdaptiveLearningPage';
import { ProgressPage } from './pages/ProgressPage';
import { CommunityPage } from './pages/CommunityPage';
import { SettingsPage } from './pages/SettingsPage';
import { QuizPage } from './pages/QuizPage';


const AppContent: React.FC = () => {
  const { activeTab } = useLearning();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Render current active tab view
  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'courses':
        return <CoursesPage />;
      case 'course-detail':
        return <CourseDetailPage />;
      case 'lesson':
        return <LessonPage />;
      case 'tutor':
        return <AITutorPage />;
      case 'coding':
        return <CodingLabPage />;
      case 'projects':
        return <ProjectLabPage />;
      case 'hardware':
        return <HardwareLabPage />;
      case 'adaptive':
        return <AdaptiveLearningPage />;
      case 'progress':
        return <ProgressPage />;
      case 'community':
        return <CommunityPage />;
      case 'settings':
        return <SettingsPage />;
      case 'quiz':
        return <QuizPage />;
      default:
        return <DashboardPage />;
    }
  };

  const isLanding = activeTab === 'landing';

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <ToastContainer />

      {isLanding ? (
        /* Full width for Landing Page */
        <main className="flex-1">{renderCurrentPage()}</main>
      ) : (
        /* Standard App Shell with Sidebar for Dashboard, Courses, Lesson, Labs */
        <div className="mx-auto flex w-full max-w-[1720px] flex-1">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

          <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">{renderCurrentPage()}</div>
          </main>
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LearningProvider>
      <AppContent />
    </LearningProvider>
  );
};

export default App;
