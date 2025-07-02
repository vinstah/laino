import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings, 
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Calendar,
  Clock,
  Award,
  Target,
  TrendingUp,
  Eye,
  Edit,
  MessageSquare,
  Bell,
  FileText,
  Brain,
  Heart,
  Shield
} from 'lucide-react';
import { mockStudents, mockQuests } from '../data/contentData';

interface EducatorPortalProps {
  onNavigate: (view: string) => void;
}

const EducatorPortal: React.FC<EducatorPortalProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'students', label: 'My Students', icon: <Users className="h-5 w-5" /> },
    { id: 'assignments', label: 'Assignments', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'reports', label: 'Reports', icon: <FileText className="h-5 w-5" /> },
    { id: 'resources', label: 'Resources', icon: <Brain className="h-5 w-5" /> }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Ms. Johnson! 👋</h1>
        <p className="text-purple-100 text-lg">Your students have completed 47 quests this week</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">24</div>
          <p className="text-sm text-gray-600">Active Students</p>
          <p className="text-xs text-green-600 mt-1">+2 this month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-green-500" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">156</div>
          <p className="text-sm text-gray-600">Quests Completed</p>
          <p className="text-xs text-green-600 mt-1">+23 this week</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Award className="h-6 w-6 text-purple-500" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">89%</div>
          <p className="text-sm text-gray-600">Average Score</p>
          <p className="text-xs text-green-600 mt-1">+5% improvement</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-500" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">127h</div>
          <p className="text-sm text-gray-600">Learning Time</p>
          <p className="text-xs text-green-600 mt-1">+18h this week</p>
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Student Activity</h3>
          <div className="space-y-4">
            {[
              { student: 'Alex Chen', action: 'Completed Fraction Pizza Party', time: '2 hours ago', score: '95%' },
              { student: 'Maya Rodriguez', action: 'Started Science Experiment', time: '4 hours ago', score: 'In Progress' },
              { student: 'Jordan Smith', action: 'Achieved Pattern Master Badge', time: '1 day ago', score: 'Achievement' },
              { student: 'Sam Wilson', action: 'Completed Story Elements Quest', time: '1 day ago', score: '87%' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.student}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activity.score.includes('%') ? 'bg-green-100 text-green-700' :
                    activity.score === 'Achievement' ? 'bg-purple-100 text-purple-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {activity.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Alerts & Notifications</h3>
          <div className="space-y-4">
            {[
              { type: 'attention', message: 'Alex Chen may need additional support in Physics', priority: 'high' },
              { type: 'success', message: 'Maya Rodriguez achieved 7-day learning streak', priority: 'low' },
              { type: 'info', message: 'New accessibility features available', priority: 'medium' },
              { type: 'reminder', message: 'Weekly progress reports due tomorrow', priority: 'medium' }
            ].map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                alert.priority === 'high' ? 'bg-red-50 border-red-400' :
                alert.priority === 'medium' ? 'bg-yellow-50 border-yellow-400' :
                'bg-blue-50 border-blue-400'
              }`}>
                <div className="flex items-start gap-3">
                  <Bell className={`h-4 w-4 mt-0.5 ${
                    alert.priority === 'high' ? 'text-red-500' :
                    alert.priority === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                  <p className="text-sm text-gray-700">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Class Performance Overview */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Class Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { subject: 'Mathematics', average: 87, trend: '+5%', color: 'blue' },
            { subject: 'Language Arts', average: 92, trend: '+3%', color: 'purple' },
            { subject: 'Science', average: 89, trend: '+7%', color: 'green' },
            { subject: 'Physics', average: 78, trend: '+2%', color: 'orange' }
          ].map((subject, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-${subject.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className={`text-2xl font-bold text-${subject.color}-600`}>{subject.average}%</span>
              </div>
              <h4 className="font-semibold text-gray-900">{subject.subject}</h4>
              <p className="text-sm text-green-600">{subject.trend} this month</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Students</h2>
          <p className="text-gray-600">Monitor progress and provide personalized support</p>
        </div>
        <button 
          onClick={() => alert('Student enrollment feature coming soon!')}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700"
        >
          <Plus className="h-4 w-4" />
          Add Student
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option>All Grades</option>
              <option>5th Grade</option>
              <option>6th Grade</option>
              <option>7th Grade</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-2xl shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Student Roster ({mockStudents.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {mockStudents.map((student) => (
            <div key={student.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{student.name}</h4>
                    <p className="text-sm text-gray-600">{student.grade} • Age {student.age}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {student.learningProfile.primaryStyle} learner
                      </span>
                      <span className="text-xs text-gray-500">
                        {student.learningProfile.accommodations.length} accommodations
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {Object.values(student.progress).reduce((total, subject) => total + subject.completedQuests.length, 0)}
                    </div>
                    <p className="text-xs text-gray-600">Quests</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {Object.values(student.progress).reduce((total, subject) => total + subject.totalPoints, 0)}
                    </div>
                    <p className="text-xs text-gray-600">Points</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">87%</div>
                    <p className="text-xs text-gray-600">Avg Score</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => alert(`Viewing detailed profile for ${student.name}\n\nLearning Profile:\n- Primary Style: ${student.learningProfile.primaryStyle}\n- Strengths: ${student.learningProfile.strengths.join(', ')}\n- Accommodations: ${student.learningProfile.accommodations.join(', ')}`)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => alert(`Messaging ${student.name} - Feature coming soon!`)}
                      className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => alert(`Editing accommodations for ${student.name} - Feature coming soon!`)}
                      className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Assignments</h2>
          <p className="text-gray-600">Create and manage learning assignments</p>
        </div>
        <button 
          onClick={() => alert('Assignment creation wizard coming soon!')}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700"
        >
          <Plus className="h-4 w-4" />
          Create Assignment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Active Assignments</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {[
                { title: 'Fraction Mastery Challenge', subject: 'Mathematics', dueDate: '2024-01-25', assigned: 24, completed: 18 },
                { title: 'Story Elements Investigation', subject: 'Language Arts', dueDate: '2024-01-27', assigned: 24, completed: 12 },
                { title: 'Plant Growth Experiment', subject: 'Science', dueDate: '2024-01-30', assigned: 20, completed: 8 }
              ].map((assignment, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                      <p className="text-sm text-gray-600">{assignment.subject}</p>
                    </div>
                    <span className="text-sm text-gray-500">Due: {assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">
                        {assignment.completed}/{assignment.assigned} completed
                      </span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${(assignment.completed / assignment.assigned) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-purple-600 hover:text-purple-700 text-sm">View Details</button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => alert('Quest library opening soon!')}
                className="w-full flex items-center gap-3 p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300"
              >
                <BookOpen className="h-5 w-5 text-purple-500" />
                <span className="font-medium">Browse Quest Library</span>
              </button>
              <button 
                onClick={() => alert('Custom quest creator coming soon!')}
                className="w-full flex items-center gap-3 p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300"
              >
                <Plus className="h-5 w-5 text-green-500" />
                <span className="font-medium">Create Custom Quest</span>
              </button>
              <button 
                onClick={() => alert('Assignment templates available soon!')}
                className="w-full flex items-center gap-3 p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300"
              >
                <FileText className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Use Template</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-4">Assignment Stats</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3</div>
                <p className="text-sm text-gray-600">Active Assignments</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">76%</div>
                <p className="text-sm text-gray-600">Average Completion</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">89%</div>
                <p className="text-sm text-gray-600">Average Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-gray-600">Generate detailed progress and performance reports</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => alert('Report export feature coming soon!')}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
          <button 
            onClick={() => alert('Custom report builder coming soon!')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700"
          >
            <Plus className="h-4 w-4" />
            New Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Class Performance Trends</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                <p>Interactive charts coming soon!</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Accommodation Usage</h3>
            <div className="space-y-4">
              {[
                { accommodation: 'Extended Time', students: 18, percentage: 75 },
                { accommodation: 'Visual Supports', students: 22, percentage: 92 },
                { accommodation: 'Audio Support', students: 14, percentage: 58 },
                { accommodation: 'Frequent Breaks', students: 16, percentage: 67 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">{item.accommodation}</span>
                    <p className="text-sm text-gray-600">{item.students} students</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-8">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Reports</h3>
            <div className="space-y-3">
              {[
                { title: 'Weekly Progress Summary', icon: <Calendar className="h-5 w-5" />, color: 'blue' },
                { title: 'Individual Student Report', icon: <User className="h-5 w-5" />, color: 'purple' },
                { title: 'Accommodation Effectiveness', icon: <Shield className="h-5 w-5" />, color: 'green' },
                { title: 'Learning Outcomes Analysis', icon: <Target className="h-5 w-5" />, color: 'orange' }
              ].map((report, index) => (
                <button 
                  key={index}
                  onClick={() => alert(`Generating ${report.title}...`)}
                  className="w-full flex items-center gap-3 p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300"
                >
                  <div className={`w-8 h-8 bg-${report.color}-100 rounded-lg flex items-center justify-center`}>
                    {report.icon}
                  </div>
                  <span className="font-medium">{report.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-4">Report Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Weekly Summary</p>
                  <p className="text-sm text-gray-600">Every Friday</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Monthly Report</p>
                  <p className="text-sm text-gray-600">Last day of month</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Teaching Resources</h2>
        <p className="text-gray-600">Access research-backed materials and professional development</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Neurodiversity Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'ADHD Support Strategies', type: 'Guide', icon: <Brain className="h-5 w-5" />, color: 'blue' },
                { title: 'Autism Accommodation Toolkit', type: 'Toolkit', icon: <Heart className="h-5 w-5" />, color: 'purple' },
                { title: 'Dyslexia-Friendly Materials', type: 'Resources', icon: <BookOpen className="h-5 w-5" />, color: 'green' },
                { title: 'Executive Function Support', type: 'Strategies', icon: <Target className="h-5 w-5" />, color: 'orange' }
              ].map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 bg-${resource.color}-100 rounded-lg flex items-center justify-center`}>
                      {resource.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                      <p className="text-sm text-gray-600">{resource.type}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert(`Opening ${resource.title} resource...`)}
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                  >
                    Access Resource →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Development</h3>
            <div className="space-y-4">
              {[
                { title: 'Understanding Neurodiversity in the Classroom', duration: '45 min', completed: false },
                { title: 'Implementing Universal Design for Learning', duration: '60 min', completed: true },
                { title: 'Technology Tools for Inclusive Education', duration: '30 min', completed: false },
                { title: 'Assessment Strategies for Diverse Learners', duration: '50 min', completed: true }
              ].map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      course.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {course.completed ? 
                        <Award className="h-5 w-5 text-green-500" /> :
                        <BookOpen className="h-5 w-5 text-gray-500" />
                      }
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{course.title}</h4>
                      <p className="text-sm text-gray-600">{course.duration}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert(`${course.completed ? 'Reviewing' : 'Starting'} course: ${course.title}`)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      course.completed 
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {course.completed ? 'Review' : 'Start'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { title: 'Research Library', icon: <FileText className="h-5 w-5" /> },
                { title: 'Best Practices Guide', icon: <BookOpen className="h-5 w-5" /> },
                { title: 'Community Forum', icon: <Users className="h-5 w-5" /> },
                { title: 'Support Center', icon: <Heart className="h-5 w-5" /> }
              ].map((link, index) => (
                <button 
                  key={index}
                  onClick={() => alert(`Opening ${link.title}...`)}
                  className="w-full flex items-center gap-3 p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300"
                >
                  {link.icon}
                  <span className="font-medium">{link.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Need Support?</h3>
            <p className="text-purple-100 text-sm mb-4">
              Our team of neurodiversity experts is here to help you succeed.
            </p>
            <button 
              onClick={() => alert('Connecting you with our support team...')}
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Educator Portal</h1>
          <p className="text-gray-600">Empower your students with neurodiversity-focused learning</p>
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
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'students' && renderStudents()}
            {activeTab === 'assignments' && renderAssignments()}
            {activeTab === 'reports' && renderReports()}
            {activeTab === 'resources' && renderResources()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorPortal;