import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff,
  Gamepad2,
  Brain,
  Heart,
  Zap,
  CheckCircle,
  RotateCcw,
  Settings,
  Timer,
  Target,
  Award,
  Lightbulb,
  HelpCircle
} from 'lucide-react';
import { Quest } from '../data/contentData';
import InteractiveQuestion from './InteractiveQuestion';
import LoopSpeedCalculator from './InteractiveElements/LoopSpeedCalculator';
import EnergyTrackingSimulator from './InteractiveElements/EnergyTrackingSimulator';
import VolcanoExperimentRecorder from './InteractiveElements/VolcanoExperimentRecorder';
import SpeechOrganizer from './InteractiveElements/SpeechOrganizer';

interface QuestPlayerProps {
  quest: Quest;
  onBack: () => void;
  studentProfile: {
    learningProfile: {
      accommodations: string[];
      primaryStyle: string;
    };
    preferences: {
      fontSize: string;
      highContrast: boolean;
      reducedMotion: boolean;
      audioSupport: boolean;
    };
  };
}

const QuestPlayer: React.FC<QuestPlayerProps> = ({ quest, onBack, studentProfile }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [adaptationsEnabled, setAdaptationsEnabled] = useState({
    visual: true,
    auditory: studentProfile.preferences.audioSupport,
    kinesthetic: true,
    adhd: studentProfile.learningProfile?.accommodations?.includes('Frequent breaks') || false,
    autism: studentProfile.learningProfile?.accommodations?.includes('Visual supports') || false,
    dyslexia: studentProfile.learningProfile?.accommodations?.includes('Audio support') || false
  });
  const [showAdaptationPanel, setShowAdaptationPanel] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [questProgress, setQuestProgress] = useState(0);
  const [interactionData, setInteractionData] = useState<any>({});
  const [showHints, setShowHints] = useState(false);

  // Timer for tracking engagement
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Auto-progress calculation
  useEffect(() => {
    const progress = ((currentStep + 1) / quest.content.steps.length) * 100;
    setQuestProgress(progress);
  }, [currentStep, quest.content.steps.length]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getAdaptationIcon = (type: string) => {
    switch (type) {
      case 'visual': return <Eye className="h-4 w-4" />;
      case 'auditory': return <Volume2 className="h-4 w-4" />;
      case 'kinesthetic': return <Gamepad2 className="h-4 w-4" />;
      case 'adhd': return <Zap className="h-4 w-4" />;
      case 'autism': return <Brain className="h-4 w-4" />;
      case 'dyslexia': return <Heart className="h-4 w-4" />;
      default: return <Settings className="h-4 w-4" />;
    }
  };

  const renderInteractiveElement = (interaction: string, stepIndex: number) => {
    const currentStepData = quest.content.steps[stepIndex];
    
    // Enhanced interactive elements with comprehensive implementations
    switch (interaction) {
      case 'loop-speed-calculator':
        return (
          <LoopSpeedCalculator
            onResult={(result) => {
              setInteractionData(prev => ({
                ...prev,
                [`step-${stepIndex}`]: result
              }));
            }}
          />
        );

      case 'energy-tracking-simulator':
        return (
          <EnergyTrackingSimulator
            onResult={(result) => {
              setInteractionData(prev => ({
                ...prev,
                [`step-${stepIndex}`]: result
              }));
            }}
          />
        );

      case 'volcano-experiment-recorder':
        return (
          <VolcanoExperimentRecorder
            onResult={(result) => {
              setInteractionData(prev => ({
                ...prev,
                [`step-${stepIndex}`]: result
              }));
            }}
          />
        );

      case 'speech-organizer':
        return (
          <SpeechOrganizer
            onResult={(result) => {
              setInteractionData(prev => ({
                ...prev,
                [`step-${stepIndex}`]: result
              }));
            }}
          />
        );

      case 'drag-measuring-cups':
        return (
          <InteractiveQuestion
            question={{
              id: `step-${stepIndex}-measuring`,
              text: "How many 1/4 cups do you need to make 3/4 cup?",
              type: 'drag-drop',
              options: [
                { id: '1', text: '1/4 cup', image: '🥤' },
                { id: '2', text: '1/4 cup', image: '🥤' },
                { id: '3', text: '1/4 cup', image: '🥤' },
                { id: '4', text: '1/4 cup', image: '🥤' }
              ],
              correctAnswer: ['1', '2', '3'],
              explanation: 'Since 3/4 = 3 × 1/4, you need exactly 3 measuring cups of 1/4 cup each.',
              hint: 'Think about how many quarters make three-quarters!'
            }}
            onAnswer={(answer) => {
              setInteractionData(prev => ({
                ...prev,
                [`step-${stepIndex}`]: answer
              }));
            }}
            showFeedback={true}
          />
        );

      case 'cake-cutting-tool':
        return (
          <InteractiveQuestion
            question={{
              id: `step-${stepIndex}-cake`,
              text: "Mrs. Johnson takes 5 pieces from an 8-piece cake. How much cake is left?",
              type: 'multiple-choice',
              options: [
                { id: 'a', text: '2/8 of the cake', isCorrect: false },
                { id: 'b', text: '3/8 of the cake', isCorrect: true },
                { id: 'c', text: '5/8 of the cake', isCorrect: false },
                { id: 'd', text: '1/2 of the cake', isCorrect: false }
              ],
              correctAnswer: 'b',
              explanation: 'If Mrs. Johnson takes 5 pieces from 8 total pieces, then 8 - 5 = 3 pieces remain, which is 3/8 of the cake.',
              hint: 'Start with the total pieces and subtract what was taken.'
            }}
            onAnswer={(answer) => {
              setInteractionData(prev => ({
                ...prev,
                [`step-${stepIndex}`]: answer
              }));
            }}
            showFeedback={true}
          />
        );

      case 'area-calculator-tool':
        return (
          <InteractiveQuestion
            question={{
              id: `step-${stepIndex}-area`,
              text: "Calculate the area of a playground that is 40 feet long and 60 feet wide.",
              type: 'multiple-choice',
              options: [
                { id: 'a', text: '200 square feet', isCorrect: false },
                { id: 'b', text: '2,400 square feet', isCorrect: true },
                { id: 'c', text: '100 square feet', isCorrect: false },
                { id: 'd', text: '1,200 square feet', isCorrect: false }
              ],
              correctAnswer: 'b',
              explanation: 'Area = length × width = 40 feet × 60 feet = 2,400 square feet.',
              hint: 'Remember the formula: Area = length × width'
            }}
            onAnswer={(answer) => {
              setInteractionData(prev => ({
                ...prev,
                [`step-${stepIndex}`]: answer
              }));
            }}
            showFeedback={true}
          />
        );

      case 'character-trait-analyzer':
        return (
          <InteractiveQuestion
            question={{
              id: `step-${stepIndex}-character`,
              text: 'Based on Mrs. Hartwell\'s actions (wringing hands, nervous glances), what character trait can you infer?',
              type: 'multiple-choice',
              options: [
                { id: 'a', text: 'Confident and assured', isCorrect: false },
                { id: 'b', text: 'Anxious and worried', isCorrect: true },
                { id: 'c', text: 'Angry and frustrated', isCorrect: false },
                { id: 'd', text: 'Bored and disinterested', isCorrect: false }
              ],
              correctAnswer: 'b',
              explanation: 'Her physical actions (wringing hands, nervous glances) are clear evidence that she feels anxious and worried about the mysterious sounds.',
              hint: 'Pay attention to her body language and what it reveals about her emotional state.'
            }}
            onAnswer={(answer) => {
              setInteractionData(prev => ({
                ...prev,
                [`step-${stepIndex}`]: answer
              }));
            }}
            showFeedback={true}
          />
        );

      default:
        return (
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
            <div className="text-center">
              <Gamepad2 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Interactive element: {interaction}</p>
              <button 
                onClick={() => setInteractionData(prev => ({ ...prev, completed: true }))}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Complete Activity
              </button>
            </div>
          </div>
        );
    }
  };

  const renderAdaptations = () => {
    const adaptations = [];

    if (adaptationsEnabled.visual && quest.adaptations.visual) {
      adaptations.push(
        <div key="visual" className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">Visual Support Active</span>
          </div>
          <p className="text-xs text-blue-600">Enhanced visual diagrams and color-coded elements</p>
        </div>
      );
    }

    if (adaptationsEnabled.auditory && quest.adaptations.auditory) {
      adaptations.push(
        <div key="auditory" className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-700">Audio Support Active</span>
          </div>
          <button className="text-xs text-green-600 underline">🔊 Listen to instructions</button>
        </div>
      );
    }

    if (adaptationsEnabled.adhd && quest.adaptations.adhd) {
      adaptations.push(
        <div key="adhd" className="bg-orange-50 border border-orange-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">ADHD Support Active</span>
          </div>
          <div className="flex gap-2">
            <button className="text-xs bg-orange-100 px-2 py-1 rounded">Take Break</button>
            <button className="text-xs bg-orange-100 px-2 py-1 rounded">Focus Mode</button>
          </div>
        </div>
      );
    }

    if (adaptationsEnabled.autism && quest.adaptations.autism) {
      adaptations.push(
        <div key="autism" className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-700">Autism Support Active</span>
          </div>
          <p className="text-xs text-purple-600">Clear structure with predictable navigation</p>
        </div>
      );
    }

    return adaptations;
  };

  const currentStepData = quest.content.steps[currentStep];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-5 w-5" />
                Back
              </button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">{quest.title}</h1>
                <p className="text-sm text-gray-600">Step {currentStep + 1} of {quest.content.steps.length}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Timer className="h-4 w-4" />
                {formatTime(timeSpent)}
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-lg ${isPlaying ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setShowAdaptationPanel(!showAdaptationPanel)}
                className="p-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200"
              >
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="pb-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${questProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md p-8">
              {/* Step Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {currentStep + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
                </div>
                
                {/* Learning Objective */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium text-blue-700">Learning Focus</span>
                  </div>
                  <p className="text-sm text-blue-600">
                    {quest.learningObjectives[currentStep] || quest.learningObjectives[0]}
                  </p>
                </div>
              </div>

              {/* Step Content */}
              <div className={`prose max-w-none mb-8 ${studentProfile.preferences.fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
                <p className="text-gray-700 leading-relaxed">{currentStepData.content}</p>
              </div>

              {/* Interactive Element */}
              {currentStepData.interaction && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-purple-500" />
                    Interactive Activity
                  </h3>
                  {renderInteractiveElement(currentStepData.interaction, currentStep)}
                </div>
              )}

              {/* Hints and Support */}
              {showHints && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-700">Helpful Hint</span>
                  </div>
                  <p className="text-sm text-yellow-600">
                    Remember to think about what you already know about this topic. How does this connect to real life?
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-700"
                  >
                    <HelpCircle className="h-4 w-4" />
                    {showHints ? 'Hide' : 'Show'} Hints
                  </button>
                  
                  {currentStep < quest.content.steps.length - 1 ? (
                    <button
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      Next Step
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </button>
                  ) : (
                    <button
                      onClick={() => alert('Quest completed! Great work!')}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <Award className="h-4 w-4" />
                      Complete Quest
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Active Adaptations */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Adaptations</h3>
              <div className="space-y-3">
                {renderAdaptations()}
                {renderAdaptations().length === 0 && (
                  <p className="text-sm text-gray-500">No adaptations active for this quest</p>
                )}
              </div>
            </div>

            {/* Adaptation Controls */}
            {showAdaptationPanel && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Adaptation Settings</h3>
                <div className="space-y-3">
                  {Object.entries(quest.adaptations).map(([type, available]) => (
                    available && (
                      <div key={type} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getAdaptationIcon(type)}
                          <span className="text-sm capitalize">{type}</span>
                        </div>
                        <button
                          onClick={() => setAdaptationsEnabled(prev => ({
                            ...prev,
                            [type]: !prev[type as keyof typeof prev]
                          }))}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            adaptationsEnabled[type as keyof typeof adaptationsEnabled] 
                              ? 'bg-purple-500' 
                              : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                              adaptationsEnabled[type as keyof typeof adaptationsEnabled] 
                                ? 'translate-x-5' 
                                : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Progress Summary */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Completion</span>
                  <span className="font-medium">{Math.round(questProgress)}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Time Spent</span>
                  <span className="font-medium">{formatTime(timeSpent)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Interactions</span>
                  <span className="font-medium">{Object.keys(interactionData).length}</span>
                </div>
              </div>
            </div>

            {/* Quest Overview */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quest Steps</h3>
              <div className="space-y-2">
                {quest.content.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                      index === currentStep 
                        ? 'bg-purple-50 border border-purple-200' 
                        : index < currentStep 
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-gray-50 border border-gray-200'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      index === currentStep 
                        ? 'bg-purple-500 text-white' 
                        : index < currentStep 
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                    }`}>
                      {index < currentStep ? <CheckCircle className="h-3 w-3" /> : index + 1}
                    </div>
                    <span className={`text-sm ${
                      index === currentStep ? 'font-medium text-purple-700' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </span>
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

export default QuestPlayer;