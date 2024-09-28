import { ColorScheme } from '../../../../style/color';

export default interface LayoutHeaderProps {
  readonly colorScheme: ColorScheme | null;
  readonly setColorScheme: (colorScheme: ColorScheme) => void;
  readonly windowIsScrolled: boolean;
}
