export type AdFormat =
  | 'horizontal-banner'
  | 'rectangle-card'
  | 'vertical-sidebar'
  | 'responsive';

export interface AdBannerProps {
  slotId: string;
  format?: AdFormat;
  className?: string;
  testMode?: boolean;
}