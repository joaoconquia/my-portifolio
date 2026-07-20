import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const followerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Dynamic hover detection for buttons and links
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth lerp animation for the trailing follower
  useEffect(() => {
    let animationFrameId: number;

    const updateFollower = () => {
      const delay = 0.15; // smoothness factor (lower is slower)
      const dx = position.x - followerRef.current.x;
      const dy = position.y - followerRef.current.y;

      followerRef.current.x += dx * delay;
      followerRef.current.y += dy * delay;

      setFollowerPos({ x: followerRef.current.x, y: followerRef.current.y });
      animationFrameId = requestAnimationFrame(updateFollower);
    };

    animationFrameId = requestAnimationFrame(updateFollower);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  // Disable on devices with touch screens
  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        id="cursor-dot"
      />
      <div
        className={`custom-cursor-follower ${isHovered ? "hovering" : ""}`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
        }}
        id="cursor-follower"
      />
    </>
  );
}
