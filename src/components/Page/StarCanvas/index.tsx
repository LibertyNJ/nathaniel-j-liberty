import { MutableRefObject, useEffect, useRef } from 'react';

import Container from './Container';
import Engine from './Engine';
import Props from './Props';
import { ColorScheme } from '../../../style/color';

export default function StarCanvas(props: Props) {
  const { colorScheme, coveredElementSelector } = props;
  const shroud = props.shroud ?? false;
  const twinkle = props.twinkle ?? false;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef(new Engine(canvasRef));
  engineRef.current.setIsAnimated(twinkle);
  engineRef.current.setIsShrouded(shroud);

  useEffect(
    () => handleColorSchemeChange(colorScheme, engineRef),
    [colorScheme]
  );

  useEffect(
    () => initialize(coveredElementSelector, engineRef),
    [coveredElementSelector, shroud, twinkle]
  );

  return <Container ref={canvasRef} />;
}

function handleColorSchemeChange(
  colorScheme: ColorScheme | null,
  engineRef: MutableRefObject<Engine>
) {
  engineRef.current.onColorSchemeChange(colorScheme);
}

function initialize(
  coveredElementSelector: string,
  engine: MutableRefObject<Engine>
) {
  const windowResizeHandler = () =>
    engine.current.resize(coveredElementSelector);
  window.addEventListener('resize', windowResizeHandler);
  engine.current.resize(coveredElementSelector);
  engine.current.start();

  return () => {
    window.removeEventListener('resize', windowResizeHandler);
    engine.current.stop();
  };
}
