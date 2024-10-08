import Canvas from './Canvas';
import Point from './Point';
import Rectangle from './Rectangle';
import Star from './Star';

export default class Model {
  constructor() {
    this.height = 0;
    this.stars = [];
    this.width = 0;
  }

  draw(canvas: Canvas) {
    this.stars.forEach((star) => star.draw(canvas.context));

  }

  resize(canvas: Canvas) {
    if (canvas.height > this.height) {
      this.expandHeight(canvas);
    }

    if (canvas.width > this.width) {
      this.expandWidth(canvas);
    }
  }


  update() {
    this.stars.forEach((star) => star.update());
  }

  private expandHeight(canvas: Canvas) {
    const regionHeight = canvas.height - this.height;
    const origin = new Point(0, this.height);
    const region = new Rectangle(regionHeight, origin, this.width);
    this.generateNewStars(region);
    this.height = canvas.height;
  }

  private expandWidth(canvas: Canvas) {
    const origin = new Point(this.width, 0);
    const regionWidth = canvas.width - this.width;
    const region = new Rectangle(this.height, origin, regionWidth);
    this.generateNewStars(region);
    this.width = canvas.width;
  }

  private generateNewStars(region: Rectangle) {
    const newArea = this.height * this.width + region.area;
    const idealStarCount = calculateIdealStarCount(newArea);

    while (this.stars.length < idealStarCount) {
      const star = Star.random(region);
      this.stars.push(star);
    }
  }

  private height: number;
  private stars: Star[];
  private width: number;
}

function calculateIdealStarCount(area: number) {
  return Math.floor(area / AREA_PER_STAR);
}

const AREA_PER_STAR = 2_000;
