import { useState } from 'react';

import SubjectRealms from './components/SubjectRealms';
import SubjectDetail from './components/SubjectDetail';
import LoadingSpinner from './components/LoadingSpinner';
import { ToastProvider, useToast } from './components/ToastContainer';
import { useScrollProgress } from './hooks/useAnimations';

function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();
  const progressRef = useScrollProgress();

  const handleNavigation = async (view: string) => {
    setIsLoading(true);
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setCurrentView(view);
    setIsLoading(false);
    
    addToast({
      type: 'info',
      title: 'Navigation',
      message: `Switched to ${view} view`,
      duration: 2000
    });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'subjects':
        return <SubjectRealms onSubjectSelect={(subject) => {
          setSelectedSubject(subject);
          setCurrentView('subject-detail');
        }} />;
      case 'subject-detail':
        return <SubjectDetail 
          subject={selectedSubject} 
          onBack={() => setCurrentView('subjects')}
          onNavigate={handleNavigation}
        />;
      
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <SubjectRealms onSubjectSelect={(subject) => {
              setSelectedSubject(subject);
              setCurrentView('subject-detail');
            }} />

          </div>
        );
    }
  };

  return (
    <div>
      {/* Scroll Progress Bar */}
      {currentView !== 'subject-detail' && (
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
        />
      </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <LoadingSpinner 
          fullScreen 
          size="lg" 
          text="Loading amazing content..." 
        />
      )}

      {/* Main Content */}
      <div className="pt-17">
        {renderCurrentView()}
      </div>
          
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;