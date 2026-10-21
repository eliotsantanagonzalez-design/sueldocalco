import type { Metadata } from 'next';
import Link from 'next/link';
import { SalaryCalculator } from '@/components/calculators/SalaryCalculator';
import { COMMUNITIES_LIST } from '@/lib/engine/constants';

export const metadata: Metadata = {
  title: 'Calculadora de Sueldo Neto 2026: Simula tu Nómina Exacta | SueldoCalco.es',
  description: 'Calcula tu salario neto mensual y anual en España con exactitud. Desglose oficial de retenciones de IRPF por tramos, cotizaciones a la Seguridad Social (4,70%, desempleo y MEI) y comparativa de 12 vs 14 pagas.',
  metadataBase: new URL('https://www.sueldocalco.es'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Calculadora de Sueldo Neto y Nómina Online 2026 | SueldoCalco.es',
    description: 'Simula tu nómina en tiempo real: cálculo de bruto a neto, cotizaciones a la Seguridad Social, MEI y retención del IRPF por comunidades autónomas.',
    url: 'https://www.sueldocalco.es',
    siteName: 'SueldoCalco.es',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.sueldocalco.es/#app',
        'name': 'Calculadora de Sueldo Neto SueldoCalco',
        'url': 'https://www.sueldocalco.es',
        'applicationCategory': 'FinanceApplication',
        'operatingSystem': 'All',
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'EUR' }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.sueldocalco.es/#website',
        'url': 'https://www.sueldocalco.es',
        'name': 'SueldoCalco.es',
        'description': 'Simulador fiscal y laboral de referencia en España. Calculadoras de sueldo neto, finiquito e IRPF.',
        'inLanguage': 'es-ES'
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cómo se calcula el tipo de retención del IRPF en la nómina y qué función tiene el Modelo 145?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El porcentaje de retención del IRPF que aplica la empresa se calcula al inicio de cada año conforme al algoritmo oficial de la Agencia Tributaria. Este cálculo proyecta los ingresos brutos anuales esperados y aplica los mínimos personales y familiares comunicados por el trabajador mediante el Modelo 145 (estado civil, número de hijos menores de 25 años, discapacidad o ascendientes mayores de 65 años a cargo). Si tu situación familiar o contractual cambia a lo largo del año, debes entregar un nuevo Modelo 145 actualizado para que Recursos Humanos reajuste el tipo de retención.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Por qué suele salir a pagar la Declaración de la Renta si he tenido dos o más pagadores en el año?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cuando trabajas para dos o más empresas en el mismo ejercicio fiscal, cada una de ellas calcula tu retención mensual asumiendo que solo vas a percibir los ingresos que ella te abona. Como la escala del IRPF es progresiva, al sumar todos los ingresos en la Declaración de la Renta anual se salta a tramos impositivos superiores y se constata que se retuvo de menos durante los meses trabajados. Además, el límite que exime de la obligación de declarar baja de 22.000 euros a 15.876 euros anuales cuando del segundo y sucesivos pagadores se perciben en total más de 1.500 euros.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuáles son los topes mínimos y máximos de cotización a la Seguridad Social?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La Seguridad Social establece anualmente topes legales para las bases de cotización. La base máxima de cotización se sitúa en 4.720,50 euros mensuales (56.646 euros anuales). Cualquier retribución salarial que supere dicha cuantía no soporta deducciones de cotización de la Seguridad Social del 7,05%, aunque sí tributa íntegramente por IRPF. Por su parte, la base mínima está ligada a la evolución del Salario Mínimo Interprofesional (SMI) incrementado en la parte proporcional de las pagas extras.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué diferencia de cotización existe entre un contrato indefinido y uno temporal?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En los contratos indefinidos a jornada completa o parcial, la cotización a cargo del trabajador para la cobertura por desempleo es del 1,55% de la base de cotización. En cambio, en los contratos de duración determinada (temporales o de sustitución), la aportación del trabajador al desempleo asciende al 1,60%. Las contingencias comunes (4,70%), la formación profesional (0,10%) y el MEI (0,70%) son exactamente idénticas en ambas modalidades.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Por qué la retención de IRPF parece igual o diferente en las pagas extraordinarias?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La legislación fiscal establece que a las pagas extraordinarias se les aplica exactamente el mismo tipo de retención porcentual del IRPF que a la nómina ordinaria del mes en que se abonan. Sin embargo, las pagas extras no sufren deducciones de cotización a la Seguridad Social en el mes de su cobro, dado que la cotización a la Seguridad Social se prorratea obligatoriamente en doce mensualidades a lo largo de todo el año.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo solicitar por escrito a mi empresa que me aplique una retención mayor de IRPF voluntaria?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. El artículo 88.5 del Reglamento del IRPF reconoce el derecho del trabajador a solicitar a su empleador, en cualquier momento del año y por escrito, la aplicación de un tipo de retención superior al legalmente determinado. La empresa está legalmente obligada a aplicar dicho porcentaje incrementado a partir de la siguiente nómina. Lo que en ningún caso permite la ley es solicitar una retención inferior a la que resulte del cálculo oficial.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué gastos deducibles se descuentan automáticamente antes de calcular el IRPF?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Para determinar el rendimiento neto del trabajo se deducen obligatoriamente del salario bruto íntegro las cotizaciones satisfechas a la Seguridad Social y una cuantía fija general de 2.000 euros en concepto de otros gastos deducibles (ampliable en caso de trabajadores activos con discapacidad o desempleados que acepten un puesto que exija traslado de residencia). Además, las rentas inferiores a 19.747,50 euros disfrutan de una reducción adicional por rendimientos del trabajo de hasta 6.498 euros anuales.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo cotizan y tributan las horas extraordinarias en la nómina?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Las horas extraordinarias por fuerza mayor cotizan a la Seguridad Social con un tipo reducido del 2% a cargo del trabajador. Las horas extraordinarias comunes cotizan al tipo general del 4,70%. En cuanto al IRPF, la retribución percibida por horas extras se suma a los rendimientos dinerarios ordinarios del trabajo y tributa conforme a la escala progresiva general del impuesto sin exención alguna.'
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Cabecera Principal */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 mb-3">
          Actualizado Normativa 2026: IRPF, Seguridad Social y MEI
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Calculadora de Sueldo Neto en España
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Simula con precisión de céntimo tu nómina mensual y anual. Desglose transparente de cotizaciones a la Seguridad Social, Mecanismo de Equidad Intergeneracional (MEI) y retenciones de IRPF por comunidades autónomas.
        </p>
      </div>

      {/* Calculadora Interactiva */}
      <SalaryCalculator />

      {/* Enlaces por Comunidad Autónoma */}
      <section className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            Cálculo de Sueldo Neto por Comunidad Autónoma
          </h2>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            Tramos autonómicos de IRPF adaptados
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          El tipo impositivo del IRPF se divide en un 50% estatal y un 50% autonómico. Selecciona tu comunidad para consultar las particularidades fiscales y tramos aprobados:
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {COMMUNITIES_LIST.map((c) => (
            <Link
              key={c.slug}
              href={'/sueldo-neto/' + c.slug}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border bg-slate-50 text-slate-700 border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 transition-all"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Guía Editorial Maestra (+1.200 palabras SSR) */}
      <section className="max-w-4xl mx-auto mt-16 border-t border-slate-200 pt-12 space-y-14 text-slate-800">
        
        {/* Sección 1: Bruto vs Neto */}
        <article className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Diferencia entre Salario Bruto y Salario Neto en España: Conceptos Clave
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Al negociar una oferta laboral o revisar las condiciones de un contrato de trabajo, la cifra comúnmente pactada es el <strong>salario bruto anual</strong>. Sin embargo, el dinero efectivo que el trabajador recibe cada mes en su cuenta corriente es el <strong>salario neto</strong>. Comprender con total exactitud la brecha entre ambos valores resulta indispensable para la salud de las finanzas personales y para evitar sorpresas tributarias.
          </p>
          <p className="text-slate-700 leading-relaxed">
            En el marco legal y laboral español, el salario bruto integra la totalidad de las percepciones económicas que percibe el empleado por la prestación profesional de sus servicios laborales. A partir de esa cantidad bruta total, la empresa está legalmente obligada a practicar dos retenciones en nómina que reducen el ingreso final:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
              <h3 className="text-indigo-700 font-bold text-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                1. Aportaciones a la Seguridad Social
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Son cuotas obligatorias por ley destinadas a financiar el sistema público de previsión social: cobertura médica y farmacéutica, subsidios por incapacidad temporal (bajas laborales), permisos por nacimiento y cuidado de menor, prestaciones por desempleo y las futuras pensiones de jubilación.
              </p>
              <div className="text-xs font-semibold text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100">
                Porcentaje medio a cargo del trabajador: <strong>7,05%</strong> (indefinido) / <strong>7,10%</strong> (temporal).
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
              <h3 className="text-amber-700 font-bold text-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                2. Retención a cuenta del IRPF
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Es un pago a cuenta anticipado que la empresa ingresa mensualmente en nombre del trabajador en la Agencia Estatal de Administración Tributaria (AEAT). Se calcula mediante una escala impositiva progresiva estatal y autonómica según los ingresos anuales y las circunstancias familiares comunicadas en el Modelo 145.
              </p>
              <div className="text-xs font-semibold text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100">
                Tipo de retención: Del <strong>0%</strong> (rentas exentas) hasta más del <strong>45%</strong> en los tramos más elevados.
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-slate-900">
              El Coste Total de Empresa: Más allá del Salario Bruto del Trabajador
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Conviene recordar que el salario bruto del trabajador no equivale al coste laboral total que asume la empresa. Además del salario pactado, el empleador abona una cotización patronal a la Seguridad Social que suele oscilar entre el <strong>30% y el 33% adicional</strong> sobre la base de cotización (contingencias comunes empresariales 23,60%, accidentes de trabajo y enfermedades profesionales según CNAE, Fogasa 0,20% y desempleo empresarial 5,50% o 6,70%). Por consiguiente, un empleado con un salario bruto de 30.000 € representa una inversión real para la empresa cercana a los 39.500 € anuales.
            </p>
          </div>
        </article>

        {/* Sección 2: Desglose de Cotizaciones a la Seguridad Social */}
        <article className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Desglose exacto de las cotizaciones a la Seguridad Social a cargo del trabajador
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A diferencia del IRPF, que varía en función de la renta y de los mínimos familiares, los porcentajes de cotización a la Seguridad Social son fijos por ley sobre la <strong>base de cotización</strong> (que incluye el salario base, complementos salariales y el prorrateo de las pagas extras). Los tipos de cotización vigentes son los siguientes:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-slate-100/90 text-slate-700 text-xs uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Concepto de Cotización</th>
                  <th className="py-3.5 px-4">Tipo Trabajador (Indefinido)</th>
                  <th className="py-3.5 px-4">Tipo Trabajador (Temporal)</th>
                  <th className="py-3.5 px-4">Finalidad de la Cuota</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Contingencias Comunes</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">4,70%</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">4,70%</td>
                  <td className="py-3 px-4 text-xs text-slate-600">Jubilación, incapacidad temporal común, maternidad, paternidad y orfandad.</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Desempleo</td>
                  <td className="py-3 px-4 font-mono font-bold text-slate-900">1,55%</td>
                  <td className="py-3 px-4 font-mono font-bold text-amber-700">1,60%</td>
                  <td className="py-3 px-4 text-xs text-slate-600">Financiación de la prestación contributiva y subsidios por desempleo del SEPE.</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Formación Profesional</td>
                  <td className="py-3 px-4 font-mono font-bold text-slate-900">0,10%</td>
                  <td className="py-3 px-4 font-mono font-bold text-slate-900">0,10%</td>
                  <td className="py-3 px-4 text-xs text-slate-600">Cursos y programas de reciclaje y capacitación profesional para trabajadores.</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Mecanismo de Equidad Intergeneracional (MEI)</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">0,70%</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">0,70%</td>
                  <td className="py-3 px-4 text-xs text-slate-600">Fondo de Reserva de las pensiones de la Seguridad Social para afrontar el reto demográfico.</td>
                </tr>
                <tr className="bg-slate-50 font-bold text-slate-900">
                  <td className="py-3.5 px-4">Total Aportación a la Seguridad Social</td>
                  <td className="py-3.5 px-4 font-mono text-indigo-600 text-base">7,05%</td>
                  <td className="py-3.5 px-4 font-mono text-amber-600 text-base">7,10%</td>
                  <td className="py-3.5 px-4 text-xs font-normal text-slate-500">Deducción total sobre la base de cotización mensual.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-2">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">
                Base Máxima de Cotización y Destope Salarial
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                La legislación de la Seguridad Social fija una <strong>base máxima mensual de 4.720,50 €</strong> (56.646 € anuales). A partir de ese umbral salarial, las retribuciones adicionales quedan libres de cotizaciones de Seguridad Social para el trabajador (ahorro del 7,05%), aunque sí tributan de manera íntegra en los tramos más altos del IRPF.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">
                Base Mínima y Vinculación con el SMI
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                La base mínima de cotización está referenciada por ley al Salario Mínimo Interprofesional (SMI) vigente más la parte proporcional correspondiente a dos pagas extraordinarias. Ningún contrato a jornada completa puede cotizar por debajo de dicha cuantía legal obligatoria.
              </p>
            </div>
          </div>
        </article>

        {/* Sección 3: Tramos de IRPF y Progresividad Fiscal */}
        <article className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Tramos vigentes del IRPF, progresividad fiscal y mínimo personal y familiar
          </h2>
          <p className="text-slate-700 leading-relaxed">
            El Impuesto sobre la Renta de las Personas Físicas (IRPF) es un <strong>tributo progresivo directo</strong>. Uno de los mitos financieros más extendidos es creer que si recibes un aumento salarial que te hace saltar de tramo impositivo, pasarás a ganar menos salario neto debido a que todo tu sueldo tributará al tipo más alto. <em>Esto es matemáticamente falso:</em> los tipos impositivos se aplican de manera marginal tramo a tramo, tributando cada euro únicamente al porcentaje correspondiente a su banda impositiva.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-slate-100/90 text-slate-700 text-xs uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Base Liquidable del IRPF</th>
                  <th className="py-3.5 px-4">Tipo Estatal</th>
                  <th className="py-3.5 px-4">Tipo Autonómico Ref.</th>
                  <th className="py-3.5 px-4">Tipo Marginal Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Desde 0 € hasta 12.450 €</td>
                  <td className="py-3 px-4 font-mono">9,50%</td>
                  <td className="py-3 px-4 font-mono">9,50%</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">19,00%</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Desde 12.450 € hasta 20.200 €</td>
                  <td className="py-3 px-4 font-mono">12,00%</td>
                  <td className="py-3 px-4 font-mono">12,00%</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">24,00%</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Desde 20.200 € hasta 35.200 €</td>
                  <td className="py-3 px-4 font-mono">15,00%</td>
                  <td className="py-3 px-4 font-mono">15,00%</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">30,00%</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Desde 35.200 € hasta 60.000 €</td>
                  <td className="py-3 px-4 font-mono">18,50%</td>
                  <td className="py-3 px-4 font-mono">18,50%</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">37,00%</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Desde 60.000 € hasta 300.000 €</td>
                  <td className="py-3 px-4 font-mono">22,50%</td>
                  <td className="py-3 px-4 font-mono">22,50%</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">45,00%</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">Más de 300.000 €</td>
                  <td className="py-3 px-4 font-mono">24,50%</td>
                  <td className="py-3 px-4 font-mono">24,50%</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">47,00% *</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic">
            * Nota autonómica: En comunidades autónomas como la Comunidad Valenciana o Cataluña, la escala autonómica para los tramos superiores alcanza tipos marginales globales de hasta el 49% o 50%.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-2">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">El Mínimo Personal y Familiar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Es la parte de la base liquidable que el Estado no grava porque se considera destinada a cubrir las necesidades básicas de subsistencia. El mínimo del contribuyente general es de <strong>5.550 € anuales</strong> (que se incrementa en 1.150 € a partir de los 65 años y en 1.400 € a partir de los 75 años). Tener descendientes añade importes exentos: 2.400 € por el primer hijo, 2.700 € por el segundo, 4.000 € por el tercero y 4.500 € a partir del cuarto.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Reducción por Rendimientos del Trabajo</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                La ley protege especialmente a los trabajadores con salarios más bajos. Quienes obtienen rendimientos netos del trabajo inferiores a 19.747,50 € disfrutan de una reducción directa de hasta <strong>6.498 €</strong>. Gracias a esta reducción y a las modificaciones tributarias, los trabajadores sin hijos que perciben el Salario Mínimo Interprofesional (hasta 15.876 €) tienen una retención efectiva de IRPF del <strong>0%</strong>.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Gastos Deducibles Generales (2.000 €)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                El artículo 19 de la Ley del IRPF reconoce una deducción automática a tanto alzado de <strong>2.000 € anuales</strong> en concepto de otros gastos derivados del trabajo por cuenta ajena. Dicha cuantía se resta de los rendimientos íntegros antes de aplicar la escala impositiva, reduciendo de manera directa la factura fiscal anual del trabajador.
              </p>
            </div>
          </div>
        </article>

        {/* Sección 4: 12 vs 14 Pagas */}
        <article className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Comparativa práctica: Cobrar en 12 pagas frente a 14 pagas
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Una de las dudas más recurrentes entre los trabajadores es si resulta más conveniente cobrar el salario en 12 mensualidades o en 14 pagas. A nivel legal y fiscal, <strong>el salario neto anual que ingresas a final de año es exactamente el mismo céntimo a céntimo</strong>: el IRPF anual se liquida sobre el total percibido y las cotizaciones a la Seguridad Social se prorratean de forma obligatoria en 12 meses en todos los contratos.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-2">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
              <h3 className="text-indigo-700 font-bold text-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                Distribución en 12 Pagas (Prorrateadas)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Las dos pagas extraordinarias se reparten proporcionalmente entre los 12 meses del año. Tu nómina mensual es más elevada y constante mes a mes.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                <li><strong>Mayor liquidez mensual:</strong> Facilita atender hipotecas, alquileres y suministros regulares sin depender de pagas extras.</li>
                <li><strong>Eficiencia financiera:</strong> Disponer del dinero con meses de antelación permite rentabilizarlo en cuentas remuneradas o inversión en lugar de dejarlo en manos de la empresa.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
              <h3 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                Distribución en 14 Pagas (Tradicional)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Percibes 12 nóminas ordinarias mensuales de menor importe y dos pagas extraordinarias de cobro íntegro (habitualmente en junio/verano y diciembre/Navidad).
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                <li><strong>Ahorro forzoso psicológico:</strong> Ideal para personas a las que les cuesta ahorrar periódicamente para vacaciones o gastos navideños.</li>
                <li><strong>Cobro íntegro sin cuota de SS:</strong> En el mes de cobro extraordinario no se descuenta Seguridad Social porque ya se prorrateó mes a mes.</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Sección 5: 3 Casos Prácticos Reales */}
        <article className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            3 Casos Prácticos Resueltos: Desglose numérico paso a paso de tu nómina
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Para visualizar con total nitidez cómo se aplican las cotizaciones y las retenciones en situaciones de la vida real, analizamos tres perfiles salariales estándar en España (trabajador soltero de 32 años, sin hijos, con contrato indefinido y residencia de referencia):
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Caso 1: 22.000 € */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                  Sueldo Medio Inicial
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2">22.000 € Brutos / año</h3>
                <p className="text-xs text-slate-500 mt-0.5">Perfil junior / comercio / administrativo</p>
              </div>

              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Cotización SS (7,05%):</span>
                  <span className="font-mono font-medium text-rose-600">-1.551,00 €</span>
                </div>
                <div className="text-xs text-slate-400 pl-2">
                  • C. Comunes (4,70%): 1.034 €<br />
                  • Desempleo (1,55%): 341 €<br />
                  • Formación + MEI: 176 €
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Retención IRPF (10,89%):</span>
                  <span className="font-mono font-medium text-rose-600">-2.395,49 €</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 bg-emerald-50/50 px-2 rounded font-bold">
                  <span className="text-emerald-950">Salario Neto Anual:</span>
                  <span className="font-mono text-emerald-700">18.053,51 €</span>
                </div>
                <div className="pt-2 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Neto mensual (12 pagas):</span>
                    <span className="font-mono font-bold text-slate-900">1.504,46 € / mes</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Neto mensual (14 pagas):</span>
                    <span className="font-mono font-bold text-slate-900">1.289,54 € / mes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 2: 32.000 € */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-indigo-100 text-indigo-800 uppercase tracking-wide">
                  Sueldo Medio Cualificado
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2">32.000 € Brutos / año</h3>
                <p className="text-xs text-slate-500 mt-0.5">Perfil técnico / sanitario / docente</p>
              </div>

              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Cotización SS (7,05%):</span>
                  <span className="font-mono font-medium text-rose-600">-2.256,00 €</span>
                </div>
                <div className="text-xs text-slate-400 pl-2">
                  • C. Comunes (4,70%): 1.504 €<br />
                  • Desempleo (1,55%): 496 €<br />
                  • Formación + MEI: 256 €
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Retención IRPF (16,98%):</span>
                  <span className="font-mono font-medium text-rose-600">-5.434,20 €</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 bg-indigo-50/50 px-2 rounded font-bold">
                  <span className="text-indigo-950">Salario Neto Anual:</span>
                  <span className="font-mono text-indigo-700">24.309,80 €</span>
                </div>
                <div className="pt-2 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Neto mensual (12 pagas):</span>
                    <span className="font-mono font-bold text-slate-900">2.025,82 € / mes</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Neto mensual (14 pagas):</span>
                    <span className="font-mono font-bold text-slate-900">1.736,41 € / mes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 3: 45.000 € */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-amber-100 text-amber-800 uppercase tracking-wide">
                  Perfil Sénior / Mando
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2">45.000 € Brutos / año</h3>
                <p className="text-xs text-slate-500 mt-0.5">Ingeniería / mando intermedio / consultoría</p>
              </div>

              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Cotización SS (7,05%):</span>
                  <span className="font-mono font-medium text-rose-600">-3.172,50 €</span>
                </div>
                <div className="text-xs text-slate-400 pl-2">
                  • C. Comunes (4,70%): 2.115 €<br />
                  • Desempleo (1,55%): 697,50 €<br />
                  • Formación + MEI: 360 €
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Retención IRPF (20,85%):</span>
                  <span className="font-mono font-medium text-rose-600">-9.383,17 €</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 bg-amber-50/50 px-2 rounded font-bold">
                  <span className="text-amber-950">Salario Neto Anual:</span>
                  <span className="font-mono text-amber-700">32.444,33 €</span>
                </div>
                <div className="pt-2 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Neto mensual (12 pagas):</span>
                    <span className="font-mono font-bold text-slate-900">2.703,69 € / mes</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Neto mensual (14 pagas):</span>
                    <span className="font-mono font-bold text-slate-900">2.317,45 € / mes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Sección 6: 8 Preguntas Frecuentes con Acordeones <details> */}
        <article className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Preguntas Frecuentes sobre el Salario Neto, Retenciones y Nómina
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Respuestas directas y fundamentadas en la normativa laboral y fiscal española vigente.
            </p>
          </div>

          <div className="space-y-3">
            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    1
                  </span>
                  <span>¿Cómo se calcula la retención de IRPF y qué papel juega el Modelo 145?</span>
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>
                  La retención mensual del IRPF no es una cifra fijada al azar, sino el resultado del algoritmo oficial dictado anualmente por el Ministerio de Hacienda. Tu empresa aplica dicho cálculo tomando como base tu sueldo anual estimado y los datos personales que declaras en el <strong>Modelo 145</strong> (hijos menores de 25 años que convivan contigo, ascendientes mayores de 65 años dependientes, grado de discapacidad o pagos de pensiones compensatorias). Cualquier alteración en tu situación vital debe comunicarse a la empresa mediante este formulario para evitar desfases impositivos al presentar la Renta.
                </p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    2
                  </span>
                  <span>¿Por qué se paga más en la Renta al tener dos pagadores en el mismo año?</span>
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>
                  Tener dos pagadores no implica pagar más impuestos totales por el mismo nivel de ingresos, sino que <strong>se retuvo de menos cada mes</strong>. Cada empresa aplica retenciones calculando exclusivamente su propio salario bruto anual. Al liquidar el IRPF anual ante la Agencia Tributaria, todos los ingresos se suman en un único bloque, saltando a tipos marginales más altos. Además, la obligación formal de declarar se reduce de 22.000 € a <strong>15.876 €</strong> si has percibido más de 1.500 € del segundo pagador. Para evitar sorpresas, puedes pedir a tu segunda empresa que aplique un tipo de retención mayor.
                </p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    3
                  </span>
                  <span>¿Qué son los límites de cotización a la Seguridad Social (base mínima y máxima)?</span>
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>
                  La ley fija techos y suelos para las bases de cotización de los trabajadores por cuenta ajena. La <strong>base máxima oficial es de 4.720,50 € mensuales</strong>. Si tu salario bruto es superior (por ejemplo, 6.000 € al mes), solo cotizas a la Seguridad Social hasta los primeros 4.720,50 €. Todo el exceso salarial no soporta cuotas de Seguridad Social (ahorro del 7,05%), aunque tributa de forma íntegra por IRPF en los tramos más elevados.
                </p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    4
                  </span>
                  <span>¿Qué diferencia de cotización hay entre contratos indefinidos y contratos temporales?</span>
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>
                  En los contratos temporales (por circunstancias de la producción o de sustitución), la aportación del trabajador al desempleo es del <strong>1,60%</strong> de la base, frente al <strong>1,55%</strong> aplicable a los contratos indefinidos. En la cuota empresarial la diferencia es aún mayor: la empresa aporta un 6,70% por desempleo en contratos temporales frente al 5,50% en contratos indefinidos, penalizando deliberadamente la precariedad laboral.
                </p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    5
                  </span>
                  <span>¿Por qué la retención en las pagas extras es igual a la ordinaria pero no llevan Seguridad Social?</span>
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>
                  El Reglamento del IRPF exige aplicar a las pagas extras exactamente el mismo porcentaje de retención del IRPF que a la mensualidad habitual. Sin embargo, las pagas extras se cobran con un importe neto más alto de lo esperado porque <strong>no llevan descuento de Seguridad Social</strong>: la cuota de la Seguridad Social se prorratea y se deduce obligatoriamente mes a mes a lo largo de las 12 nóminas ordinarias del año.
                </p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    6
                  </span>
                  <span>¿Puedo solicitar a mi empresa que me retenga un IRPF más alto de forma voluntaria?</span>
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>
                  Sí, con total respaldo legal amparado en el artículo 88.5 del Reglamento del IRPF. Cualquier empleado puede presentar un escrito formal a Recursos Humanos indicando el porcentaje exacto voluntario que desea que se le retenga (por ejemplo, subir del 12% al 16%). La empresa está legalmente obligada a acatarlo a partir de la nómina siguiente. Es una estrategia excelente si tienes varios pagadores o ingresos por alquileres para no tener que pagar un importe elevado en la Declaración de la Renta.
                </p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    7
                  </span>
                  <span>¿Qué gastos deducibles se aplican automáticamente en el cálculo de la nómina?</span>
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>
                  Antes de calcular el tipo de retención del IRPF, la normativa descuenta automáticamente del salario bruto todas las cuotas satisfechas a la Seguridad Social y una cuantía fija general de <strong>2.000 € anuales</strong> en concepto de otros gastos deducibles generales. Si además tus ingresos netos son inferiores a 19.747,50 €, se aplica una reducción progresiva por rendimientos del trabajo que reduce sensiblemente la base imponible sujeta a gravamen.
                </p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-sm transition-all open:border-indigo-300 open:shadow-md">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer list-none select-none">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    8
                  </span>
                  <span>¿Cómo cotizan y tributan las horas extraordinarias en la nómina?</span>
                </span>
                <span className="ml-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                <p>
                  Las horas extraordinarias tributan plenamente en el IRPF como rendimientos del trabajo personal a tu tipo marginal aplicable. En la Seguridad Social, las horas extras motivadas por fuerza mayor disfrutan de un tipo de cotización reducido del 2% a cargo del trabajador, mientras que las horas extraordinarias habituales o voluntarias cotizan al tipo general del 4,70%.
                </p>
              </div>
            </details>
          </div>
        </article>
      </section>

    </main>
  );
}
