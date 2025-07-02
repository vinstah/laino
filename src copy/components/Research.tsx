import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Users, 
  Award, 
  Calendar,
  Search,
  Filter,
  BookOpen,
  Brain,
  BarChart3,
  Target,
  Lightbulb,
  Heart,
  Shield,
  Zap
} from 'lucide-react';
import { mockResearchPapers } from '../data/contentData';

interface ResearchProps {
  onNavigate: (view: string) => void;
}

const Research: React.FC<ResearchProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('papers');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'papers', label: 'Research Papers', icon: <FileText className="h-5 w-5" /> },
    { id: 'studies', label: 'Ongoing Studies', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'partnerships', label: 'Partnerships', icon: <Users className="h-5 w-5" /> },
    { id: 'participate', label: 'Participate', icon: <Heart className="h-5 w-5" /> }
  ];

  const renderPapers = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research papers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option>All Years</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Featured Research */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured Research</h2>
            <h3 className="text-xl mb-4">Neurodiversity-Informed Learning Design: A Systematic Review</h3>
            <p className="text-purple-100 mb-6 max-w-2xl">
              This comprehensive systematic review examines the effectiveness of neurodiversity-informed learning design principles 
              in educational technology platforms, providing evidence-based recommendations for inclusive education.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => alert('Downloading featured research paper...')}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
              <button 
                onClick={() => alert('Opening research summary...')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Read Summary
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">2024</div>
              <p className="text-purple-100">Published</p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Papers List */}
      <div className="bg-white rounded-2xl shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Published Research ({mockResearchPapers.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {mockResearchPapers.map((paper) => (
            <div key={paper.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{paper.title}</h4>
                  <p className="text-gray-600 mb-3">{paper.abstract}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>Authors: {paper.authors.join(', ')}</span>
                    <span>•</span>
                    <span>{paper.journal}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {paper.tags.map((tag, index) => (
                      <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 ml-6">
                  <button 
                    onClick={() => alert(`Downloading: ${paper.title}`)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                  <button 
                    onClick={() => alert(`Opening external link for: ${paper.title}`)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Online
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStudies = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Current Research Studies</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              title: 'Adaptive Learning Algorithms for ADHD Students',
              description: 'Investigating how AI-powered adaptive learning systems can better serve students with ADHD by adjusting pacing, content delivery, and attention management strategies.',
              status: 'Active',
              participants: 150,
              duration: '18 months',
              completion: 65,
              lead: 'Dr. Sarah Chen, Stanford University'
            },
            {
              title: 'Multi-Sensory Learning Effectiveness Study',
              description: 'Examining the impact of multi-sensory learning approaches on retention and engagement across different neurodivergent populations.',
              status: 'Recruiting',
              participants: 89,
              duration: '12 months',
              completion: 30,
              lead: 'Dr. Michael Rodriguez, MIT'
            },
            {
              title: 'Executive Function Support Tools Evaluation',
              description: 'Assessing the effectiveness of digital executive function support tools in improving academic outcomes for students with autism spectrum disorders.',
              status: 'Active',
              participants: 200,
              duration: '24 months',
              completion: 45,
              lead: 'Dr. Lisa Johnson, Harvard Medical School'
            }
          ].map((study, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-bold text-gray-900">{study.title}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  study.status === 'Active' ? 'bg-green-100 text-green-700' :
                  study.status === 'Recruiting' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {study.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{study.completion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${study.completion}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Participants:</span>
                    <span className="font-medium ml-1">{study.participants}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium ml-1">{study.duration}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Lead Researcher: {study.lead}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPartnerships = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Research Partnerships</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Stanford University',
              department: 'School of Education',
              focus: 'Adaptive Learning Technologies',
              projects: 3,
              since: '2022',
              logo: '🎓'
            },
            {
              name: 'MIT',
              department: 'Computer Science & AI Lab',
              focus: 'Machine Learning for Education',
              projects: 2,
              since: '2023',
              logo: '🤖'
            },
            {
              name: 'Harvard Medical School',
              department: 'Developmental Medicine',
              focus: 'Neurodevelopmental Research',
              projects: 4,
              since: '2021',
              logo: '🏥'
            },
            {
              name: 'UC Berkeley',
              department: 'Graduate School of Education',
              focus: 'Inclusive Design Research',
              projects: 2,
              since: '2023',
              logo: '🌟'
            },
            {
              name: 'Children\'s Hospital of Philadelphia',
              department: 'Center for Autism Research',
              focus: 'Autism Spectrum Interventions',
              projects: 3,
              since: '2022',
              logo: '🏥'
            },
            {
              name: 'University of Washington',
              department: 'Center for Neurodiversity',
              focus: 'Accessibility Technologies',
              projects: 1,
              since: '2024',
              logo: '♿'
            }
          ].map((partner, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <h4 className="font-bold text-gray-900">{partner.name}</h4>
                <p className="text-sm text-gray-600">{partner.department}</p>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Focus:</span>
                  <span className="font-medium ml-1">{partner.focus}</span>
                </div>
                <div>
                  <span className="text-gray-600">Active Projects:</span>
                  <span className="font-medium ml-1">{partner.projects}</span>
                </div>
                <div>
                  <span className="text-gray-600">Partnership Since:</span>
                  <span className="font-medium ml-1">{partner.since}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Research Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">47</div>
            <p className="text-sm text-gray-600">Published Papers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-8 w-8 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">12,000+</div>
            <p className="text-sm text-gray-600">Study Participants</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="h-8 w-8 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <p className="text-sm text-gray-600">Research Awards</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="h-8 w-8 text-orange-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">15</div>
            <p className="text-sm text-gray-600">Active Studies</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderParticipate = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Research Community</h2>
        <p className="text-xl text-purple-100 mb-6">
          Help us advance neurodiversity research and improve learning outcomes for all students
        </p>
        <button 
          onClick={() => alert('Research participation signup form coming soon!')}
          className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Involved
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Current Opportunities</h3>
          <div className="space-y-4">
            {[
              {
                title: 'Student Learning Experience Study',
                description: 'Share your learning journey to help us improve our platform',
                duration: '30 minutes',
                compensation: 'Gift card',
                participants: 'Students ages 8-18',
                icon: <BookOpen className="h-5 w-5 text-blue-500" />
              },
              {
                title: 'Educator Feedback Research',
                description: 'Help us understand how teachers use neurodiversity-focused tools',
                duration: '45 minutes',
                compensation: 'Professional development credits',
                participants: 'K-12 educators',
                icon: <Users className="h-5 w-5 text-green-500" />
              },
              {
                title: 'Parent/Guardian Perspective Study',
                description: 'Share insights about supporting neurodiverse learners at home',
                duration: '60 minutes',
                compensation: 'Research report access',
                participants: 'Parents/guardians',
                icon: <Heart className="h-5 w-5 text-red-500" />
              }
            ].map((opportunity, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    {opportunity.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{opportunity.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{opportunity.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                      <div>
                        <span className="font-medium">Duration:</span> {opportunity.duration}
                      </div>
                      <div>
                        <span className="font-medium">Compensation:</span> {opportunity.compensation}
                      </div>
                      <div className="col-span-2">
                        <span className="font-medium">Participants:</span> {opportunity.participants}
                      </div>
                    </div>
                    <button 
                      onClick={() => alert(`Signing up for: ${opportunity.title}`)}
                      className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Participate?</h3>
            <div className="space-y-4">
              {[
                { icon: <Lightbulb className="h-5 w-5 text-yellow-500" />, text: 'Contribute to groundbreaking research' },
                { icon: <Heart className="h-5 w-5 text-red-500" />, text: 'Help improve learning for neurodiverse students' },
                { icon: <Shield className="h-5 w-5 text-green-500" />, text: 'Your privacy and data are fully protected' },
                { icon: <Award className="h-5 w-5 text-purple-500" />, text: 'Receive compensation for your time' },
                { icon: <Users className="h-5 w-5 text-blue-500" />, text: 'Join a community of advocates' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  {benefit.icon}
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Research Ethics</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>All research is conducted under strict ethical guidelines:</p>
              <ul className="space-y-2 ml-4">
                <li>• IRB approved protocols</li>
                <li>• Informed consent required</li>
                <li>• Data anonymization and protection</li>
                <li>• Right to withdraw at any time</li>
                <li>• COPPA and FERPA compliant</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Research Team</h3>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                Have questions about our research or want to learn more about participation?
              </p>
              <button 
                onClick={() => alert('Opening contact form for research team...')}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Contact Researchers
              </button>
            </div>
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
          <h1 className="text-3xl font-bold text-gray-900">Research & Evidence</h1>
          <p className="text-gray-600">Advancing neurodiversity research through collaborative science</p>
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
            {activeTab === 'papers' && renderPapers()}
            {activeTab === 'studies' && renderStudies()}
            {activeTab === 'partnerships' && renderPartnerships()}
            {activeTab === 'participate' && renderParticipate()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;