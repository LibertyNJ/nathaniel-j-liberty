import { ColorScheme } from '../../../../../style/color';

export default interface ColorSchemeToggleProps {
  colorScheme: ColorScheme | null;
  label: string;
  onToggle: () => void;
}
