export type DismissalType = 'voluntary' | 'objective' | 'unfair' | 'end_of_contract';

export interface SeveranceInput {
  grossAnnualSalary: number;
  payChecksCount: 12 | 14;
  startDate: string;
  endDate: string;
  dismissalType: DismissalType;
  unusedVacationDays: number;
  daysWorkedInCurrentMonth: number;
}

export interface SettlementBreakdown {
  dailySalary: number;
  currentMonthSalary: number;
  vacationSettlement: number;
  extraProrataSettlement: number;
  totalSettlementHaberes: number;
  compensationDays: number;
  compensationAmount: number;
  totalLiquidation: number;
  monthsWorkedTotal: number;
}

const REFORM_DATE_2012 = new Date('2012-02-12');

function calculateProratedMonths(start: Date, end: Date): number {
  if (end < start) return 0;
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() >= start.getDate()) {
    months += 1;
  }
  return Math.max(1, months);
}

export function calculateSeverance(input: SeveranceInput): SettlementBreakdown {
  const {
    grossAnnualSalary,
    payChecksCount,
    startDate,
    endDate,
    dismissalType,
    unusedVacationDays,
    daysWorkedInCurrentMonth
  } = input;

  const start = new Date(startDate);
  const end = new Date(endDate);

  const dailySalary = Number((grossAnnualSalary / 365).toFixed(4));
  const monthlySalary = grossAnnualSalary / payChecksCount;

  const currentMonthSalary = Number((dailySalary * daysWorkedInCurrentMonth).toFixed(2));
  const vacationSettlement = Number((dailySalary * unusedVacationDays).toFixed(2));

  let extraProrataSettlement = 0;
  if (payChecksCount === 14) {
    const monthIndexInSemester = (end.getMonth() % 6) + (end.getDate() / 30);
    const oneExtraPay = grossAnnualSalary / 14;
    extraProrataSettlement = Number(((oneExtraPay / 6) * monthIndexInSemester).toFixed(2));
  }

  const totalSettlementHaberes = Number(
    (currentMonthSalary + vacationSettlement + extraProrataSettlement).toFixed(2)
  );

  let compensationAmount = 0;
  let compensationDays = 0;
  const totalMonths = calculateProratedMonths(start, end);

  if (dismissalType === 'objective') {
    const maxCompensation = monthlySalary * 12;
    const daysAllowed = (20 / 12) * totalMonths;
    compensationAmount = Math.min(daysAllowed * dailySalary, maxCompensation);
    compensationDays = Math.round(daysAllowed);
  } else if (dismissalType === 'unfair') {
    if (start < REFORM_DATE_2012) {
      const monthsPre = calculateProratedMonths(start, REFORM_DATE_2012);
      const daysPre = (45 / 12) * monthsPre;
      const amountPre = daysPre * dailySalary;

      const monthsPost = calculateProratedMonths(REFORM_DATE_2012, end);
      const daysPost = (33 / 12) * monthsPost;
      const amountPost = daysPost * dailySalary;

      const maxLimit24 = monthlySalary * 24;
      const maxLimit42 = monthlySalary * 42;

      const combined = amountPre + amountPost;
      if (amountPre > maxLimit24) {
        compensationAmount = Math.min(combined, maxLimit42);
      } else {
        compensationAmount = Math.min(combined, maxLimit24);
      }
      compensationDays = Math.round(daysPre + daysPost);
    } else {
      const maxCompensation = monthlySalary * 24;
      const daysAllowed = (33 / 12) * totalMonths;
      compensationAmount = Math.min(daysAllowed * dailySalary, maxCompensation);
      compensationDays = Math.round(daysAllowed);
    }
  } else if (dismissalType === 'end_of_contract') {
    const daysAllowed = (12 / 12) * totalMonths;
    compensationAmount = daysAllowed * dailySalary;
    compensationDays = Math.round(daysAllowed);
  }

  compensationAmount = Number(compensationAmount.toFixed(2));
  const totalLiquidation = Number((totalSettlementHaberes + compensationAmount).toFixed(2));

  return {
    dailySalary: Number(dailySalary.toFixed(2)),
    currentMonthSalary,
    vacationSettlement,
    extraProrataSettlement,
    totalSettlementHaberes,
    compensationDays,
    compensationAmount,
    totalLiquidation,
    monthsWorkedTotal: totalMonths
  };
}