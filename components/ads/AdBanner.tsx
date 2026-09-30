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

  return (
    <aside
      className={'mx-auto my-6 flex flex-col items-center justify-center ' + className}
      aria-label="Contenido Publicitario"
    >
      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1 select-none">
        Publicidad
      </span>
      <div
        className={'relative flex items-center justify-center bg-slate-50 border border-slate-200/60 rounded-md overflow-hidden ' + dimensions.minHeight + ' ' + dimensions.minWidth}
      >
        {testMode ? (
          <div className="flex flex-col items-center justify-center p-4 text-center text-slate-400">
            <span className="text-xs font-mono font-medium">[Espacio Publicitario Google Ads]</span>
            <span className="text-[11px] text-slate-500 mt-1">Formato: {format} | Slot: {slotId}</span>
          </div>
        ) : (
          <ins
            className={'adsbygoogle ' + dimensions.styleClasses}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-0000000000000000'}
            data-ad-slot={slotId}
            data-ad-format={format === 'responsive' ? 'auto' : undefined}
            data-full-width-responsive={format === 'responsive' ? 'true' : 'false'}
          />
        )}
      </div>
    </aside>
  );
};