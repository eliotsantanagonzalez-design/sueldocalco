import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso Legal y Condiciones de Uso | SueldoCalco.es',
  description: 'Información legal, titularidad del dominio, propiedad intelectual y exención de responsabilidad jurídica y fiscal de SueldoCalco.es conforme a la LSSI-CE.',
  metadataBase: new URL('https://www.sueldocalco.es'),
  alternates: { canonical: '/aviso-legal' },
};

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-3xl mx-auto space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
        <header className="border-b border-slate-100 pb-4 space-y-2">
          <nav className="text-xs text-slate-500 flex items-center gap-2 mb-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors font-medium">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-semibold">Aviso Legal</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Aviso Legal y Condiciones de Uso
          </h1>
          <p className="text-xs text-slate-500">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
          </p>
        </header>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">1. Identificación del Titular del Sitio Web</h2>
          <p>
            El presente portal de información y simulación financiera, accesible bajo el nombre de dominio <strong>sueldocalco.es</strong> (en adelante, el "Sitio Web"), es una plataforma independiente de divulgación económica y laboral.
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
            <li><strong>Denominación comercial:</strong> SueldoCalco.es</li>
            <li><strong>Finalidad del portal:</strong> Difusión de información técnica laboral, tablas de IRPF y herramientas interactivas de simulación de nómina y liquidación de haberes.</li>
            <li><strong>Correo electrónico de contacto y notificaciones:</strong> <a href="mailto:contacto@sueldocalco.es" className="text-indigo-600 font-semibold underline">contacto@sueldocalco.es</a></li>
          </ul>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">2. Objeto y Ámbito de Aplicación</h2>
          <p>
            El acceso y uso de SueldoCalco.es confiere la condición de usuario e implica la aceptación plena de todas las disposiciones incluidas en este Aviso Legal, así como en nuestra <Link href="/privacidad" className="text-indigo-600 underline font-medium">Política de Privacidad</Link> y <Link href="/cookies" className="text-indigo-600 underline font-medium">Política de Cookies</Link>. El usuario se compromete a hacer un uso adecuado y diligente de las calculadoras y contenidos editoriales, de conformidad con la ley, la buena fe y el orden público.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">3. Exención Estricta de Responsabilidad Legal, Fiscal y Laboral</h2>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs leading-relaxed space-y-2">
            <p className="font-bold text-amber-900 text-sm">
              Aviso Importante sobre la Naturaleza de las Simulaciones:
            </p>
            <p>
              Las calculadoras de sueldo neto, finiquito, indemnización y tablas de retención de IRPF ofrecidas en SueldoCalco.es son herramientas matemáticas de simulación desarrolladas con fines estrictamente pedagógicos, orientativos y divulgativos.
            </p>
            <p>
              Aunque aplicamos la máxima diligencia en mantener actualizados todos los algoritmos conforme a la Ley 35/2006 del IRPF, el Reglamento de IRPF (Real Decreto 439/2007), la Ley General de la Seguridad Social (Real Decreto Legislativo 8/2015) y el Estatuto de los Trabajadores (Real Decreto Legislativo 2/2015), los resultados obtenidos <strong>no constituyen en ningún caso dictamen pericial, asesoramiento jurídico, laboral ni tributario vinculante</strong>.
            </p>
            <p>
              Cada nómina y liquidación real puede verse afectada por particularidades de convenios colectivos específicos, deducciones autonómicas singulares, pluses no cotizables o interpretaciones de la jurisdicción social. SueldoCalco.es no se responsabiliza de las decisiones económicas, contratos o reclamaciones formuladas en base a las simulaciones del portal, recomendando expresamente acudir a un <strong>graduado social colegiado, abogado laboralista o asesor fiscal</strong> para asuntos formales.
            </p>
          </div>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">4. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos editoriales, artículos explicativos, guías, estructura de navegación, código fuente, diseño gráfico, logotipos y algoritmos de cálculo son propiedad exclusiva de SueldoCalco.es o de sus legítimos autores licenciantes, estando protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
          </p>
          <p className="text-xs text-slate-500">
            Queda prohibida la reproducción total o parcial, explotación, distribución o comercialización de los contenidos y herramientas sin la autorización previa y por escrito de la titularidad del portal.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">5. Enlaces Externos e Hipervínculos</h2>
          <p>
            El portal puede incluir enlaces hipertextuales dirigidos a páginas web de organismos públicos oficiales (como la Agencia Tributaria, la Seguridad Social, el BOE o el SEPE). SueldoCalco.es no ejerce control alguno sobre dichos sitios de terceros y declina toda responsabilidad por los contenidos, políticas de privacidad o disponibilidad técnica de los mismos.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">6. Legislación Aplicable y Fuero Judicial</h2>
          <p>
            Las relaciones entre el usuario y SueldoCalco.es se regirán por la normativa española vigente. Para la resolución de cualquier controversia judicial relativa a la validez, interpretación o ejecución de las presentes condiciones, ambas partes se someten a la jurisdicción de los Juzgados y Tribunales competentes con arreglo a la legislación de consumidores y usuarios.
          </p>
        </section>

        <footer className="border-t border-slate-100 pt-6">
          <Link href="/" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
            ← Regresar a la Calculadora Principal
          </Link>
        </footer>
      </div>
    </main>
  );
}
