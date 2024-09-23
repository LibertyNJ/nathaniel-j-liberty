import { color } from '../../../style';
import Canvas from './Canvas';

export default class Shroud {
  constructor() {
    this.bottomGradient = null;
    this.shouldResizeBeforeDraw = false;
    this.topGradient = null;
  }

  draw(canvas: Canvas) {
    if (this.shouldResizeBeforeDraw) {
      this.resize(canvas);
      this.shouldResizeBeforeDraw = false;
    }

    this.drawTopSection(canvas);

    if (canvas.height > 2 * window.innerHeight) {
      this.drawMidSection(canvas);
    }

    this.drawBottomSection(canvas);
  }

  recolor() {
    this.shouldResizeBeforeDraw = true;
  }

  resize(canvas: Canvas) {
    const color = this.isDark() ? '0, 0, 0' : '255, 255, 255';

    this.topGradient = canvas.context.createLinearGradient(
      0.5 * canvas.width,
      0,
      0.5 * canvas.width,
      window.innerHeight
    );
    this.topGradient.addColorStop(0.0, `rgba(${color}, 0)`);
    this.topGradient.addColorStop(1.0, `rgba(${color}, 1)`);

    this.bottomGradient = canvas.context.createLinearGradient(
      0.5 * canvas.width,
      canvas.height - window.innerHeight,
      0.5 * canvas.width,
      canvas.height
    );
    this.bottomGradient.addColorStop(0.0, `rgba(${color}, 1)`);
    this.bottomGradient.addColorStop(1.0, `rgba(${color}, 0)`);
  }

  private drawBottomSection(canvas: Canvas) {
    if (this.bottomGradient) {
      canvas.context.fillStyle = this.bottomGradient;
      canvas.context.fillRect(
        0,
        canvas.height - window.innerHeight,
        canvas.width,
        window.innerHeight
      );
    }
  }

  private drawMidSection(canvas: Canvas) {
    const color = this.isDark() ? '0, 0, 0' : '255, 255, 255';
    canvas.context.fillStyle = color;
    canvas.context.fillRect(
      0,
      window.innerHeight,
      canvas.width,
      canvas.height - 2 * window.innerHeight
    );
  }

  private drawTopSection(canvas: Canvas) {
    if (this.topGradient) {
      canvas.context.fillStyle = this.topGradient;
      canvas.context.fillRect(0, 0, canvas.width, window.innerHeight);
    }
  }

  private isDark() {
    const root = document.documentElement;
    const baseColor = root.style.getPropertyValue('--color-base');
    return baseColor === color.black;
  }

  private bottomGradient: CanvasGradient | null;
  private shouldResizeBeforeDraw: boolean;
  private topGradient: CanvasGradient | null;
}
