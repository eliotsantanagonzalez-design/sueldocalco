'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const CONSENT_COOKIE_KEY = 'sueldocalco_consent_status';

export const CookieConsentBanner: React.FC = () => {
  const [consentStatus, setConsentStatus] = useState<'pending' | 'granted' | 'denied'>('pending');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedConsent = localStorage.getItem(CONSENT_COOKIE_KEY);
    if (savedConsent === 'granted' || savedConsent === 'denied') {
      setConsentStatus(savedConsent);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_COOKIE_KEY, 'granted');
    setConsentStatus('granted');
  };

  const handleDeny = () => {
    localStorage.setItem(CONSENT_COOKIE_KEY, 'denied');
    setConsentStatus('denied');
  };

  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <>
      {consentStatus === 'granted' && adsenseClientId && (
        <Script
          id="google-adsense"
          async
          src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + adsenseClientId}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      {isClient && consentStatus === 'pending' && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Consentimiento de Cookies"
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-900/95 text-slate-100 backdrop-blur-md border-t border-slate-800 shadow-2xl transition-all"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 text-xs sm:text-sm text-slate-300">
              <p className="font-semibold text-white">Configuración de Privacidad y Cookies</p>
              <p className="leading-relaxed">
                Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies publicitarias de Google AdSense para financiar esta herramienta gratuita mediante anuncios relevantes.
              </p>
              <div className="pt-1">
                <Link href="/cookies" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
                  Leer política completa de cookies
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={handleDeny}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer text-center"
              >
                Rechazar no esenciales
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm text-center"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};