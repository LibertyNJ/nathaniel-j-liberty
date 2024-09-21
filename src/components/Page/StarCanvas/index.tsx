import { useEffect, useRef } from 'react';

import Canvas from './Canvas';
import Props from './Props';

let _animationRequestId: number;
let _canvas: HTMLCanvasElement | null;
let _shroud: boolean;
let _twinkle: boolean;

export default function StarCanvas(props: Props) {
  _shroud = props.shroud ?? false;
  _twinkle = props.twinkle ?? false;
  const { coveredElementSelector } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => setCanvas(canvasRef), []);
  useEffect(
    () => listenForWindowResize(coveredElementSelector),
    [coveredElementSelector]
  );
  useEffect(
    () => initStarField(coveredElementSelector),
    [coveredElementSelector]
  );
  return <Canvas ref={canvasRef} />;
}

function setCanvas(
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
) {
  _canvas = canvasRef.current;
}

function getCanvas() {
  if (_canvas === null) {
    throw new Error('_canvas is null.');
  }

  return _canvas;
}

function listenForWindowResize(coveredElementSelector: string) {
  const windowResizeHandler = () => handleWindowResize(coveredElementSelector);
  window.addEventListener('resize', windowResizeHandler);
  return () => stopListeningForWindowResize(windowResizeHandler);
}

function handleWindowResize(coveredElementSelector: string) {
  cancelAnimationFrame(_animationRequestId);
  initStarField(coveredElementSelector);
}

function stopListeningForWindowResize(windowResizeHandler: () => void) {
  window.removeEventListener('resize', windowResizeHandler);
}

function initStarField(coveredElementSelector: string) {
  spreadCanvas(coveredElementSelector);
  const numberOfStars = getNumberOfStars();
  const stars = createStars(numberOfStars);
  drawFrame(stars);

  return () => {
    cancelAnimationFrame(_animationRequestId);
  };
}

function spreadCanvas(coveredElementSelector: string) {
  const { height, width } = getCoveredElementDimensions(coveredElementSelector);
  const canvas = getCanvas();
  canvas.height = height;
  canvas.width = width;
}

function getCoveredElementDimensions(coveredElementSelector: string) {
  const element = document.querySelector(coveredElementSelector);

  if (element === null) {
    throw new Error(
      `StarCanvas is unable to find covered element with selector "${coveredElementSelector}".`
    );
  }

  if (element instanceof HTMLElement) {
    const height = element.offsetHeight;
    const width = element.offsetWidth;
    return { height, width };
  }

  throw new Error(
    `StarCanvas must cover an HTMLElement, but "${coveredElementSelector}" refers to a different kind of element.`
  );
}

function getNumberOfStars() {
  const SQUARE_PIXELS_PER_STAR = 2000;
  const canvas = getCanvas();
  const canvasArea = canvas.width * canvas.height;
  return canvasArea / SQUARE_PIXELS_PER_STAR;
}

function createStars(numberOfStars: number) {
  const stars: Star[] = [];

  for (let i = 0; i < numberOfStars; i++) {
    const star = createStar();
    stars.push(star);
  }

  return stars;
}

function createStar(): Star {
  const canvas = getCanvas();

  return {
    color: randomizeStarColor(),
    coordinates: {
      x: randomizeStarCoordinate(canvas.width),
      y: randomizeStarCoordinate(canvas.height),
    },
    size: randomizeStarSize(),
  };
}

const starColors = [
  { name: 'Blue', hue: 240, saturation: 100, luminosity: 50 },
  { name: 'SteelBlue', hue: 207, saturation: 44, luminosity: 49 },
  { name: 'LightSkyBlue', hue: 203, saturation: 92, luminosity: 75 },
  { name: 'White', hue: 0, saturation: 0, luminosity: 100 },
  { name: 'LightYellow', hue: 60, saturation: 100, luminosity: 94 },
  { name: 'Moccasin', hue: 38, saturation: 100, luminosity: 85 },
  { name: 'LightSalmon', hue: 17, saturation: 100, luminosity: 74 },
];

function randomizeStarColor() {
  const starColorIndex = randomizeStarColorIndex();
  return starColors[starColorIndex];
}

function randomizeStarColorIndex() {
  return Math.floor(Math.random() * starColors.length);
}

function randomizeStarCoordinate(axisLength: number) {
  return Math.floor(Math.random() * axisLength);
}

function randomizeStarSize() {
  const MAX_STAR_SIZE = 3;
  return Math.ceil(Math.random() * MAX_STAR_SIZE);
}

function drawFrame(stars: readonly Star[]) {
  clearCanvas();
  drawStars(stars);

  if (_shroud) {
    drawShroud();
  }

  if (_twinkle) {
    animateStars(stars);
  }
}

function clearCanvas() {
  const context = getContext();
  const canvas = getCanvas();
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawStars(stars: readonly Star[]) {
  const context = getContext();
  stars.forEach((star) => drawStar(star, context));
}

function getContext() {
  const canvas = getCanvas();
  const context = canvas.getContext('2d');

  if (context === null) {
    throw new Error('Could not get 2d context.');
  }

  return context;
}

function drawStar(star: Star, context: CanvasRenderingContext2D) {
  const { color, coordinates, size } = star;
  context.fillStyle = getStarFillStyle(color);
  context.fillRect(coordinates.x, coordinates.y, size, size);
}

function getStarFillStyle(color: Color) {
  const { hue, luminosity, saturation } = color;
  return `hsl(${hue}, ${saturation}%, ${randomizeLuminosity(luminosity)}%)`;
}

function randomizeLuminosity(luminosity: number) {
  return Math.floor(Math.random() * (luminosity + 1));
}

function drawShroud() {
  const context = getContext();
  const canvas = getCanvas();

  const topGradient = context.createLinearGradient(
    0.5 * canvas.width,
    0,
    0.5 * canvas.width,
    window.innerHeight
  );
  topGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
  topGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

  context.fillStyle = topGradient;
  context.fillRect(0, 0, canvas.width, window.innerHeight);

  if (canvas.height > 2 * window.innerHeight) {
    context.fillStyle = 'black';
    context.fillRect(
      0,
      window.innerHeight,
      canvas.width,
      canvas.height - 2 * window.innerHeight
    );
  }

  const bottomGradient = context.createLinearGradient(
    0.5 * canvas.width,
    canvas.height - window.innerHeight,
    0.5 * canvas.width,
    canvas.height
  );
  bottomGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
  bottomGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  context.fillStyle = bottomGradient;
  context.fillRect(
    0,
    canvas.height - window.innerHeight,
    canvas.width,
    window.innerHeight
  );
}

function animateStars(stars: readonly Star[]) {
  _animationRequestId = requestAnimationFrame(() => drawFrame(stars));
}

interface Color {
  hue: number;
  luminosity: number;
  name: string;
  saturation: number;
}

interface Star {
  color: Color;
  size: number;
  coordinates: Coordinates;
}

interface Coordinates {
  x: number;
  y: number;
}
