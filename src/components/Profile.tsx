import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Award, 
  BarChart3, 
  Bell, 
  Shield, 
  Edit,
  Save,
  X,
  Calendar,
  Clock,
  Target,
  Star,
  TrendingUp,
  BookOpen,
  Brain,
  Heart,
  Zap,
  Eye,
  Volume2,
  Gamepad2,
  Play
} from 'lucide-react';
import { mockStudents } from '../data/contentData';

interface ProfileProps {
  onNavigate: (view: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(mockStudents[0]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User className="h-5 w-5" /> },
    { id: 'progress', label: 'Progress', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <Award className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];

  const accommodations = [
    { id: 'extended-time', label: 'Extended Time', icon: <Clock className="h-5 w-5" />, enabled: true },
    { id: 'visual-supports', label: 'Visual Supports', icon: <Eye className="h-5 w-5" />, enabled: true },
    { id: 'audio-support', label: 'Audio Support', icon: <Volume2 className="h-5 w-5" />, enabled: true },
    { id: 'frequent-breaks', label: 'Frequent Breaks', icon: <Heart className="h-5 w-5" />, enabled: true },
    { id: 'reduced-distractions', label: 'Reduced Distractions', icon: <Brain className="h-5 w-5" />, enabled: false },
    { id: 'interactive-elements', label: 'Interactive Elements', icon: <Gamepad2 className="h-5 w-5" />, enabled: true }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {profileData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
              <p className="text-gray-600 text-lg">{profileData.grade} • Age {profileData.age}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {profileData.learningProfile.primaryStyle} learner
                </span>
                <span className="text-gray-500 text-sm">
                  Member since January 2024
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-500" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {Object.values(profileData.progress).reduce((total, subject) => total + subject.completedQuests.length, 0)}
          </div>
          <p className="text-sm text-gray-600">Quests Completed</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-500" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {Object.values(profileData.progress).reduce((total, subject) => total + subject.totalPoints, 0)}
          </div>
          <p className="text-sm text-gray-600">Total Points</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Target className="h-6 w-6 text-green-500" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {Math.max(...Object.values(profileData.progress).map(subject => subject.currentLevel))}
          </div>
          <p className="text-sm text-gray-600">Highest Level</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Award className="h-6 w-6 text-orange-500" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {Object.values(profileData.progress).reduce((total, subject) => total + subject.achievements.length, 0)}
          </div>
          <p className="text-sm text-gray-600">Achievements</p>
        </div>
      </div>

      {/* Learning Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Profile</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Primary Learning Style</h4>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <span className="text-purple-700 font-medium capitalize">
                  {profileData.learningProfile.primaryStyle}
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Strengths</h4>
              <div className="space-y-2">
                {profileData.learningProfile.strengths.map((strength, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-2">
                    <span className="text-green-700 text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Growth Areas</h4>
              <div className="space-y-2">
                {profileData.learningProfile.challenges.map((challenge, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                    <span className="text-blue-700 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Active Accommodations</h3>
          <div className="space-y-3">
            {profileData.learningProfile.accommodations.map((accommodation, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-gray-700">{accommodation}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => alert('Accommodation settings can be adjusted in the Settings tab')}
            className="mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Manage Accommodations →
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Completed', item: 'Fraction Pizza Party', subject: 'Mathematics', time: '2 hours ago', points: 150 },
            { action: 'Started', item: 'The Mystery of Dragon\'s Hollow', subject: 'Language Arts', time: '1 day ago', points: 0 },
            { action: 'Achieved', item: 'Pattern Master Badge', subject: 'Mathematics', time: '2 days ago', points: 500 },
            { action: 'Completed', item: 'The Secret Life of Seeds', subject: 'Science', time: '3 days ago', points: 200 }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.action === 'Completed' ? 'bg-green-100' :
                  activity.action === 'Started' ? 'bg-blue-100' :
                  'bg-purple-100'
                }`}>
                  {activity.action === 'Completed' ? <BookOpen className="h-5 w-5 text-green-500" /> :
                   activity.action === 'Started' ? <Play className="h-5 w-5 text-blue-500" /> :
                   <Award className="h-5 w-5 text-purple-500" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {activity.action} <span className="text-purple-600">{activity.item}</span>
                  </p>
                  <p className="text-sm text-gray-600">{activity.subject} • {activity.time}</p>
                </div>
              </div>
              {activity.points > 0 && (
                <div className="text-right">
                  <span className="text-green-600 font-medium">+{activity.points} pts</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Subject Progress</h3>
        <div className="space-y-6">
          {Object.entries(profileData.progress).map(([subject, data]) => (
            <div key={subject} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900 capitalize">{subject.replace('-', ' ')}</h4>
                <span className="text-sm text-gray-600">Level {data.currentLevel}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{data.completedQuests.length}</div>
                  <p className="text-sm text-gray-600">Quests</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{data.totalPoints}</div>
                  <p className="text-sm text-gray-600">Points</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{data.achievements.length}</div>
                  <p className="text-sm text-gray-600">Badges</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full" 
                  style={{ width: `${(data.currentLevel / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Your Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Fraction Master', description: 'Completed 10 fraction quests', icon: '🍕', rarity: 'rare', earned: '2 days ago' },
            { title: 'Story Detective', description: 'Solved 5 mystery reading quests', icon: '🔍', rarity: 'rare', earned: '1 week ago' },
            { title: 'Persistent Learner', description: '7-day learning streak', icon: '🔥', rarity: 'common', earned: 'Yesterday' },
            { title: 'Science Explorer', description: 'Conducted 15 experiments', icon: '🔬', rarity: 'epic', earned: '3 days ago' }
          ].map((achievement, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      achievement.rarity === 'epic' ? 'bg-purple-100 text-purple-700' :
                      achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {achievement.rarity}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                  <p className="text-xs text-gray-500">Earned {achievement.earned}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              value={profileData.name}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
            <input 
              type="text" 
              value={profileData.grade}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input 
              type="number" 
              value={profileData.age}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Learning Style</label>
            <select 
              value={profileData.learningProfile.primaryStyle}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              disabled={!isEditing}
            >
              <option value="visual">Visual</option>
              <option value="auditory">Auditory</option>
              <option value="kinesthetic">Kinesthetic</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Accessibility Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Accessibility Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">High Contrast</span>
            <input 
              type="checkbox" 
              checked={profileData.preferences.highContrast}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">Reduced Motion</span>
            <input 
              type="checkbox" 
              checked={profileData.preferences.reducedMotion}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">Audio Support</span>
            <input 
              type="checkbox" 
              checked={profileData.preferences.audioSupport}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-700">Large Font Size</span>
            <input 
              type="checkbox" 
              checked={profileData.preferences.fontSize === 'large'}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      {/* Learning Accommodations */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Learning Accommodations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accommodations.map((accommodation) => (
            <div key={accommodation.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  {accommodation.icon}
                </div>
                <span className="font-medium text-gray-700">{accommodation.label}</span>
              </div>
              <input 
                type="checkbox" 
                checked={accommodation.enabled}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Learning Goals */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Learning Goals</h3>
        <div className="space-y-4">
          {[
            { goal: 'Complete 5 math quests this week', progress: 3, target: 5, color: 'blue' },
            { goal: 'Read 3 stories in Language Arts', progress: 2, target: 3, color: 'purple' },
            { goal: 'Conduct 2 science experiments', progress: 1, target: 2, color: 'green' }
          ].map((goal, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{goal.goal}</span>
                <span className="text-sm text-gray-600">{goal.progress}/{goal.target}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-${goal.color}-500 h-2 rounded-full`}
                  style={{ width: `${(goal.progress / goal.target) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => alert('Goal editing feature coming soon!')}
          className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
        >
          Edit Goals
        </button>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => alert('Progress report will be generated and emailed to your parent/guardian')}
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
          >
            <BarChart3 className="h-5 w-5 text-purple-500" />
            <span className="font-medium text-gray-700">Download Progress Report</span>
          </button>
          <button 
            onClick={() => alert('Backup created successfully! Your learning data is safe.')}
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
          >
            <Shield className="h-5 w-5 text-green-500" />
            <span className="font-medium text-gray-700">Backup Learning Data</span>
          </button>
          <button 
            onClick={() => alert('Help center will open with personalized support options')}
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
          >
            <Heart className="h-5 w-5 text-red-500" />
            <span className="font-medium text-gray-700">Get Support</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600">Manage your learning profile and preferences</p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-2xl p-4 shadow-md">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'progress' && renderProgress()}
            {activeTab === 'achievements' && renderAchievements()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;