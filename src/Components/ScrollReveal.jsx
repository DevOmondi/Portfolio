import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 700,
  animation = "fade-up",
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  once = true,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const animationStyles = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8 pointer-events-none",
    "fade-down": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-8 pointer-events-none",
    "fade-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8 pointer-events-none",
    "fade-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8 pointer-events-none",
    "zoom-in": isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95 pointer-events-none",
    "fade-in": isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
  };

  const animClass = animationStyles[animation] || animationStyles["fade-up"];

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out will-change-[transform,opacity] ${animClass} ${className}`}
    >
      {children}
    </div>
  );
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  animation: PropTypes.oneOf([
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "zoom-in",
    "fade-in",
  ]),
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  once: PropTypes.bool,
};

export default ScrollReveal;

