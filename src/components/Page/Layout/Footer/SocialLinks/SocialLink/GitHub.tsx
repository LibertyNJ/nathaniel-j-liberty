import { color } from '../../../../../../style';
import SocialLink from '.';

export default function GitHubLink() {
  return (
    <SocialLink
      hoverColor={color.gitHub.gray}
      href="https://github.com/LibertyNJ"
      icon={['fab', 'github']}
    />
  );
}
