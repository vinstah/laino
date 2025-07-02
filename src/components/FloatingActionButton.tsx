import React, { useState } from 'react';
import { Plus, X, MessageCircle, HelpCircle, Settings, Lightbulb } from 'lucide-react';

interface FloatingActionButtonProps {
  onAction?: (action: string) => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { id: 'help', icon: <HelpCircle className="h-5 w-5" />, label: 'Get Help', color: 'bg-blue-500' },
    { id: 'feedback', icon: <MessageCircle className="h-5 w-5" />, label: 'Feedback', color: 'bg-green-500' },
    { id: 'hint', icon: <Lightbulb className="h-5 w-5" />, label: 'Hint', color: 'bg-yellow-500' },
    { id: 'settings', icon: <Settings className="h-5 w-5" />, label: 'Settings', color: 'bg-gray-500' }
  ];

  const handleActionClick = (actionId: string) => {
    onAction?.(actionId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <div className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <div
            key={action.id}
            className="flex items-center gap-3"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
              {action.label}
            </span>
            <button
              onClick={() => handleActionClick(action.id)}
              className={`
                w-12 h-12 ${action.color} text-white rounded-full shadow-lg
                flex items-center justify-center
                transform transition-all duration-200
                hover:scale-110 hover:shadow-xl
                active:scale-95
              `}
            >
              {action.icon}
            </button>
          </div>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-xl
          flex items-center justify-center
          transform transition-all duration-300
          hover:scale-110 hover:shadow-2xl
          active:scale-95
          ${isOpen ? 'rotate-45' : 'rotate-0'}
        `}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingActionButton;