'use client';

import React from 'react';
import { FiscalInput, SalaryCalculationResult } from '@/lib/types';

interface ExportPdfButtonProps {
  formData: FiscalInput;
  results: SalaryCalculationResult;
}

export const ExportPdfButton: React.FC<ExportPdfButtonProps> = ({ formData, results }) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 2
    }).format(val);
  };

  const handlePrintPdf = () => {
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (!printWindow) {
      alert('Por favor, permite las ventanas emergentes para generar el informe en PDF.');
      return;
    }

    const totalDeductions = results.socialSecurity.totalDeductions + results.irpf.totalQuota;
    const contractLabel = formData.contractType === 'indefinite' ? 'Indefinido' : 'Temporal';
    const unemploymentRateLabel = formData.contractType === 'temporary' ? '1,60%' : '1,55%';

    const htmlLines = [
      '<!DOCTYPE html>',
      '<html lang="es"><head><meta charset="utf-8" />',
      '<title>Simulación Nómina - SueldoCalco.es</title>',
      '<style>',
      '* { box-sizing: border-box; margin: 0; padding: 0; font-family: sans-serif; }',
      'body { padding: 40px; color: #1e293b; background: #ffffff; }',
      '.header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 24px; }',
      '.brand { font-size: 22px; font-weight: 800; color: #0f172a; }',
      '.brand span { color: #4f46e5; }',
      '.meta { text-align: right; font-size: 12px; color: #64748b; }',
      '.hero-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }',
      '.hero-label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; }',
      '.hero-value { font-size: 28px; font-weight: 800; color: #059669; margin-top: 4px; }',
      '.hero-sub { font-size: 16px; font-weight: 700; color: #0f172a; text-align: right; margin-top: 4px; }',
      '.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px; }',
      '.field-card { border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; }',
      '.field-label { font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; }',
      '.field-val { font-size: 14px; font-weight: 600; color: #0f172a; margin-top: 2px; }',
      'table { width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 24px; font-size: 13px; }',
      'th { text-align: left; padding: 10px 12px; background: #f1f5f9; color: #475569; font-size: 11px; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; }',
      'td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; }',
      '.text-right { text-align: right; }',
      '.total-row { background: #f8fafc; font-weight: 700; }',
      '.footer-disclaimer { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 10px; color: #94a3b8; line-height: 1.5; }',
      '</style></head><body>',
      '<div class="header"><div class="brand">Sueldo<span>Calco</span>.es</div>',
      '<div class="meta"><p>Fecha: ' + new Date().toLocaleDateString('es-ES') + '</p><p>Informe de Simulación Salarial</p></div></div>',
      '<div class="hero-card"><div><div class="hero-label">Sueldo Neto Mensual (' + formData.payChecksCount + ' pagas)</div>',
      '<div class="hero-value">' + formatCurrency(results.netMonthly) + ' / mes</div></div>',
      '<div><div class="hero-label">Sueldo Neto Anual</div><div class="hero-sub">' + formatCurrency(results.netAnnual) + '</div></div></div>',
      '<div class="grid">',
      '<div class="field-card"><div class="field-label">Salario Bruto Anual</div><div class="field-val">' + formatCurrency(results.grossAnnual) + '</div></div>',
      '<div class="field-card"><div class="field-label">Comunidad Autónoma</div><div class="field-val">' + formData.autonomousCommunity + '</div></div>',
      '<div class="field-card"><div class="field-label">Modalidad Contrato</div><div class="field-val">' + contractLabel + '</div></div>',
      '<div class="field-card"><div class="field-label">Situación Familiar</div><div class="field-val">' + formData.age + ' años | ' + formData.childrenCount + ' hijos</div></div>',
      '</div>',
      '<h3>Desglose de Cotizaciones y Retenciones Anuales</h3>',
      '<table><thead><tr><th>Concepto</th><th>Tipo</th><th class="text-right">Importe Anual</th></tr></thead><tbody>',
      '<tr><td>Contingencias Comunes</td><td>4,70%</td><td class="text-right">' + formatCurrency(results.socialSecurity.commonContingencies) + '</td></tr>',
      '<tr><td>Desempleo</td><td>' + unemploymentRateLabel + '</td><td class="text-right">' + formatCurrency(results.socialSecurity.unemployment) + '</td></tr>',
      '<tr><td>Formación Profesional</td><td>0,10%</td><td class="text-right">' + formatCurrency(results.socialSecurity.professionalTraining) + '</td></tr>',
      '<tr><td>Mecanismo Equidad Intergeneracional (MEI)</td><td>0,70%</td><td class="text-right">' + formatCurrency(results.socialSecurity.mei) + '</td></tr>',
      '<tr><td>Retención IRPF</td><td>' + results.irpf.effectiveRate + '%</td><td class="text-right">' + formatCurrency(results.irpf.totalQuota) + '</td></tr>',
      '<tr class="total-row"><td colspan="2">Total Deducciones Anuales</td><td class="text-right">' + formatCurrency(totalDeductions) + '</td></tr>',
      '</tbody></table>',
      '<div class="footer-disclaimer">Simulación generada en SueldoCalco.es con carácter meramente orientativo.</div>',
      '<script>window.onload = function() { window.print(); };</script>',
      '</body></html>'
    ];

    printWindow.document.open();
    printWindow.document.write(htmlLines.join('\n'));
    printWindow.document.close();
  };

  return (
    <button
      type="button"
      onClick={handlePrintPdf}
      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
    >
      <span>Descargar Informe PDF</span>
    </button>
  );
};