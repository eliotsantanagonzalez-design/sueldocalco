import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contacto y Sobre Nosotros | SueldoCalco.es',
  description: 'Información sobre el proyecto SueldoCalco.es, equipo editorial y formulario de contacto para sugerencias, dudas fiscales o laborales.',
  alternates: { canonical: '/contacto' },
};

export default function ContactoPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Sobre SueldoCalco.es y Contacto</h1>
      
      <section className="space-y-4 text-base leading-relaxed text-slate-700 mb-8">
        <p>
          <strong>SueldoCalco.es</strong> es una iniciativa informativa y tecnológica independiente desarrollada para facilitar a trabajadores, autónomos y empleadores la comprensión de sus nóminas y liquidaciones en España.
        </p>
        <p>
          Nuestro objetivo es aportar claridad y transparencia al marco fiscal y laboral español, facilitando estimaciones actualizadas de retenciones de IRPF, aportaciones a la Seguridad Social y cálculos de finiquito conforme a la normativa vigente del Ministerio de Hacienda y de la Seguridad Social.
        </p>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3 text-slate-900">Compromiso Editorial y Metodología</h2>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          Todos nuestros cálculos y tablas se actualizan periódicamente siguiendo las disposiciones publicadas en el Boletín Oficial del Estado (BOE), la Ley del Impuesto sobre la Renta de las Personas Físicas (LIRPF) y los tipos de cotización aprobados anualmente para contingencias comunes, desempleo, formación y el Mecanismo de Equidad Intergeneracional (MEI).
        </p>
        <p className="text-slate-700 text-sm leading-relaxed">
          <em>Aviso:</em> Las calculadoras ofrecen simulaciones con fines informativos y pedagógicos. Para situaciones tributarias complejas o asesoramiento vinculante, recomendamos acudir a un asesor laboral colegiado o a los canales oficiales de la Agencia Tributaria.
        </p>
      </section>

      <section className="border-t border-slate-200 pt-8">
        <h2 className="text-xl font-semibold mb-4 text-slate-900">Contacto y Sugerencias</h2>
        <p className="text-slate-700 mb-4">
          Si has detectado alguna errata, tienes sugerencias para mejorar las herramientas o deseas ponerte en contacto con el responsable del proyecto, puedes escribirnos directamente:
        </p>
        <div className="bg-white border border-slate-300 rounded-lg p-4 inline-block">
          <p className="text-sm text-slate-600 mb-1">Correo electrónico de contacto:</p>
          <a 
            href="mailto:contacto@sueldocalco.es" 
            className="text-emerald-700 font-semibold hover:underline text-lg"
          >
            contacto@sueldocalco.es
          </a>
        </div>
      </section>

      <div className="mt-8 pt-4">
        <Link href="/" className="text-emerald-700 hover:underline font-medium text-sm">
          ← Volver a la Calculadora de Sueldo Neto
        </Link>
      </div>
    </main>
  );
}