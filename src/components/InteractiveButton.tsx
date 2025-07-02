import React from 'react';
import { useRipple } from '../hooks/useInteractiveElements';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
  loading = false,
  ...props
}) => {
  const { ripples, addRipple } = useRipple();

  const baseClasses = 'relative overflow-hidden font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-300 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white focus:ring-purple-300'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      addRipple(e);
      onClick?.(e);
    }
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1'} ${className}`}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : icon}
        {children}
      </span>
      
      {/* Ripple Effect */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white bg-opacity-30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </button>
  );
};

export default InteractiveButton;