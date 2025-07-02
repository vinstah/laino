import React, { useState } from 'react';
import { 
  FileText, 
  Users, 
  BarChart3, 
  Settings, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Eye,
  Save,
  X,
  Upload,
  Download,
  Calendar,
  Tag,
  Globe,
  Lock,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { mockQuests, mockStudents, Quest, Student } from '../../data/contentData';

const CMSApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('content');
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const tabs = [
    { id: 'content', label: 'Content Management', icon: <FileText className="h-5 w-5" /> },
    { id: 'users', label: 'User Management', icon: <Users className="h-5 w-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'draft': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'archived': return <AlertCircle className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const filteredQuests = mockQuests.filter(quest => {
    const matchesSearch = quest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || quest.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const renderContentManagement = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
          <p className="text-gray-600">Manage learning quests, assessments, and educational content</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Create New Quest
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search quests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Content List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Learning Quests ({filteredQuests.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredQuests.map((quest) => (
            <div key={quest.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{quest.title}</h4>
                    {getStatusIcon(quest.status)}
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      quest.status === 'published' ? 'bg-green-100 text-green-700' :
                      quest.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {quest.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{quest.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Subject: {quest.subject}</span>
                    <span>Difficulty: {quest.difficulty}</span>
                    <span>Duration: {quest.duration}min</span>
                    <span>Updated: {new Date(quest.updatedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setSelectedQuest(quest)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-600">Manage students, educators, and administrators</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Total Students</h3>
            <Users className="h-5 w-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900">1,247</div>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Active Educators</h3>
            <Users className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900">89</div>
          <p className="text-sm text-green-600">+5% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">New Registrations</h3>
            <Users className="h-5 w-5 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900">34</div>
          <p className="text-sm text-green-600">This week</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Recent Students</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {mockStudents.map((student) => (
            <div key={student.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.grade} • Age {student.age}</p>
                  <p className="text-xs text-gray-500">Primary Style: {student.learningProfile.primaryStyle}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {Object.values(student.progress).reduce((total, subject) => total + subject.totalPoints, 0)} points
                  </div>
                  <div className="text-xs text-gray-500">
                    {Object.values(student.progress).reduce((total, subject) => total + subject.completedQuests.length, 0)} quests completed
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <p className="text-gray-600">Track learning outcomes and platform performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Quests Completed', value: '12,847', change: '+18%', color: 'blue' },
          { title: 'Average Completion Rate', value: '87%', change: '+5%', color: 'green' },
          { title: 'Student Engagement', value: '94%', change: '+12%', color: 'purple' },
          { title: 'Learning Hours', value: '3,421', change: '+23%', color: 'orange' }
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-2">{metric.title}</h3>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
            <p className="text-sm text-green-600">{metric.change} from last month</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Subject Performance</h3>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', completion: 89, engagement: 92 },
              { subject: 'Language Arts', completion: 85, engagement: 88 },
              { subject: 'Science', completion: 91, engagement: 95 },
              { subject: 'Physics', completion: 78, engagement: 82 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.subject}</span>
                  <span className="text-gray-600">{item.completion}% completion</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${item.completion}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Learning Accommodations Usage</h3>
          <div className="space-y-3">
            {[
              { accommodation: 'Extended Time', usage: 67 },
              { accommodation: 'Audio Support', usage: 45 },
              { accommodation: 'Visual Supports', usage: 78 },
              { accommodation: 'Reduced Motion', usage: 23 },
              { accommodation: 'High Contrast', usage: 34 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.accommodation}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${item.usage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8">{item.usage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Platform Settings</h2>
        <p className="text-gray-600">Configure platform behavior and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
              <input 
                type="text" 
                value="NeuroQuest Academy"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>UTC-8 (Pacific)</option>
                <option>UTC-5 (Eastern)</option>
                <option>UTC+0 (GMT)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Accessibility Defaults</h3>
          <div className="space-y-4">
            {[
              { label: 'Enable High Contrast by Default', checked: false },
              { label: 'Reduced Motion for New Users', checked: true },
              { label: 'Audio Descriptions Available', checked: true },
              { label: 'Keyboard Navigation Support', checked: true },
              { label: 'Screen Reader Compatibility', checked: true }
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{setting.label}</span>
                <input 
                  type="checkbox" 
                  checked={setting.checked}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Content Moderation</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Auto-publish Content</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Require Review</option>
                <option>Auto-publish from Trusted Authors</option>
                <option>Auto-publish All</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content Backup Frequency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Data & Privacy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">COPPA Compliance Mode</span>
              <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">GDPR Compliance Mode</span>
              <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Anonymous Analytics</span>
              <input type="checkbox" checked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">NeuroQuest CMS</h1>
                <p className="text-xs text-gray-500">Content Management System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Upload className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Download className="h-5 w-5" />
              </button>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
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
            {activeTab === 'content' && renderContentManagement()}
            {activeTab === 'users' && renderUserManagement()}
            {activeTab === 'analytics' && renderAnalytics()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </div>
      </div>

      {/* Quest Detail Modal */}
      {selectedQuest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">{selectedQuest.title}</h2>
                <button 
                  onClick={() => setSelectedQuest(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quest Details</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Subject:</span> {selectedQuest.subject}</p>
                    <p><span className="font-medium">Difficulty:</span> {selectedQuest.difficulty}</p>
                    <p><span className="font-medium">Duration:</span> {selectedQuest.duration} minutes</p>
                    <p><span className="font-medium">Type:</span> {selectedQuest.type}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adaptations</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(selectedQuest.adaptations).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${value ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span className="capitalize">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700">{selectedQuest.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Learning Objectives</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedQuest.learningObjectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Content Steps</h3>
                <div className="space-y-3">
                  {selectedQuest.content.steps.map((step, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-700 text-sm">{step.content}</p>
                      {step.interaction && (
                        <p className="text-blue-600 text-sm mt-2">Interaction: {step.interaction}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CMSApp;