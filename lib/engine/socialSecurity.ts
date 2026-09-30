import { SS_MIN_BASE_MONTHLY, SS_MAX_BASE_MONTHLY, SS_RATES } from './constants';
import { ContractType, SocialSecurityBreakdown } from '../types';

export function calculateSocialSecurity(
  grossAnnualSalary: number,
  contractType: ContractType
): SocialSecurityBreakdown {
  const monthlySalary = grossAnnualSalary / 12;
  const contributionBase = Math.min(
    Math.max(monthlySalary, SS_MIN_BASE_MONTHLY),
    SS_MAX_BASE_MONTHLY
  );

  const unemploymentRate = contractType === 'temporary'
    ? SS_RATES.unemploymentTemporary
    : SS_RATES.unemploymentIndefinite;

  const monthlyCommon = contributionBase * SS_RATES.commonContingencies;
  const monthlyUnemployment = contributionBase * unemploymentRate;
  const monthlyTraining = contributionBase * SS_RATES.professionalTraining;
  const monthlyMei = contributionBase * SS_RATES.mei;

  const commonContingencies = Number((monthlyCommon * 12).toFixed(2));
  const unemployment = Number((monthlyUnemployment * 12).toFixed(2));
  const professionalTraining = Number((monthlyTraining * 12).toFixed(2));
  const mei = Number((monthlyMei * 12).toFixed(2));

  const totalDeductions = Number(
    (commonContingencies + unemployment + professionalTraining + mei).toFixed(2)
  );

  return {
    commonContingencies,
    unemployment,
    professionalTraining,
    mei,
    totalDeductions
  };
}