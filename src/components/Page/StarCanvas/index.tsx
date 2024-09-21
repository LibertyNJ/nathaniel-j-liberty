import { MutableRefObject, useEffect, useRef } from 'react';

import Canvas from './Canvas';
import Props from './Props';

export default function StarCanvas(props: Props) {
  const { coveredElementSelector } = props;
  const shroud = props.shroud ?? false;
  const twinkle = props.twinkle ?? false;
  const animationRequestId = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getCanvas = () => {
    if (canvasRef.current === null) {
      throw new Error('canvas is null.');
    }

    return canvasRef.current;
  };

  useEffect(
    () =>
      listenForWindowResize(
        coveredElementSelector,
        shroud,
        twinkle,
        animationRequestId,
        getCanvas()
      ),
    [coveredElementSelector, shroud, twinkle]
  );

  useEffect(
    () =>
      initStarField(
        coveredElementSelector,
        shroud,
        twinkle,
        animationRequestId,
        getCanvas()
      ),
    [coveredElementSelector, shroud, twinkle]
  );

  return <Canvas ref={canvasRef} />;
}

function listenForWindowResize(
  coveredElementSelector: string,
  shroud: boolean,
  twinkle: boolean,
  animationRequestId: MutableRefObject<number | null>,
  canvas: HTMLCanvasElement
) {
  const windowResizeHandler = () =>
    handleWindowResize(
      coveredElementSelector,
      shroud,
      twinkle,
      animationRequestId,
      canvas
    );
  window.addEventListener('resize', windowResizeHandler);
  return () => stopListeningForWindowResize(windowResizeHandler);
}

function handleWindowResize(
  coveredElementSelector: string,
  shroud: boolean,
  twinkle: boolean,
  animationRequestId: MutableRefObject<number | null>,
  canvas: HTMLCanvasElement
) {
  if (animationRequestId.current !== null) {
    cancelAnimationFrame(animationRequestId.current);
    animationRequestId.current = null;
  }

  initStarField(
    coveredElementSelector,
    shroud,
    twinkle,
    animationRequestId,
    canvas
  );
}

function stopListeningForWindowResize(windowResizeHandler: () => void) {
  window.removeEventListener('resize', windowResizeHandler);
}

function initStarField(
  coveredElementSelector: string,
  shroud: boolean,
  twinkle: boolean,
  animationRequestId: MutableRefObject<number | null>,
  canvas: HTMLCanvasElement
) {
  spreadCanvas(coveredElementSelector, canvas);
  const numberOfStars = getNumberOfStars(canvas);
  const stars = createStars(numberOfStars, canvas);
  drawFrame(stars, shroud, twinkle, animationRequestId, canvas);

  return () => {
    if (animationRequestId.current !== null) {
      cancelAnimationFrame(animationRequestId.current);
      animationRequestId.current = null;
    }
  };
}

function spreadCanvas(
  coveredElementSelector: string,
  canvas: HTMLCanvasElement
) {
  const { height, width } = getCoveredElementDimensions(coveredElementSelector);
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

function getNumberOfStars(canvas: HTMLCanvasElement) {
  const SQUARE_PIXELS_PER_STAR = 2000;
  const canvasArea = canvas.width * canvas.height;
  return canvasArea / SQUARE_PIXELS_PER_STAR;
}

function createStars(numberOfStars: number, canvas: HTMLCanvasElement) {
  const stars: Star[] = [];

  for (let i = 0; i < numberOfStars; i++) {
    const star = createStar(canvas);
    stars.push(star);
  }

  return stars;
}

function createStar(canvas: HTMLCanvasElement): Star {
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

function drawFrame(
  stars: readonly Star[],
  shroud: boolean,
  twinkle: boolean,
  animationRequestId: MutableRefObject<number | null>,
  canvas: HTMLCanvasElement
) {
  clearCanvas(canvas);
  drawStars(stars, canvas);

  if (shroud) {
    drawShroud(canvas);
  }

  if (twinkle) {
    animateStars(stars, shroud, animationRequestId, canvas);
  }
}

function clearCanvas(canvas: HTMLCanvasElement) {
  const context = getContext(canvas);
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawStars(stars: readonly Star[], canvas: HTMLCanvasElement) {
  const context = getContext(canvas);
  stars.forEach((star) => drawStar(star, context));
}

function getContext(canvas: HTMLCanvasElement) {
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

function drawShroud(canvas: HTMLCanvasElement) {
  const context = getContext(canvas);

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

function animateStars(
  stars: readonly Star[],
  shroud: boolean,
  animationRequestId: MutableRefObject<number | null>,
  canvas: HTMLCanvasElement
) {
  animationRequestId.current = requestAnimationFrame(() =>
    drawFrame(stars, shroud, true, animationRequestId, canvas)
  );
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
