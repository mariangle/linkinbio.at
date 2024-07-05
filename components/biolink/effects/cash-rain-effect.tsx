"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export const CashRainEffect = ({ className }: { className?: string }) => {
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
      particles: {
        shape: {
          type: "emoji",
          options: {
            emoji: {
              value: "💵",
            },
          },
        },
        life: {
          duration: {
            value: 0,
          },
        },
        number: {
          value: 100,
          max: 0,
          density: {
            enable: true,
          },
        },
        move: {
          gravity: {
            enable: true,
          },
          decay: 0,
          direction: "bottom",
          speed: 2,
          outModes: "out",
        },
        size: {
          value: 10,
        },
        opacity: {
          value: 1,
          animation: {
            enable: false,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "random",
          move: true,
          animation: {
            enable: true,
            speed: 40,
          },
        },
        tilt: {
          direction: "random",
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 30,
          },
          enlighten: {
            enable: true,
            value: 30,
          },
          enable: true,
          mode: "both",
          speed: {
            min: 15,
            max: 25,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15,
          },
        },
      },
      emitters: [],
      preset: "confetti",
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
