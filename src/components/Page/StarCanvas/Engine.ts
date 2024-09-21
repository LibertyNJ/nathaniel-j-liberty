import Canvas from './Canvas';
import Model from './Model';

export default class Engine {
  constructor(canvas: Canvas, isAnimated: boolean, model: Model) {
    this.animationRequestId = null;
    this.canvas = canvas;
    this.isAnimated = isAnimated;
    this.model = model;
  }

  resize(coveredElementSelector: string) {
    this.canvas.resize(coveredElementSelector);
    this.model.resize(this.canvas);
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
}
