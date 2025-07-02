import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimations';
import { useHover } from '../hooks/useInteractiveElements';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  onClick?: () => void;
  hoverable?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  onClick,
  hoverable = true
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { ref: hoverRef, isHovered } = useHover();
  
  const ref = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      });
    },
    { threshold: 0.1 }
  );

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };

  const combinedRef = React.useCallback((node: HTMLDivElement) => {
    if (ref.current) ref.current = node;
    if (hoverRef.current) hoverRef.current = node;
  }, [ref, hoverRef]);

  return (
    <div
      ref={combinedRef}
      className={`
        transition-all duration-700 ease-out cursor-pointer
        ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClasses[direction]}`}
        ${hoverable && isHovered ? 'transform -translate-y-2 shadow-2xl' : 'shadow-lg'}
        ${className}
      `}
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;