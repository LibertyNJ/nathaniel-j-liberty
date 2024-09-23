import { getRandomNumber } from '../../../utils/getRandomNumber';
import Color from './Color';
import Point from './Point';
import Rectangle from './Rectangle';

export default class Star {
  constructor(color: Color, position: Point, size: number) {
    this.color = color;
    this.fillStyle = this.generateFillStyle();
    this.position = position;
    this.size = size;
  }

  static random(area: Rectangle) {
    const color = getRandomColor();
    const position = Point.random(area);
    const size = getRandomNumber(0, 3, Math.ceil);
    return new Star(color, position, size);
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.fillStyle;
    context.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  update() {
    this.fillStyle = this.generateFillStyle();
  }

  private generateFillStyle() {
    const { hue, saturation, luminosity } = this.color;
    return `hsl(${hue}, ${saturation}%, ${randomizeLuminosity(luminosity)}%)`;
  }

  private readonly color: Readonly<Color>;
  private fillStyle: string;
  private readonly position: Readonly<Point>;
  private readonly size: number;
}

function getRandomColor() {
  const index = getRandomNumber(0, COLORS.length, Math.floor);
  return COLORS[index];
}

function randomizeLuminosity(luminosity: number) {
  return getRandomNumber(0, luminosity + 1, Math.floor);
}

const COLORS: readonly Color[] = [
  { hue: 240, saturation: 100, luminosity: 50 }, // Blue
  { hue: 207, saturation: 44, luminosity: 49 }, // SteelBlue
  { hue: 203, saturation: 92, luminosity: 75 }, // LightSkyBlue
  { hue: 0, saturation: 0, luminosity: 100 }, // White
  { hue: 60, saturation: 100, luminosity: 94 }, // LightYellow
  { hue: 38, saturation: 100, luminosity: 85 }, // Moccasin
  { hue: 17, saturation: 100, luminosity: 74 }, // LightSalmon
];
