"use client";

import React, { useState, useEffect } from "react";
import { useMounted } from "@/hooks/use-mounted";

const getRandomIndices = (text: string, count: number): number[] => {
  const indices = new Set<number>();
  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * text.length);
    indices.add(randomIndex);
  }
  return Array.from(indices);
};

export function FlickerText({
  title,
  color,
}: {
  title: string;
  color?: string;
}) {
  const isMounted = useMounted();
  const longText = title.length > 6;
  const numberOfSpans = longText ? 2 : 1;
  const indices = getRandomIndices(title, numberOfSpans);
  const delay = longText
    ? Math.random() * 800 + 100
    : Math.random() * 600 + 100;

  const [opacity, setOpacity] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const flickerEffect = setInterval(() => {
      setOpacity((prevOpacity) => {
        const newOpacity = { ...prevOpacity };
        indices.forEach((index) => {
          newOpacity[index] = Math.random() > 0.5 ? 1 : 0.3;
        });
        return newOpacity;
      });
    }, delay);

    return () => clearInterval(flickerEffect);
  }, [delay, indices]);

  if (!isMounted) return <div>{title}</div>;

  const wrapText = (text: string, indices: number[]) => {
    const textArray = text.split("");
    return textArray.map((char, index) => {
      if (indices.includes(index)) {
        return (
          <span
            key={index}
            style={{
              opacity: opacity[index] ?? 1,
            }}
          >
            {char}
          </span>
        );
      }
      return char;
    });
  };

  const flickerTextShadow = `
      0 0 3px ${color},
      0 0 8px ${color},
      0 0 12px ${color}
    `;

  return (
    <div
      style={{
        textShadow: flickerTextShadow,
      }}
    >
      {wrapText(title, indices)}
    </div>
  );
}
