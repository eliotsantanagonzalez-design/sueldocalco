'use client';

import React, { useEffect, useRef } from 'react';
import { AdBannerProps, AdFormat } from './types';

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

const FORMAT_DIMENSIONS: Record<AdFormat, { minHeight: string; minWidth: string; styleClasses: string }> = {
  'horizontal-banner': {
    minHeight: 'min-h-[90px] sm:min-h-[100px]',
    minWidth: 'min-w-[320px] md:min-w-[728px]',
    styleClasses: 'w-full max-w-[728px] h-[90px]'
  },
  'rectangle-card': {
    minHeight: 'min-h-[250px] sm:min-h-[280px]',
    minWidth: 'min-w-[300px]',
    styleClasses: 'w-[300px] sm:w-[336px] h-[250px] sm:h-[280px]'
  },
  'vertical-sidebar': {
    minHeight: 'min-h-[600px]',
    minWidth: 'min-w-[300px]',
    styleClasses: 'w-[300px] h-[600px]'
  },
  'responsive': {
    minHeight: 'min-h-[100px] sm:min-h-[250px]',
    minWidth: 'w-full',
    styleClasses: 'w-full block'
  }
};

export const AdBanner: React.FC<AdBannerProps> = ({
  slotId,
  format = 'responsive',
  className = '',
  testMode = process.env.NODE_ENV !== 'production'
}) => {
  return null;
  const adPushedRef = useRef(false);
  const dimensions = FORMAT_DIMENSIONS[format];

  useEffect(() => {
    if (adPushedRef.current) return;
    if (!testMode && typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adPushedRef.current = true;
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [slotId, testMode]);

  return null;
};