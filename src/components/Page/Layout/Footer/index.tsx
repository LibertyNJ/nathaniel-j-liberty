import Container from './Container';
import Copyright from './Copyright';
import Props from './Props';
import SocialLinks from './SocialLinks';

export default function LayoutFooter(props: Props) {
  return (
    <Container $backgroundIsOpaque={props.windowIsScrolled}>
      <SocialLinks />
      <Copyright
        currentYear={new Date().getFullYear()}
        holder="Nathaniel J. Liberty"
        initialYear={2019}
      />
    </Container>
  );
}
