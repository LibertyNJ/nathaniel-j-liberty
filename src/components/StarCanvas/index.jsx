import React, { useEffect, useRef } from 'react';

export function StarCanvas({ ...restProps }) {
  const canvasRef = useRef();
  useEffect(drawCanvas, []);
  useEffect(listenForWindowResize, []);
  return <canvas ref={canvasRef} {...restProps}></canvas>;

  function drawCanvas() {
    draw(canvasRef.current);
  }

  function listenForWindowResize() {
    window.addEventListener('resize', handleWindowResize);
    return stopListeningForWindowResize;
  }

  function stopListeningForWindowResize() {
    window.removeEventListener('resize', handleWindowResize);
  }

  function handleWindowResize() {
    draw(canvasRef.current);
  }
}

function draw(canvas) {
  const { height, width } = getMainElementDimensions();
  canvas.height = height;
  canvas.width = width;
  const canvasDimensions = { height: canvas.height, width: canvas.width };
  const stars = createStars(200, canvasDimensions);
  const context = canvas.getContext('2d');
  stars.forEach(star => drawStar(star, context));
}

function createStars(numberOfStars, canvasDimensions) {
  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    const star = createStar(canvasDimensions);
    stars.push(star);
  }
  return stars;
}

function getMainElementDimensions() {
  const mainElement = document.querySelector('main');
  const height = mainElement.offsetHeight;
  const width = mainElement.offsetWidth;
  return { height, width };
}

function drawStar({ color, coordinates, size }, context) {
  context.fillStyle = color;
  context.fillRect(coordinates.x, coordinates.y, size, size);
}

function createStar(canvasDimensions) {
  return {
    color: getStarColor(),
    coordinates: {
      x: getStarCoordinate(canvasDimensions.width),
      y: getStarCoordinate(canvasDimensions.height),
    },
    size: getStarSize(),
  };
}

const starColors = [
  'Blue',
  'SteelBlue',
  'LightSkyBlue',
  'White',
  'LightYellow',
  'Moccasin',
  'LightSalmon',
];

function getStarColor() {
  const colorIndex = getColorIndex();
  return starColors[colorIndex];
}

function getColorIndex() {
  return Math.floor(Math.random() * starColors.length);
}

function getStarCoordinate(axisLength) {
  return Math.floor(Math.random() * axisLength);
}

function getStarSize() {
  const STAR_SIZES = 3;
  return Math.ceil(Math.random() * STAR_SIZES);
}
