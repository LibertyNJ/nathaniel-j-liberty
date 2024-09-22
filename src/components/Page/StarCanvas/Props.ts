import { ColorScheme } from '../../../style/color';

export default interface PageStarCanvasProps {
  readonly colorScheme: ColorScheme;
  readonly coveredElementSelector: string;
  readonly shroud?: boolean;
  readonly twinkle?: boolean;
}
