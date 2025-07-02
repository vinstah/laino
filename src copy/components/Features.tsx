import React from 'react';
import { 
  Brain, 
  Eye, 
  Headphones, 
  Timer, 
  BarChart3, 
  Users,
  Shield,
  Zap,
  Heart,
  Settings,
  Lightbulb,
  Target
} from 'lucide-react';
import { t, tStyled } from '../lang';

const Features: React.FC = () => {
  const features = tStyled('features');
  
  const featureCategories = [
    {
      title: features.neuroscienceBased?.title || "Neuroscience-Based Learning",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      features: [
        {
          icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
          title: features.neuroscienceBased?.neuroplasticity?.title || "Neuroplasticity Support",
          description: features.neuroscienceBased?.neuroplasticity?.description || ""
        },
        {
          icon: <Zap className="h-6 w-6 text-blue-500" />,
          title: features.neuroscienceBased?.multiBrain?.title || "Multi-Brain Activation",
          description: features.neuroscienceBased?.multiBrain?.description || ""
        },
        {
          icon: <Target className="h-6 w-6 text-green-500" />,
          title: features.neuroscienceBased?.cognitiveLoad?.title || "Cognitive Load Management",
          description: features.neuroscienceBased?.cognitiveLoad?.description || ""
        }
      ]
    },
    {
      title: features.accessibility?.title || "Accessibility & Accommodation",
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      features: [
        {
          icon: <Settings className="h-6 w-6 text-gray-500" />,
          title: features.accessibility?.sensoryRegulation?.title || "Sensory Regulation",
          description: features.accessibility?.sensoryRegulation?.description || ""
        },
        {
          icon: <Timer className="h-6 w-6 text-orange-500" />,
          title: features.accessibility?.executiveFunction?.title || "Executive Function Support",
          description: features.accessibility?.executiveFunction?.description || ""
        },
        {
          icon: <Headphones className="h-6 w-6 text-purple-500" />,
          title: features.accessibility?.multiSensory?.title || "Multi-Sensory Options",
          description: features.accessibility?.multiSensory?.description || ""
        }
      ]
    },
    {
      title: features.adaptiveIntelligence?.title || "Adaptive Intelligence",
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      features: [
        {
          icon: <Brain className="h-6 w-6 text-pink-500" />,
          title: features.adaptiveIntelligence?.learningStyle?.title || "Learning Style Recognition",
          description: features.adaptiveIntelligence?.learningStyle?.description || ""
        },
        {
          icon: <Target className="h-6 w-6 text-red-500" />,
          title: features.adaptiveIntelligence?.difficultyScaling?.title || "Difficulty Scaling",
          description: features.adaptiveIntelligence?.difficultyScaling?.description || ""
        },
        {
          icon: <Heart className="h-6 w-6 text-red-500" />,
          title: features.adaptiveIntelligence?.interestIntegration?.title || "Interest Integration",
          description: features.adaptiveIntelligence?.interestIntegration?.description || ""
        }
      ]
    }
  ];

  const neurodiversitySupport = [
    { 
      condition: features.neurodiversitySupport?.adhd?.condition || "ADHD", 
      features: features.neurodiversitySupport?.adhd?.features || [], 
      color: "bg-blue-100 text-blue-700" 
    },
    { 
      condition: features.neurodiversitySupport?.autism?.condition || "Autism", 
      features: features.neurodiversitySupport?.autism?.features || [], 
      color: "bg-purple-100 text-purple-700" 
    },
    { 
      condition: features.neurodiversitySupport?.dyslexia?.condition || "Dyslexia", 
      features: features.neurodiversitySupport?.dyslexia?.features || [], 
      color: "bg-green-100 text-green-700" 
    },
    { 
      condition: features.neurodiversitySupport?.processing?.condition || "Processing Differences", 
      features: features.neurodiversitySupport?.processing?.features || [], 
      color: "bg-orange-100 text-orange-700" 
    }
  ];

  const researchBacked = tStyled('features.researchBacked');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Feature Categories */}
        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="p-6 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      {feature.icon}
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Neurodiversity Support */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {features.neurodiversitySupport?.title || "Specialized Support for Neurodivergent Learners"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neurodiversitySupport.map((support, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <div className={`${support.color} px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4`}>
                  {support.condition}
                </div>
                <ul className="space-y-2">
                  {support.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence-Based Approach */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">{researchBacked.title}</h3>
            <p className="text-purple-100">
              {researchBacked.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(researchBacked.theories || {}).map(([key, theory]: [string, any], index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="flex justify-center mb-3">
                  {key === 'multipleIntelligences' && <Brain className="h-6 w-6" />}
                  {key === 'universalDesign' && <Eye className="h-6 w-6" />}
                  {key === 'cognitiveLoad' && <Lightbulb className="h-6 w-6" />}
                  {key === 'socialEmotional' && <Heart className="h-6 w-6" />}
                </div>
                <h4 className="font-semibold mb-1">{theory.theory}</h4>
                <p className="text-sm text-purple-100">{theory.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;