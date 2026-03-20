import { useState, useEffect } from "react";

export const GlobalSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [radius, setRadius] = useState(600);
  const [spotlightOpacity, setSpotlightOpacity] = useState(0.08);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setRadius(350);
        setSpotlightOpacity(0.12);
      } else {
        setRadius(600);
        setSpotlightOpacity(0.08);
      }
    };
    
    updateSize();
    window.addEventListener("resize", updateSize);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      if (!isVisible) setIsVisible(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
        if (!isVisible) setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
    };
  }, [isVisible]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-500 mix-blend-screen"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(${radius}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(235, 90, 70, ${spotlightOpacity}), transparent 40%)`,
      }}
    />
  );
};
