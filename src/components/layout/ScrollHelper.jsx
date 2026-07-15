import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollHelper() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure DOM is painted after route change
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    } else {
      // Immediately jump to top using Lenis if active, otherwise standard jump
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }
  }, [pathname, hash]);

  return null;
}
