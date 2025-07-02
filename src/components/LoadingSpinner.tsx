import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'purple' | 'blue' | 'green' | 'gray';
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'purple',
  text,
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    purple: 'border-purple-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    gray: 'border-gray-500'
  };

  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`
          ${sizeClasses[size]} ${colorClasses[color]}
          border-4 border-t-transparent rounded-full animate-spin
        `}
      />
      {text && (
        <p className="text-gray-600 text-sm font-medium animate-pulse">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;