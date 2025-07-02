import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Award, 
  Target, 
  Brain,
  TrendingUp,
  Clock,
  Star,
  BookOpen,
  Calculator,
  Atom,
  Zap,
  ChevronRight,
  Play,
  Pause,
  Settings,
  User,
  Heart
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const subjects = [
    { name: 'Mathematics', icon: <Calculator className="h-5 w-5" />, progress: 78, color: 'bg-blue-500', recent: '2 hours ago' },
    { name: 'Language Arts', icon: <BookOpen className="h-5 w-5" />, progress: 65, color: 'bg-purple-500', recent: '1 day ago' },
    { name: 'Science', icon: <Atom className="h-5 w-5" />, progress: 82, color: 'bg-green-500', recent: '3 hours ago' },
    { name: 'Physics', icon: <Zap className="h-5 w-5" />, progress: 45, color: 'bg-orange-500', recent: '2 days ago' }
  ];

  const achievements = [
    { title: 'Pattern Master', description: 'Completed 50 pattern recognition quests', icon: <Target className="h-6 w-6 text-blue-500" />, earned: 'Today' },
    { title: 'Persistent Learner', description: '7-day learning streak achieved', icon: <Award className="h-6 w-6 text-yellow-500" />, earned: 'Yesterday' },
    { title: 'Science Explorer', description: 'Discovered 25 scientific principles', icon: <Atom className="h-6 w-6 text-green-500" />, earned: '2 days ago' }
  ];

  const weeklyStats = [
    { day: 'Mon', hours: 2.5, focus: 85 },
    { day: 'Tue', hours: 1.8, focus: 92 },
    { day: 'Wed', hours: 3.2, focus: 78 },
    { day: 'Thu', hours: 2.1, focus: 88 },
    { day: 'Fri', hours: 2.8, focus: 95 },
    { day: 'Sat', hours: 4.2, focus: 82 },
    { day: 'Sun', hours: 3.5, focus: 90 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex! 🌟</h1>
              <p className="text-gray-600 mt-1">Ready to continue your learning adventure?</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-md">
                <Settings className="h-6 w-6 text-gray-600" />
              </div>
              <div className="bg-white rounded-full p-3 shadow-md">
                <User className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <span className="text-sm text-gray-500">This Week</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">18.5h</div>
            <p className="text-sm text-gray-600">Learning Time</p>
            <div className="mt-2 text-sm text-green-600">+2.3h from last week</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-500" />
              </div>
              <span className="text-sm text-gray-500">Completed</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">47</div>
            <p className="text-sm text-gray-600">Quests</p>
            <div className="mt-2 text-sm text-green-600">+12 this week</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-sm text-gray-500">Average</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">87%</div>
            <p className="text-sm text-gray-600">Focus Score</p>
            <div className="mt-2 text-sm text-green-600">Excellent focus!</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
              <span className="text-sm text-gray-500">Earned</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">23</div>
            <p className="text-sm text-gray-600">Achievements</p>
            <div className="mt-2 text-sm text-green-600">+3 this week</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Subject Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Progress</h2>
              <div className="space-y-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 ${subject.color} rounded-lg flex items-center justify-center text-white`}>
                        {subject.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                        <p className="text-sm text-gray-600">Last activity: {subject.recent}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${subject.color} h-2 rounded-full`}
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{subject.progress}%</span>
                      <button className="text-purple-600 hover:text-purple-700">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Activity</h2>
              <div className="flex items-end justify-between h-32 gap-2">
                {weeklyStats.map((stat, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-lg mb-2"
                      style={{ height: `${(stat.hours / 5) * 100}%` }}
                    ></div>
                    <span className="text-xs text-gray-600">{stat.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <span>0h</span>
                <span>5h</span>
              </div>
            </div>

            {/* Recommended Quests */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Fraction Adventures', subject: 'Mathematics', difficulty: 'Medium', time: '15 min', color: 'bg-blue-500' },
                  { title: 'Story Elements Quest', subject: 'Language Arts', difficulty: 'Easy', time: '20 min', color: 'bg-purple-500' },
                  { title: 'Chemical Reactions Lab', subject: 'Science', difficulty: 'Hard', time: '25 min', color: 'bg-green-500' },
                  { title: 'Forces in Motion', subject: 'Physics', difficulty: 'Medium', time: '18 min', color: 'bg-orange-500' }
                ].map((quest, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 ${quest.color} rounded-lg flex items-center justify-center`}>
                        <Play className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-xs text-gray-500">{quest.time}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{quest.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{quest.subject}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{quest.difficulty}</span>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Start Quest
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Today's Focus */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Today's Focus</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Focus Mode</h3>
                    <p className="text-sm text-gray-600">87% average today</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Wellbeing</h3>
                    <p className="text-sm text-gray-600">Excellent mood</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{achievement.description}</p>
                      <span className="text-xs text-gray-500">{achievement.earned}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Streak */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Learning Streak</h2>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">7 Days</div>
              <p className="text-purple-100 mb-4">Keep up the amazing work! You're building great habits.</p>
              <div className="flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
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

export default Dashboard;