'use client';

import React, { useState, useMemo } from 'react';
import { calculateSeverance, DismissalType, SeveranceInput } from '@/lib/engine/severance';

export const SeveranceCalculator: React.FC = () => {
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
    <div className="space-y-8">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            Datos de la Relación Laboral
          </h2>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            Normativa Estatuto de los Trabajadores
          </span>
        </div>

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
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              placeholder="Ej. 26000"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="dismissalType" className="block text-sm font-semibold text-slate-700">
              Motivo de Extinción de Contrato
            </label>
            <select
              id="dismissalType"
              value={formData.dismissalType}
              onChange={(e) => handleInputChange('dismissalType', e.target.value as DismissalType)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            >
              <option value="objective">Despido Objetivo / ERE (20 días/año - máx. 12 mensualidades)</option>
              <option value="unfair">Despido Improcedente (33 / 45 días/año - máx. 24 mensualidades)</option>
              <option value="end_of_contract">Fin de Contrato Temporal (12 días/año)</option>
              <option value="voluntary">Baja Voluntaria / Dimisión (Sin indemnización)</option>
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
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="endDate" className="block text-sm font-semibold text-slate-700">
              Fecha de Finalización / Cese
            </label>
            <input
              id="endDate"
              type="date"
              value={formData.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="payChecksCount" className="block text-sm font-semibold text-slate-700">
              Número de Pagas Anuales
            </label>
            <select
              id="payChecksCount"
              value={formData.payChecksCount}
              onChange={(e) => handleInputChange('payChecksCount', Number(e.target.value) as 12 | 14)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            >
              <option value={12}>12 Pagas (Prorrateadas mensualmente)</option>
              <option value={14}>14 Pagas (Con pagas extraordinarias)</option>
            </select>
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
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
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
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            />
            <p className="text-xs text-slate-500 mt-1">
              Introduce los días transcurridos entre el día 1 del mes de extinción y tu fecha efectiva de cese.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Liquidación Total Estimada (Finiquito + Indemnización)
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mt-1 tracking-tight">
              {formatCurrency(results.totalLiquidation)}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Total bruto pendiente de liquidar por la empresa al término de la relación laboral.
            </p>
          </div>
          <div className="md:text-right bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Salario Diario Oficial Regulador
            </span>
            <p className="text-2xl font-bold text-slate-100 mt-1">{formatCurrency(results.dailySalary)} / día</p>
            <span className="text-xs text-indigo-300 font-medium">
              {results.monthsWorkedTotal} meses de antigüedad computables
            </span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-800">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="text-xs text-slate-400 uppercase bg-slate-800/90 border-b border-slate-700">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Concepto Liquidado</th>
                <th className="py-3.5 px-4 font-semibold">Detalle y Base de Cálculo</th>
                <th className="py-3.5 px-4 text-right font-semibold">Importe Bruto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-200">Salario días del mes en curso</td>
                <td className="py-3 px-4 text-slate-400">{formData.daysWorkedInCurrentMonth} días devengados</td>
                <td className="py-3 px-4 text-right font-medium text-slate-100">{formatCurrency(results.currentMonthSalary)}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-200">Vacaciones devengadas y no disfrutadas</td>
                <td className="py-3 px-4 text-slate-400">{formData.unusedVacationDays} días pendientes de liquidar</td>
                <td className="py-3 px-4 text-right font-medium text-slate-100">{formatCurrency(results.vacationSettlement)}</td>
              </tr>
              {formData.payChecksCount === 14 && results.extraProrataSettlement > 0 && (
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-200">Parte proporcional de pagas extraordinarias</td>
                  <td className="py-3 px-4 text-slate-400">Paga extra devengada y no cobrada</td>
                  <td className="py-3 px-4 text-right font-medium text-slate-100">{formatCurrency(results.extraProrataSettlement)}</td>
                </tr>
              )}
              <tr className="bg-slate-800/50">
                <td className="py-3.5 px-4 font-semibold text-indigo-300">Subtotal Finiquito (Haberes Pendientes)</td>
                <td className="py-3.5 px-4 text-xs text-slate-400">Sujeto a cotización SS y retención IRPF ordinaria</td>
                <td className="py-3.5 px-4 text-right font-bold text-indigo-300">{formatCurrency(results.totalSettlementHaberes)}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-amber-300">
                  Indemnización por Extinción / Despido
                </td>
                <td className="py-3.5 px-4 text-slate-300">
                  {results.compensationDays} días de indemnización legal computable
                </td>
                <td className="py-3.5 px-4 text-right font-bold text-amber-300">{formatCurrency(results.compensationAmount)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 text-xs text-slate-400 leading-relaxed space-y-1.5">
          <p>
            <strong className="text-slate-300">Nota fiscal clave:</strong> La indemnización legal por despido obligatorio o improcedente está exenta de IRPF hasta el límite fijado por ley (máximo de 180.000 € conforme al Art. 7.e de la LIRPF). Por el contrario, los haberes del finiquito (días trabajados, vacaciones no disfrutadas y pagas extras) tributan y cotizan como rendimientos ordinarios del trabajo.
          </p>
        </div>
      </section>
    </div>
  );
};
