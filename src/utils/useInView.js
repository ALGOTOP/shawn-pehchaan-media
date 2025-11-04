// src/utils/useInView.js
// Lightweight hook to run an "in view" callback once using IntersectionObserver.
// Returns [ref, isInView] where ref is attached to the observed element.
// When it becomes visible it sets isInView=true and stops observing.
import { useEffect, useRef, useState } from "react";

export default function useInView({ root = null, rootMargin = "0px", threshold = 0.15 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            // Stop observing after first intersection for "play once" behavior
            observer.unobserve(node);
          }
        });
      },
      { root, rootMargin, threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, root, rootMargin, threshold]);

  return [ref, inView];
}
