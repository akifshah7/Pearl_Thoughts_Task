"use client"

import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useDatePickerStore from "~/store/datePicker.store";

const DatePickerComponent = () => {
  const { value, setValue } = useDatePickerStore();

  const handleChange = (dates: any) => {
    const [start, end] = dates || [null, null];
    setValue({
      startDate: start,
      endDate: end,
    });
  };

  return (
    <div className="w-full justify-center flex">
      <ReactDatePicker
        selected={value?.startDate}
        onChange={handleChange}
        startDate={value?.startDate}
        endDate={value?.endDate}
        selectsRange
        dateFormat="yyyy-MM-dd"
        className="w-96 bg-gray-100 border-2 text-black border-gray-400 rounded-md p-2"
        placeholderText="Select a date range"
        isClearable
      />
    </div>
  );
};

export default DatePickerComponent;
