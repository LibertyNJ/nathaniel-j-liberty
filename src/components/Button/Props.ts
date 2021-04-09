import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default interface ButtonProps {
  readonly children: React.ReactNode;
  readonly download?: boolean;
  readonly href?: string;
  readonly icon?: IconProp;
  readonly size: 'large' | 'medium' | 'small';
  readonly to?: string;
  readonly unlimitedWidth?: boolean;
}
