import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import ContainerProps from './Container/Props';

export default interface LayoutSocialLinkProps
  extends ContainerProps,
    Pick<FontAwesomeIconProps, 'icon'> {
  readonly href: string;
}
