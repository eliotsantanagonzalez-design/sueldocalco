import fs from 'fs';
import path from 'path';

const files = {
  'package.json': `{
  "name": "sueldocalco-es",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.15",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/node": "20.14.10",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "10.4.19",
    "postcss": "8.4.39",
    "tailwindcss": "3.4.4",
    "typescript": "5.5.3"
  }
}`,

  'tsconfig.json': `{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`,

  'next.config.mjs': `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default nextConfig;`,

  'postcss.config.mjs': `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;`,

  'tailwind.config.ts': `import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;`,

  '.env.example': `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-0000000000000000`,

  'public/ads.txt': `google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0`,

  'app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}`,

  'lib/types/index.ts': `export type CivilStatus = 'single' | 'married' | 'widowed' | 'divorced';
export type ContractType = 'indefinite' | 'temporary';

export interface FiscalInput {
  grossSalary: number;
  payChecksCount: 12 | 14;
  contractType: ContractType;
  age: number;
  childrenCount: number;
  disabilityLevel: 0 | 33 | 65;
  autonomousCommunity: string;
}

export interface SocialSecurityBreakdown {
  commonContingencies: number;
  unemployment: number;
  professionalTraining: number;
  mei: number;
  totalDeductions: number;
}

export interface IrpfBreakdown {
  taxableBase: number;
  stateQuota: number;
  regionalQuota: number;
  totalQuota: number;
  effectiveRate: number;
}

export interface SalaryCalculationResult {
  grossAnnual: number;
  grossMonthly: number;
  netAnnual: number;
  netMonthly: number;
  socialSecurity: SocialSecurityBreakdown;
  irpf: IrpfBreakdown;
}`,

  'lib/engine/constants.ts': `export const SS_MIN_BASE_MONTHLY = 1323.00;
export const SS_MAX_BASE_MONTHLY = 4720.50;

export const SS_RATES = {
  commonContingencies: 0.0470,
  unemploymentIndefinite: 0.0155,
  unemploymentTemporary: 0.0160,
  professionalTraining: 0.0010,
  mei: 0.0070
};

export const PERSONAL_MINIMUM_BASE = 5550;
export const CHILDREN_MINIMUMS = [2400, 2700, 4000, 4500];
export const DISABILITY_MINIMUMS = { 0: 0, 33: 3000, 65: 9000 };
export const GENERAL_WORK_EXPENSES = 2000;

export interface TaxBracket {
  limit: number;
  rate: number;
}

export const STATE_TAX_BRACKETS: TaxBracket[] = [
  { limit: 12450, rate: 0.095 },
  { limit: 20200, rate: 0.120 },
  { limit: 35200, rate: 0.150 },
  { limit: 60000, rate: 0.185 },
  { limit: 300000, rate: 0.225 },
  { limit: Infinity, rate: 0.245 }
];

export const DEFAULT_REGIONAL_TAX_BRACKETS: TaxBracket[] = [
  { limit: 12450, rate: 0.095 },
  { limit: 20200, rate: 0.120 },
  { limit: 35200, rate: 0.150 },
  { limit: 60000, rate: 0.185 },
  { limit: 300000, rate: 0.225 },
  { limit: Infinity, rate: 0.245 }
];

export const REGIONAL_TAX_BRACKETS: Record<string, TaxBracket[]> = {
  'Madrid': [
    { limit: 13362, rate: 0.085 },
    { limit: 19004, rate: 0.107 },
    { limit: 35425, rate: 0.128 },
    { limit: 57320, rate: 0.174 },
    { limit: Infinity, rate: 0.205 }
  ],
  'Cataluña': [
    { limit: 12450, rate: 0.105 },
    { limit: 17707, rate: 0.120 },
    { limit: 21000, rate: 0.140 },
    { limit: 33007, rate: 0.150 },
    { limit: 53407, rate: 0.188 },
    { limit: 90000, rate: 0.215 },
    { limit: 120000, rate: 0.235 },
    { limit: 175000, rate: 0.245 },
    { limit: Infinity, rate: 0.255 }
  ],
  'Andalucía': [
    { limit: 13000, rate: 0.095 },
    { limit: 21100, rate: 0.120 },
    { limit: 35200, rate: 0.150 },
    { limit: 60000, rate: 0.185 },
    { limit: Infinity, rate: 0.225 }
  ],
  'Comunidad Valenciana': [
    { limit: 12000, rate: 0.090 },
    { limit: 22000, rate: 0.120 },
    { limit: 32000, rate: 0.150 },
    { limit: 42000, rate: 0.175 },
    { limit: 52000, rate: 0.200 },
    { limit: 65000, rate: 0.225 },
    { limit: 72000, rate: 0.250 },
    { limit: Infinity, rate: 0.295 }
  ]
};

export interface CommunityInfo {
  name: string;
  slug: string;
}

export const COMMUNITIES_LIST: CommunityInfo[] = [
  { name: 'Andalucía', slug: 'andalucia' },
  { name: 'Aragón', slug: 'aragon' },
  { name: 'Asturias', slug: 'asturias' },
  { name: 'Baleares', slug: 'baleares' },
  { name: 'Canarias', slug: 'canarias' },
  { name: 'Cantabria', slug: 'cantabria' },
  { name: 'Castilla-La Mancha', slug: 'castilla-la-mancha' },
  { name: 'Castilla y León', slug: 'castilla-y-leon' },
  { name: 'Cataluña', slug: 'cataluna' },
  { name: 'Comunidad Valenciana', slug: 'comunidad-valenciana' },
  { name: 'Extremadura', slug: 'extremadura' },
  { name: 'Galicia', slug: 'galicia' },
  { name: 'La Rioja', slug: 'la-rioja' },
  { name: 'Madrid', slug: 'madrid' },
  { name: 'Murcia', slug: 'murcia' },
  { name: 'Navarra', slug: 'navarra' },
  { name: 'País Vasco', slug: 'pais-vasco' }
];`,

  'lib/engine/socialSecurity.ts': `import { SS_MIN_BASE_MONTHLY, SS_MAX_BASE_MONTHLY, SS_RATES } from './constants';
import { ContractType, SocialSecurityBreakdown } from '../types';

export function calculateSocialSecurity(
  grossAnnualSalary: number,
  contractType: ContractType
): SocialSecurityBreakdown {
  const monthlySalary = grossAnnualSalary / 12;
  const contributionBase = Math.min(
    Math.max(monthlySalary, SS_MIN_BASE_MONTHLY),
    SS_MAX_BASE_MONTHLY
  );

  const unemploymentRate = contractType === 'temporary'
    ? SS_RATES.unemploymentTemporary
    : SS_RATES.unemploymentIndefinite;

  const monthlyCommon = contributionBase * SS_RATES.commonContingencies;
  const monthlyUnemployment = contributionBase * unemploymentRate;
  const monthlyTraining = contributionBase * SS_RATES.professionalTraining;
  const monthlyMei = contributionBase * SS_RATES.mei;

  const commonContingencies = Number((monthlyCommon * 12).toFixed(2));
  const unemployment = Number((monthlyUnemployment * 12).toFixed(2));
  const professionalTraining = Number((monthlyTraining * 12).toFixed(2));
  const mei = Number((monthlyMei * 12).toFixed(2));

  const totalDeductions = Number(
    (commonContingencies + unemployment + professionalTraining + mei).toFixed(2)
  );

  return {
    commonContingencies,
    unemployment,
    professionalTraining,
    mei,
    totalDeductions
  };
}`,

  'lib/engine/irpf.ts': `import {
  STATE_TAX_BRACKETS,
  DEFAULT_REGIONAL_TAX_BRACKETS,
  REGIONAL_TAX_BRACKETS,
  PERSONAL_MINIMUM_BASE,
  CHILDREN_MINIMUMS,
  DISABILITY_MINIMUMS,
  GENERAL_WORK_EXPENSES,
  TaxBracket
} from './constants';
import { FiscalInput, IrpfBreakdown } from '../types';

function applyBrackets(taxableBase: number, brackets: TaxBracket[]): number {
  if (taxableBase <= 0) return 0;
  let totalTax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (taxableBase > bracket.limit) {
      totalTax += (bracket.limit - previousLimit) * bracket.rate;
      previousLimit = bracket.limit;
    } else {
      totalTax += (taxableBase - previousLimit) * bracket.rate;
      break;
    }
  }
  return totalTax;
}

function calculateWorkReduction(netYield: number): number {
  if (netYield <= 14047.50) return 6498;
  if (netYield <= 19747.50) return Math.max(0, 6498 - 1.14 * (netYield - 14047.50));
  return 0;
}

function calculatePersonalMinimum(age: number, childrenCount: number, disabilityLevel: 0 | 33 | 65): number {
  let minimum = PERSONAL_MINIMUM_BASE;
  if (age > 75) minimum += 1400;
  else if (age > 65) minimum += 1150;

  for (let i = 0; i < childrenCount; i++) {
    if (i === 0) minimum += CHILDREN_MINIMUMS[0];
    else if (i === 1) minimum += CHILDREN_MINIMUMS[1];
    else if (i === 2) minimum += CHILDREN_MINIMUMS[2];
    else minimum += CHILDREN_MINIMUMS[3];
  }
  minimum += DISABILITY_MINIMUMS[disabilityLevel];
  return minimum;
}

export function calculateIrpf(
  input: FiscalInput,
  ssDeductionsAnnual: number
): IrpfBreakdown {
  const { grossSalary, age, childrenCount, disabilityLevel, autonomousCommunity } = input;

  const deductibleExpenses = ssDeductionsAnnual + GENERAL_WORK_EXPENSES;
  const netWorkYield = Math.max(0, grossSalary - deductibleExpenses);
  const workReduction = calculateWorkReduction(netWorkYield);
  const taxableBase = Math.max(0, netWorkYield - workReduction);

  if (grossSalary <= 15876 && childrenCount === 0) {
    return {
      taxableBase: 0,
      stateQuota: 0,
      regionalQuota: 0,
      totalQuota: 0,
      effectiveRate: 0
    };
  }

  const personalMinimum = calculatePersonalMinimum(age, childrenCount, disabilityLevel);
  const regionalBrackets = REGIONAL_TAX_BRACKETS[autonomousCommunity] || DEFAULT_REGIONAL_TAX_BRACKETS;

  const stateGrossTax = applyBrackets(taxableBase, STATE_TAX_BRACKETS);
  const stateMinTax = applyBrackets(personalMinimum, STATE_TAX_BRACKETS);
  const stateQuota = Math.max(0, stateGrossTax - stateMinTax);

  const regionalGrossTax = applyBrackets(taxableBase, regionalBrackets);
  const regionalMinTax = applyBrackets(personalMinimum, regionalBrackets);
  const regionalQuota = Math.max(0, regionalGrossTax - regionalMinTax);

  const totalQuota = Number((stateQuota + regionalQuota).toFixed(2));
  const effectiveRate = grossSalary > 0
    ? Number(((totalQuota / grossSalary) * 100).toFixed(2))
    : 0;

  return {
    taxableBase: Number(taxableBase.toFixed(2)),
    stateQuota: Number(stateQuota.toFixed(2)),
    regionalQuota: Number(regionalQuota.toFixed(2)),
    totalQuota,
    effectiveRate
  };
}`,

  'lib/engine/index.ts': `import { FiscalInput, SalaryCalculationResult } from '../types';
import { calculateSocialSecurity } from './socialSecurity';
import { calculateIrpf } from './irpf';

export function calculateSalary(input: FiscalInput): SalaryCalculationResult {
  const socialSecurity = calculateSocialSecurity(input.grossSalary, input.contractType);
  const irpf = calculateIrpf(input, socialSecurity.totalDeductions);

  const totalAnnualDeductions = socialSecurity.totalDeductions + irpf.totalQuota;
  const netAnnual = Math.max(0, Number((input.grossSalary - totalAnnualDeductions).toFixed(2)));
  const netMonthly = Number((netAnnual / input.payChecksCount).toFixed(2));
  const grossMonthly = Number((input.grossSalary / input.payChecksCount).toFixed(2));

  return {
    grossAnnual: input.grossSalary,
    grossMonthly,
    netAnnual,
    netMonthly,
    socialSecurity,
    irpf
  };
}`,

  'lib/engine/severance.ts': `export type DismissalType = 'voluntary' | 'objective' | 'unfair' | 'end_of_contract';

export interface SeveranceInput {
  grossAnnualSalary: number;
  payChecksCount: 12 | 14;
  startDate: string;
  endDate: string;
  dismissalType: DismissalType;
  unusedVacationDays: number;
  daysWorkedInCurrentMonth: number;
}

export interface SettlementBreakdown {
  dailySalary: number;
  currentMonthSalary: number;
  vacationSettlement: number;
  extraProrataSettlement: number;
  totalSettlementHaberes: number;
  compensationDays: number;
  compensationAmount: number;
  totalLiquidation: number;
  monthsWorkedTotal: number;
}

const REFORM_DATE_2012 = new Date('2012-02-12');

function calculateProratedMonths(start: Date, end: Date): number {
  if (end < start) return 0;
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() >= start.getDate()) {
    months += 1;
  }
  return Math.max(1, months);
}

export function calculateSeverance(input: SeveranceInput): SettlementBreakdown {
  const {
    grossAnnualSalary,
    payChecksCount,
    startDate,
    endDate,
    dismissalType,
    unusedVacationDays,
    daysWorkedInCurrentMonth
  } = input;

  const start = new Date(startDate);
  const end = new Date(endDate);

  const dailySalary = Number((grossAnnualSalary / 365).toFixed(4));
  const monthlySalary = grossAnnualSalary / payChecksCount;

  const currentMonthSalary = Number((dailySalary * daysWorkedInCurrentMonth).toFixed(2));
  const vacationSettlement = Number((dailySalary * unusedVacationDays).toFixed(2));

  let extraProrataSettlement = 0;
  if (payChecksCount === 14) {
    const monthIndexInSemester = (end.getMonth() % 6) + (end.getDate() / 30);
    const oneExtraPay = grossAnnualSalary / 14;
    extraProrataSettlement = Number(((oneExtraPay / 6) * monthIndexInSemester).toFixed(2));
  }

  const totalSettlementHaberes = Number(
    (currentMonthSalary + vacationSettlement + extraProrataSettlement).toFixed(2)
  );

  let compensationAmount = 0;
  let compensationDays = 0;
  const totalMonths = calculateProratedMonths(start, end);

  if (dismissalType === 'objective') {
    const maxCompensation = monthlySalary * 12;
    const daysAllowed = (20 / 12) * totalMonths;
    compensationAmount = Math.min(daysAllowed * dailySalary, maxCompensation);
    compensationDays = Math.round(daysAllowed);
  } else if (dismissalType === 'unfair') {
    if (start < REFORM_DATE_2012) {
      const monthsPre = calculateProratedMonths(start, REFORM_DATE_2012);
      const daysPre = (45 / 12) * monthsPre;
      const amountPre = daysPre * dailySalary;

      const monthsPost = calculateProratedMonths(REFORM_DATE_2012, end);
      const daysPost = (33 / 12) * monthsPost;
      const amountPost = daysPost * dailySalary;

      const maxLimit24 = monthlySalary * 24;
      const maxLimit42 = monthlySalary * 42;

      const combined = amountPre + amountPost;
      if (amountPre > maxLimit24) {
        compensationAmount = Math.min(combined, maxLimit42);
      } else {
        compensationAmount = Math.min(combined, maxLimit24);
      }
      compensationDays = Math.round(daysPre + daysPost);
    } else {
      const maxCompensation = monthlySalary * 24;
      const daysAllowed = (33 / 12) * totalMonths;
      compensationAmount = Math.min(daysAllowed * dailySalary, maxCompensation);
      compensationDays = Math.round(daysAllowed);
    }
  } else if (dismissalType === 'end_of_contract') {
    const daysAllowed = (12 / 12) * totalMonths;
    compensationAmount = daysAllowed * dailySalary;
    compensationDays = Math.round(daysAllowed);
  }

  compensationAmount = Number(compensationAmount.toFixed(2));
  const totalLiquidation = Number((totalSettlementHaberes + compensationAmount).toFixed(2));

  return {
    dailySalary: Number(dailySalary.toFixed(2)),
    currentMonthSalary,
    vacationSettlement,
    extraProrataSettlement,
    totalSettlementHaberes,
    compensationDays,
    compensationAmount,
    totalLiquidation,
    monthsWorkedTotal: totalMonths
  };
}`,

  'components/ads/types.ts': `export type AdFormat =
  | 'horizontal-banner'
  | 'rectangle-card'
  | 'vertical-sidebar'
  | 'responsive';

export interface AdBannerProps {
  slotId: string;
  format?: AdFormat;
  className?: string;
  testMode?: boolean;
}`,

  'components/ads/AdBanner.tsx': `'use client';

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
};`,

  'components/cookies/CookieConsentBanner.tsx': `'use client';

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
};`,

  'components/layout/Header.tsx': `'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { name: 'Sueldo Neto', href: '/' },
  { name: 'Calculadora Finiquito', href: '/calculadora-finiquito' },
  { name: 'Tablas IRPF', href: '/tablas-irpf' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-base shadow-sm group-hover:bg-indigo-700 transition-colors">
              €
            </span>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Sueldo<span className="text-indigo-600">Calco</span>
              <span className="text-xs text-slate-400 font-semibold ml-0.5">.es</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={'px-3 py-2 rounded-lg text-sm font-semibold transition-colors ' + (
                    active
                      ? 'bg-slate-100 text-indigo-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Alternar menú de navegación"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={'block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ' + (
                  active
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-700 hover:bg-slate-50'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};`,

  'components/layout/Footer.tsx': `import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} SueldoCalco.es - Simulador Fiscal y Laboral.</p>
        <nav className="flex items-center gap-6">
          <Link href="/aviso-legal" className="hover:text-slate-900 transition-colors">
            Aviso Legal
          </Link>
          <Link href="/privacidad" className="hover:text-slate-900 transition-colors">
            Privacidad
          </Link>
          <Link href="/cookies" className="hover:text-slate-900 transition-colors">
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
};`,

  'components/ui/ExportPdfButton.tsx': `'use client';

import React from 'react';
import { FiscalInput, SalaryCalculationResult } from '@/lib/types';

interface ExportPdfButtonProps {
  formData: FiscalInput;
  results: SalaryCalculationResult;
}

export const ExportPdfButton: React.FC<ExportPdfButtonProps> = ({ formData, results }) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 2
    }).format(val);
  };

  const handlePrintPdf = () => {
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (!printWindow) {
      alert('Por favor, permite las ventanas emergentes para generar el informe en PDF.');
      return;
    }

    const totalDeductions = results.socialSecurity.totalDeductions + results.irpf.totalQuota;
    const contractLabel = formData.contractType === 'indefinite' ? 'Indefinido' : 'Temporal';
    const unemploymentRateLabel = formData.contractType === 'temporary' ? '1,60%' : '1,55%';

    const htmlLines = [
      '<!DOCTYPE html>',
      '<html lang="es"><head><meta charset="utf-8" />',
      '<title>Simulación Nómina - SueldoCalco.es</title>',
      '<style>',
      '* { box-sizing: border-box; margin: 0; padding: 0; font-family: sans-serif; }',
      'body { padding: 40px; color: #1e293b; background: #ffffff; }',
      '.header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 24px; }',
      '.brand { font-size: 22px; font-weight: 800; color: #0f172a; }',
      '.brand span { color: #4f46e5; }',
      '.meta { text-align: right; font-size: 12px; color: #64748b; }',
      '.hero-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }',
      '.hero-label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; }',
      '.hero-value { font-size: 28px; font-weight: 800; color: #059669; margin-top: 4px; }',
      '.hero-sub { font-size: 16px; font-weight: 700; color: #0f172a; text-align: right; margin-top: 4px; }',
      '.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px; }',
      '.field-card { border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; }',
      '.field-label { font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; }',
      '.field-val { font-size: 14px; font-weight: 600; color: #0f172a; margin-top: 2px; }',
      'table { width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 24px; font-size: 13px; }',
      'th { text-align: left; padding: 10px 12px; background: #f1f5f9; color: #475569; font-size: 11px; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; }',
      'td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; }',
      '.text-right { text-align: right; }',
      '.total-row { background: #f8fafc; font-weight: 700; }',
      '.footer-disclaimer { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 10px; color: #94a3b8; line-height: 1.5; }',
      '</style></head><body>',
      '<div class="header"><div class="brand">Sueldo<span>Calco</span>.es</div>',
      '<div class="meta"><p>Fecha: ' + new Date().toLocaleDateString('es-ES') + '</p><p>Informe de Simulación Salarial</p></div></div>',
      '<div class="hero-card"><div><div class="hero-label">Sueldo Neto Mensual (' + formData.payChecksCount + ' pagas)</div>',
      '<div class="hero-value">' + formatCurrency(results.netMonthly) + ' / mes</div></div>',
      '<div><div class="hero-label">Sueldo Neto Anual</div><div class="hero-sub">' + formatCurrency(results.netAnnual) + '</div></div></div>',
      '<div class="grid">',
      '<div class="field-card"><div class="field-label">Salario Bruto Anual</div><div class="field-val">' + formatCurrency(results.grossAnnual) + '</div></div>',
      '<div class="field-card"><div class="field-label">Comunidad Autónoma</div><div class="field-val">' + formData.autonomousCommunity + '</div></div>',
      '<div class="field-card"><div class="field-label">Modalidad Contrato</div><div class="field-val">' + contractLabel + '</div></div>',
      '<div class="field-card"><div class="field-label">Situación Familiar</div><div class="field-val">' + formData.age + ' años | ' + formData.childrenCount + ' hijos</div></div>',
      '</div>',
      '<h3>Desglose de Cotizaciones y Retenciones Anuales</h3>',
      '<table><thead><tr><th>Concepto</th><th>Tipo</th><th class="text-right">Importe Anual</th></tr></thead><tbody>',
      '<tr><td>Contingencias Comunes</td><td>4,70%</td><td class="text-right">' + formatCurrency(results.socialSecurity.commonContingencies) + '</td></tr>',
      '<tr><td>Desempleo</td><td>' + unemploymentRateLabel + '</td><td class="text-right">' + formatCurrency(results.socialSecurity.unemployment) + '</td></tr>',
      '<tr><td>Formación Profesional</td><td>0,10%</td><td class="text-right">' + formatCurrency(results.socialSecurity.professionalTraining) + '</td></tr>',
      '<tr><td>Mecanismo Equidad Intergeneracional (MEI)</td><td>0,70%</td><td class="text-right">' + formatCurrency(results.socialSecurity.mei) + '</td></tr>',
      '<tr><td>Retención IRPF</td><td>' + results.irpf.effectiveRate + '%</td><td class="text-right">' + formatCurrency(results.irpf.totalQuota) + '</td></tr>',
      '<tr class="total-row"><td colspan="2">Total Deducciones Anuales</td><td class="text-right">' + formatCurrency(totalDeductions) + '</td></tr>',
      '</tbody></table>',
      '<div class="footer-disclaimer">Simulación generada en SueldoCalco.es con carácter meramente orientativo.</div>',
      '<script>window.onload = function() { window.print(); };</script>',
      '</body></html>'
    ];

    printWindow.document.open();
    printWindow.document.write(htmlLines.join('\\n'));
    printWindow.document.close();
  };

  return (
    <button
      type="button"
      onClick={handlePrintPdf}
      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
    >
      <span>Descargar Informe PDF</span>
    </button>
  );
};`,

  'components/calculators/SalaryCalculator.tsx': `'use client';

import React, { useState, useMemo } from 'react';
import { calculateSalary } from '@/lib/engine';
import { COMMUNITIES_LIST } from '@/lib/engine/constants';
import { FiscalInput, ContractType } from '@/lib/types';
import { AdBanner } from '@/components/ads/AdBanner';
import { ExportPdfButton } from '@/components/ui/ExportPdfButton';

interface SalaryCalculatorProps {
  initialCommunity?: string;
}

export const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({
  initialCommunity = 'Madrid'
}) => {
  const [formData, setFormData] = useState<FiscalInput>({
    grossSalary: 28000,
    payChecksCount: 12,
    contractType: 'indefinite',
    age: 32,
    childrenCount: 0,
    disabilityLevel: 0,
    autonomousCommunity: initialCommunity
  });

  const results = useMemo(() => {
    return calculateSalary(formData);
  }, [formData]);

  const handleInputChange = (field: keyof FiscalInput, value: unknown) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 2
    }).format(val);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          Datos Salariales y Personales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="grossSalary" className="block text-sm font-semibold text-slate-700">
              Salario Bruto Anual (€)
            </label>
            <div className="relative">
              <input
                id="grossSalary"
                type="number"
                min="0"
                step="500"
                value={formData.grossSalary || ''}
                onChange={(e) => handleInputChange('grossSalary', Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
                placeholder="Ej. 30000"
              />
              <span className="absolute right-4 top-3 text-slate-400 font-medium">€/año</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Número de Pagas
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleInputChange('payChecksCount', 12)}
                className={'py-3 px-4 rounded-lg font-medium text-sm transition-all border ' + (
                  formData.payChecksCount === 12
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                )}
              >
                12 Pagas (Prorrateadas)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('payChecksCount', 14)}
                className={'py-3 px-4 rounded-lg font-medium text-sm transition-all border ' + (
                  formData.payChecksCount === 14
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                )}
              >
                14 Pagas
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="community" className="block text-sm font-semibold text-slate-700">
              Comunidad Autónoma
            </label>
            <select
              id="community"
              value={formData.autonomousCommunity}
              onChange={(e) => handleInputChange('autonomousCommunity', e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
            >
              {COMMUNITIES_LIST.map(c => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="contractType" className="block text-sm font-semibold text-slate-700">
              Tipo de Contrato
            </label>
            <select
              id="contractType"
              value={formData.contractType}
              onChange={(e) => handleInputChange('contractType', e.target.value as ContractType)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
            >
              <option value="indefinite">Contrato Indefinido</option>
              <option value="temporary">Contrato Temporal</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="age" className="block text-sm font-semibold text-slate-700">
                Edad
              </label>
              <input
                id="age"
                type="number"
                min="16"
                max="99"
                value={formData.age}
                onChange={(e) => handleInputChange('age', Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="children" className="block text-sm font-semibold text-slate-700">
                Hijos a cargo
              </label>
              <input
                id="children"
                type="number"
                min="0"
                max="10"
                value={formData.childrenCount}
                onChange={(e) => handleInputChange('childrenCount', Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="disability" className="block text-sm font-semibold text-slate-700">
              Grado de Discapacidad
            </label>
            <select
              id="disability"
              value={formData.disabilityLevel}
              onChange={(e) => handleInputChange('disabilityLevel', Number(e.target.value) as 0 | 33 | 65)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="0">Sin discapacidad (menos del 33%)</option>
              <option value="33">Entre 33% y 64%</option>
              <option value="65">Igual o mayor al 65%</option>
            </select>
          </div>
        </div>
      </section>

      <AdBanner slotId="8472910482" format="rectangle-card" />

      <section className="bg-slate-900 text-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              Sueldo Neto Estimado ({formData.payChecksCount} pagas)
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 mt-1">
              {formatCurrency(results.netMonthly)}
              <span className="text-base text-slate-400 font-normal"> / mes</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block md:text-right">
                Neto Total Anual
              </span>
              <div className="text-2xl font-bold text-white mt-0.5">
                {formatCurrency(results.netAnnual)}
              </div>
            </div>
            <ExportPdfButton formData={formData} results={results} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2">
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Bruto Mensual</span>
            <p className="text-lg font-bold text-slate-200 mt-1">{formatCurrency(results.grossMonthly)}</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Retención IRPF</span>
            <p className="text-lg font-bold text-amber-400 mt-1">{results.irpf.effectiveRate}%</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Seguridad Social</span>
            <p className="text-lg font-bold text-rose-400 mt-1">{formatCurrency(results.socialSecurity.totalDeductions / formData.payChecksCount)}/mes</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">IRPF Retenido</span>
            <p className="text-lg font-bold text-rose-400 mt-1">{formatCurrency(results.irpf.totalQuota / formData.payChecksCount)}/mes</p>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
            Desglose de Cotizaciones Anuales ({formData.autonomousCommunity})
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="text-xs text-slate-400 uppercase bg-slate-800/80 border-b border-slate-700">
                <tr>
                  <th className="py-3 px-4 font-semibold">Concepto de Deducción</th>
                  <th className="py-3 px-4 font-semibold">Porcentaje</th>
                  <th className="py-3 px-4 font-semibold text-right">Importe Anual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-3 px-4">Contingencias Comunes</td>
                  <td className="py-3 px-4 text-slate-400">4,70%</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.socialSecurity.commonContingencies)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Desempleo</td>
                  <td className="py-3 px-4 text-slate-400">
                    {formData.contractType === 'temporary' ? '1,60%' : '1,55%'}
                  </td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.socialSecurity.unemployment)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Formación Profesional</td>
                  <td className="py-3 px-4 text-slate-400">0,10%</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.socialSecurity.professionalTraining)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Mecanismo de Equidad Intergeneracional (MEI)</td>
                  <td className="py-3 px-4 text-slate-400">0,70%</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.socialSecurity.mei)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Retención IRPF (Estatal: {formatCurrency(results.irpf.stateQuota)} + Autonómica: {formatCurrency(results.irpf.regionalQuota)})</td>
                  <td className="py-3 px-4 text-slate-400">{results.irpf.effectiveRate}%</td>
                  <td className="py-3 px-4 text-right font-medium text-amber-300">{formatCurrency(results.irpf.totalQuota)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};`,

  'app/layout.tsx': `import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsentBanner } from '@/components/cookies/CookieConsentBanner';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col justify-between">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}`,

  'app/page.tsx': `import type { Metadata } from 'next';
import Link from 'next/link';
import { SalaryCalculator } from '@/components/calculators/SalaryCalculator';
import { AdBanner } from '@/components/ads/AdBanner';
import { COMMUNITIES_LIST } from '@/lib/engine/constants';

export const metadata: Metadata = {
  title: 'Calculadora de Sueldo Neto y Nómina Online | SueldoCalco.es',
  description: 'Calcula tu salario neto mensual y anual exacto en España. Desglose detallado de retenciones de IRPF por tramos, cotizaciones a la Seguridad Social y MEI.',
  metadataBase: new URL('https://sueldocalco.es'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Calculadora de Sueldo Neto y Nómina Online | SueldoCalco.es',
    description: 'Simula tu nómina en tiempo real: cálculo de bruto a neto, deducciones a la Seguridad Social, MEI y retención de IRPF.',
    url: 'https://sueldocalco.es',
    siteName: 'SueldoCalco.es',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://sueldocalco.es/#app',
        'name': 'Calculadora de Sueldo Neto SueldoCalco',
        'url': 'https://sueldocalco.es',
        'applicationCategory': 'FinanceApplication',
        'operatingSystem': 'All',
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'EUR' }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Calculadora de Sueldo Neto
        </h1>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Simula tu nómina en tiempo real: bruto a neto, cotizaciones a la Seguridad Social y retenciones de IRPF.
        </p>
      </div>

      <AdBanner slotId="1029384756" format="horizontal-banner" />

      <SalaryCalculator />

      <section className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          Cálculo de Sueldo Neto por Comunidad Autónoma
        </h2>
        <div className="flex flex-wrap gap-2">
          {COMMUNITIES_LIST.map((c) => (
            <Link
              key={c.slug}
              href={'/sueldo-neto/' + c.slug}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border bg-slate-50 text-slate-700 border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <article className="max-w-4xl mx-auto mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 text-slate-700 leading-relaxed text-sm">
        <h2 className="text-xl font-bold text-slate-900">Preguntas Frecuentes sobre el Cálculo Salarial</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900 text-base">¿Cómo se calcula el salario neto a partir del bruto en España?</h3>
            <p className="mt-1 text-slate-600">
              El salario neto se obtiene restando al salario bruto anual las aportaciones del trabajador a la Seguridad Social (6,35% en contratos indefinidos o 6,40% en contratos temporales) y el porcentaje de retención del IRPF fijado por la Agencia Tributaria en función de tus rendimientos y situación familiar.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 text-base">¿Qué es el Mecanismo de Equidad Intergeneracional (MEI)?</h3>
            <p className="mt-1 text-slate-600">
              Es una cotización finalista aplicable en todas las nóminas para reforzar el Fondo de Reserva de la Seguridad Social, suponiendo una deducción del 0,70% a cargo del trabajador sobre su base de contingencias comunes.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}`,

  'app/calculadora-finiquito/page.tsx': `'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { calculateSeverance, DismissalType, SeveranceInput } from '@/lib/engine/severance';
import { AdBanner } from '@/components/ads/AdBanner';

export default function FiniquitoPage() {
  const [formData, setFormData] = useState<SeveranceInput>({
    grossAnnualSalary: 26000,
    payChecksCount: 12,
    startDate: '2022-03-01',
    endDate: '2026-09-30',
    dismissalType: 'objective',
    unusedVacationDays: 5,
    daysWorkedInCurrentMonth: 30
  });

  const results = useMemo(() => {
    return calculateSeverance(formData);
  }, [formData]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 2
    }).format(val);
  };

  const handleInputChange = (field: keyof SeveranceInput, value: unknown) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">Calculadora de Finiquito e Indemnización</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculadora de Finiquito e Indemnización por Despido
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Calcula con precisión lo que te corresponde al finalizar tu relación laboral: salario pendiente del mes, vacaciones no disfrutadas, pagas extras e indemnización legal por cese.
          </p>
        </header>

        <AdBanner slotId="3322114455" format="horizontal-banner" />

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Datos de la Relación Laboral</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="grossAnnualSalary" className="block text-sm font-semibold text-slate-700">
                Salario Bruto Anual (€)
              </label>
              <input
                id="grossAnnualSalary"
                type="number"
                min="0"
                step="500"
                value={formData.grossAnnualSalary || ''}
                onChange={(e) => handleInputChange('grossAnnualSalary', Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="dismissalType" className="block text-sm font-semibold text-slate-700">
                Motivo de Extinción
              </label>
              <select
                id="dismissalType"
                value={formData.dismissalType}
                onChange={(e) => handleInputChange('dismissalType', e.target.value as DismissalType)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="objective">Despido Objetivo / ERE (20 días/año)</option>
                <option value="unfair">Despido Improcedente (33 / 45 días/año)</option>
                <option value="end_of_contract">Fin de Contrato Temporal (12 días/año)</option>
                <option value="voluntary">Baja Voluntaria (Sin indemnización)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="startDate" className="block text-sm font-semibold text-slate-700">
                Fecha de Inicio del Contrato
              </label>
              <input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="endDate" className="block text-sm font-semibold text-slate-700">
                Fecha de Finalización
              </label>
              <input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="vacation" className="block text-sm font-semibold text-slate-700">
                Días de Vacaciones Pendientes
              </label>
              <input
                id="vacation"
                type="number"
                min="0"
                max="60"
                value={formData.unusedVacationDays}
                onChange={(e) => handleInputChange('unusedVacationDays', Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="daysWorked" className="block text-sm font-semibold text-slate-700">
                Días Trabajados en el Mes de Salida
              </label>
              <input
                id="daysWorked"
                type="number"
                min="1"
                max="31"
                value={formData.daysWorkedInCurrentMonth}
                onChange={(e) => handleInputChange('daysWorkedInCurrentMonth', Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </section>

        <AdBanner slotId="8877665544" format="rectangle-card" />

        <section className="bg-slate-900 text-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Liquidación Total Estimada (Bruta)
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mt-1">
                {formatCurrency(results.totalLiquidation)}
              </div>
            </div>
            <div className="md:text-right">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Salario Diario Oficial
              </span>
              <p className="text-xl font-bold text-slate-200 mt-1">{formatCurrency(results.dailySalary)} / día</p>
              <span className="text-xs text-slate-500">{results.monthsWorkedTotal} meses computables</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="text-xs text-slate-400 uppercase bg-slate-800/80 border-b border-slate-700">
                <tr>
                  <th className="py-3 px-4">Concepto Liquidado</th>
                  <th className="py-3 px-4">Detalle</th>
                  <th className="py-3 px-4 text-right">Importe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-3 px-4 font-medium">Días trabajados del mes</td>
                  <td className="py-3 px-4 text-slate-400">{formData.daysWorkedInCurrentMonth} días devengados</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.currentMonthSalary)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Vacaciones no disfrutadas</td>
                  <td className="py-3 px-4 text-slate-400">{formData.unusedVacationDays} días pendientes</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.vacationSettlement)}</td>
                </tr>
                <tr className="bg-slate-800/40">
                  <td className="py-3 px-4 font-semibold text-slate-200">Subtotal Finiquito (Haberes)</td>
                  <td className="py-3 px-4 text-slate-400">Sujeto a IRPF y Seguridad Social</td>
                  <td className="py-3 px-4 text-right font-bold text-white">{formatCurrency(results.totalSettlementHaberes)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-amber-300">Indemnización por Despido</td>
                  <td className="py-3 px-4 text-slate-400">{results.compensationDays} días de indemnización legal</td>
                  <td className="py-3 px-4 text-right font-bold text-amber-300">{formatCurrency(results.compensationAmount)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}`,

  'app/tablas-irpf/page.tsx': `import Link from 'next/link';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata = {
  title: 'Tablas de IRPF y Tramos de Retención de la Nómina | SueldoCalco.es',
  description: 'Consulta los tramos vigentes del IRPF en España: escala estatal y autonómica, mínimo personal exento y reducciones por rendimientos del trabajo.',
};

export default function TablasIrpfPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">Guías Fiscales</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tramos del IRPF y Tablas de Retención en Nómina
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            El Impuesto sobre la Renta de las Personas Físicas (IRPF) es un tributo progresivo: a mayor base liquidable, mayor es el porcentaje que se aplica sobre cada tramo de ingresos.
          </p>
        </header>

        <AdBanner slotId="5544332211" format="horizontal-banner" />

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Escala Estatal y Autonómica General</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-xs text-slate-600 uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Tramo de Base Liquidable</th>
                  <th className="py-3 px-4 text-center">Tipo Estatal</th>
                  <th className="py-3 px-4 text-center">Tipo Autonómico Ref.</th>
                  <th className="py-3 px-4 text-right">Tipo Total Marginal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-medium">De 0 € a 12.450 €</td>
                  <td className="py-3 px-4 text-center">9,50%</td>
                  <td className="py-3 px-4 text-center">9,50%</td>
                  <td className="py-3 px-4 text-right font-semibold">19,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">De 12.450 € a 20.200 €</td>
                  <td className="py-3 px-4 text-center">12,00%</td>
                  <td className="py-3 px-4 text-center">12,00%</td>
                  <td className="py-3 px-4 text-right font-semibold">24,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">De 20.200 € a 35.200 €</td>
                  <td className="py-3 px-4 text-center">15,00%</td>
                  <td className="py-3 px-4 text-center">15,00%</td>
                  <td className="py-3 px-4 text-right font-semibold">30,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">De 35.200 € a 60.000 €</td>
                  <td className="py-3 px-4 text-center">18,50%</td>
                  <td className="py-3 px-4 text-center">18,50%</td>
                  <td className="py-3 px-4 text-right font-semibold">37,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">De 60.000 € a 300.000 €</td>
                  <td className="py-3 px-4 text-center">22,50%</td>
                  <td className="py-3 px-4 text-center">22,50%</td>
                  <td className="py-3 px-4 text-right font-semibold">45,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Más de 300.000 €</td>
                  <td className="py-3 px-4 text-center">24,50%</td>
                  <td className="py-3 px-4 text-center">22,50%</td>
                  <td className="py-3 px-4 text-right font-semibold">47,00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}`,

  'app/sueldo-neto/[comunidad]/page.tsx': `import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { COMMUNITIES_LIST } from '@/lib/engine/constants';
import { SalaryCalculator } from '@/components/calculators/SalaryCalculator';
import { AdBanner } from '@/components/ads/AdBanner';

interface PageProps {
  params: { comunidad: string };
}

export function generateStaticParams() {
  return COMMUNITIES_LIST.map((c) => ({
    comunidad: c.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const community = COMMUNITIES_LIST.find((c) => c.slug === params.comunidad);
  if (!community) return {};

  return {
    title: 'Calculadora de Sueldo Neto en ' + community.name + ' (IRPF Autonómico) | SueldoCalco.es',
    description: 'Calcula tu salario neto mensual y anual en ' + community.name + '. Simulación con tramos autonómicos de IRPF, Seguridad Social y MEI.',
    alternates: {
      canonical: '/sueldo-neto/' + community.slug,
    },
  };
}

export default function CommunitySalaryPage({ params }: PageProps) {
  const community = COMMUNITIES_LIST.find((c) => c.slug === params.comunidad);
  if (!community) notFound();

  return (
    <main className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <nav className="text-xs text-slate-500 flex justify-center items-center gap-2 mb-3">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Calculadora General</Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">{community.name}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Calculadora de Sueldo Neto en {community.name}
        </h1>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Simula tu nómina aplicando la escala autonómica del IRPF vigente en {community.name}.
        </p>
      </div>

      <AdBanner slotId="1029384756" format="horizontal-banner" />

      <SalaryCalculator initialCommunity={community.name} />

      <section className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          Calculadoras Salariales por Comunidad Autónoma
        </h2>
        <div className="flex flex-wrap gap-2">
          {COMMUNITIES_LIST.map((c) => (
            <Link
              key={c.slug}
              href={'/sueldo-neto/' + c.slug}
              className={'px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ' + (
                c.slug === community.slug
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              )}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}`,

  'app/aviso-legal/page.tsx': `export const metadata = {
  title: 'Aviso Legal | SueldoCalco.es',
  description: 'Términos de uso, titularidad y exención de responsabilidad de SueldoCalco.es',
};

export default function LegalNoticePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-700 leading-relaxed text-sm space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Aviso Legal</h1>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-slate-800">1. Información General</h2>
        <p>
          En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa que el portal web <strong>SueldoCalco.es</strong> pone a disposición de los usuarios herramientas de simulación salarial y laboral de carácter gratuito. Contacto: <strong>contacto@sueldocalco.es</strong>.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-slate-800">2. Exención de Responsabilidad Fiscal</h2>
        <p>
          Los resultados obtenidos en las calculadoras de SueldoCalco.es tienen carácter estrictamente orientativo e informativo y no constituyen asesoramiento jurídico, laboral o tributario vinculante.
        </p>
      </section>
    </main>
  );
}`,

  'app/privacidad/page.tsx': `export const metadata = {
  title: 'Política de Privacidad | SueldoCalco.es',
  description: 'Política de tratamiento de datos personales conforme al RGPD y la LOPDGDD.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-700 leading-relaxed text-sm space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Política de Privacidad</h1>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-slate-800">1. Procesamiento Local</h2>
        <p>
          Los datos salariales y personales introducidos en las calculadoras de <strong>SueldoCalco.es</strong> se procesan de forma 100% local en el navegador del usuario y nunca se transmiten ni almacenan en servidores externos.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-slate-800">2. Publicidad de Terceros (Google AdSense)</h2>
        <p>
          Este sitio utiliza servicios publicitarios de Google LLC, los cuales pueden emplear cookies para mostrar anuncios contextuales o personalizados únicamente si el usuario otorga su consentimiento explícito en el banner de privacidad.
        </p>
      </section>
    </main>
  );
}`,

  'app/cookies/page.tsx': `export const metadata = {
  title: 'Política de Cookies | SueldoCalco.es',
  description: 'Información detallada sobre las cookies utilizadas en SueldoCalco.es.',
};

export default function CookiesPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-700 leading-relaxed text-sm space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Política de Cookies</h1>
      <p>
        SueldoCalco.es emplea almacenamiento técnico local para recordar tu preferencia de privacidad y, bajo tu consentimiento previo, cookies publicitarias de Google AdSense (DoubleClick) para financiar el mantenimiento gratuito del portal.
      </p>
    </main>
  );
}`,

  'app/sitemap.ts': `import { MetadataRoute } from 'next';
import { COMMUNITIES_LIST } from '@/lib/engine/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sueldocalco.es';
  const currentDate = new Date();

  const communityRoutes: MetadataRoute.Sitemap = COMMUNITIES_LIST.map((c) => ({
    url: baseUrl + '/sueldo-neto/' + c.slug,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: baseUrl + '/calculadora-finiquito', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: baseUrl + '/tablas-irpf', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    ...communityRoutes,
    { url: baseUrl + '/aviso-legal', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: baseUrl + '/privacidad', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: baseUrl + '/cookies', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ];
}`,

  'app/robots.ts': `import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://sueldocalco.es/sitemap.xml',
  };
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Creado:', filePath);
}

console.log('\nProyecto SueldoCalco.es generado al 100%.');
