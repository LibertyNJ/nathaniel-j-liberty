export default interface PageLayoutProps {
  readonly children: React.ReactNode;
  readonly mainDisplay?: 'block' | 'flex';
  readonly unlimitedWidth?: boolean;
  readonly breakpoints?: boolean;
}
