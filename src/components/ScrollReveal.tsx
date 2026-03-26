
import { useScrollReveal } from './useScrollReveal';
import styles from './ScrollReveal.module.css';
import type { CSSProperties, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  threshold = 0.1,
  className = '',
  style = {},
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollReveal({ threshold });

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return `translateY(${distance}px)`;
    }
  };

  const revealStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0)' : getTransform(),
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    ...style,
  };

  return (
    <div
      ref={elementRef}
      className={`${styles.scrollReveal} ${className}`}
      style={revealStyle}
    >
      {children}
    </div>
  );
}