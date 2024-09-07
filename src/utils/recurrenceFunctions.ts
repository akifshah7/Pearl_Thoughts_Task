import { formatDate } from "./dateFunctions";

export const calculateRecurringDates = (
  start: Date,
  end: Date,
  interval: number
) => {
  const formattedStartDate = formatDate(start);
  const formattedEndDate = formatDate(end);
  const dates = [];
  let currentDate = new Date(formattedStartDate);
  let endDate = new Date(formattedEndDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + interval);
  }

  return dates;
};
