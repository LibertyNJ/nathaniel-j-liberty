import { RefObject } from 'react';

import Canvas from './Canvas';
import Model from './Model';

export default class Engine {
  constructor(canvasRef: RefObject<HTMLCanvasElement>) {
    this.animationRequestId = null;
    this.canvas = new Canvas(canvasRef);
    this.isAnimated = false;
    this.model = new Model();
    this.updateIntervalId = null;
  }

  resize(coveredElementSelector: string) {
    this.canvas.resize(coveredElementSelector);
    this.model.resize(this.canvas);

    if (!this.isAnimated) {
      this.drawFrame();
    }
  }

  setIsAnimated(isAnimated: boolean) {
    this.isAnimated = isAnimated;
  }

  start() {
    if (this.isAnimated) {
      this.updateIntervalId = window.setInterval(
        () => this.model.update(),
        UPDATE_INTERVAL
      );
    }

    this.processFrame();
  }

  stop() {
    if (this.animationRequestId !== null) {
      cancelAnimationFrame(this.animationRequestId);
      this.animationRequestId = null;
    }

    if (this.updateIntervalId !== null) {
      window.clearInterval(this.updateIntervalId);
      this.updateIntervalId = null;
    }
  }

  private drawFrame() {
    this.canvas.clear();
    this.model.draw(this.canvas);
  }

  private processFrame() {
    this.drawFrame();

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
  private model: Model;
  private updateIntervalId: number | null;
}

const MS_PER_SECOND = 1_000;
const UPDATES_PER_SECOND = 20;
const UPDATE_INTERVAL = MS_PER_SECOND / UPDATES_PER_SECOND;
