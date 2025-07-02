import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown, Mic, Volume2, Edit3, CheckCircle } from 'lucide-react';

interface SpeechSection {
  id: string;
  type: 'hook' | 'position' | 'argument' | 'counterargument' | 'conclusion';
  title: string;
  content: string;
  tips: string[];
}

interface SpeechOrganizerProps {
  onResult: (result: any) => void;
}

const SpeechOrganizer: React.FC<SpeechOrganizerProps> = ({ onResult }) => {
  const [speechSections, setSpeechSections] = useState<SpeechSection[]>([
    {
      id: '1',
      type: 'hook',
      title: 'Hook (Attention Grabber)',
      content: '',
      tips: ['Start with a question', 'Use a surprising statistic', 'Tell a brief story', 'Make a bold statement']
    },
    {
      id: '2',
      type: 'position',
      title: 'Position Statement',
      content: '',
      tips: ['Clearly state your position', 'Be specific and direct', 'Make it memorable', 'Preview your main points']
    }
  ]);

  const [selectedTopic, setSelectedTopic] = useState('park');
  const [speechLength, setSpeechLength] = useState(3); // minutes
  const [isRecording, setIsRecording] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const topics = {
    park: {
      title: 'Save Our Park',
      description: 'Argue for or against converting the local park into a shopping center',
      positions: {
        for: 'Support converting the park to a shopping center',
        against: 'Oppose converting the park to a shopping center'
      }
    },
    school: {
      title: 'School Uniforms',
      description: 'Debate whether schools should require uniforms',
      positions: {
        for: 'Support mandatory school uniforms',
        against: 'Oppose mandatory school uniforms'
      }
    },
    technology: {
      title: 'Screen Time Limits',
      description: 'Discuss limits on recreational screen time for students',
      positions: {
        for: 'Support stricter screen time limits',
        against: 'Oppose stricter screen time limits'
      }
    }
  };

  const sectionTypes = {
    hook: { color: 'purple', icon: '🎯' },
    position: { color: 'blue', icon: '📍' },
    argument: { color: 'green', icon: '💪' },
    counterargument: { color: 'orange', icon: '🤔' },
    conclusion: { color: 'red', icon: '🎯' }
  };

  useEffect(() => {
    onResult({
      topic: selectedTopic,
      sections: speechSections,
      estimatedLength: speechLength,
      wordCount: speechSections.reduce((total, section) => total + section.content.split(' ').length, 0)
    });
  }, [speechSections, selectedTopic, speechLength, onResult]);

  const addSection = (type: SpeechSection['type']) => {
    const newSection: SpeechSection = {
      id: Date.now().toString(),
      type,
      title: getSectionTitle(type),
      content: '',
      tips: getSectionTips(type)
    };
    
    setSpeechSections(prev => [...prev, newSection]);
  };

  const getSectionTitle = (type: SpeechSection['type']) => {
    switch (type) {
      case 'hook': return 'Hook (Attention Grabber)';
      case 'position': return 'Position Statement';
      case 'argument': return 'Supporting Argument';
      case 'counterargument': return 'Address Counterargument';
      case 'conclusion': return 'Conclusion & Call to Action';
    }
  };

  const getSectionTips = (type: SpeechSection['type']) => {
    switch (type) {
      case 'hook':
        return ['Start with a question', 'Use a surprising statistic', 'Tell a brief story', 'Make a bold statement'];
      case 'position':
        return ['Clearly state your position', 'Be specific and direct', 'Make it memorable', 'Preview your main points'];
      case 'argument':
        return ['Use evidence and examples', 'Appeal to logic and emotion', 'Make it relevant to audience', 'Use credible sources'];
      case 'counterargument':
        return ['Acknowledge opposing views', 'Respectfully address concerns', 'Provide counter-evidence', 'Strengthen your position'];
      case 'conclusion':
        return ['Summarize key points', 'Restate your position', 'End with a call to action', 'Make it memorable'];
    }
  };

  const updateSection = (id: string, content: string) => {
    setSpeechSections(prev => prev.map(section => 
      section.id === id ? { ...section, content } : section
    ));
  };

  const deleteSection = (id: string) => {
    setSpeechSections(prev => prev.filter(section => section.id !== id));
  };

  const moveSection = (id: string, direction: 'up' | 'down') => {
    setSpeechSections(prev => {
      const index = prev.findIndex(section => section.id === id);
      if (index === -1) return prev;
      
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      
      const newSections = [...prev];
      [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
      return newSections;
    });
  };

  const generateSpeechPreview = () => {
    return speechSections
      .filter(section => section.content.trim())
      .map(section => section.content)
      .join('\n\n');
  };

  const estimateReadingTime = () => {
    const wordCount = speechSections.reduce((total, section) => 
      total + section.content.split(' ').filter(word => word.length > 0).length, 0
    );
    return Math.ceil(wordCount / 150); // Average 150 words per minute
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
          <Edit3 className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Speech Organizer</h3>
          <p className="text-gray-600">Structure your persuasive speech with clear organization</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Topic Selection & Settings */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Speech Topic</h4>
            
            <div className="space-y-3">
              {Object.entries(topics).map(([key, topic]) => (
                <button
                  key={key}
                  onClick={() => setSelectedTopic(key)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                    selectedTopic === key 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="font-medium text-gray-900">{topic.title}</div>
                  <div className="text-sm text-gray-600">{topic.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Speech Settings</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Length (minutes)
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={speechLength}
                  onChange={(e) => setSpeechLength(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 min</span>
                  <span className="font-medium text-gray-900">{speechLength} min</span>
                  <span>10 min</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-lg font-bold text-purple-600">
                    {speechSections.reduce((total, section) => 
                      total + section.content.split(' ').filter(word => word.length > 0).length, 0
                    )}
                  </div>
                  <div className="text-xs text-gray-600">Words</div>
                </div>
                
                <div className="bg-white rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-600">
                    {estimateReadingTime()}
                  </div>
                  <div className="text-xs text-gray-600">Est. Minutes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Add Sections</h4>
            
            <div className="space-y-2">
              {Object.entries(sectionTypes).map(([type, config]) => (
                <button
                  key={type}
                  onClick={() => addSection(type as SpeechSection['type'])}
                  className="w-full flex items-center gap-3 p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-white transition-all"
                >
                  <span className="text-lg">{config.icon}</span>
                  <span className="font-medium text-gray-900">
                    {getSectionTitle(type as SpeechSection['type'])}
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 ml-auto" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Speech Sections */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-900">Speech Structure</h4>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  isRecording 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Mic className="h-4 w-4" />
                {isRecording ? 'Stop Recording' : 'Practice Speech'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {speechSections.map((section, index) => {
              const config = sectionTypes[section.type];
              
              return (
                <div
                  key={section.id}
                  className={`border-2 rounded-xl p-6 transition-all ${
                    currentSection === section.id 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{config.icon}</span>
                      <div>
                        <h5 className="font-semibold text-gray-900">{section.title}</h5>
                        <div className="text-sm text-gray-600">
                          {section.content.split(' ').filter(word => word.length > 0).length} words
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => moveSection(section.id, 'up')}
                        disabled={index === 0}
                        className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                      >
                        <ArrowUp className="h-4 w-4" />
                      </button>
                      
                      <button
                        onClick={() => moveSection(section.id, 'down')}
                        disabled={index === speechSections.length - 1}
                        className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                      >
                        <ArrowDown className="h-4 w-4" />
                      </button>
                      
                      <button
                        onClick={() => deleteSection(section.id)}
                        className="p-1 text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={section.content}
                    onChange={(e) => updateSection(section.id, e.target.value)}
                    onFocus={() => setCurrentSection(section.id)}
                    onBlur={() => setCurrentSection(null)}
                    placeholder={`Write your ${section.title.toLowerCase()} here...`}
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />

                  {/* Tips */}
                  <div className="mt-4 bg-gray-50 rounded-lg p-4">
                    <h6 className="font-medium text-gray-900 mb-2">💡 Tips for this section:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Speech Preview */}
          {speechSections.some(section => section.content.trim()) && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Volume2 className="h-5 w-5" />
                  Speech Preview
                </h4>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                  <Volume2 className="h-4 w-4" />
                  Read Aloud
                </button>
              </div>
              
              <div className="bg-white rounded-lg p-4 max-h-64 overflow-y-auto">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {generateSpeechPreview() || 'Start writing your speech sections to see a preview here...'}
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <span>Estimated reading time: {estimateReadingTime()} minutes</span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Auto-saved
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeechOrganizer;