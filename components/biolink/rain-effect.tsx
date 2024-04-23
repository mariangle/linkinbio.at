"use client";
import React, { useEffect, useRef } from "react";

interface Precipitation {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
}

interface PrecipitationEffectProps {
  type: "rain" | "snow";
  color?: string;
  speed?: number;
}

export const PrecipitationEffect: React.FC<PrecipitationEffectProps> = ({
  type,
  color = "#FFFFFF", // Default color is white
  speed = type === "rain" ? 4 : 0.5, // Default speed is 7 for rain and 0.5 for snow
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const precipitation: Precipitation[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Function to create a new precipitation
    const createPrecipitation = (): Precipitation => {
      const maxHorizontalSpeed = 10; // Max horizontal speed limit
      const initialSpeedX = Math.random() * speed * 2 - speed;
      const speedX = Math.min(
        Math.max(initialSpeedX, -maxHorizontalSpeed),
        maxHorizontalSpeed,
      ); // Limit the initial speed within the range
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: speedX,
        speedY: Math.random() * speed + 1,
      };
    };

    // Function to update the position of precipitation
    const updatePrecipitation = () => {
      precipitation.forEach((particle) => {
        particle.y += particle.speedY;

        // For snow, add horizontal movement
        if (type === "snow") {
          // Change horizontal direction randomly (less frequently)
          if (Math.random() < 0.0005) {
            particle.speedX *= -1;
          }
          particle.x += particle.speedX;
        }

        if (particle.y > height) {
          // If particle goes beyond the canvas, reset its position
          particle.y = 0;
          particle.x = Math.random() * width;
        }
      });
    };

    // Function to draw precipitation on the canvas
    const drawPrecipitation = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      precipitation.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          type === "snow" ? 2 : 1,
          0,
          Math.PI * 2,
        ); // Larger size for snow particles
        ctx.fill();
      });
    };

    // Function to animate precipitation
    const animate = () => {
      updatePrecipitation();
      drawPrecipitation();
      requestAnimationFrame(animate);
    };

    // Create initial precipitation particles
    for (let i = 0; i < 100; i++) {
      precipitation.push(createPrecipitation());
    }

    // Start animation
    animate();

    // Cleanup
    return () => {
      ctx.clearRect(0, 0, width, height);
      ctxRef.current = null;
    };
  }, [type, color, speed]);

  return (
    <canvas ref={canvasRef} id="canvas" className="h-full w-full"></canvas>
  );
};
