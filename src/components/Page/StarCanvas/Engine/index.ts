import { RefObject } from 'react';

import Canvas from './Canvas';
import Model from './Model';

export default class Engine {
  constructor(canvasRef: RefObject<HTMLCanvasElement>) {
    this.animationRequestId = null;
    this.canvas = new Canvas(canvasRef);
    this.isAnimated = false;
    this.lastDraw = 0;
    this.model = new Model();
  }

  resize(coveredElementSelector: string) {
    this.canvas.resize(coveredElementSelector);
    this.model.resize(this.canvas);
    this.drawFrame();
  }

  setIsAnimated(isAnimated: boolean) {
    this.isAnimated = isAnimated;
  }

  start() {
    this.processFrame();
  }

  stop() {
    if (this.animationRequestId !== null) {
      cancelAnimationFrame(this.animationRequestId);
      this.animationRequestId = null;
    }
  }

  private drawFrame(now: number = Date.now()) {
    // React’s useEffect cleanup happens just after the Canvas becomes invalid.
    // Checking for validity prevents an Error from being thrown and bubbling up
    // to the console.
    if (!this.canvas.isValid) {
      return;
    }

    if (this.isAnimated) {
      this.model.update();
    }

    this.canvas.clear();
    this.model.draw(this.canvas);
    this.lastDraw = now;
  }

  private processFrame() {
    const now = Date.now();

    if (now - this.lastDraw >= DRAW_INTERVAL) {
      this.drawFrame(now);
    }

    if (this.isAnimated) {
      this.requestNextFrame();
    }
  }

  private requestNextFrame() {
    this.animationRequestId = requestAnimationFrame(() => this.processFrame());
  }

  private animationRequestId: number | null;
  private canvas: Canvas;
  private isAnimated: boolean;
  private lastDraw: number;
  private model: Model;
}

const MS_PER_SECOND = 1_000;
const DRAWS_PER_SECOND = 20;
const DRAW_INTERVAL = MS_PER_SECOND / DRAWS_PER_SECOND;
