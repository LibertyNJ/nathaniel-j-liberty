import { ColorScheme } from '../../../style/color';

export default interface PageStarCanvasProps {
  readonly colorScheme: ColorScheme | null;
  readonly coveredElementSelector: string;
  readonly shroud?: boolean;
  readonly twinkle?: boolean;
}
