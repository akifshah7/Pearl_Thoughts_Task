import { DayOfWeek } from "~/types";

export const calculateRecurringDates = (
  start: Date,
  end: Date,
  interval: number
) => {
  const formattedStartDate = start.toDateString();
  const formattedEndDate = end.toDateString();
  const dates = [];
  let currentDate = new Date(formattedStartDate);
  let endDate = new Date(formattedEndDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + interval);
  }

  return dates;
};

/**
 * Generates recurrence dates based on the specified parameters.
 *
 * @param {Date} startDate - The start date of the range.
 * @param {Date} endDate - The end date of the range.
 * @param {number} interval - The interval in weeks for the recurrence.
 * @param {string[]} days - The days of the week to include in recurrence (e.g., ["Monday", "Tuesday"]).
 * @returns {Date[]} - An array of recurrence dates.
 */
export const generateRecurrenceDates = (
  startDate: Date,
  endDate: Date,
  interval: number,
  days: DayOfWeek[]
): Date[] => {
  if (!startDate || !endDate || interval <= 0 || !days.length) return [];

  const recurrences: Date[] = [];
  const dayMap: Record<DayOfWeek, number> = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };

  let currentDate = new Date(startDate);

  // Loop through each week within the range
  while (currentDate <= endDate) {
    days.forEach((day) => {
      const dayIndex = dayMap[day];

      // Create a new date based on the current week
      const newDate = new Date(currentDate);
      const currentDayIndex = newDate.getDay();
      const dayDifference = (dayIndex - currentDayIndex + 7) % 7;

      // Calculate the target date for the given day
      const targetDate = new Date(newDate.setDate(newDate.getDate() + dayDifference));

      // Check if the calculated target date is within the date range
      if (targetDate >= startDate && targetDate <= endDate) {
        recurrences.push(new Date(targetDate)); // Push a copy of the date
      }
    });

    // Move forward by the interval (in weeks)
    currentDate.setDate(currentDate.getDate() + interval * 7);
  }

  return recurrences;
};

