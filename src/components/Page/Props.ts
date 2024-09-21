export default interface PageProps {
  readonly breakpoints?: boolean;
  readonly children: React.ReactNode;
  readonly display?: 'block' | 'flex';
  readonly twinkle?: boolean;
  readonly shroud?: boolean;
  readonly unlimitedWidth?: boolean;
}
