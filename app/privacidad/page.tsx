import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Cláusula Google AdSense | SueldoCalco.es',
  description: 'Política de Privacidad de SueldoCalco.es conforme al RGPD y la LOPDGDD. Información sobre el procesamiento local de datos salariales y uso de cookies publicitarias de Google AdSense.',
  metadataBase: new URL('https://www.sueldocalco.es'),
  alternates: { canonical: '/privacidad' },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-3xl mx-auto space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
        <header className="border-b border-slate-100 pb-4 space-y-2">
          <nav className="text-xs text-slate-500 flex items-center gap-2 mb-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors font-medium">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-semibold">Política de Privacidad</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Política de Privacidad y Protección de Datos
          </h1>
          <p className="text-xs text-slate-500">
            Conforme al Reglamento General de Protección de Datos (RGPD UE 2016/679) y a la Ley Orgánica 3/2018 (LOPDGDD).
          </p>
        </header>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">1. Responsable del Tratamiento de los Datos</h2>
          <p>
            El responsable del tratamiento de los datos personales recabados a través del sitio web <strong>sueldocalco.es</strong> es el equipo titular de SueldoCalco.es. Correo electrónico oficial de contacto para el ejercicio de derechos de privacidad: <a href="mailto:contacto@sueldocalco.es" className="text-indigo-600 font-semibold underline">contacto@sueldocalco.es</a>.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">2. Procesamiento 100% Local de Datos Salariales y Laborales</h2>
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs leading-relaxed space-y-1.5">
            <p className="font-bold text-emerald-900 text-sm">
              Garantía de Confidencialidad y Privacidad Total:
            </p>
            <p>
              Todos los datos financieros, importes salariales, fechas de contrato, número de hijos, nivel de discapacidad o circunstancias laborales que introduces en las calculadoras de SueldoCalco.es <strong>se procesan exclusivamente de forma local y en tiempo real en la memoria de tu propio navegador web (cliente)</strong> mediante JavaScript.
            </p>
            <p>
              Dichos datos jamás son enviados, transferidos, transmitidos ni almacenados en servidores de SueldoCalco.es ni en ninguna base de datos externa. Tu información salarial permanece en todo momento en tu propio dispositivo.
            </p>
          </div>
        </section>

        {/* Cláusula OBLIGATORIA de Google AdSense */}
        <section className="space-y-4 text-sm leading-relaxed text-slate-700 border-t border-slate-100 pt-6">
          <div className="border-l-4 border-indigo-600 pl-4 py-1">
            <h2 className="text-lg font-bold text-slate-900">
              3. Publicidad de Terceros: Cláusula Específica de Google AdSense y Cookies Asociadas
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Divulgación obligatoria en cumplimiento de las políticas de socios de Google AdSense y el RGPD.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-xs leading-relaxed text-slate-700">
            <p>
              Este sitio web utiliza <strong>Google AdSense</strong>, un servicio publicitario prestado por Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, EE.UU.) y Google Ireland Limited (Gordon House, Barrow Street, Dublín 4, Irlanda).
            </p>
            <p>
              Google, como proveedor asociado externo, <strong>utiliza cookies para publicar anuncios en este sitio web</strong>. La utilización de cookies publicitarias (incluida la cookie de DoubleClick / DART) permite a Google y a sus socios comerciales mostrar anuncios a nuestros usuarios en función de sus visitas anteriores a este sitio web o a otros sitios web en Internet.
            </p>
            <p>
              Los usuarios pueden <strong>inhabilitar la publicidad personalizada</strong> mediante la configuración de anuncios de Google. Para ello, puedes acceder directamente al siguiente enlace oficial:
            </p>
            <div className="pt-1">
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Configuración de anuncios de Google (Desactivar personalización) ↗
              </a>
            </div>
            <p className="pt-2">
              Asimismo, los usuarios tienen la posibilidad de inhabilitar el uso de cookies para publicidad personalizada por parte de otros proveedores terceros accediendo a los portales independientes de autorregulación del sector publicitario digital:
            </p>
            <p className="font-medium text-slate-900">
              • Portal DAA (Digital Advertising Alliance): <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.aboutads.info/choices/</a><br />
              • Portal EDAA (European Interactive Digital Advertising Alliance): <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.youronlinechoices.eu/</a><br />
              • Portal NAI (Network Advertising Initiative): <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">optout.networkadvertising.org/</a>
            </p>
            <p>
              En SueldoCalco.es no se cargan cookies de personalización publicitaria de terceros hasta que el usuario otorga su consentimiento previo y expreso a través de nuestro banner de gestión de cookies conforme a las directrices de la Agencia Española de Protección de Datos (AEPD).
            </p>
          </div>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700 border-t border-slate-100 pt-6">
          <h2 className="text-base font-bold text-slate-900">4. Datos de Contacto Facilitados por el Usuario</h2>
          <p>
            En caso de que el usuario remita voluntariamente un correo electrónico a nuestro buzón de atención (<a href="mailto:contacto@sueldocalco.es" className="text-indigo-600 font-semibold underline">contacto@sueldocalco.es</a>), los datos suministrados (como nombre y dirección de correo) serán tratados con la exclusiva finalidad de resolver las consultas, dudas o sugerencias formuladas, amparado en el consentimiento del propio interesado. Estos datos no serán cedidos a terceros ni utilizados para fines comerciales.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">5. Derechos del Usuario (Derechos ARCO y RGPD)</h2>
          <p>
            En virtud de la normativa europea y española de protección de datos, el usuario tiene derecho a ejercitar en cualquier momento y de forma gratuita sus derechos de:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
            <li><strong>Acceso:</strong> Conocer si se están tratando sus datos personales.</li>
            <li><strong>Rectificación:</strong> Solicitar la modificación de datos inexactos o incompletos.</li>
            <li><strong>Supresión (Derecho al olvido):</strong> Solicitar la eliminación de sus datos personales.</li>
            <li><strong>Limitación del tratamiento:</strong> Solicitar que se limite el alcance del tratamiento de datos.</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado de uso común.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para finalidades concretas.</li>
          </ul>
          <p className="text-xs text-slate-500">
            Para ejercer estos derechos, basta con remitir una comunicación por escrito al correo electrónico <a href="mailto:contacto@sueldocalco.es" className="text-indigo-600 font-medium underline">contacto@sueldocalco.es</a> indicando como asunto "Protección de Datos". En caso de considerar vulnerados sus derechos, el usuario tiene derecho a presentar una reclamación ante la autoridad de control nacional competente: la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.aepd.es</a>.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-bold text-slate-900">6. Modificaciones de la Política de Privacidad</h2>
          <p>
            SueldoCalco.es se reserva el derecho a modificar la presente política para adaptarla a futuras novedades legislativas, jurisprudenciales o recomendaciones de la Agencia Española de Protección de Datos. Toda modificación será publicada de forma visible en esta misma página con indicación de su fecha de actualización.
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
