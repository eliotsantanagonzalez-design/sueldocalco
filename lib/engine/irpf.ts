import {
  STATE_TAX_BRACKETS,
  DEFAULT_REGIONAL_TAX_BRACKETS,
  REGIONAL_TAX_BRACKETS,
  PERSONAL_MINIMUM_BASE,
  CHILDREN_MINIMUMS,
  DISABILITY_MINIMUMS,
  GENERAL_WORK_EXPENSES,
  TaxBracket
} from './constants';
import { FiscalInput, IrpfBreakdown } from '../types';

function applyBrackets(taxableBase: number, brackets: TaxBracket[]): number {
  if (taxableBase <= 0) return 0;
  let totalTax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (taxableBase > bracket.limit) {
      totalTax += (bracket.limit - previousLimit) * bracket.rate;
      previousLimit = bracket.limit;
    } else {
      totalTax += (taxableBase - previousLimit) * bracket.rate;
      break;
    }
  }
  return totalTax;
}

function calculateWorkReduction(netYield: number): number {
  if (netYield <= 14047.50) return 6498;
  if (netYield <= 19747.50) return Math.max(0, 6498 - 1.14 * (netYield - 14047.50));
  return 0;
}

function calculatePersonalMinimum(age: number, childrenCount: number, disabilityLevel: 0 | 33 | 65): number {
  let minimum = PERSONAL_MINIMUM_BASE;
  if (age > 75) minimum += 1400;
  else if (age > 65) minimum += 1150;

  for (let i = 0; i < childrenCount; i++) {
    if (i === 0) minimum += CHILDREN_MINIMUMS[0];
    else if (i === 1) minimum += CHILDREN_MINIMUMS[1];
    else if (i === 2) minimum += CHILDREN_MINIMUMS[2];
    else minimum += CHILDREN_MINIMUMS[3];
  }
  minimum += DISABILITY_MINIMUMS[disabilityLevel];
  return minimum;
}

export function calculateIrpf(
  input: FiscalInput,
  ssDeductionsAnnual: number
): IrpfBreakdown {
  const { grossSalary, age, childrenCount, disabilityLevel, autonomousCommunity } = input;

  const deductibleExpenses = ssDeductionsAnnual + GENERAL_WORK_EXPENSES;
  const netWorkYield = Math.max(0, grossSalary - deductibleExpenses);
  const workReduction = calculateWorkReduction(netWorkYield);
  const taxableBase = Math.max(0, netWorkYield - workReduction);

  if (grossSalary <= 15876 && childrenCount === 0) {
    return {
      taxableBase: 0,
      stateQuota: 0,
      regionalQuota: 0,
      totalQuota: 0,
      effectiveRate: 0
    };
  }

  const personalMinimum = calculatePersonalMinimum(age, childrenCount, disabilityLevel);
  const regionalBrackets = REGIONAL_TAX_BRACKETS[autonomousCommunity] || DEFAULT_REGIONAL_TAX_BRACKETS;

  const stateGrossTax = applyBrackets(taxableBase, STATE_TAX_BRACKETS);
  const stateMinTax = applyBrackets(personalMinimum, STATE_TAX_BRACKETS);
  const stateQuota = Math.max(0, stateGrossTax - stateMinTax);

  const regionalGrossTax = applyBrackets(taxableBase, regionalBrackets);
  const regionalMinTax = applyBrackets(personalMinimum, regionalBrackets);
  const regionalQuota = Math.max(0, regionalGrossTax - regionalMinTax);

  const totalQuota = Number((stateQuota + regionalQuota).toFixed(2));
  const effectiveRate = grossSalary > 0
    ? Number(((totalQuota / grossSalary) * 100).toFixed(2))
    : 0;

  return {
    taxableBase: Number(taxableBase.toFixed(2)),
    stateQuota: Number(stateQuota.toFixed(2)),
    regionalQuota: Number(regionalQuota.toFixed(2)),
    totalQuota,
    effectiveRate
  };
}