"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Spotlight({ children }: Props) {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const el = glowRef.current;
    if (!el) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  };

  return (
    <div className="group/spotlight relative" onMouseMove={handleMouseMove}>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            "radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      />
      {children}
    </div>
  );
}
