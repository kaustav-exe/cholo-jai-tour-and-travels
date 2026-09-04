export type MonthName =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export const MONTH_NAMES: MonthName[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export interface SeasonalPricingMap {
  January?: number;
  February?: number;
  March?: number;
  April?: number;
  May?: number;
  June?: number;
  July?: number;
  August?: number;
  September?: number;
  October?: number;
  November?: number;
  December?: number;
  [key: string]: number | undefined;
}

export interface PackagePricingResult {
  numericPrice: number;
  formattedPrice: string;
  monthName: MonthName;
  periodLabel: string;
  isSeasonal: boolean;
  pricingNote?: string;
  originalPrice?: string;
}

export interface MonthlyBreakdownItem {
  month: MonthName;
  shortMonth: string;
  price: number;
  formattedPrice: string;
  isCurrentMonth: boolean;
  isPeak: boolean;
}

/**
 * Returns current month name in English (e.g. "September")
 */
export function getCurrentMonthName(date: Date = new Date()): MonthName {
  const monthIndex = date.getMonth();
  return MONTH_NAMES[monthIndex];
}

/**
 * Cleanly format number into Indian Currency (e.g., 32000 -> "₹32,000")
 */
export function formatCurrency(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}

/**
 * Parse a price string like "₹32,000" or "₹18,500" into a numeric value (18500)
 */
export function parsePriceString(priceStr: string): number {
  if (!priceStr) return 0;
  const cleaned = priceStr.replace(/[^0-9]/g, '');
  return parseInt(cleaned, 10) || 0;
}

/**
 * Primary Pricing Function: Calculate active price for a given package and target month
 */
export function getPackagePriceForMonth(
  pkg: {
    price: string;
    seasonalPricing?: SeasonalPricingMap;
    pricingDetails?: { originalPrice?: string };
    pricingNote?: string;
  },
  targetMonth?: MonthName | string
): PackagePricingResult {
  const currentMonth = getCurrentMonthName();
  const month = (targetMonth as MonthName) || currentMonth;

  // Fallback base price parsed from string
  const baseNumericPrice = parsePriceString(pkg.price);

  let activePrice = baseNumericPrice;
  let isSeasonal = false;
  let isClosed = false;

  if (pkg.seasonalPricing && pkg.seasonalPricing[month] !== undefined) {
    const seasonalVal = pkg.seasonalPricing[month]!;
    if (seasonalVal === 0) {
      isClosed = true;
      activePrice = 0;
    } else {
      activePrice = seasonalVal;
    }
    isSeasonal = true;
  }

  const formattedPrice = isClosed ? 'Not Available' : formatCurrency(activePrice);
  const periodLabel = isClosed
    ? `${month} — Road Closed`
    : `${month} Departure Fare`;

  return {
    numericPrice: activePrice,
    formattedPrice,
    monthName: month,
    periodLabel,
    isSeasonal,
    pricingNote: pkg.pricingNote,
    originalPrice: pkg.pricingDetails?.originalPrice,
  };
}

/**
 * Returns full 12-month breakdown for a package for visualization components
 */
export function getSeasonalMonthlyBreakdown(
  pkg: {
    price: string;
    seasonalPricing?: SeasonalPricingMap;
  },
  selectedMonth?: MonthName | string
): MonthlyBreakdownItem[] {
  const activeMonth = targetMonthOrDefault(selectedMonth);
  const basePrice = parsePriceString(pkg.price);

  // Determine max price to highlight peak season
  let maxPrice = basePrice;
  if (pkg.seasonalPricing) {
    Object.values(pkg.seasonalPricing).forEach((val) => {
      if (val && val > maxPrice) maxPrice = val;
    });
  }

  return MONTH_NAMES.map((m) => {
    const monthPrice =
      pkg.seasonalPricing && pkg.seasonalPricing[m] !== undefined
        ? pkg.seasonalPricing[m]!
        : basePrice;

    const isClosed = pkg.seasonalPricing !== undefined && monthPrice === 0;

    return {
      month: m,
      shortMonth: m.slice(0, 3),
      price: monthPrice,
      formattedPrice: isClosed ? 'N/A' : formatCurrency(monthPrice),
      isCurrentMonth: m === activeMonth,
      isPeak: !isClosed && monthPrice > 0 && monthPrice === maxPrice && Object.keys(pkg.seasonalPricing || {}).length > 0,
    };
  });
}

function targetMonthOrDefault(targetMonth?: MonthName | string): MonthName {
  if (targetMonth && MONTH_NAMES.includes(targetMonth as MonthName)) {
    return targetMonth as MonthName;
  }
  return getCurrentMonthName();
}

/**
 * Generate dynamic pre-filled WhatsApp booking query
 */
export function getWhatsAppBookingUrl(
  pkgTitle: string,
  monthName?: string,
  formattedPrice?: string,
  phone: string = '919830905332'
): string {
  const activeMonth = monthName || getCurrentMonthName();
  const priceInfo = formattedPrice ? ` (${formattedPrice}/person)` : '';
  const message = `Hello Cholo Jai Tour & Travels, I am interested in the ${pkgTitle} package for ${activeMonth} departure${priceInfo}. Please share availability and booking details.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
