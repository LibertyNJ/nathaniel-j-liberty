import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default ButtonProps;

type ButtonProps = BaseButtonProps | ExternalLinkButtonProps | LinkButtonProps;

interface BaseButtonProps {
  readonly children: React.ReactNode;
  readonly icon?: IconProp;
  readonly size: 'large' | 'medium' | 'small';
  readonly unlimitedWidth?: boolean;
}

interface ExternalLinkButtonProps extends BaseButtonProps {
  readonly href: string;
}

interface LinkButtonProps extends BaseButtonProps {
  readonly to: string;
}
