import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (!window.__lenis) {
      const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        smoothTouch: true,
        wheelMultiplier: 1.1,
        // Add these configurations to prevent micro-adjustments
        syncTouch: false, // Disable touch sync to prevent jitter
        touchMultiplier: 1.5, // Reduce touch sensitivity
      });

      // Add debouncing to prevent excessive RAF calls
      let lastTime = 0;
      const raf = (time) => {
        // Throttle the RAF calls
        if (time - lastTime > 16) { // ~60fps
          lenis.raf(time);
          lastTime = time;
        }
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
      window.__lenis = lenis;
    }

    return () => {
      // Cleanup if needed
      if (window.__lenis) {
        window.__lenis.destroy();
        window.__lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}