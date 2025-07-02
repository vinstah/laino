import React from 'react';

interface ProgressIndicatorProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'purple' | 'blue' | 'green' | 'orange';
  showPercentage?: boolean;
  animated?: boolean;
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress,
  size = 'md',
  color = 'purple',
  showPercentage = true,
  animated = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const colorClasses = {
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`
            h-full bg-gradient-to-r ${colorClasses[color]} rounded-full
            ${animated ? 'transition-all duration-1000 ease-out' : ''}
            relative overflow-hidden
          `}
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        >
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
          )}
        </div>
      </div>
      {showPercentage && (
        <span className="absolute right-0 top-full mt-1 text-xs font-medium text-gray-600">
          {Math.round(progress)}%
        </span>
      )}
    </div>
  );
};

export default ProgressIndicator;