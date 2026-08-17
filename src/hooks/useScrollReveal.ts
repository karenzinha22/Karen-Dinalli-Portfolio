import { useEffect, useRef } from 'react';

type ScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = '0px 0px -5% 0px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
