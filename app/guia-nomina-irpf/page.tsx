import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Leer una Nómina Paso a Paso y Glosario Laboral | SueldoCalco.es',
  description: 'Guía práctica oficial para entender tu nómina en España: encabezado, devengos salariales y extrasalariales, deducciones de IRPF y Seguridad Social, bases de cotización y glosario laboral con 15 términos clave.',
  metadataBase: new URL('https://www.sueldocalco.es'),
  alternates: { canonical: '/guia-nomina-irpf' },
  openGraph: {
    title: 'Cómo Leer e Interpretar tu Nómina en España | Guía Completa',
    description: 'Aprende a interpretar cada casilla de tu recibo de salarios: bases de cotización (BCCC y BCCP), retenciones de IRPF, aportación de la empresa y glosario laboral.',
    url: 'https://www.sueldocalco.es/guia-nomina-irpf',
    siteName: 'SueldoCalco.es',
    locale: 'es_ES',
    type: 'article',
  },
};

export default function GuiaNominaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.sueldocalco.es/guia-nomina-irpf#article',
        'headline': 'Cómo Leer e Interpretar una Nómina en España: Guía Paso a Paso y Glosario Laboral',
        'description': 'Manual exhaustivo para entender las partes de la nómina: devengos, deducciones, bases de cotización a la Seguridad Social y retenciones del IRPF.',
        'url': 'https://www.sueldocalco.es/guia-nomina-irpf',
        'publisher': {
          '@type': 'Organization',
          'name': 'SueldoCalco.es',
          'url': 'https://www.sueldocalco.es'
        },
        'inLanguage': 'es-ES'
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Inicio',
            'item': 'https://www.sueldocalco.es'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Guía de Nómina e IRPF',
            'item': 'https://www.sueldocalco.es/guia-nomina-irpf'
          }
        ]
      }
    ]
  };

  const glossaryTerms = [
    {
      term: '1. Salario Bruto',
      def: 'Suma de todas las percepciones económicas que percibe el trabajador antes de aplicar las deducciones de cotización a la Seguridad Social y las retenciones a cuenta del IRPF. Es la cifra de referencia en convenios colectivos y contratos.'
    },
    {
      term: '2. Salario Neto (Líquido a Percibir)',
      def: 'Cantidad real y definitiva que la empresa ingresa en la cuenta bancaria del trabajador tras practicar todos los descuentos legales de Seguridad Social e IRPF. Salario Neto = Salario Bruto - Deducciones.'
    },
    {
      term: '3. Base de Cotización',
      def: 'Importe sobre el que se aplican los porcentajes de cotización de la Seguridad Social. Incluye las retribuciones dinerarias mensuales más la parte proporcional de las pagas extraordinarias devengadas.'
    },
    {
      term: '4. Base Liquidable del IRPF',
      def: 'Magnitud económica resultante de restar a la base imponible general las reducciones por rendimientos del trabajo, aportaciones a planes de pensiones y pensiones compensatorias.'
    },
    {
      term: '5. Devengos',
      def: 'Totalidad de los conceptos retributivos reconocidos al trabajador en el mes. Se dividen en percepciones salariales (salario base, pluses) y percepciones extrasalariales (dietas, kilometraje).'
    },
    {
      term: '6. Deducciones',
      def: 'Detracciones legales obligatorias practicadas sobre el salario bruto: cuotas de Seguridad Social del trabajador (7,05%), retención de IRPF, anticipos o embargos judiciales.'
    },
    {
      term: '7. Contingencias Comunes (BCCC)',
      def: 'Aportación destinada a financiar la cobertura de situaciones ajenas al trabajo, tales como jubilación, incapacidad temporal por enfermedad común, viudedad y maternidad (4,70% trabajador / 23,60% empresa).'
    },
    {
      term: '8. Contingencias Profesionales (BCCP)',
      def: 'Cuotas que cubren accidentes de trabajo y enfermedades profesionales (AT/EP), desempleo, formación profesional y el Fondo de Garantía Salarial (FOGASA).'
    },
    {
      term: '9. Mecanismo de Equidad Intergeneracional (MEI)',
      def: 'Aportación finalista introducida por ley para nutrir el Fondo de Reserva de la Seguridad Social y garantizar la sostenibilidad de las pensiones ante la jubilación de la generación del baby boom.'
    },
    {
      term: '10. Mínimo Personal y Familiar',
      def: 'Importe monetario de la renta del contribuyente no sujeto a tributación por considerarse indispensable para satisfacer las necesidades básicas vitales del trabajador y su unidad familiar.'
    },
    {
      term: '11. Pagas Prorrateadas',
      def: 'Modalidad de abono salarial mediante la cual el importe de las pagas extraordinarias se divide y distribuye proporcionalmente de forma equitativa en las doce mensualidades del año.'
    },
    {
      term: '12. Grupo de Cotización',
      def: 'Categorización oficial de la Seguridad Social (del grupo 1 al 11) que clasifica al trabajador según sus funciones y titulación académica para fijar sus bases mínimas y máximas de cotización.'
    },
    {
      term: '13. Salario Mínimo Interprofesional (SMI)',
      def: 'Retribución económica mínima legal que puede percibir un trabajador por una jornada completa de trabajo fijada anualmente por Real Decreto del Gobierno.'
    },
    {
      term: '14. Finiquito (Liquidación de Haberes)',
      def: 'Documento contable y legal que liquida todas las cantidades devengadas y no pagadas hasta la fecha de extinción: días de mes trabajados, vacaciones no disfrutadas y pagas extras pendientes.'
    },
    {
      term: '15. Indemnización por Despido',
      def: 'Compensación económica legal que percibe el empleado como resarcimiento por la extinción no voluntaria de su puesto de trabajo, graduada según los días por año de servicio y la causa del despido.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Cabecera */}
        <header className="space-y-3">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors font-medium">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-semibold">Guía Editorial de Nómina e IRPF</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
            Manual Práctico Laboral y Fiscal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Cómo Leer e Interpretar tu Nómina en España: Guía Paso a Paso
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Descifra cada una de las casillas de tu recibo de salarios: encabezado, devengos salariales y extrasalariales, deducciones de la Seguridad Social, retenciones del IRPF y bases de cotización.
          </p>
        </header>

        {/* Estructura de la Nómina */}
        <section className="space-y-8">
          
          {/* Bloque 1: Encabezado */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm">
                1
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                El Encabezado: Identificación de la Empresa y del Trabajador
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              La parte superior de la nómina contiene los datos identificativos y contractuales de ambas partes. Verificar que estos datos sean correctos es vital para asegurar que estás cotizando bajo tu categoría profesional real:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                <strong className="text-slate-900 block text-sm mb-1">Datos de la Empresa</strong>
                <p>• <strong>Razón Social:</strong> Nombre legal de la empresa empleadora.</p>
                <p>• <strong>CIF:</strong> Código de Identificación Fiscal.</p>
                <p>• <strong>Domicilio Social:</strong> Dirección física de la compañía.</p>
                <p>• <strong>Código de Cuenta de Cotización (CCC):</strong> Número de inscripción de la empresa ante la TGSS.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                <strong className="text-slate-900 block text-sm mb-1">Datos del Trabajador</strong>
                <p>• <strong>Nombre y DNI/NIE:</strong> Identificación oficial del empleado.</p>
                <p>• <strong>Número de Afiliación (NAF):</strong> Tu número propio de la Seguridad Social.</p>
                <p>• <strong>Grupo de Cotización:</strong> Clasificación del 1 al 11 según titulación y puesto.</p>
                <p>• <strong>Fecha de Antigüedad:</strong> Fecha oficial de inicio (clave para calcular indemnizaciones).</p>
                <p>• <strong>Tipo de Contrato:</strong> Código oficial (ej. 100 para indefinido ordinario a jornada completa).</p>
              </div>
            </div>
          </article>

          {/* Bloque 2: Periodo de liquidación */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm">
                2
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Periodo de Liquidación y Total de Días
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Indica el mes exacto que se está retribuyendo (por ejemplo, del 1 al 31 de mayo). Los trabajadores con retribución mensual cotizan siempre sobre <strong>30 días</strong> fijos, con independencia de que el mes tenga 28, 30 o 31 días. En cambio, los trabajadores con retribución diaria cotizan por el número natural exacto de días del mes.
            </p>
          </article>

          {/* Bloque 3: Devengos */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm">
                3
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Los Devengos: Percepciones Salariales y Extrasalariales
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Los devengos representan todas las cantidades monetarias o en especie devengadas por el empleado. La suma de todos los devengos conforma el <strong>Salario Bruto Total</strong> del mes. Es crucial distinguir entre:
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                <div className="font-bold text-indigo-700 text-sm">Percepciones Salariales (Cotizan y Tributan)</div>
                <p>Retribuyen directamente el trabajo realizado y la jornada pactada:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li><strong>Salario Base:</strong> Retribución fija asignada por convenio colectivo a la categoría.</li>
                  <li><strong>Complementos Personales:</strong> Plus de antigüedad, conocimientos especiales, idiomas.</li>
                  <li><strong>Complementos de Puesto:</strong> Plus de nocturnidad, peligrosidad, toxicidad, turnicidad.</li>
                  <li><strong>Complementos por Resultados:</strong> Primas de productividad, comisiones por ventas, bonus.</li>
                  <li><strong>Prorrateo de Pagas Extras:</strong> Parte proporcional mensual en contratos de 12 pagas.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                <div className="font-bold text-amber-700 text-sm">Percepciones Extrasalariales (Indemnizaciones y Suplidos)</div>
                <p>Compensaciones económicas por gastos derivados de la actividad laboral:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li><strong>Dietas de Manutención y Alojamiento:</strong> Exentas de IRPF y SS hasta los límites reglamentarios.</li>
                  <li><strong>Gastos de Locomoción (Kilometraje):</strong> Exentos hasta 0,26 € por kilómetro recorrido.</li>
                  <li><strong>Plus de Transporte Urbano y Distancia:</strong> Compensación por desplazamiento al centro de trabajo.</li>
                  <li><strong>Indemnizaciones por Traslado o Despido:</strong> Exentas hasta los límites del Estatuto de los Trabajadores.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Bloque 4: Deducciones */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm">
                4
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Las Deducciones: Qué te descuentan del Salario Bruto
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Las deducciones son los importes que se sustraen del total devengado para obtener el salario líquido final. Se desglosan en dos grandes bloques:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <strong className="text-slate-900 text-sm block">1. Aportación del Trabajador a la Seguridad Social (7,05% o 7,10%)</strong>
                <p>• Contingencias comunes: <strong>4,70%</strong>.</p>
                <p>• Desempleo: <strong>1,55%</strong> (indefinido) o <strong>1,60%</strong> (temporal).</p>
                <p>• Formación profesional: <strong>0,10%</strong>.</p>
                <p>• Mecanismo de Equidad Intergeneracional (MEI): <strong>0,70%</strong>.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <strong className="text-slate-900 text-sm block">2. Retención a cuenta del IRPF</strong>
                <p>
                  Porcentaje aplicado sobre la base imponible dineraria de la nómina. Este tipo impositivo lo calcula la empresa en cumplimiento del Reglamento del IRPF según tus ingresos anuales previstos y tu situación familiar reflejada en el Modelo 145.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <strong className="text-slate-900 text-sm block">3. Otras Deducciones Posibles</strong>
                <p>• <strong>Anticipos:</strong> Cantidades que el trabajador pidió por adelantado a cuenta del mes.</p>
                <p>• <strong>Retribución en Especie:</strong> Valor de seguros médicos, tarjeta transporte o tickets restaurante.</p>
                <p>• <strong>Embargos Judiciales:</strong> Retenciones ordenadas judicialmente según los tramos inembargables de la LEC.</p>
              </div>
            </div>
          </article>

          {/* Bloque 5: Bases de cotización (El pie de nómina) */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm">
                5
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                El Pie de Nómina: Bases de Cotización y Aportación de la Empresa
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Al final de toda nómina española aparece un cuadro informativo trascendental denominado comúnmente "Bases de Cotización". Es aquí donde se refleja la aportación total a la Seguridad Social (tanto la tuya como la de la empresa):
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                <strong className="text-slate-900 block text-sm">Bases del Trabajador</strong>
                <p>• <strong>Base de Contingencias Comunes (BCCC):</strong> Salario base + pluses salariales + parte proporcional obligatoria de pagas extras.</p>
                <p>• <strong>Base de Contingencias Profesionales (BCCP):</strong> Igual a la BCCC más las horas extraordinarias trabajadas.</p>
                <p>• <strong>Base Sujeta a Retención del IRPF:</strong> Total de percepciones dinerarias salariales y no exentas.</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                <strong className="text-slate-900 block text-sm">Aportación Empresarial (Coste Social)</strong>
                <p>• Contingencias Comunes Empresa: <strong>23,60%</strong>.</p>
                <p>• Desempleo Empresa: <strong>5,50%</strong> (indefinido) o <strong>6,70%</strong> (temporal).</p>
                <p>• Formación Profesional Empresa: <strong>0,60%</strong>.</p>
                <p>• FOGASA: <strong>0,20%</strong>.</p>
                <p>• MEI Empresarial: <strong>0,58%</strong>.</p>
                <p className="font-bold text-indigo-700 pt-1">Coste patronal añadido: ~30,5% a 32,5% sobre tu base.</p>
              </div>
            </div>
          </article>

        </section>

        {/* Glosario Laboral de 15 Términos Clave */}
        <section className="space-y-6 border-t border-slate-200 pt-12">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Glosario Laboral y Fiscal: 15 Términos Imprescindibles
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diccionario normativo y técnico para resolver cualquier duda sobre términos financieros, contractuales y de nómina:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {glossaryTerms.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-1.5 hover:border-indigo-300 transition-colors"
              >
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  {item.term}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.def}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Banner de Enlace a Calculadoras */}
        <section className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4 shadow-lg">
          <h2 className="text-2xl font-bold">¿Quieres simular tu nómina o finiquito con exactitud?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Utiliza nuestros simuladores gratuitos con actualización legal continua conforme a las tablas de la Agencia Tributaria y de la Seguridad Social.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/"
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-sm text-white transition-all shadow-md"
            >
              Calculadora de Sueldo Neto
            </Link>
            <Link
              href="/calculadora-finiquito"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-sm text-white border border-slate-700 transition-all"
            >
              Calculadora de Finiquito
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
