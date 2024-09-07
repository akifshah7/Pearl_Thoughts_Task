"use client";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useDatePickerStore from "~/store/datePicker.store";
import useRecurrenceStore from "~/store/recurrence.store";
import { calculateRecurringDates } from "~/utils/recurrenceFunctions";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MiniCalendar: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());

  const [dailyRecurrenceDays, setDailyRecurrenceDays] = useState<
    Date[] | undefined
  >(undefined);

  const { value } = useDatePickerStore();
  const { dailyRecurrence } = useRecurrenceStore();

  useEffect(() => {
    console.log(value)
    if (value.startDate && value.endDate && dailyRecurrence) {
      const recurrenceDates = calculateRecurringDates(
        value.startDate,
        value.endDate,
        dailyRecurrence
      );

      setDailyRecurrenceDays(recurrenceDates);
    }
  }, [value, dailyRecurrence]);

  return (
    <div className="flex w-full justify-center">
      <Calendar
        tileClassName={({ date }) => {
          if (
            dailyRecurrenceDays &&
            dailyRecurrenceDays.some(
              (recurrenceDate) =>
                recurrenceDate.toDateString() === date.toDateString()
            )
          ) {
            return "bg-red-500";
          }
          return "";
        }}
        onChange={setDate}
        value={date}
      />
    </div>
  );
};

export default MiniCalendar;
