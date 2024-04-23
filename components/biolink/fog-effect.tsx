"use client";

import React, { useEffect } from "react";

class Fog {
  x: number;
  y: number;
  width: number;
  height: number;
  me: HTMLDivElement;
  direction: number;
  velocity: number;
  canvas: HTMLElement;

  constructor(
    x: number,
    y: number,
    tamanho: { w: number; h: number },
    direction: number,
    velocity: number,
    canvas: HTMLElement,
  ) {
    this.x = x;
    this.y = y;
    this.width = tamanho.w;
    this.height = tamanho.h;
    this.me = document.createElement("div");
    this.direction = direction;
    this.velocity = velocity;
    this.canvas = canvas;
  }

  create() {
    this.me.style.width = this.width + "px";
    this.me.style.height = this.height + "px";
    this.me.style.backgroundColor = "#b3b8bb";
    this.me.style.position = "absolute";
    this.me.style.opacity = "0.5";
    this.me.style.filter = "blur(40px)";
    this.canvas.appendChild(this.me);
    this.me.style.borderRadius = "120%";
  }

  animation() {
    this.me.style.left = this.x + "px";
    this.me.style.top = this.y + "px";
    switch (this.direction) {
      case 0:
        this.x -= this.velocity;
        if (this.x + this.width < 0) {
          this.x = this.canvas.clientWidth + this.width;
        }
        break;
      case 1:
        this.x += this.velocity;
        if (this.x + this.width > this.canvas.clientWidth) {
          this.me.style.left = -this.width + "px";
        }
        break;
      default:
        break;
    }
  }
}

export const FogEffect: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas")!;
    const array = [
      new Fog(200, 200, { w: 200, h: 200 }, 0, 0.5, canvas),
      new Fog(600, 120, { w: 100, h: 150 }, 0, 0.6, canvas),
      new Fog(70, 140, { w: 230, h: 210 }, 0, 0.7, canvas),
      new Fog(600, 20, { w: 40, h: 30 }, 0, 0.4, canvas),
      new Fog(300, 200, { w: 200, h: 200 }, 0, 0.5, canvas),
      new Fog(400, 120, { w: 70, h: 90 }, 0, 0.6, canvas),
      new Fog(10, 140, { w: 230, h: 210 }, 0, 0.7, canvas),
      new Fog(0, 20, { w: 100, h: 100 }, 0, 0.4, canvas),
    ];

    const createNeb = () => {
      array.forEach((ele) => {
        ele.create();
        ele.animation();
      });
      requestAnimationFrame(createNeb);
    };

    createNeb();

    return () => {
      array.forEach((ele) => {
        canvas.removeChild(ele.me);
      });
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-x-hidden">
      <div
        id="canvas"
        className="pointer-events-none relative h-[200px] w-full"
      ></div>
      <div id="cont">Fog Effect</div>
    </div>
  );
};
