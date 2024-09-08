"use client";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useDatePickerStore from "~/store/datePicker.store";
import useRecurrenceStore from "~/store/recurrence.store";
import {
  calculateRecurringDates,
  generateRecurrenceDates,
} from "~/utils/recurrenceFunctions";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MiniCalendar: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [locale, setLocale] = useState("en-US");

  const [dailyRecurrenceDays, setDailyRecurrenceDays] = useState<
    Date[] | undefined
  >(undefined);

  const { value } = useDatePickerStore();
  const { dailyRecurrence, weeklyRecurrence, selectedDays } =
    useRecurrenceStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocale(navigator.language);
    }
  }, []);

  // for daily recurrence
  useEffect(() => {
    console.log(value);
    if (value.startDate && value.endDate && dailyRecurrence) {
      const recurrenceDates = calculateRecurringDates(
        value.startDate,
        value.endDate,
        dailyRecurrence
      );

      setDailyRecurrenceDays(recurrenceDates);
    }
  }, [value, dailyRecurrence]);

  // for weekly recurrence
  useEffect(() => {
    if (
      value.startDate &&
      value.endDate &&
      weeklyRecurrence &&
      selectedDays.length
    ) {
      const weeklyRecurrenceDates = generateRecurrenceDates(
        value.startDate,
        value.endDate,
        weeklyRecurrence,
        selectedDays
      );

      setDailyRecurrenceDays(weeklyRecurrenceDates);
    }
  }, [value, weeklyRecurrence, selectedDays]);

  return (
    <div className="flex w-full justify-center">
      <Calendar
        locale={locale}
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
