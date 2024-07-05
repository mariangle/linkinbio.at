"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export const StarsEffect = ({ className }: { className?: string }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      //await loadBasic(engine);
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
      },
      particles: {
        color: {
          value: "#ffffff", // Color of stars
        },
        number: {
          value: 100, // Number of stars
        },
        opacity: {
          value: {
            min: 0.1, // Minimum opacity for blinking effect
            max: 1, // Maximum opacity for blinking effect
          },
          animation: {
            enable: true,
            speed: 1, // Speed of blinking
            minimumValue: 0.1, // Minimum opacity value during animation
            sync: false,
          },
        },
        size: {
          value: {
            min: 1, // Minimum size of stars
            max: 3, // Maximum size of stars
          },
        },
        move: {
          enable: true, // Enable movement for stars
          speed: {
            min: 0.1, // Minimum speed of movement
            max: 0.5, // Maximum speed of movement
          },
          direction: "none", // Allow movement in any direction
          outModes: {
            default: "bounce", // Stars bounce when hitting the edges
          },
          random: true, // Randomize movement direction
          straight: false, // Make sure stars do not move in straight lines
        },
        shape: {
          type: "circle", // Shape of the stars
        },
      },
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className={cn("absolute inset-0", className)}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
