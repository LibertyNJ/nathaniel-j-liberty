import { getRandomNumber } from '../../../utils/getRandomNumber';
import Rectangle from './Rectangle';

export default class Point {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static default() {
    return new Point(0, 0);
  }

  static random(area: Rectangle) {
    const x = getRandomNumber(area.left, area.right, Math.floor);
    const y = getRandomNumber(area.top, area.bottom, Math.floor);
    return new Point(x, y);
  }

  readonly x: number;
  readonly y: number;
}
