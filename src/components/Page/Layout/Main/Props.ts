export default interface PageLayoutMainProps {
  readonly children: React.ReactNode;
  readonly display?: 'block' | 'flex';
  readonly unlimitedWidth?: boolean;
  readonly breakpoints?: boolean;
}
