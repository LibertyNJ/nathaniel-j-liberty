import { ColorScheme } from '../../../../../style/color';

export default interface ColorSchemeToggleProps {
  colorScheme: ColorScheme;
  label: string;
  onToggle: () => void;
}
