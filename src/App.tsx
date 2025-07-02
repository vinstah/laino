import React, { useState } from 'react';
import { 
  Brain, 
  BookOpen, 
  Calculator, 
  Atom, 
  Globe, 
  Users, 
  Award, 
  Settings,
  ChevronRight,
  Play,
  BarChart3,
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Target,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  Headphones,
  FileText
} from 'lucide-react';
import EnhancedHero from './components/EnhancedHero';
import SubjectRealms from './components/SubjectRealms';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import AccessibilityControls from './components/AccessibilityControls';
import SubjectDetail from './components/SubjectDetail';
import Profile from './components/Profile';
import EducatorPortal from './components/EducatorPortal';
import Research from './components/Research';
import CMSApp from './components/CMS/CMSApp';
import FloatingActionButton from './components/FloatingActionButton';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import { ToastProvider, useToast } from './components/ToastContainer';
import { useScrollProgress } from './hooks/useAnimations';
import { t } from './lang';

function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [accessibilityMode, setAccessibilityMode] = useState({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusMode: false
  });

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

  const handleFloatingAction = (action: string) => {
    switch (action) {
      case 'help':
        addToast({
          type: 'info',
          title: 'Help Center',
          message: 'Our support team is here to help!',
          action: {
            label: 'Contact Support',
            onClick: () => alert('Opening support chat...')
          }
        });
        break;
      case 'feedback':
        addToast({
          type: 'success',
          title: 'Feedback',
          message: 'We value your input!',
          action: {
            label: 'Give Feedback',
            onClick: () => alert('Opening feedback form...')
          }
        });
        break;
      case 'hint':
        addToast({
          type: 'warning',
          title: 'Learning Tip',
          message: 'Try breaking down complex problems into smaller steps!',
          duration: 7000
        });
        break;
      case 'settings':
        setCurrentView('profile');
        break;
    }
  };

  const searchSuggestions = [
    { id: '1', title: 'Fraction Pizza Party', type: 'quest' as const, description: 'Learn fractions through bakery scenarios' },
    { id: '2', title: 'Mathematics Kingdom', type: 'subject' as const, description: 'Master real-world math' },
    { id: '3', title: 'Pattern Master', type: 'achievement' as const, description: 'Complete pattern recognition quests' },
    { id: '4', title: 'Mystery Mansion', type: 'quest' as const, description: 'Detective story for reading comprehension' },
    { id: '5', title: 'Science Laboratory', type: 'subject' as const, description: 'Hands-on scientific discovery' }
  ];

  const renderCurrentView = () => {
    if (currentView === 'cms') {
      return <CMSApp />;
    }

    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigation} />;
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
      case 'profile':
        return <Profile onNavigate={handleNavigation} />;
      case 'educators':
        return <EducatorPortal onNavigate={handleNavigation} />;
      case 'research':
        return <Research onNavigate={handleNavigation} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* <EnhancedHero onNavigate={handleNavigation} /> */}
            <SubjectRealms onSubjectSelect={(subject) => {
              setSelectedSubject(subject);
              setCurrentView('subject-detail');
            }} />
            {/* <Features /> */}
            
            {/* Success Stories Section */}
            
            {/* CTA Section */}
            {/* <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => handleNavigation('dashboard')}
                    className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Play className="h-5 w-5" />
                    {t('cta.startTrial')}
                  </button>
                  <button 
                    onClick={() => addToast({
                      type: 'info',
                      title: 'Demo Scheduling',
                      message: 'Feature coming soon! We\'ll notify you when it\'s ready.',
                      duration: 5000
                    })}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
                  >
                    {t('cta.scheduleDemo')}
                  </button>
                </div>
              </div>
            </section> */}
          </div>
        );
    }
  };

 

  return (
    <div className={`${accessibilityMode.highContrast ? 'high-contrast' : ''} ${accessibilityMode.reducedMotion ? 'reduced-motion' : ''}`}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
        />
      </div>

      {/* Navigation */}
      {/* <nav className="fixed top-1 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center gap-3 cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => handleNavigation('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">{t('nav.brand')}</span>
            </div>
            
            {/* Search Bar
            {/* <div className="hidden lg:block flex-1 max-w-md mx-8">
              <SearchBar
                suggestions={searchSuggestions}
                onResultSelect={(result) => {
                  addToast({
                    type: 'success',
                    title: 'Search Result',
                    message: `Selected: ${result.title}`,
                    duration: 3000
                  });
                }}
              />
            </div> */}
            
            

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

      {/* Floating Action Button */}
      {/* <FloatingActionButton onAction={handleFloatingAction} /> */}

      {/* Footer */}
          
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