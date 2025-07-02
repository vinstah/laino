import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
};

export const useScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      if (progressRef.current) {
        progressRef.current.style.width = `${Math.min(progress, 100)}%`;
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progressRef;
};

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updatePosition = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;
      element.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, [speed]);

  return ref;
};