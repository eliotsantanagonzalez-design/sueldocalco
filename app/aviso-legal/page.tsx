export const metadata = {
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
}