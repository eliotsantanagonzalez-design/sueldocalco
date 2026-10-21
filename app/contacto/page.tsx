import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre Nosotros, Metodología y Contacto Oficial | SueldoCalco.es',
  description: 'Conoce al equipo editorial y técnico de SueldoCalco.es, nuestra metodología de cálculo de nóminas e IRPF contrastada con fuentes oficiales (BOE, AEAT, TGSS) y canales de contacto directo.',
  metadataBase: new URL('https://www.sueldocalco.es'),
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Sobre SueldoCalco.es: Metodología, Fuentes Oficiales y Contacto',
    description: 'Portal de referencia en simulación salarial y fiscal en España. Conoce cómo calculamos las nóminas y el finiquito de acuerdo a las directrices de la Agencia Tributaria y la Seguridad Social.',
    url: 'https://www.sueldocalco.es/contacto',
    siteName: 'SueldoCalco.es',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function ContactoPage() {
  const officialSources = [
    {
      name: 'Boletín Oficial del Estado (BOE)',
      desc: 'Publicación de los Presupuestos Generales del Estado, reformas del Estatuto de los Trabajadores y tablas salariales oficiales.',
      url: 'https://www.boe.es'
    },
    {
      name: 'Agencia Estatal de Administración Tributaria (AEAT)',
      desc: 'Algoritmo oficial del cálculo de retenciones del IRPF, Ley 35/2006 y tablas impositivas de las Comunidades Autónomas.',
      url: 'https://sede.agenciatributaria.gob.es'
    },
    {
      name: 'Tesorería General de la Seguridad Social (TGSS)',
      desc: 'Orden anual de cotización con bases mínimas, bases máximas, contingencias comunes y tipo del Mecanismo de Equidad Intergeneracional (MEI).',
      url: 'https://www.seg-social.es'
    },
    {
      name: 'Servicio Público de Empleo Estatal (SEPE)',
      desc: 'Normativa de prestaciones y subsidios por desempleo, requisitos de cotización y bases reguladoras tras extinción de contrato.',
      url: 'https://www.sepe.es'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Cabecera */}
        <header className="space-y-3">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors font-medium">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-semibold">Sobre Nosotros y Contacto</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
            E-E-A-T: Autoridad, Rigor y Transparencia
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sobre SueldoCalco.es, Metodología y Contacto
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Nuestra misión es hacer accesible, comprensible y transparente el complejo ecosistema fiscal y laboral español a través de simuladores independientes de máxima precisión.
          </p>
        </header>

        {/* Quiénes somos y Filosofía */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            Quiénes Somos y Propósito del Proyecto
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>SueldoCalco.es</strong> nace como una iniciativa tecnológica y editorial independiente especializada en economía laboral, derecho del trabajo y tributación en España. Observamos que miles de trabajadores y profesionales afrontan dudas cotidianas al interpretar su nómina, negociar un contrato laboral o revisar un finiquito tras un despido.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Nuestro equipo combina experiencia en ingeniería de software con especialistas en asesoría laboral y análisis de datos públicos, diseñando simuladores que procesan la normativa tributaria en milisegundos sin comprometer la privacidad del usuario.
          </p>
        </section>

        {/* Metodología de Cálculo */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Metodología de Cálculo y Verificación Técnica
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            La fiabilidad matemática es el pilar central de nuestras herramientas. Todos los motores de cálculo alojados en SueldoCalco.es se someten a los siguientes estándares de verificación:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
              <strong className="text-slate-900 block text-sm font-semibold">Auditoría Fiscal Continua</strong>
              <p className="text-slate-600">
                Contrastamos nuestros resultados con el <em>Servicio Oficial de Cálculo de Retenciones de la Agencia Tributaria</em> para garantizar desviaciones de 0,00 €.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
              <strong className="text-slate-900 block text-sm font-semibold">Procesamiento Local</strong>
              <p className="text-slate-600">
                Garantía estricta de no almacenamiento: los cálculos se ejecutan en el navegador del usuario en memoria RAM volátil, sin transmisión a servidores.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
              <strong className="text-slate-900 block text-sm font-semibold">Desglose Autonómico</strong>
              <p className="text-slate-600">
                Integración de las 17 comunidades autónomas con sus escalas impositivas específicas actualizadas según las leyes autonómicas de presupuestos.
              </p>
            </div>
          </div>
        </section>

        {/* Fuentes Oficiales Consultadas */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            Fuentes Oficiales y Normativa de Referencia
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Nuestras fórmulas y contenidos editoriales se fundamentan en fuentes primarias de la administración pública española:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-1">
            {officialSources.map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-indigo-50/50 hover:border-indigo-300 transition-all space-y-1 group block"
              >
                <div className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors flex items-center justify-between">
                  <span>{source.name}</span>
                  <span className="text-indigo-500 text-sm">↗</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{source.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contacto y Sugerencias */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              Vías de Contacto, Consultas y Reporte de Erratas
            </h2>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              Agradecemos la colaboración de nuestros usuarios para mantener la plataforma con el máximo nivel de rigor y excelencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <strong className="text-slate-900 text-sm block">¿Por qué escribirnos?</strong>
              <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside leading-relaxed">
                <li><strong>Reporte de discrepancias o erratas:</strong> Si detectas alguna diferencia con tu nómina o cambio regulatorio en tu comunidad.</li>
                <li><strong>Propuestas de nuevas herramientas:</strong> Si necesitas simuladores de autónomos, IRPF para jubilados o deducciones familiares.</li>
                <li><strong>Consultas de prensa o académicas:</strong> Análisis de datos fiscales y tendencias de salarios en España.</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block">
                Canal Oficial de Atención
              </span>
              <p className="text-xs text-slate-600">
                Escríbenos directamente y nuestro equipo técnico o editorial te responderá en un plazo máximo de 48 horas hábiles:
              </p>
              <div className="p-3 bg-white rounded-lg border border-slate-300 text-center">
                <a
                  href="mailto:contacto@sueldocalco.es"
                  className="text-indigo-600 hover:text-indigo-800 font-bold text-base sm:text-lg break-all transition-colors"
                >
                  contacto@sueldocalco.es
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enlace de vuelta */}
        <div className="text-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors shadow-sm"
          >
            ← Volver a la Calculadora de Sueldo Neto
          </Link>
        </div>

      </div>
    </main>
  );
}
