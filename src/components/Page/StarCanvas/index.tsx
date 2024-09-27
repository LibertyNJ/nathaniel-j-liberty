import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import Canvas from './Canvas';
import Engine from './Engine';
import Props from './Props';
import Shroud from './Shroud';
import Container from './Container';

export default function StarCanvas(props: Props) {
  const { coveredElementSelector, shroud, twinkle } = props;
  const [shroudBreakpoints, setShroudBreakpoints] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef(new Engine(canvasRef));
  const shroudRef = useRef<HTMLDivElement>(null);
  engineRef.current.setIsAnimated(twinkle ?? false);

  useEffect(
    () =>
      initialize(
        canvasRef,
        coveredElementSelector,
        engineRef,
        setShroudBreakpoints,
        shroudRef
      ),
    [coveredElementSelector, twinkle]
  );

  return (
    <Container>
      <Canvas ref={canvasRef} />
      {shroud && <Shroud ref={shroudRef} $breakpoints={shroudBreakpoints} />}
    </Container>
  );
}

function initialize(
  canvas: RefObject<HTMLCanvasElement>,
  coveredElementSelector: string,
  engine: MutableRefObject<Engine>,
  setShroudBreakpoints: (shroudBreakpoints: string) => void,
  shroud: RefObject<HTMLDivElement>
) {
  const resize = () => {
    engine.current.resize(coveredElementSelector);

    if (shroud.current && canvas.current) {
      resizeShroud(shroud.current, canvas.current, setShroudBreakpoints);
    }
  };

  resize();
  window.addEventListener('resize', resize);
  engine.current.start();

  const finalize = () => {
    window.removeEventListener('resize', resize);
    engine.current.stop();
  };

  return finalize;
}

function resizeShroud(
  shroud: HTMLDivElement,
  canvas: HTMLCanvasElement,
  setShroudBreakpoints: (shroudBreakpoints: string) => void
) {
  shroud.style.height = `${canvas.height}px`;
  shroud.style.width = `${canvas.width}px`;

  if (canvas.height > 2 * window.innerHeight) {
    resetShroudBreakpoints(canvas, setShroudBreakpoints);
  }
}

function resetShroudBreakpoints(
  canvas: HTMLCanvasElement,
  setShroudBreakpoints: (shroudBreakpoints: string) => void
) {
  const start = `${Math.round((window.innerHeight / canvas.height) * 100)}%`;
  const end = `${Math.round(((canvas.height - window.innerHeight) / canvas.height) * 100)}%`;
  setShroudBreakpoints(`${start} ${end}`);
}
