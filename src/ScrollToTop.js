import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Blur focus (focused element can pull scroll down)
    if (document.activeElement && typeof document.activeElement.blur === "function") {
      document.activeElement.blur();
    }

    // Force top now + after paint + after a short delay (handles Safari + media layout shifts)
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
    setTimeout(() => window.scrollTo(0, 0), 50);
  }, [location.key]);

  useLayoutEffect(() => {
    // Safari bfcache restore can reapply scroll
    const onPageShow = () => window.scrollTo(0, 0);
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return null;
}
