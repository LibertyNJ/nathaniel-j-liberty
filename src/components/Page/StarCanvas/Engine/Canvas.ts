import { RefObject } from 'react';
import Rectangle from './Rectangle';
import Point from './Point';

export default class Canvas {
  constructor(ref: RefObject<HTMLCanvasElement>) {
    this.ref = ref;
  }

  get context() {
    const context = this.getElement().getContext('2d');

    if (context === null) {
      throw new Error('Could not get CanvasRenderingContext2D.');
    }

    return context;
  }

  get height() {
    return this.getElement().height;
  }

  get isValid() {
    return this.ref.current !== null;
  }

  get region() {
    return new Rectangle(this.height, Point.default(), this.width);
  }

  get width() {
    return this.getElement().width;
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  resize(coveredElementSelector: string) {
    const element = this.getElement();
    const { height, width } = getCoveredElementDimensions(
      coveredElementSelector
    );
    element.height = height;
    element.width = width;
  }

  private getElement() {
    if (this.ref.current === null) {
      throw new Error('HTMLCanvasElement not found.');
    }

    return this.ref.current;
  }

  private ref: RefObject<HTMLCanvasElement>;
}

function getCoveredElementDimensions(coveredElementSelector: string) {
  const element = document.querySelector(coveredElementSelector);

  if (element === null) {
    throw new Error(
      `Element with selector "${coveredElementSelector}" not found.`
    );
  }

  if (element instanceof HTMLElement) {
    const height = element.offsetHeight;
    const width = element.offsetWidth;
    return { height, width };
  }

  throw new Error(
    `"${coveredElementSelector}" does not refer to an HTMLElement.`
  );
}
