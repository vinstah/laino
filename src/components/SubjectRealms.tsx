import React from 'react';
import { 
  Calculator, 
  BookOpen, 
  Atom, 
  Zap,
  ChevronRight,
  Star,
  Target,
  Lightbulb,
  Puzzle
} from 'lucide-react';
import { t, tStyled } from '../lang';

interface SubjectRealmsProps {
  onSubjectSelect: (subject: string) => void;
}

const SubjectRealms: React.FC<SubjectRealmsProps> = ({ onSubjectSelect }) => {
  const subjects = tStyled('subjects');
  
  const realms = [
    {
      id: 'mathematics',
      title: subjects.mathematics?.title || 'Mathematics Kingdom',
      icon: <Calculator className="h-12 w-12 text-blue-500" />,
      description: subjects.mathematics?.description || '',
      features: subjects.mathematics?.features || [],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      quests: 127,
      difficulty: subjects.mathematics?.difficulty || 'Scaffolded Learning',
      realWorldFocus: subjects.mathematics?.realWorldFocus || ''
    },
    {
      id: 'language-arts',
      title: subjects.languageArts?.title || 'Language Arts Realm',
      icon: <BookOpen className="h-12 w-12 text-purple-500" />,
      description: subjects.languageArts?.description || '',
      features: subjects.languageArts?.features || [],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      quests: 89,
      difficulty: subjects.languageArts?.difficulty || 'Inquiry-Based',
      realWorldFocus: subjects.languageArts?.realWorldFocus || ''
    },
    {
      id: 'science',
      title: subjects.science?.title || 'Science Laboratory',
      icon: <Atom className="h-12 w-12 text-green-500" />,
      description: subjects.science?.description || '',
      features: subjects.science?.features || [],
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      quests: 156,
      difficulty: subjects.science?.difficulty || 'Hands-On Discovery',
      realWorldFocus: subjects.science?.realWorldFocus || ''
    },
    {
      id: 'physics',
      title: subjects.physics?.title || 'Physics Universe',
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      description: subjects.physics?.description || '',
      features: subjects.physics?.features || [],
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      quests: 73,
      difficulty: subjects.physics?.difficulty || 'Engineering Design',
      realWorldFocus: subjects.physics?.realWorldFocus || ''
    }
  ];

  const learningApproach = tStyled('subjects.learningApproach');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {tStyled('subjects.title')}
          </h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto">
            {tStyled('subjects.subtitle')}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {realms.map((realm, index) => (
            <div 
              key={realm.id} 
              className={`${realm.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
              onClick={() => onSubjectSelect(realm.id)}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${realm.gradient} rounded-2xl flex items-center justify-center`}>
                    {realm.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{tStyled(`subjects.${realm.id === 'language-arts' ? 'languageArts' : realm.id}.title`)}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-600">{realm.quests} {t('common.quests')}</span>
                      <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">
                        {realm.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </div>

              <div className="text-gray-700 mb-6 text-lg">{tStyled(`subjects.${realm.id === 'language-arts' ? 'languageArts' : realm.id}.description`)}</div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Real-World Applications:</h4>
                <p className="text-sm text-gray-600 bg-white/50 px-3 py-2 rounded-lg">
                  {realm.realWorldFocus}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-800">Learning Experiences Include:</h4>
                {realm.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-gray-700 text-sm">{tStyled(`subjects.${realm.id === 'language-arts' ? 'languageArts' : realm.id}.features.${featureIndex}`)}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{t('subjects.teacherDesigned')}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSubjectSelect(realm.id);
                  }}
                  className={`bg-gradient-to-r ${realm.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2`}
                >
                  <Target className="h-4 w-4" />
                  {t('subjects.exploreNow')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher-Designed Learning Approach */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {tStyled('subjects.learningApproach.title')}
            </h3>
            <div className="text-gray-600 max-w-2xl mx-auto">
              {tStyled('subjects.learningApproach.subtitle')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Puzzle className="h-8 w-8 text-blue-500" />, 
                title: learningApproach.realWorldContext?.title || "Real-World Context", 
                desc: learningApproach.realWorldContext?.description || ""
              },
              { 
                icon: <Lightbulb className="h-8 w-8 text-yellow-500" />, 
                title: learningApproach.deepUnderstanding?.title || "Deep Understanding", 
                desc: learningApproach.deepUnderstanding?.description || ""
              },
              { 
                icon: <Target className="h-8 w-8 text-green-500" />, 
                title: learningApproach.scaffoldedSupport?.title || "Scaffolded Support", 
                desc: learningApproach.scaffoldedSupport?.description || ""
              }
            ].map((approach, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md mx-auto">
                  {approach.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{tStyled(`subjects.learningApproach.${index === 0 ? 'realWorldContext' : index === 1 ? 'deepUnderstanding' : 'scaffoldedSupport'}.title`)}</h4>
                <div className="text-gray-600 text-sm">{tStyled(`subjects.learningApproach.${index === 0 ? 'realWorldContext' : index === 1 ? 'deepUnderstanding' : 'scaffoldedSupport'}.description`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectRealms;