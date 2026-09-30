'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { calculateSeverance, DismissalType, SeveranceInput } from '@/lib/engine/severance';
import { AdBanner } from '@/components/ads/AdBanner';

export default function FiniquitoPage() {
  const [formData, setFormData] = useState<SeveranceInput>({
    grossAnnualSalary: 26000,
    payChecksCount: 12,
    startDate: '2022-03-01',
    endDate: '2026-09-30',
    dismissalType: 'objective',
    unusedVacationDays: 5,
    daysWorkedInCurrentMonth: 30
  });

  const results = useMemo(() => {
    return calculateSeverance(formData);
  }, [formData]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 2
    }).format(val);
  };

  const handleInputChange = (field: keyof SeveranceInput, value: unknown) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">Calculadora de Finiquito e Indemnización</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculadora de Finiquito e Indemnización por Despido
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Calcula con precisión lo que te corresponde al finalizar tu relación laboral: salario pendiente del mes, vacaciones no disfrutadas, pagas extras e indemnización legal por cese.
          </p>
        </header>

        <AdBanner slotId="3322114455" format="horizontal-banner" />

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Datos de la Relación Laboral</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="grossAnnualSalary" className="block text-sm font-semibold text-slate-700">
                Salario Bruto Anual (€)
              </label>
              <input
                id="grossAnnualSalary"
                type="number"
                min="0"
                step="500"
                value={formData.grossAnnualSalary || ''}
                onChange={(e) => handleInputChange('grossAnnualSalary', Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="dismissalType" className="block text-sm font-semibold text-slate-700">
                Motivo de Extinción
              </label>
              <select
                id="dismissalType"
                value={formData.dismissalType}
                onChange={(e) => handleInputChange('dismissalType', e.target.value as DismissalType)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="objective">Despido Objetivo / ERE (20 días/año)</option>
                <option value="unfair">Despido Improcedente (33 / 45 días/año)</option>
                <option value="end_of_contract">Fin de Contrato Temporal (12 días/año)</option>
                <option value="voluntary">Baja Voluntaria (Sin indemnización)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="startDate" className="block text-sm font-semibold text-slate-700">
                Fecha de Inicio del Contrato
              </label>
              <input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="endDate" className="block text-sm font-semibold text-slate-700">
                Fecha de Finalización
              </label>
              <input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="vacation" className="block text-sm font-semibold text-slate-700">
                Días de Vacaciones Pendientes
              </label>
              <input
                id="vacation"
                type="number"
                min="0"
                max="60"
                value={formData.unusedVacationDays}
                onChange={(e) => handleInputChange('unusedVacationDays', Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="daysWorked" className="block text-sm font-semibold text-slate-700">
                Días Trabajados en el Mes de Salida
              </label>
              <input
                id="daysWorked"
                type="number"
                min="1"
                max="31"
                value={formData.daysWorkedInCurrentMonth}
                onChange={(e) => handleInputChange('daysWorkedInCurrentMonth', Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </section>

        <AdBanner slotId="8877665544" format="rectangle-card" />

        <section className="bg-slate-900 text-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Liquidación Total Estimada (Bruta)
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mt-1">
                {formatCurrency(results.totalLiquidation)}
              </div>
            </div>
            <div className="md:text-right">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Salario Diario Oficial
              </span>
              <p className="text-xl font-bold text-slate-200 mt-1">{formatCurrency(results.dailySalary)} / día</p>
              <span className="text-xs text-slate-500">{results.monthsWorkedTotal} meses computables</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="text-xs text-slate-400 uppercase bg-slate-800/80 border-b border-slate-700">
                <tr>
                  <th className="py-3 px-4">Concepto Liquidado</th>
                  <th className="py-3 px-4">Detalle</th>
                  <th className="py-3 px-4 text-right">Importe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-3 px-4 font-medium">Días trabajados del mes</td>
                  <td className="py-3 px-4 text-slate-400">{formData.daysWorkedInCurrentMonth} días devengados</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.currentMonthSalary)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Vacaciones no disfrutadas</td>
                  <td className="py-3 px-4 text-slate-400">{formData.unusedVacationDays} días pendientes</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.vacationSettlement)}</td>
                </tr>
                <tr className="bg-slate-800/40">
                  <td className="py-3 px-4 font-semibold text-slate-200">Subtotal Finiquito (Haberes)</td>
                  <td className="py-3 px-4 text-slate-400">Sujeto a IRPF y Seguridad Social</td>
                  <td className="py-3 px-4 text-right font-bold text-white">{formatCurrency(results.totalSettlementHaberes)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-amber-300">Indemnización por Despido</td>
                  <td className="py-3 px-4 text-slate-400">{results.compensationDays} días de indemnización legal</td>
                  <td className="py-3 px-4 text-right font-bold text-amber-300">{formatCurrency(results.compensationAmount)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}