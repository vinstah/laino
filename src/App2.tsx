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
            <Features />
            
            {/* Success Stories Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {t('successStories.title')}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('successStories.subtitle')}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <TrendingUp className="h-12 w-12 text-green-500" />,
                      stat: t('successStories.academicConfidence.stat'),
                      label: t('successStories.academicConfidence.label'),
                      description: t('successStories.academicConfidence.description')
                    },
                    {
                      icon: <UserCheck className="h-12 w-12 text-blue-500" />,
                      stat: t('successStories.engagementRate.stat'),
                      label: t('successStories.engagementRate.label'),
                      description: t('successStories.engagementRate.description')
                    },
                    {
                      icon: <Heart className="h-12 w-12 text-red-500" />,
                      stat: t('successStories.parentSatisfaction.stat'),
                      label: t('successStories.parentSatisfaction.label'),
                      description: t('successStories.parentSatisfaction.description')
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                      <div className="flex justify-center mb-4">{item.icon}</div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
                      <div className="text-lg font-semibold text-gray-700 mb-2">{item.label}</div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
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
            </section>
          </div>
        );
    }
  };

  if (currentView === 'cms') {
    return <CMSApp />;
  }

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
      <nav className="fixed top-1 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 border-b border-gray-200">
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
            
            {/* Search Bar */}
            <div className="hidden lg:block flex-1 max-w-md mx-8">
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
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => handleNavigation('subjects')}
                className="text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                {t('nav.learningRealms')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavigation('dashboard')}
                className="text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                {t('nav.dashboard')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavigation('educators')}
                className="text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                {t('nav.forEducators')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavigation('research')}
                className="text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                {t('nav.research')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavigation('cms')}
                className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1 relative group"
              >
                <FileText className="h-4 w-4" />
                {t('nav.cms')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <AccessibilityControls 
                settings={accessibilityMode}
                onSettingsChange={setAccessibilityMode}
              />
              <button 
                onClick={() => handleNavigation('profile')}
                className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {t('nav.profile')}
              </button>
            </div>
          </div>
        </div>
      </nav>

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
      <FloatingActionButton onAction={handleFloatingAction} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">{t('nav.brand')}</span>
              </div>
              <p className="text-gray-400 mb-4">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => addToast({
                    type: 'info',
                    title: 'Social Media',
                    message: 'Follow us for updates and learning tips!',
                    duration: 3000
                  })}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors transform hover:scale-110"
                >
                  <Globe className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => addToast({
                    type: 'success',
                    title: 'Community',
                    message: 'Join our growing community of learners!',
                    duration: 3000
                  })}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors transform hover:scale-110"
                >
                  <Users className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t('footer.learningRealms')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => {
                  setSelectedSubject('mathematics');
                  setCurrentView('subject-detail');
                }} className="hover:text-white transition-colors transform hover:translate-x-1">{t('subjects.mathematics.title')}</button></li>
                <li><button onClick={() => {
                  setSelectedSubject('language-arts');
                  setCurrentView('subject-detail');
                }} className="hover:text-white transition-colors transform hover:translate-x-1">{t('subjects.languageArts.title')}</button></li>
                <li><button onClick={() => {
                  setSelectedSubject('science');
                  setCurrentView('subject-detail');
                }} className="hover:text-white transition-colors transform hover:translate-x-1">{t('subjects.science.title')}</button></li>
                <li><button onClick={() => {
                  setSelectedSubject('physics');
                  setCurrentView('subject-detail');
                }} className="hover:text-white transition-colors transform hover:translate-x-1">{t('subjects.physics.title')}</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => addToast({
                  type: 'info',
                  title: 'Help Center',
                  message: 'Our comprehensive help center is coming soon!',
                  duration: 3000
                })} className="hover:text-white transition-colors transform hover:translate-x-1">{t('footer.helpCenter')}</button></li>
                <li><button onClick={() => addToast({
                  type: 'success',
                  title: 'Accessibility',
                  message: 'Check your profile settings for accessibility options!',
                  duration: 4000
                })} className="hover:text-white transition-colors transform hover:translate-x-1">{t('footer.accessibility')}</button></li>
                <li><button onClick={() => addToast({
                  type: 'warning',
                  title: 'Community',
                  message: 'Community features launching soon!',
                  duration: 3000
                })} className="hover:text-white transition-colors transform hover:translate-x-1">{t('footer.community')}</button></li>
                <li><button onClick={() => handleNavigation('research')} className="hover:text-white transition-colors transform hover:translate-x-1">{t('nav.research')}</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => addToast({
                  type: 'info',
                  title: 'About Us',
                  message: 'Learn more about our mission and team!',
                  duration: 3000
                })} className="hover:text-white transition-colors transform hover:translate-x-1">{t('footer.aboutUs')}</button></li>
                <li><button onClick={() => addToast({
                  type: 'info',
                  title: 'Privacy Policy',
                  message: 'Your privacy is our priority. View our policy in the legal section.',
                  duration: 4000
                })} className="hover:text-white transition-colors transform hover:translate-x-1">{t('footer.privacyPolicy')}</button></li>
                <li><button onClick={() => addToast({
                  type: 'info',
                  title: 'Terms of Service',
                  message: 'Review our terms in the legal section.',
                  duration: 3000
                })} className="hover:text-white transition-colors transform hover:translate-x-1">{t('footer.termsOfService')}</button></li>
                <li><button onClick={() => addToast({
                  type: 'success',
                  title: 'Contact Us',
                  message: 'Reach us at support@neuroquestacademy.com',
                  duration: 5000
                })} className="hover:text-white transition-colors transform hover:translate-x-1">{t('footer.contact')}</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
