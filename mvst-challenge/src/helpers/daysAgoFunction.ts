/**
 * The function calculates difference between dates
 * @param dateString given date
 * @returns diffDays
 */

export function daysAgo(dateString: string): number {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = today.getTime() - date.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    return diffDays;
  }