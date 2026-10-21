import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Cookies y Configuración | SueldoCalco.es',
  description: 'Información detallada sobre las cookies utilizadas en SueldoCalco.es, cookies de terceros de Google AdSense, finalidades y guía para su gestión o bloqueo.',
  metadataBase: new URL('https://www.sueldocalco.es'),
  alternates: { canonical: '/cookies' },
};

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-3xl mx-auto space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
        <header className="border-b border-slate-100 pb-4 space-y-2">
          <nav className="text-xs text-slate-500 flex items-center gap-2 mb-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors font-medium">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-semibold">Política de Cookies</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Política de Cookies y Transparencia
          </h1>
          <p className="text-xs text-slate-500">
            En cumplimiento del artículo 22.2 de la Ley 34/2002 (LSSI-CE) y de la Directiva europea 2002/58/CE (ePrivacy).
          </p>
        </header>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">1. ¿Qué es una Cookie y para qué se utiliza?</h2>
          <p>
            Una <em>cookie</em> es un pequeño fichero de texto que un sitio web descarga y almacena en el navegador o dispositivo del usuario (ordenador, smartphone o tablet) durante su navegación. Las cookies permiten a una página web recordar información sobre tu visita, como tu idioma preferido, tus opciones de consentimiento de privacidad o tus hábitos de navegación para optimizar la experiencia de uso.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">2. Tipología de Cookies Empleadas en SueldoCalco.es</h2>
          <p>
            En este portal web se utilizan tanto cookies propias como de terceros con diferentes finalidades debidamente categorizadas:
          </p>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="text-indigo-700 text-sm block font-bold">
                A. Cookies Técnicas y Estrictamente Necesarias (Exentas de consentimiento)
              </strong>
              <p>
                Son imprescindibles para el correcto funcionamiento técnico del sitio web y la prestación del servicio solicitado por el usuario. Permiten, por ejemplo, recordar si el usuario ha aceptado o rechazado el banner de cookies y garantizar la seguridad de la navegación. Sin ellas, el sitio no funcionaría con normalidad.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="text-amber-700 text-sm block font-bold">
                B. Cookies Publicitarias y de Terceros (Google AdSense / DoubleClick)
              </strong>
              <p>
                SueldoCalco.es financia sus costes de mantenimiento de servidores y desarrollo editorial continuo mediante publicidad contextual y personalizada servida por <strong>Google LLC</strong>. Estas cookies permiten a Google y a sus afiliados mostrar anuncios relevantes adaptados a los intereses del usuario según su navegación previa en Internet. Solo se instalan con el consentimiento explícito del usuario.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">3. Tabla Descriptiva de Cookies</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-3">Nombre</th>
                  <th className="py-3 px-3">Proveedor</th>
                  <th className="py-3 px-3">Finalidad</th>
                  <th className="py-3 px-3">Caducidad</th>
                  <th className="py-3 px-3">Tipo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-mono font-medium text-slate-900">cookie_consent</td>
                  <td className="py-2.5 px-3">SueldoCalco.es</td>
                  <td className="py-2.5 px-3">Registra la elección del usuario sobre la aceptación de cookies.</td>
                  <td className="py-2.5 px-3">1 año</td>
                  <td className="py-2.5 px-3 font-semibold text-emerald-700">Técnica</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-mono font-medium text-slate-900">_gads / __gpi</td>
                  <td className="py-2.5 px-3">Google AdSense</td>
                  <td className="py-2.5 px-3">Mide la interacción del usuario con anuncios y previene fraude publicitario.</td>
                  <td className="py-2.5 px-3">13 meses</td>
                  <td className="py-2.5 px-3 font-semibold text-amber-700">Publicitaria</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-mono font-medium text-slate-900">IDE</td>
                  <td className="py-2.5 px-3">Google DoubleClick</td>
                  <td className="py-2.5 px-3">Muestra anuncios personalizados en función del perfil de navegación.</td>
                  <td className="py-2.5 px-3">1 año</td>
                  <td className="py-2.5 px-3 font-semibold text-amber-700">Publicitaria</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">4. Cómo Administrar, Bloquear o Eliminar Cookies en tu Navegador</h2>
          <p>
            El usuario puede permitir, bloquear o eliminar en cualquier momento las cookies instaladas en su equipo mediante la configuración de las opciones del navegador web que utilice:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
            <li>
              <strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies de terceros. (<a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Guía oficial</a>)
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Ajustes &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio. (<a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Guía oficial</a>)
            </li>
            <li>
              <strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies. (<a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Guía oficial</a>)
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio &gt; Administrar y eliminar cookies. (<a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Guía oficial</a>)
            </li>
          </ul>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">5. Inhabilitación de Anuncios Personalizados de Google</h2>
          <p>
            Si deseas evitar que Google utilice tus datos de navegación para ofrecerte publicidad personalizada, puedes deshabilitarlo de forma inmediata en la <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">Configuración de anuncios de Google</a> o a través de la plataforma de la Alianza de Publicidad Digital en <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">aboutads.info/choices</a>.
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
