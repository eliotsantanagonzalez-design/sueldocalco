'use client';

import React, { useState, useMemo } from 'react';
import { calculateSalary } from '@/lib/engine';
import { COMMUNITIES_LIST } from '@/lib/engine/constants';
import { FiscalInput, ContractType } from '@/lib/types';
import { ExportPdfButton } from '@/components/ui/ExportPdfButton';

interface SalaryCalculatorProps {
  initialCommunity?: string;
}

export const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({
  initialCommunity = 'Madrid'
}) => {
  const [formData, setFormData] = useState<FiscalInput>({
    grossSalary: 28000,
    payChecksCount: 12,
    contractType: 'indefinite',
    age: 32,
    childrenCount: 0,
    disabilityLevel: 0,
    autonomousCommunity: initialCommunity
  });

  const results = useMemo(() => {
    return calculateSalary(formData);
  }, [formData]);

  const handleInputChange = (field: keyof FiscalInput, value: unknown) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 2
    }).format(val);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          Datos Salariales y Personales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="grossSalary" className="block text-sm font-semibold text-slate-700">
              Salario Bruto Anual (€)
            </label>
            <div className="relative">
              <input
                id="grossSalary"
                type="number"
                min="0"
                step="500"
                value={formData.grossSalary || ''}
                onChange={(e) => handleInputChange('grossSalary', Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
                placeholder="Ej. 30000"
              />
              <span className="absolute right-4 top-3 text-slate-400 font-medium">€/año</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Número de Pagas
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleInputChange('payChecksCount', 12)}
                className={'py-3 px-4 rounded-lg font-medium text-sm transition-all border ' + (
                  formData.payChecksCount === 12
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                )}
              >
                12 Pagas (Prorrateadas)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('payChecksCount', 14)}
                className={'py-3 px-4 rounded-lg font-medium text-sm transition-all border ' + (
                  formData.payChecksCount === 14
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                )}
              >
                14 Pagas
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="community" className="block text-sm font-semibold text-slate-700">
              Comunidad Autónoma
            </label>
            <select
              id="community"
              value={formData.autonomousCommunity}
              onChange={(e) => handleInputChange('autonomousCommunity', e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
            >
              {COMMUNITIES_LIST.map(c => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="contractType" className="block text-sm font-semibold text-slate-700">
              Tipo de Contrato
            </label>
            <select
              id="contractType"
              value={formData.contractType}
              onChange={(e) => handleInputChange('contractType', e.target.value as ContractType)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
            >
              <option value="indefinite">Contrato Indefinido</option>
              <option value="temporary">Contrato Temporal</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="age" className="block text-sm font-semibold text-slate-700">
                Edad
              </label>
              <input
                id="age"
                type="number"
                min="16"
                max="99"
                value={formData.age}
                onChange={(e) => handleInputChange('age', Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="children" className="block text-sm font-semibold text-slate-700">
                Hijos a cargo
              </label>
              <input
                id="children"
                type="number"
                min="0"
                max="10"
                value={formData.childrenCount}
                onChange={(e) => handleInputChange('childrenCount', Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="disability" className="block text-sm font-semibold text-slate-700">
              Grado de Discapacidad
            </label>
            <select
              id="disability"
              value={formData.disabilityLevel}
              onChange={(e) => handleInputChange('disabilityLevel', Number(e.target.value) as 0 | 33 | 65)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="0">Sin discapacidad (menos del 33%)</option>
              <option value="33">Entre 33% y 64%</option>
              <option value="65">Igual o mayor al 65%</option>
            </select>
          </div>
        </div>
      </section>

      <AdBanner slotId="8472910482" format="rectangle-card" />

      <section className="bg-slate-900 text-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              Sueldo Neto Estimado ({formData.payChecksCount} pagas)
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 mt-1">
              {formatCurrency(results.netMonthly)}
              <span className="text-base text-slate-400 font-normal"> / mes</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block md:text-right">
                Neto Total Anual
              </span>
              <div className="text-2xl font-bold text-white mt-0.5">
                {formatCurrency(results.netAnnual)}
              </div>
            </div>
            <ExportPdfButton formData={formData} results={results} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2">
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Bruto Mensual</span>
            <p className="text-lg font-bold text-slate-200 mt-1">{formatCurrency(results.grossMonthly)}</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Retención IRPF</span>
            <p className="text-lg font-bold text-amber-400 mt-1">{results.irpf.effectiveRate}%</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Seguridad Social</span>
            <p className="text-lg font-bold text-rose-400 mt-1">{formatCurrency(results.socialSecurity.totalDeductions / formData.payChecksCount)}/mes</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">IRPF Retenido</span>
            <p className="text-lg font-bold text-rose-400 mt-1">{formatCurrency(results.irpf.totalQuota / formData.payChecksCount)}/mes</p>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
            Desglose de Cotizaciones Anuales ({formData.autonomousCommunity})
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="text-xs text-slate-400 uppercase bg-slate-800/80 border-b border-slate-700">
                <tr>
                  <th className="py-3 px-4 font-semibold">Concepto de Deducción</th>
                  <th className="py-3 px-4 font-semibold">Porcentaje</th>
                  <th className="py-3 px-4 font-semibold text-right">Importe Anual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-3 px-4">Contingencias Comunes</td>
                  <td className="py-3 px-4 text-slate-400">4,70%</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.socialSecurity.commonContingencies)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Desempleo</td>
                  <td className="py-3 px-4 text-slate-400">
                    {formData.contractType === 'temporary' ? '1,60%' : '1,55%'}
                  </td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.socialSecurity.unemployment)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Formación Profesional</td>
                  <td className="py-3 px-4 text-slate-400">0,10%</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.socialSecurity.professionalTraining)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Mecanismo de Equidad Intergeneracional (MEI)</td>
                  <td className="py-3 px-4 text-slate-400">0,70%</td>
                  <td className="py-3 px-4 text-right font-medium">{formatCurrency(results.socialSecurity.mei)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Retención IRPF (Estatal: {formatCurrency(results.irpf.stateQuota)} + Autonómica: {formatCurrency(results.irpf.regionalQuota)})</td>
                  <td className="py-3 px-4 text-slate-400">{results.irpf.effectiveRate}%</td>
                  <td className="py-3 px-4 text-right font-medium text-amber-300">{formatCurrency(results.irpf.totalQuota)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};