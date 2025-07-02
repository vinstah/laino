import React from 'react';
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
import { t } from '../lang';

interface HeroProps {
  onNavigate: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-18 h-18 bg-green-200 rounded-full opacity-45 animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            {t('hero.tagline')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            <Play className="h-5 w-5" />
            {t('hero.startLearning')}
          </button>
          
          <button 
            onClick={() => onNavigate('subjects')}
            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            {t('hero.exploreRealms')}
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: <Brain className="h-8 w-8 text-purple-500" />,
              title: t('hero.benefits.neuroscienceBased.title'),
              description: t('hero.benefits.neuroscienceBased.description')
            },
            {
              icon: <Heart className="h-8 w-8 text-red-500" />,
              title: t('hero.benefits.empathyDriven.title'),
              description: t('hero.benefits.empathyDriven.description')
            },
            {
              icon: <Shield className="h-8 w-8 text-green-500" />,
              title: t('hero.benefits.safeInclusive.title'),
              description: t('hero.benefits.safeInclusive.description')
            },
            {
              icon: <Zap className="h-8 w-8 text-yellow-500" />,
              title: t('hero.benefits.instantAdaptation.title'),
              description: t('hero.benefits.instantAdaptation.description')
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-6">{t('hero.trustIndicators.title')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">{t('hero.trustIndicators.educationAward')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">{t('hero.trustIndicators.coppaCertified')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">{t('hero.trustIndicators.neurodiversityAdvocate')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;