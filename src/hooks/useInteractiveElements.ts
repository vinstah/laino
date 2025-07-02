import { useState, useCallback, useRef, useEffect } from 'react';

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return { ref, isHovered };
};

export const useRipple = () => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const nextRippleId = useRef(0);

  const addRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple = {
      id: nextRippleId.current++,
      x,
      y,
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  }, []);

  return { ripples, addRipple };
};

export const useFloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
  }>>([]);

  const addFloatingElement = useCallback((x: number, y: number) => {
    const colors = ['bg-purple-200', 'bg-blue-200', 'bg-pink-200', 'bg-green-200'];
    const newElement = {
      id: Date.now(),
      x,
      y,
      size: Math.random() * 20 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 2000 + 1000,
    };

    setElements(prev => [...prev, newElement]);

    setTimeout(() => {
      setElements(prev => prev.filter(el => el.id !== newElement.id));
    }, newElement.duration);
  }, []);

  return { elements, addFloatingElement };
};

export const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayText, text, speed]);

  const reset = useCallback(() => {
    setDisplayText('');
    setIsComplete(false);
  }, []);

  return { displayText, isComplete, reset };
};