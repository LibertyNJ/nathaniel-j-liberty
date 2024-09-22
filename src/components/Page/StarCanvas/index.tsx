import { useEffect, useRef } from 'react';

import Canvas from './Canvas';
import Container from './Container';
import Engine from './Engine';
import Model from './Model';
import Props from './Props';
import Shroud from './Shroud';

export default function StarCanvas(props: Props) {
  const { colorScheme, coveredElementSelector } = props;
  const shroud = props.shroud ?? false;
  const twinkle = props.twinkle ?? false;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = new Canvas(canvasRef);
  const model = new Model(shroud ? new Shroud(colorScheme) : null);
  const engine = new Engine(canvas, twinkle, model);

  useEffect(
    () => initialize(coveredElementSelector, engine),
    [colorScheme, coveredElementSelector, shroud, twinkle]
  );

  return <Container ref={canvasRef} />;
}

function initialize(coveredElementSelector: string, engine: Engine) {
  const windowResizeHandler = () => engine.resize(coveredElementSelector);
  window.addEventListener('resize', windowResizeHandler);
  engine.resize(coveredElementSelector);
  engine.start();

  return () => {
    window.removeEventListener('resize', windowResizeHandler);
    engine.stop();
  };
}
