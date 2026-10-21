import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white pt-16 pb-12 mt-20 text-slate-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Cuadrícula de 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          
          {/* Columna 1: Identidad y Proyecto */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-sm shadow-sm">
                €
              </span>
              <span className="font-extrabold text-lg tracking-tight text-slate-900">
                Sueldo<span className="text-indigo-600">Calco</span>
                <span className="text-xs text-slate-400 font-semibold ml-0.5">.es</span>
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Simulador financiero y laboral independiente en España. Cálculos precisos de salario neto, retenciones de IRPF y finiquito conforme a la normativa de la AEAT y la Seguridad Social.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 leading-normal border-t border-slate-100">
              Los resultados son simulaciones orientativas y carecen de valor vinculante.
            </div>
          </div>

          {/* Columna 2: Simuladores */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm tracking-tight">
              Calculadoras y Herramientas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-600 transition-colors">
                  Calculadora de Sueldo Neto
                </Link>
              </li>
              <li>
                <Link href="/calculadora-finiquito" className="hover:text-indigo-600 transition-colors">
                  Calculadora de Finiquito e Indemnización
                </Link>
              </li>
              <li>
                <Link href="/tablas-irpf" className="hover:text-indigo-600 transition-colors">
                  Tablas y Tramos de IRPF
                </Link>
              </li>
              <li>
                <Link href="/sueldo-neto/madrid" className="hover:text-indigo-600 transition-colors">
                  Sueldo Neto en Madrid
                </Link>
              </li>
              <li>
                <Link href="/sueldo-neto/cataluna" className="hover:text-indigo-600 transition-colors">
                  Sueldo Neto en Cataluña
                </Link>
              </li>
              <li>
                <Link href="/sueldo-neto/andalucia" className="hover:text-indigo-600 transition-colors">
                  Sueldo Neto en Andalucía
                </Link>
              </li>
              <li>
                <Link href="/sueldo-neto/comunidad-valenciana" className="hover:text-indigo-600 transition-colors">
                  Sueldo Neto en C. Valenciana
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Guías y Recursos */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm tracking-tight">
              Guías y Recursos Laborales
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guia-nomina-irpf" className="hover:text-indigo-600 transition-colors">
                  Cómo Leer tu Nómina Paso a Paso
                </Link>
              </li>
              <li>
                <Link href="/guia-nomina-irpf" className="hover:text-indigo-600 transition-colors">
                  Glosario de Términos Laborales
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-indigo-600 transition-colors">
                  Metodología y Fuentes Oficiales
                </Link>
              </li>
              <li>
                <Link href="/calculadora-finiquito" className="hover:text-indigo-600 transition-colors">
                  Indemnización por Despido
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legalidad y Cumplimiento */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm tracking-tight">
              Legalidad y Privacidad
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aviso-legal" className="hover:text-indigo-600 transition-colors">
                  Aviso Legal (LSSI-CE)
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-indigo-600 transition-colors">
                  Política de Privacidad (RGPD)
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-indigo-600 transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-indigo-600 transition-colors">
                  Contacto y Dudas Fiscales
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SueldoCalco.es. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Procesamiento 100% Local en Cliente
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
