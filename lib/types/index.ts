export type CivilStatus = 'single' | 'married' | 'widowed' | 'divorced';
export type ContractType = 'indefinite' | 'temporary';

export interface FiscalInput {
  grossSalary: number;
  payChecksCount: 12 | 14;
  contractType: ContractType;
  age: number;
  childrenCount: number;
  disabilityLevel: 0 | 33 | 65;
  autonomousCommunity: string;
}

export interface SocialSecurityBreakdown {
  commonContingencies: number;
  unemployment: number;
  professionalTraining: number;
  mei: number;
  totalDeductions: number;
}

export interface IrpfBreakdown {
  taxableBase: number;
  stateQuota: number;
  regionalQuota: number;
  totalQuota: number;
  effectiveRate: number;
}

export interface SalaryCalculationResult {
  grossAnnual: number;
  grossMonthly: number;
  netAnnual: number;
  netMonthly: number;
  socialSecurity: SocialSecurityBreakdown;
  irpf: IrpfBreakdown;
}