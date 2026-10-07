import Link from 'next/link';

export const metadata = {
  title: 'Tablas de IRPF y Tramos de Retención de la Nómina | SueldoCalco.es',
  description: 'Consulta los tramos vigentes del IRPF en España: escala estatal y autonómica, mínimo personal exento y reducciones por rendimientos del trabajo.',
};

export default function TablasIrpfPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">Guías Fiscales</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tramos del IRPF y Tablas de Retención en Nómina
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            El Impuesto sobre la Renta de las Personas Físicas (IRPF) es un tributo progresivo: a mayor base liquidable, mayor es el porcentaje que se aplica sobre cada tramo de ingresos.
          </p>
        </header>


        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Escala Estatal y Autonómica General</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-xs text-slate-600 uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Tramo de Base Liquidable</th>
                  <th className="py-3 px-4 text-center">Tipo Estatal</th>
                  <th className="py-3 px-4 text-center">Tipo Autonómico Ref.</th>
                  <th className="py-3 px-4 text-right">Tipo Total Marginal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-medium">De 0 € a 12.450 €</td>
                  <td className="py-3 px-4 text-center">9,50%</td>
                  <td className="py-3 px-4 text-center">9,50%</td>
                  <td className="py-3 px-4 text-right font-semibold">19,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">De 12.450 € a 20.200 €</td>
                  <td className="py-3 px-4 text-center">12,00%</td>
                  <td className="py-3 px-4 text-center">12,00%</td>
                  <td className="py-3 px-4 text-right font-semibold">24,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">De 20.200 € a 35.200 €</td>
                  <td className="py-3 px-4 text-center">15,00%</td>
                  <td className="py-3 px-4 text-center">15,00%</td>
                  <td className="py-3 px-4 text-right font-semibold">30,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">De 35.200 € a 60.000 €</td>
                  <td className="py-3 px-4 text-center">18,50%</td>
                  <td className="py-3 px-4 text-center">18,50%</td>
                  <td className="py-3 px-4 text-right font-semibold">37,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">De 60.000 € a 300.000 €</td>
                  <td className="py-3 px-4 text-center">22,50%</td>
                  <td className="py-3 px-4 text-center">22,50%</td>
                  <td className="py-3 px-4 text-right font-semibold">45,00%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Más de 300.000 €</td>
                  <td className="py-3 px-4 text-center">24,50%</td>
                  <td className="py-3 px-4 text-center">22,50%</td>
                  <td className="py-3 px-4 text-right font-semibold">47,00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}