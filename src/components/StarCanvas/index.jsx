import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

let _canvas;
let _animationRequestId;
let _coveredElementSelector;

StarCanvas.propTypes = {
  coveredElementSelector: PropTypes.string.isRequired,
};

export function StarCanvas({ coveredElementSelector, ...restProps }) {
  setCoveredElementSelector(coveredElementSelector);
  const canvasRef = useRef();
  useEffect(() => {
    setCanvas(canvasRef.current);
  }, []);
  useEffect(listenForWindowResize, []);
  useEffect(initStarField, []);
  return <canvas ref={canvasRef} {...restProps}></canvas>;
}

function setCoveredElementSelector(coveredElementSelector) {
  _coveredElementSelector = coveredElementSelector;
}

function setCanvas(canvas) {
  _canvas = canvas;
}

function listenForWindowResize() {
  window.addEventListener('resize', handleWindowResize);
  return stopListeningForWindowResize;
}

function handleWindowResize() {
  cancelAnimationFrame(_animationRequestId);
  initStarField();
}

function stopListeningForWindowResize() {
  window.removeEventListener('resize', handleWindowResize);
}

function initStarField() {
  spreadCanvas();
  const numberOfStars = getNumberOfStars();
  const stars = createStars(numberOfStars);
  _animationRequestId = requestAnimationFrame(() => {
    drawFrame(stars);
  });
  return () => {
    cancelAnimationFrame(_animationRequestId);
  };
}

function spreadCanvas() {
  const { height, width } = getCoveredElementDimensions();
  _canvas.height = height;
  _canvas.width = width;
}

function getCoveredElementDimensions() {
  const coveredElement = document.querySelector(_coveredElementSelector);
  const height = coveredElement.offsetHeight;
  const width = coveredElement.offsetWidth;
  return { height, width };
}

function getNumberOfStars() {
  const SQUARE_PIXELS_PER_STAR = 2000;
  const canvasArea = _canvas.width * _canvas.height;
  return canvasArea / SQUARE_PIXELS_PER_STAR;
}

function createStars(numberOfStars) {
  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    const star = createStar();
    stars.push(star);
  }
  return stars;
}

function createStar() {
  return {
    color: randomizeStarColor(),
    coordinates: {
      x: randomizeStarCoordinate(_canvas.width),
      y: randomizeStarCoordinate(_canvas.height),
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

function randomizeStarCoordinate(axisLength) {
  return Math.floor(Math.random() * axisLength);
}

function randomizeStarSize() {
  const MAX_STAR_SIZE = 3;
  return Math.ceil(Math.random() * MAX_STAR_SIZE);
}

function drawFrame(stars) {
  clearCanvas();
  drawStars(stars);
  _animationRequestId = requestAnimationFrame(() => {
    drawFrame(stars);
  });
}

function clearCanvas() {
  const context = _canvas.getContext('2d');
  context.clearRect(0, 0, _canvas.width, _canvas.height);
}

function drawStars(stars) {
  const context = _canvas.getContext('2d');
  stars.forEach(star => drawStar(star, context));
}

function drawStar({ color, coordinates, size }, context) {
  context.fillStyle = getStarFillStyle(color);
  context.fillRect(coordinates.x, coordinates.y, size, size);
}

function getStarFillStyle({ hue, saturation, luminosity }) {
  return `hsl(${hue}, ${saturation}%, ${randomizeLuminosity(luminosity)}%)`;
}

function randomizeLuminosity(luminosity) {
  return Math.floor(Math.random() * (luminosity + 1));
}
