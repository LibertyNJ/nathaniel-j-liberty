import { color } from '../../../../../../style';
import SocialLink from '.';

export default function LinkedInLink() {
  return (
    <SocialLink
      hoverColor={color.linkedIn.blue}
      href="https://linkedin.com/in/nathanieljliberty"
      icon={['fab', 'linkedin']}
    />
  );
}
