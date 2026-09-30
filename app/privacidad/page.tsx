export const metadata = {
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
}