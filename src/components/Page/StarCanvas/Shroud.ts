import { ColorScheme } from '../../../style/color';
import Canvas from './Canvas';

export default class Shroud {
  constructor(colorScheme: ColorScheme) {
    this.bottomGradient = null;
    this.colorScheme = colorScheme;
    this.topGradient = null;
  }

  draw(canvas: Canvas) {
    this.drawTopSection(canvas);

    if (canvas.height > 2 * window.innerHeight) {
      this.drawMidSection(canvas);
    }

    this.drawBottomSection(canvas);
  }

  resize(canvas: Canvas) {
    const color = this.colorScheme === 'dark' ? '0, 0, 0' : '255, 255, 255';

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
    canvas.context.fillStyle = this.colorScheme === 'dark' ? 'black' : 'white';
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

  private bottomGradient: CanvasGradient | null;
  private colorScheme: ColorScheme;
  private topGradient: CanvasGradient | null;
}
