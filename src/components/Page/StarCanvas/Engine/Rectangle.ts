import Point from './Point';

export default class Rectangle {
  constructor(height: number, origin: Point, width: number) {
    this.area = height * width;
    this.bottom = origin.y + height;
    this.height = height;
    this.left = origin.x;
    this.origin = origin;
    this.right = origin.x + width;
    this.top = origin.y;
    this.width = width;
  }

  static default() {
    return new Rectangle(0, Point.default(), 0);
  }

  readonly area: number;
  readonly bottom: number;
  readonly height: number;
  readonly left: number;
  readonly origin: Point;
  readonly right: number;
  readonly top: number;
  readonly width: number;
}
