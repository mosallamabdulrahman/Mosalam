import { useEffect } from "react";

export function useRevealOnScroll(dependency) {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-on-scroll, .reveal-element, .reveal-up, .reveal-left, .reveal-right",
    );

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("active");
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [dependency]);
}
