import { notFound } from 'next/navigation';
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
}