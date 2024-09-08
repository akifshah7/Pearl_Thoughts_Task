import React from "react";
import useRecurrenceStore from "~/store/recurrence.store";
import Checkbox from "~/components/shared/Checkbox";
import { DayOfWeek } from "~/types";

const WeeklyRecurrence = () => {
  const recurrenceStore = useRecurrenceStore();
  const selectedDays = useRecurrenceStore((state) => state.selectedDays);
  const toggleDay = useRecurrenceStore((state) => state.toggleDay);

  const handleDayChange = (day: any) => {
    toggleDay(day);
  };

  return (
    <div className="mt-4">
      <label>
        <input
          value={recurrenceStore.weeklyRecurrence || ""}
          onChange={(e) =>
            recurrenceStore.setWeeklyRecurrence(Number(e.target.value))
          }
          className="bg-gray-100 w-full h-9 rounded-md p-2 active:border-none"
          placeholder="Repeat every X week(s)"
        />
      </label>
      <div className="flex w-full justify-center gap-x-2 flex-wrap mt-2">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <Checkbox
            day={day}
            key={day}
            value={day}
            checked={selectedDays.includes(day as DayOfWeek)}
            onChange={() => handleDayChange(day)}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyRecurrence;
