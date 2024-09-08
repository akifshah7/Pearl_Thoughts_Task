"use client"

import React, { useState } from "react";
import DailyRecurrence from "./recurrence-fields/DailyRecurrence";
import WeeklyRecurrence from "./recurrence-fields/WeeklyRecurrence";
import useRecurrenceStore from "~/store/recurrence.store";

type Options = "Daily" | "Weekly" | undefined;

const RecurrenceOptions = () => {
  const [recurrenceType, setRecurrenceType] = useState<Options>(undefined);
  const { reset } = useRecurrenceStore();

  const handleRecurrenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecurrenceType(event.target.value as Options);
    reset();
  };
  return (
    <>
      <div className="mt-8 flex justify-center gap-x-2">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Daily</span>
            <input
              type="radio"
              name="radio-10"
              value='Daily'
              checked={recurrenceType === "Daily"}
              onChange={handleRecurrenceChange}
              className="radio checked:bg-emerald-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Weekly</span>
            <input
              type="radio"
              name="radio-10"
              value='Weekly'
              checked={recurrenceType === "Weekly"}
              onChange={handleRecurrenceChange}
              className="radio checked:bg-emerald-500"
            />
          </label>
        </div>
      </div>
      {/** Recurrence Options */}

      {recurrenceType === "Daily" ? <DailyRecurrence /> : null}
      {recurrenceType === "Weekly" ? <WeeklyRecurrence /> : null}
    </>
  );
};

export default RecurrenceOptions;
