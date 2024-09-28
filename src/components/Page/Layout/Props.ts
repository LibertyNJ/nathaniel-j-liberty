import { ColorScheme } from '../../../style/color';

export default interface PageLayoutProps {
  readonly breakpoints?: boolean;
  readonly children: React.ReactNode;
  readonly colorScheme: ColorScheme | null;
  readonly mainDisplay?: 'block' | 'flex';
  readonly setColorScheme: (colorScheme: ColorScheme) => void;
  readonly unlimitedWidth?: boolean;
}
