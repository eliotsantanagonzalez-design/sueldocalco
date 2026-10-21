import type { Metadata } from 'next';
import Link from 'next/link';
import { SeveranceCalculator } from '@/components/calculators/SeveranceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Finiquito e Indemnización por Despido 2026 | SueldoCalco.es',
  description: 'Calcula con exactitud tu finiquito e indemnización por despido: días del mes, vacaciones no disfrutadas, pagas extraordinarias y comparativa de indemnizaciones según el Estatuto de los Trabajadores.',
  metadataBase: new URL('https://www.sueldocalco.es'),
  alternates: { canonical: '/calculadora-finiquito' },
  openGraph: {
    title: 'Calculadora de Finiquito e Indemnización por Despido | SueldoCalco.es',
    description: 'Simula tu liquidación laboral completa: haberes pendientes (días trabajados, vacaciones, pagas extras) e indemnización por despido objetivo, improcedente o fin de contrato.',
    url: 'https://www.sueldocalco.es/calculadora-finiquito',
    siteName: 'SueldoCalco.es',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function FiniquitoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.sueldocalco.es/calculadora-finiquito#app',
        'name': 'Calculadora de Finiquito e Indemnización SueldoCalco',
        'url': 'https://www.sueldocalco.es/calculadora-finiquito',
        'applicationCategory': 'FinanceApplication',
        'operatingSystem': 'All',
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'EUR' }
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
            'name': 'Calculadora de Finiquito',
            'item': 'https://www.sueldocalco.es/calculadora-finiquito'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cuál es el plazo legal para cobrar el finiquito y la indemnización?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La empresa debe entregar y abonar el documento de liquidación y finiquito el mismo día en que se hace efectiva la extinción de la relación laboral. En el caso de despido objetivo con preaviso, la indemnización legal de 20 días por año debe ponerse a disposición del trabajador simultáneamente a la entrega de la carta de despido. Si la empresa se retrasa injustificadamente en el pago de los haberes salariales, el artículo 29.3 del Estatuto de los Trabajadores reconoce el derecho a percibir un 10% anual en concepto de interés por mora.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Por qué es fundamental firmar el finiquito con la fórmula "No Conforme"?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La firma del finiquito suele contener cláusulas de renuncia de acciones donde se manifiesta que el trabajador queda totalmente saldado y no tiene nada más que reclamar. Firmar indicando la fecha exacta de recepción manuscrita y añadiendo la coletilla "No conforme" (o "Pendiente de revisión") salvaguarda tu derecho a reclamar cantidades incorrectas, impugnar el despido judicialmente o exigir diferencias salariales en el plazo de 20 días hábiles.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo tributa la indemnización por despido en el IRPF?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Según el artículo 7.e de la Ley del IRPF (LIRPF), las indemnizaciones por despido o cese del trabajador están 100% exentas de tributación hasta la cuantía legal obligatoria fijada por el Estatuto de los Trabajadores, con un límite máximo absoluto de 180.000 euros. Cualquier importe acordado que supere la indemnización legal obligatoria tributará en la base imponible del IRPF como rendimiento del trabajo ordinario o con reducción por irregularidad si procede.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Tengo derecho a la prestación por desempleo (paro) tras la extinción del contrato?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Se tiene derecho a cobrar el paro siempre que la extinción no sea voluntaria (despido disciplinario, objetivo, improcedente o fin de contrato temporal) y se cuente con al menos 360 días cotizados en los 6 años anteriores. Si causas baja voluntaria (dimisión), la ley no considera que estés en situación legal de desempleo y no podrás solicitar la prestación de forma inmediata.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué procedimiento se debe seguir si la empresa se niega a pagar el finiquito?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El trabajador debe presentar una papeleta de conciliación laboral ante el Servicio de Mediación, Arbitraje y Conciliación (SMAC o equivalente autonómico). Para reclamar deudas salariales del finiquito (días trabajados, vacaciones, pagas extras) existe un plazo de prescripción de 1 año. Sin embargo, para impugnar la procedencia del despido o reclamar la indemnización el plazo de caducidad es estricto: solo 20 días hábiles desde la fecha de cese.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo cotizan a la Seguridad Social las vacaciones no disfrutadas liquidadas en el finiquito?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Los días de vacaciones devengados y no disfrutados que se abonan en la liquidación generan una cotización complementaria a la Seguridad Social (código de liquidación L13). Durante ese periodo equivalente de días naturales, el trabajador permanece en situación asimilada al alta y no puede solicitar el alta en el desempleo ni comenzar a percibir la prestación hasta que transcurran dichos días.'
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-3">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors font-medium">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-semibold">Calculadora de Finiquito e Indemnización</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculadora de Finiquito e Indemnización por Despido en España
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Calcula con rigor legal y financiero el desglose exacto de tu liquidación laboral: haberes pendientes (días trabajados del mes, vacaciones no disfrutadas y pagas extraordinarias) junto con la indemnización correspondiente según la tipología de despido y el Estatuto de los Trabajadores.
          </p>
        </header>

        {/* Herramienta interactiva */}
        <SeveranceCalculator />

        {/* Guía Editorial Maestra (+1.000 palabras SSR) */}
        <section className="border-t border-slate-200 pt-12 space-y-12 text-slate-800">
          
          {/* Bloque 1: Finiquito vs Indemnización */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Diferencia legal entre Finiquito e Indemnización según el Estatuto de los Trabajadores
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Uno de los errores más frecuentes al finalizar una relación laboral es confundir los conceptos de <strong>finiquito</strong> e <strong>indemnización por despido</strong>. Aunque ambos importes suelen abonarse de forma conjunta en el momento de la extinción, su naturaleza jurídica, sus requisitos de devengo y su tratamiento fiscal y de Seguridad Social son sustancialmente distintos según lo regulado en el Real Decreto Legislativo 2/2015, por el que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores (ET).
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <h3 className="flex items-center gap-2 text-indigo-700 font-bold text-lg">
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                  El Finiquito (Liquidación de Haberes)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  El finiquito o documento de liquidación de saldo y finiquito corresponde a las <strong>cantidades que el trabajador ya ha devengado por su trabajo efectivo</strong> y que la empresa todavía no le ha ingresado. Es un derecho irrenunciable que se genera en <em>cualquier causa de extinción</em> (despido improcedente, despido objetivo, fin de contrato temporal e incluso baja voluntaria o despido disciplinario).
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <li>Salario de los días trabajados en el mes en curso.</li>
                  <li>Días de vacaciones devengados en el año y no disfrutados.</li>
                  <li>Parte proporcional de las pagas extras pendientes.</li>
                  <li>Horas extraordinarias realizadas y pluses pendientes.</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <h3 className="flex items-center gap-2 text-amber-700 font-bold text-lg">
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  La Indemnización por Extinción
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  La indemnización es una <strong>compensación económica fijada por ley</strong> para resarcir al trabajador por el perjuicio que supone la extinción involuntaria de su puesto de trabajo. A diferencia del finiquito, no se percibe en todos los casos: no existe indemnización en las dimisiones voluntarias ni en los despidos disciplinarios declarados procedentes.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <li>Despido objetivo: 20 días por año (máximo 12 mensualidades).</li>
                  <li>Despido improcedente: 33 días por año (máximo 24 mensualidades).</li>
                  <li>Fin de contrato temporal: 12 días por año de servicio.</li>
                  <li>Exenta de IRPF hasta el límite de 180.000 € (Art. 7.e LIRPF).</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                El Recibo de Saldo y Finiquito: Valor Liberatorio y Firma "No Conforme"
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                El documento de finiquito acredita la liquidación económica y habitualmente contiene una cláusula estándar de renuncia de acciones donde se declara que las partes quedan totalmente saldadas. Si el trabajador no está seguro de la exactitud de los importes o va a impugnar el despido, debe consignar inexcusablemente la fecha de puño y letra junto a la expresión <strong>"No conforme"</strong> o <strong>"Pendiente de revisión"</strong> para preservar intacto el derecho a reclamar judicialmente salarios pendientes o la improcedencia del despido en los 20 días hábiles posteriores.
              </p>
            </div>
          </article>

          {/* Bloque 2: Fórmulas paso a paso */}
          <article className="space-y-5">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Fórmulas matemáticas para calcular los conceptos del finiquito paso a paso
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Para efectuar un cálculo preciso de la liquidación, el primer paso normativo es determinar el <strong>salario diario regulador</strong> del trabajador. Según la jurisprudencia reiterada del Tribunal Supremo, el salario diario se calcula dividiendo el salario bruto anual entre 365 días (o 366 si es año bisiesto), computando tanto el salario base como todos los complementos salariales y las pagas extraordinarias:
            </p>

            <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl text-indigo-950 font-mono text-sm">
              <strong>Salario Diario Oficial (€/día)</strong> = Salario Bruto Anual / 365
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">1. Salario de los días trabajados del mes en curso</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Si la relación laboral finaliza antes de concluir el mes natural (por ejemplo, el día 18), la empresa debe abonar el salario correspondiente a los días transcurridos hasta la fecha efectiva de baja. Si el trabajador tiene salario mensual, se prorratea en base a 30 días o a los días naturales del mes:
                </p>
                <div className="text-xs bg-slate-100 p-2.5 rounded font-mono text-slate-800">
                  Importe Días del Mes = Salario Diario × Días efectivamente trabajados en el mes de salida
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">2. Vacaciones generadas y no disfrutadas</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Por imperativo del artículo 38 del Estatuto de los Trabajadores, todo empleado tiene derecho a un mínimo legal de <strong>30 días naturales de vacaciones al año</strong> (equivalentes a 2,5 días naturales por cada mes de trabajo) o 22 días laborables según convenio colectivo. Si en la fecha de extinción no has agotado las vacaciones acumuladas durante el año natural en curso, la empresa está obligada a abonártelas económicamente:
                </p>
                <div className="text-xs bg-slate-100 p-2.5 rounded font-mono text-slate-800">
                  Días Vacaciones Devengados = (Días anuales de convenio / 365) × Días trabajados en el año natural - Días ya disfrutados
                </div>
                <div className="text-xs bg-slate-100 p-2.5 rounded font-mono text-slate-800 mt-1">
                  Compensación Económica Vacaciones (€) = Días de vacaciones pendientes × Salario Diario
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Importante: La liquidación de vacaciones no disfrutadas cotiza a la Seguridad Social (código de liquidación complementaria L13) y retiene IRPF. Durante el periodo de días abonados se produce una situación asimilada al alta, por lo que el plazo para solicitar el paro de 15 días hábiles empieza a computar al vencer dicho periodo.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">3. Parte proporcional de las pagas extraordinarias</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Si tu contrato establece el cobro en 14 pagas, el Estatuto de los Trabajadores contempla dos pagas extras al año (habitualmente en verano y Navidad). El devengo de estas pagas puede ser semestral o anual según convenio. En caso de devengo semestral, cada paga extra se genera a lo largo de 6 meses (180 días):
                </p>
                <div className="text-xs bg-slate-100 p-2.5 rounded font-mono text-slate-800">
                  Prorrata Paga Extra (€) = (Importe de una Paga Extra / Días del Periodo de Devengo) × Días transcurridos desde el inicio del devengo
                </div>
                <p className="text-xs text-slate-500">
                  Si tu salario está distribuido en 12 pagas con pagas prorrateadas mensualmente, no existe cantidad pendiente por este concepto, ya que se liquida íntegramente en cada nómina mensual.
                </p>
              </div>
            </div>
          </article>

          {/* Bloque 3: Tabla comparativa de indemnizaciones */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Tabla comparativa de indemnizaciones según la causa de extinción del contrato
            </h2>
            <p className="text-slate-700 leading-relaxed">
              La cuantía de la indemnización depende directamente del motivo legal que extingue el vínculo contractual, del salario diario y de los años de antigüedad (computándose los meses incompletos como meses completos a efectos de cálculo):
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100/90 text-slate-700 text-xs uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4">Tipo de Extinción</th>
                    <th className="py-3.5 px-4">Días de Indemnización</th>
                    <th className="py-3.5 px-4">Tope Máximo Legal</th>
                    <th className="py-3.5 px-4">¿Derecho a Paro?</th>
                    <th className="py-3.5 px-4">Fiscalidad IRPF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">Despido Improcedente</td>
                    <td className="py-3 px-4">33 días / año trabajado (o 45 días/año hasta el 11/02/2012)</td>
                    <td className="py-3 px-4">24 mensualidades (o 42 si hay periodo pre-reforma 2012)</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">Sí</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Exenta hasta 180.000 €</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">Despido Objetivo (Económico, Técnico, Productivo)</td>
                    <td className="py-3 px-4">20 días / año trabajado</td>
                    <td className="py-3 px-4">12 mensualidades (máximo 360 días)</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">Sí</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Exenta hasta 180.000 €</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">Fin de Contrato Temporal</td>
                    <td className="py-3 px-4">12 días / año trabajado</td>
                    <td className="py-3 px-4">No tiene tope específico en meses</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">Sí</td>
                    <td className="py-3 px-4 text-amber-700 font-medium">Tributa en IRPF</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">Despido Colectivo (ERE)</td>
                    <td className="py-3 px-4">Mínimo legal de 20 días / año (mejorable en negociación)</td>
                    <td className="py-3 px-4">12 mensualidades (legal mínimo)</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">Sí</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Exenta hasta límite legal</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">Baja Voluntaria / Dimisión</td>
                    <td className="py-3 px-4 text-rose-600 font-semibold">0 días (sin indemnización)</td>
                    <td className="py-3 px-4 text-slate-400">No aplica</td>
                    <td className="py-3 px-4 text-rose-600 font-semibold">No</td>
                    <td className="py-3 px-4 text-slate-400">No aplica</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">Despido Disciplinario Procedente</td>
                    <td className="py-3 px-4 text-rose-600 font-semibold">0 días (sin indemnización)</td>
                    <td className="py-3 px-4 text-slate-400">No aplica</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">Sí</td>
                    <td className="py-3 px-4 text-slate-400">No aplica</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Régimen Transitorio de la Reforma Laboral de 2012
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Para contratos celebrados con anterioridad al 12 de febrero de 2012, la indemnización por despido improcedente se bifurca en dos tramos: 45 días por año con un máximo de 42 mensualidades por el tiempo trabajado hasta el 11/02/2012, y 33 días por año con un tope de 24 mensualidades (o el tope pre-reforma devengado sin superar las 42 mensualidades) para la antigüedad posterior.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Fiscalidad en el IRPF: Exención Legal hasta 180.000 €
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  El artículo 7.e de la Ley del IRPF dictamina que las indemnizaciones por despido obligatorio están totalmente exentas de tributación hasta la cuantía legal establecida en el Estatuto de los Trabajadores, con un límite de 180.000 euros. Las indemnizaciones por fin de contrato temporal de 12 días por año sí tributan íntegramente como rendimiento del trabajo.
                </p>
              </div>
            </div>
          </article>

          {/* Bloque 4: 3 Ejemplos Reales Numéricos */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Casos prácticos resueltos: Simulación numérica completa de Finiquito e Indemnización
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Para ilustrar con máxima transparencia cómo se integran todos los factores normativos en una liquidación real, presentamos tres supuestos numéricos prácticos:
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Caso A */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-amber-100 text-amber-800 uppercase tracking-wide">
                    Caso Práctico 1
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">
                    Despido Objetivo: 28.000 € y 3 años
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Extinción día 18. 6 días de vacaciones pendientes. 12 pagas anuales.
                  </p>
                </div>

                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Salario Diario (28.000/365):</span>
                    <span className="font-semibold font-mono text-slate-900">76,71 €/día</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Salario 18 días trabajados:</span>
                    <span className="font-mono font-medium text-slate-800">1.380,82 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Vacaciones pendientes (6 días):</span>
                    <span className="font-mono font-medium text-slate-800">460,27 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 bg-indigo-50/50 px-2 rounded font-semibold">
                    <span className="text-indigo-900">Subtotal Finiquito (Haberes):</span>
                    <span className="font-mono text-indigo-700">1.841,10 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Indemnización (20 días × 3 años):</span>
                    <span className="font-mono text-slate-800">60 días</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 bg-amber-50/50 px-2 rounded font-semibold">
                    <span className="text-amber-900">Indemnización Legal:</span>
                    <span className="font-mono text-amber-700">4.602,74 €</span>
                  </div>
                  <div className="flex justify-between pt-2 text-base font-extrabold text-slate-900">
                    <span>Liquidación Total:</span>
                    <span className="font-mono text-emerald-600">6.443,84 €</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-normal pt-2 border-t border-slate-100">
                  <em>Fiscalidad:</em> Los 4.602,74 € de indemnización están exentos de IRPF. Los 1.841,10 € de haberes tributan y cotizan.
                </p>
              </div>

              {/* Caso B */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-indigo-100 text-indigo-800 uppercase tracking-wide">
                    Caso Práctico 2
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">
                    Despido Improcedente: 36.000 € y 5 años
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Extinción día 22. 8 días de vacaciones pendientes. 12 pagas anuales.
                  </p>
                </div>

                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Salario Diario (36.000/365):</span>
                    <span className="font-semibold font-mono text-slate-900">98,63 €/día</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Salario 22 días trabajados:</span>
                    <span className="font-mono font-medium text-slate-800">2.169,86 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Vacaciones pendientes (8 días):</span>
                    <span className="font-mono font-medium text-slate-800">789,04 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 bg-indigo-50/50 px-2 rounded font-semibold">
                    <span className="text-indigo-900">Subtotal Finiquito (Haberes):</span>
                    <span className="font-mono text-indigo-700">2.958,90 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Indemnización (33 días × 5 años):</span>
                    <span className="font-mono text-slate-800">165 días</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 bg-amber-50/50 px-2 rounded font-semibold">
                    <span className="text-amber-900">Indemnización Legal:</span>
                    <span className="font-mono text-amber-700">16.273,97 €</span>
                  </div>
                  <div className="flex justify-between pt-2 text-base font-extrabold text-slate-900">
                    <span>Liquidación Total:</span>
                    <span className="font-mono text-emerald-600">19.232,88 €</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-normal pt-2 border-t border-slate-100">
                  <em>Tope legal:</em> El límite de 24 mensualidades (72.000 €) no se supera. La indemnización queda 100% exenta en IRPF.
                </p>
              </div>

              {/* Caso C */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                    Caso Práctico 3
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">
                    Fin de Temporal: 21.000 € y 10 meses
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Extinción fin de mes. 4 días de vacaciones pendientes. 12 pagas.
                  </p>
                </div>

                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Salario Diario (21.000/365):</span>
                    <span className="font-semibold font-mono text-slate-900">57,53 €/día</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Mes completo de salario:</span>
                    <span className="font-mono font-medium text-slate-800">1.750,00 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Vacaciones pendientes (4 días):</span>
                    <span className="font-mono font-medium text-slate-800">230,14 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 bg-indigo-50/50 px-2 rounded font-semibold">
                    <span className="text-indigo-900">Subtotal Finiquito (Haberes):</span>
                    <span className="font-mono text-indigo-700">1.980,14 €</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Indemnización (12 d/año × 10/12 m):</span>
                    <span className="font-mono text-slate-800">10 días</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 bg-amber-50/50 px-2 rounded font-semibold">
                    <span className="text-amber-900">Indemnización Fin Contrato:</span>
                    <span className="font-mono text-amber-700">575,34 €</span>
                  </div>
                  <div className="flex justify-between pt-2 text-base font-extrabold text-slate-900">
                    <span>Liquidación Total:</span>
                    <span className="font-mono text-emerald-600">2.555,48 €</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-normal pt-2 border-t border-slate-100">
                  <em>Fiscalidad:</em> A diferencia de los despidos, los 575,34 € de indemnización temporal tributan en el IRPF.
                </p>
              </div>
            </div>
          </article>

          {/* Bloque 5: Preguntas Frecuentes con Acordeones <details> */}
          <article className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Preguntas Frecuentes sobre Finiquito, Indemnización y Extinción de Contrato
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Guía de resolución de dudas legales sobre el cese laboral y la liquidación según el Estatuto de los Trabajadores.
              </p>
            </div>

            <div className="space-y-3">
              <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
                <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                      1
                    </span>
                    <span>¿Cuál es el plazo legal que tiene la empresa para abonar el finiquito y la indemnización?</span>
                  </span>
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                  <p>
                    La empresa está obligada a poner a disposición del trabajador la propuesta de finiquito y efectuar su abono en la misma fecha en que finaliza la relación laboral. En los despidos objetivos con preaviso, la indemnización legal de 20 días por año debe entregarse simultáneamente a la carta de despido. En caso de mora culpable o retraso en el pago de conceptos salariales devengados, el artículo 29.3 del Estatuto de los Trabajadores estipula un recargo del <strong>10% anual de interés por demora</strong> en favor del trabajador.
                  </p>
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
                <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                      2
                    </span>
                    <span>¿Qué significa firmar "No Conforme" y cómo protege tus derechos legales?</span>
                  </span>
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                  <p>
                    La firma del finiquito suele incorporar una cláusula estándar de renuncia de acciones donde se declara que el trabajador se da por completamente satisfecho y renuncia a entablar reclamaciones futuras. Si firmas en disconformidad, añadiendo de tu puño y letra la fecha real de recepción y las palabras <strong>"No conforme"</strong> o <strong>"Pendiente de comprobación"</strong>, mantienes expedita la vía judicial para reclamar salarios impagados, errores de cálculo en las vacaciones o demandar por improcedencia del despido en los 20 días hábiles siguientes.
                  </p>
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
                <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                      3
                    </span>
                    <span>¿Cómo tributa la indemnización legal por despido en el IRPF?</span>
                  </span>
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                  <p>
                    El artículo 7.e de la Ley 35/2006 del IRPF establece que las indemnizaciones por despido o cese están totalmente exentas de tributación hasta la cuantía obligatoria estipulada en el Estatuto de los Trabajadores, con un límite legal máximo de <strong>180.000 euros</strong>. Únicamente tributará en la Declaración de la Renta el exceso dinerario pactado por encima de dicho límite o por encima de los días legales. En contraposición, los conceptos que integran el finiquito (salario del mes, pagas extraordinarias y vacaciones) tributan plenamente en el IRPF como rendimientos del trabajo personal.
                  </p>
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
                <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                      4
                    </span>
                    <span>¿Tengo derecho a cobrar la prestación por desempleo (paro) tras la liquidación?</span>
                  </span>
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                  <p>
                    Para acceder a la prestación contributiva por desempleo del SEPE se requiere encontrarse en situación legal de desempleo involuntaria (despido objetivo, disciplinario, improcedente o finalización de contrato temporal) y acumular al menos 360 días cotizados en los últimos 6 años. Si el contrato finaliza por <strong>baja voluntaria del trabajador</strong>, la normativa de Seguridad Social no reconoce la situación legal de desempleo y no se tiene derecho a paro inmediato, salvo que posteriormente se trabaje en otra empresa y se sea despedido de forma involuntaria tras superar el periodo de prueba.
                  </p>
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
                <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                      5
                    </span>
                    <span>¿Qué acciones tomar si la empresa no entrega el finiquito o se niega a pagar?</span>
                  </span>
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                  <p>
                    Si el empleador incumple sus obligaciones dinerarias, el trabajador debe presentar formalmente una papeleta de conciliación laboral ante el Servicio de Mediación, Arbitraje y Conciliación (SMAC) de su comunidad autónoma. Es vital distinguir los dos plazos procesales: para <strong>reclamar cantidades económicas pendientes</strong> (salarios impagados, vacaciones, pagas extras) dispones de <strong>1 año de plazo</strong>; sin embargo, para <strong>impugnar el despido</strong> o reclamar la indemnización el plazo es de caducidad estricta de <strong>20 días hábiles</strong>.
                  </p>
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
                <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                      6
                    </span>
                    <span>¿Cómo cotizan las vacaciones no disfrutadas y cuándo puedo solicitar el paro?</span>
                  </span>
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                  <p>
                    Los días de vacaciones retribuidas pero no disfrutadas generan una liquidación complementaria de cotización a la Seguridad Social (modelo L13) a cargo de la empresa. Durante el número de días naturales equivalentes a las vacaciones liquidadas, el trabajador continúa formalmente en situación asimilada al alta. Por tanto, el plazo de 15 días hábiles legalmente establecido para solicitar la prestación por desempleo ante el SEPE empieza a contar a partir del día siguiente al que expira el periodo de vacaciones retribuidas en el finiquito.
                  </p>
                </div>
              </details>
            </div>
          </article>
        </section>

      </div>
    </main>
  );
}
