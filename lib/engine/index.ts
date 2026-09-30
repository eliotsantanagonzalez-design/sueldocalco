import { FiscalInput, SalaryCalculationResult } from '../types';
import { calculateSocialSecurity } from './socialSecurity';
import { calculateIrpf } from './irpf';

export function calculateSalary(input: FiscalInput): SalaryCalculationResult {
  const socialSecurity = calculateSocialSecurity(input.grossSalary, input.contractType);
  const irpf = calculateIrpf(input, socialSecurity.totalDeductions);

  const totalAnnualDeductions = socialSecurity.totalDeductions + irpf.totalQuota;
  const netAnnual = Math.max(0, Number((input.grossSalary - totalAnnualDeductions).toFixed(2)));
  const netMonthly = Number((netAnnual / input.payChecksCount).toFixed(2));
  const grossMonthly = Number((input.grossSalary / input.payChecksCount).toFixed(2));

  return {
    grossAnnual: input.grossSalary,
    grossMonthly,
    netAnnual,
    netMonthly,
    socialSecurity,
    irpf
  };
}