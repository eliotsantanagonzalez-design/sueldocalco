import type { Metadata } from 'next';
import Link from 'next/link';
import { SalaryCalculator } from '@/components/calculators/SalaryCalculator';
import { AdBanner } from '@/components/ads/AdBanner';
import { COMMUNITIES_LIST } from '@/lib/engine/constants';

export const metadata: Metadata = {
  title: 'Calculadora de Sueldo Neto y Nómina Online | SueldoCalco.es',
  description: 'Calcula tu salario neto mensual y anual exacto en España. Desglose detallado de retenciones de IRPF por tramos, cotizaciones a la Seguridad Social y MEI.',
  metadataBase: new URL('https://www.sueldocalco.es'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Calculadora de Sueldo Neto y Nómina Online | SueldoCalco.es',
    description: 'Simula tu nómina en tiempo real: cálculo de bruto a neto, deducciones a la Seguridad Social, MEI y retención de IRPF.',
    url: 'https://www.sueldocalco.es',
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
        '@id': 'https://www.sueldocalco.es/#app',
        'name': 'Calculadora de Sueldo Neto SueldoCalco',
        'url': 'https://www.sueldocalco.es',
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
}