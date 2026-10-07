import type { Metadata } from 'next';
import Link from 'next/link';
import { SalaryCalculator } from '@/components/calculators/SalaryCalculator';
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

      <section className="mt-16 border-t border-slate-200 pt-12 space-y-12 text-slate-800">
          <article className="prose max-w-none space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Guía completa: Cómo interpretar y calcular tu nómina en España
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Comprender la diferencia exacta entre el salario bruto pactado y el sueldo neto que ingresas cada mes es fundamental para negociar condiciones laborales y planificar tu economía personal. En España, la brecha entre el salario bruto y el neto está compuesta principalmente por dos partidas obligatorias: las cotizaciones a la Seguridad Social a cargo del trabajador y las retenciones a cuenta del Impuesto sobre la Renta de las Personas Físicas (IRPF).
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Cotizaciones a la Seguridad Social</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Son aportaciones obligatorias destinadas a financiar la cobertura sanitaria, pensiones de jubilación, prestaciones por desempleo y bajas médicas:
                </p>
                <ul className="text-sm space-y-1.5 text-slate-700 list-disc list-inside">
                  <li><strong>Contingencias Comunes:</strong> 4,70% sobre la base de cotización.</li>
                  <li><strong>Desempleo:</strong> 1,55% en contratos indefinidos (1,60% en temporales).</li>
                  <li><strong>Formación Profesional:</strong> 0,10%.</li>
                  <li><strong>Mecanismo de Equidad Intergeneracional (MEI):</strong> 0,70% aplicable para reforzar la hucha de las pensiones.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Retenciones del IRPF</h3>
                <p className="text-sm text-slate-600 mb-3">
                  El IRPF es un impuesto progresivo estatal y autonómico. Las empresas retienen una cantidad mensual como anticipo de tu Declaración de la Renta anual:
                </p>
                <ul className="text-sm space-y-1.5 text-slate-700 list-disc list-inside">
                  <li>Se calcula según tus ingresos anuales estimados y tu situación personal.</li>
                  <li>El mínimo exento protege las rentas más bajas para que no sufran retención.</li>
                  <li>Tener descendientes o ascendientes a cargo y el grado de discapacidad aumentan los mínimos desgravables.</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Preguntas Frecuentes sobre el Salario Neto y Nóminas
            </h2>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold text-slate-900 mb-2">¿Cómo influyen 12 o 14 pagas en el salario neto total?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  El importe total anual que recibes es exactamente el mismo. Con 14 pagas, recibes una nómina mensual inferior durante el año más dos pagas extraordinarias (generalmente en verano y diciembre). Si eliges 12 pagas, las pagas extras se prorratean de manera uniforme cada mes. Las retenciones y cotizaciones anuales totales no varían por el número de pagas.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold text-slate-900 mb-2">¿Por qué cambia el IRPF si cambio de empresa a mitad de año?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cada empresa calcula el tipo de retención anual estimando que trabajarás con ellos durante todo el ejercicio. Al incorporarte a una nueva empresa a mitad de año, esta puede aplicar un IRPF reducido porque solo computa el dinero que ellos te pagarán en los meses restantes. Esto suele provocar que en la Declaración de la Renta debas abonar la diferencia a la Agencia Tributaria. Puedes solicitar por escrito a Recursos Humanos que te apliquen un porcentaje mayor de IRPF voluntario.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold text-slate-900 mb-2">¿Cuál es la diferencia entre la escala estatal y autonómica del IRPF?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  El impuesto del IRPF en España está cedido en un 50% al Estado y en un 50% a la Comunidad Autónoma de residencia fiscal. Cada comunidad tiene potestad legislativa para regular sus propios tramos impositivos y deducciones por alquiler, nacimiento de hijos o guardería, lo que hace que dos trabajadores con idéntico sueldo bruto perciban un salario neto ligeramente distinto en Madrid, Cataluña o Andalucía.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold text-slate-900 mb-2">¿Qué es la base de cotización máxima a la Seguridad Social?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Existe un tope salarial fijado anualmente por ley a partir del cual el salario bruto no cotiza a la Seguridad Social. Todos los ingresos por encima de dicha base máxima tributan íntegramente por IRPF, pero ya no sufren deducciones de cotización del 6,35% / 6,40%, fijando el límite superior de las futuras prestaciones y pensiones.
                </p>
              </div>
            </div>
          </article>
        </section>

  </main>
  );
}