import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Star, 
  Target, 
  BookOpen,
  CheckCircle,
  Lock,
  Award,
  Users,
  BarChart3,
  Settings,
  Volume2,
  Eye,
  Gamepad2,
  Brain,
  Heart,
  Zap
} from 'lucide-react';
import { mockQuests, mockStudents } from '../data/contentData';
import QuestPlayer from './QuestPlayer';

interface SubjectDetailProps {
  subject: string | null;
  onBack: () => void;
  onNavigate: (view: string) => void;
}

const SubjectDetail: React.FC<SubjectDetailProps> = ({ subject, onBack, onNavigate }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [activeQuest, setActiveQuest] = useState<string | null>(null);

  const subjectData = {
    'mathematics': {
      title: 'Mathematics Kingdom',
      description: 'Master numbers, patterns, and problem-solving through visual adventures',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      icon: '🔢',
      totalQuests: 127,
      completedQuests: 23,
      currentLevel: 5,
      nextMilestone: 'Algebra Explorer'
    },
    'language-arts': {
      title: 'Language Arts Realm',
      description: 'Master reading, writing, and communication through creative storytelling',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      icon: '📚',
      totalQuests: 89,
      completedQuests: 15,
      currentLevel: 3,
      nextMilestone: 'Story Architect'
    },
    'science': {
      title: 'Science Laboratory',
      description: 'Discover the wonders of science through safe virtual experiments',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      icon: '🔬',
      totalQuests: 156,
      completedQuests: 31,
      currentLevel: 6,
      nextMilestone: 'Research Scientist'
    },
    'physics': {
      title: 'Physics Universe',
      description: 'Understand fundamental forces through interactive simulations',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      icon: '⚡',
      totalQuests: 73,
      completedQuests: 8,
      currentLevel: 2,
      nextMilestone: 'Force Master'
    }
  };

  const currentSubject = subject ? subjectData[subject as keyof typeof subjectData] : null;
  
  if (!currentSubject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subject not found</h2>
          <button onClick={onBack} className="text-purple-600 hover:text-purple-700">
            Return to Learning Realms
          </button>
        </div>
      </div>
    );
  }

  const subjectQuests = mockQuests.filter(quest => 
    quest.subject === subject ||
    (subject === 'language-arts' && quest.subject === 'language-arts')
  );

  const filteredQuests = subjectQuests.filter(quest => {
    const difficultyMatch = selectedDifficulty === 'all' || quest.difficulty.toLowerCase() === selectedDifficulty;
    const typeMatch = selectedType === 'all' || quest.type.toLowerCase() === selectedType;
    return difficultyMatch && typeMatch;
  });

  const progressPercentage = (currentSubject.completedQuests / currentSubject.totalQuests) * 100;

  // Mock student profile for demonstration
  const studentProfile = mockStudents[0];

  // If a quest is active, show the quest player
  if (activeQuest) {
    const quest = mockQuests.find(q => q.id === activeQuest);
    if (quest) {
      return (
        <QuestPlayer 
          quest={quest} 
          onBack={() => setActiveQuest(null)}
          studentProfile={studentProfile}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`${currentSubject.bgColor} border-b border-gray-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Learning Realms
          </button>

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${currentSubject.gradient} rounded-3xl flex items-center justify-center text-4xl`}>
                {currentSubject.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{currentSubject.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{currentSubject.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    Level {currentSubject.currentLevel}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {currentSubject.completedQuests}/{currentSubject.totalQuests} Quests
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Next: {currentSubject.nextMilestone}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {Math.round(progressPercentage)}%
                </div>
                <p className="text-gray-600 text-sm mb-3">Progress</p>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${currentSubject.gradient} h-2 rounded-full`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Filter Quests</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select 
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="all">All Types</option>
                    <option value="interactive">Interactive</option>
                    <option value="video">Video</option>
                    <option value="practice">Practice</option>
                    <option value="assessment">Assessment</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Learning Path */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-4">Recommended Path</h3>
              <div className="space-y-3">
                {[
                  { title: 'Current Quest', status: 'active', locked: false },
                  { title: 'Next Challenge', status: 'upcoming', locked: false },
                  { title: 'Advanced Topic', status: 'locked', locked: true },
                  { title: 'Mastery Test', status: 'locked', locked: true }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === 'active' ? `bg-${currentSubject.color}-500 text-white` :
                      item.status === 'upcoming' ? 'bg-gray-200 text-gray-600' :
                      'bg-gray-100 text-gray-400'
                    }`}>
                      {item.locked ? <Lock className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                    </div>
                    <span className={`text-sm ${item.locked ? 'text-gray-400' : 'text-gray-700'}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${currentSubject.color}-100 rounded-xl flex items-center justify-center`}>
                    <Clock className={`h-6 w-6 text-${currentSubject.color}-500`} />
                  </div>
                  <span className="text-sm text-gray-500">This Week</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">4.2h</div>
                <p className="text-sm text-gray-600">Learning Time</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${currentSubject.color}-100 rounded-xl flex items-center justify-center`}>
                    <Star className={`h-6 w-6 text-${currentSubject.color}-500`} />
                  </div>
                  <span className="text-sm text-gray-500">Average</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">92%</div>
                <p className="text-sm text-gray-600">Quest Score</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${currentSubject.color}-100 rounded-xl flex items-center justify-center`}>
                    <Award className={`h-6 w-6 text-${currentSubject.color}-500`} />
                  </div>
                  <span className="text-sm text-gray-500">Earned</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">7</div>
                <p className="text-sm text-gray-600">Achievements</p>
              </div>
            </div>

            {/* Quest List */}
            <div className="bg-white rounded-2xl shadow-md">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    Available Quests ({filteredQuests.length})
                  </h2>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <BarChart3 className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Settings className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredQuests.map((quest, index) => (
                  <div key={quest.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${currentSubject.gradient} rounded-xl flex items-center justify-center`}>
                            <Play className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{quest.title}</h3>
                            <p className="text-gray-600">{quest.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            quest.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                            quest.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {quest.difficulty}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            {quest.duration} min
                          </span>
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            <Target className="h-4 w-4" />
                            {quest.type}
                          </span>
                        </div>

                        {/* Adaptations */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-sm text-gray-600">Adaptations:</span>
                          {quest.adaptations.visual && (
                            <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                              <Eye className="h-3 w-3" />
                              Visual
                            </div>
                          )}
                          {quest.adaptations.auditory && (
                            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                              <Volume2 className="h-3 w-3" />
                              Audio
                            </div>
                          )}
                          {quest.adaptations.kinesthetic && (
                            <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                              <Gamepad2 className="h-3 w-3" />
                              Interactive
                            </div>
                          )}
                          {quest.adaptations.adhd && (
                            <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                              <Zap className="h-3 w-3" />
                              ADHD
                            </div>
                          )}
                          {quest.adaptations.autism && (
                            <div className="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
                              <Brain className="h-3 w-3" />
                              Autism
                            </div>
                          )}
                          {quest.adaptations.dyslexia && (
                            <div className="flex items-center gap-1 bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs">
                              <Heart className="h-3 w-3" />
                              Dyslexia
                            </div>
                          )}
                        </div>

                        {/* Learning Objectives */}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Learning Objectives:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {quest.learningObjectives.slice(0, 2).map((objective, objIndex) => (
                              <li key={objIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                {objective}
                              </li>
                            ))}
                            {quest.learningObjectives.length > 2 && (
                              <li className="text-purple-600 text-sm">
                                +{quest.learningObjectives.length - 2} more objectives
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 ml-6">
                        <button 
                          onClick={() => setActiveQuest(quest.id)}
                          className={`bg-gradient-to-r ${currentSubject.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2`}
                        >
                          <Play className="h-4 w-4" />
                          Start Quest
                        </button>
                        <button 
                          onClick={() => alert(`Quest Preview: ${quest.title}\n\nIntroduction: ${quest.content.introduction}\n\nThis quest includes:\n- Interactive ${quest.type.toLowerCase()} content\n- ${quest.duration} minutes of engaging learning\n- Immediate feedback and progress tracking`)}
                          className="text-gray-600 hover:text-gray-800 px-6 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-sm"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;