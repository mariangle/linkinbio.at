/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface Bug {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  filter: string;
}

interface LightningBugsProps {
  density?: number;
}

export const LightningBugsEffect: React.FC<LightningBugsProps> = ({
  density = 0.00005,
  className,
}: {
  density?: number;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const bugs: Bug[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const createBug = (): Bug => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.75,
        color: "rgba(255, 255, 0, 0.8)",
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        filter: `drop-shadow(0 0 1rem) rgba(255, 255, 0, 0.8)`,
      };
    };

    const updateBugs = () => {
      bugs.forEach((bug) => {
        bug.x += bug.speedX;
        bug.y += bug.speedY;

        // Wrap around canvas edges
        if (bug.x > width) bug.x = 0;
        if (bug.x < 0) bug.x = width;
        if (bug.y > height) bug.y = 0;
        if (bug.y < 0) bug.y = height;
      });
    };

    const drawBugs = () => {
      ctx.clearRect(0, 0, width, height);
      bugs.forEach((bug) => {
        ctx.beginPath();
        ctx.arc(bug.x, bug.y, bug.size, 0, Math.PI * 2);
        ctx.fillStyle = bug.color;
        ctx.fill();
      });
    };

    const animate = () => {
      updateBugs();
      drawBugs();
      requestAnimationFrame(animate);
    };

    const totalBugs = Math.floor(width * height * density);
    for (let i = 0; i < totalBugs; i++) {
      bugs.push(createBug());
    }

    animate();

    return () => {
      ctx.clearRect(0, 0, width, height);
      ctxRef.current = null;
    };
  }, [bugs, density]);

  return <canvas ref={canvasRef} className={cn("h-full w-full", className)} />;
};
