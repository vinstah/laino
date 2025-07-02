import React, { useEffect, useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  ChevronRight, 
  Play, 
  Award,
  Heart,
  Shield,
  Zap
} from 'lucide-react';
import { t, tHtml, tStyled } from '../lang';
import { useParallax, useIntersectionObserver } from '../hooks/useAnimations';
import { useFloatingElements, useTypewriter } from '../hooks/useInteractiveElements';
import InteractiveButton from './InteractiveButton';
import AnimatedCard from './AnimatedCard';

interface EnhancedHeroProps {
  onNavigate: (view: string) => void;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { displayText, isComplete } = useTypewriter(t('hero.title'), 100);
  const { elements, addFloatingElement } = useFloatingElements();
  const parallaxRef = useParallax(0.3);
  
  const ref = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    { threshold: 0.1 }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      addFloatingElement(x, y);
    }, 3000);

    return () => clearInterval(interval);
  }, [addFloatingElement]);

  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: tStyled('hero.benefits.neuroscienceBased.title'),
      description: tStyled('hero.benefits.neuroscienceBased.description')
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: tStyled('hero.benefits.empathyDriven.title'),
      description: tStyled('hero.benefits.empathyDriven.description')
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: tStyled('hero.benefits.safeInclusive.title'),
      description: tStyled('hero.benefits.safeInclusive.description')
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: tStyled('hero.benefits.instantAdaptation.title'),
      description: tStyled('hero.benefits.instantAdaptation.description')
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-18 h-18 bg-green-200 rounded-full opacity-45 animate-pulse delay-3000"></div>
        
        {/* Floating Elements */}
        {elements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${element.color} rounded-full opacity-60 animate-bounce`}
            style={{
              left: element.x,
              top: element.y,
              width: element.size,
              height: element.size,
              animationDuration: `${element.duration}ms`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Sparkles className="h-4 w-4" />
            {t('hero.tagline')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight min-h-[200px] flex items-center justify-center">
            {t('hero.title')}
          </h1>
          
          <div className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {tStyled('hero.subtitle')}
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <InteractiveButton
            onClick={() => onNavigate('dashboard')}
            variant="primary"
            size="lg"
            icon={<Play className="h-5 w-5" />}
          >
            {t('hero.startLearning')}
          </InteractiveButton>
          
          <InteractiveButton
            onClick={() => onNavigate('subjects')}
            variant="outline"
            size="lg"
            icon={<ChevronRight className="h-5 w-5" />}
          >
            {t('hero.exploreRealms')}
          </InteractiveButton>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {benefits.map((benefit, index) => (
            <AnimatedCard
              key={index}
              delay={index * 200}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <div className="text-gray-600 text-sm">{benefit.description}</div>
            </AnimatedCard>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 pt-8 border-t border-gray-200 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-gray-500 mb-6">{tStyled('hero.trustIndicators.title')}</div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">{t('hero.trustIndicators.educationAward')}</span>
            </div>
            <div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">{t('hero.trustIndicators.coppaCertified')}</span>
            </div>
            <div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">{t('hero.trustIndicators.neurodiversityAdvocate')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;