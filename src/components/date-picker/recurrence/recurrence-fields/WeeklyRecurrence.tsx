import React from "react";
import useRecurrenceStore from "~/store/recurrence.store";
import Checkbox from "~/components/shared/Checkbox";

const WeeklyRecurrence = () => {
  const selectedDays = useRecurrenceStore((state) => state.selectedDays);
  const toggleDay = useRecurrenceStore((state) => state.toggleDay);

  const handleDayChange = (day: string) => {
    toggleDay(day);
  };

  return (
    <div className="mt-4">
      <label>
        <input
          className="bg-gray-100 w-full h-9 rounded-md p-2 active:border-none"
          min="1"
          placeholder="Repeat every X week(s)"
        />
      </label>
      <div className="flex w-full justify-center gap-x-2 flex-wrap mt-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <Checkbox
            day={day}
            key={day}
            value={day}
            checked={selectedDays.includes(day)}
            onChange={() => handleDayChange(day)}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyRecurrence;
