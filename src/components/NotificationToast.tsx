import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, Info, X, XCircle } from 'lucide-react';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface NotificationToastProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    if (toast.duration !== 0) {
      const timer = setTimeout(() => {
        handleRemove();
      }, toast.duration || 5000);

      return () => clearTimeout(timer);
    }
  }, [toast.duration]);

  const handleRemove = () => {
    setIsExiting(true);
    setTimeout(() => {
      onRemove(toast.id);
    }, 300);
  };

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />
  };

  const borderColors = {
    success: 'border-green-200',
    error: 'border-red-200',
    warning: 'border-yellow-200',
    info: 'border-blue-200'
  };

  return (
    <div
      className={`
        transform transition-all duration-300 ease-out
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        bg-white border-l-4 ${borderColors[toast.type]} rounded-lg shadow-lg p-4 mb-3
        max-w-sm w-full
      `}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {icons[toast.type]}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900">{toast.title}</h4>
          {toast.message && (
            <p className="text-sm text-gray-600 mt-1">{toast.message}</p>
          )}
          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="text-sm text-purple-600 hover:text-purple-700 font-medium mt-2"
            >
              {toast.action.label}
            </button>
          )}
        </div>
        
        <button
          onClick={handleRemove}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;