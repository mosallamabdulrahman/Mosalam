import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  forceText,
}) {
  const [value, setValue] = useState(0);
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animated || forceText) {
      return undefined;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const ease = 1 - (1 - progress) ** 4;
      setValue(Math.floor(ease * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animated, duration, end, forceText]);

  return <span ref={ref}>{forceText || `${value}${suffix}`}</span>;
}
