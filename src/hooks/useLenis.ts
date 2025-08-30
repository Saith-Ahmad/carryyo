// src/hooks/useLenis.ts

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import type { LenisOptions } from '@studio-freight/lenis';

const lenisOptions: LenisOptions = {
  // 'lerp' is the new way to control the smoothness.
  lerp: 0.1, 
  duration: 10.0,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  infinite: false,
};

export function useLenis() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis(lenisOptions);

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Corrected event listener with proper type casting
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const handleAnchorClick = (event: MouseEvent) => {
          event.preventDefault();
          lenis.scrollTo(anchor.getAttribute('href')!, {
            offset: 0,
            duration: 2.0,
          });
        };

        anchor.addEventListener('click', handleAnchorClick as EventListener);
      });

      return () => {
        lenis.destroy();
      };
    }
  }, []);
}