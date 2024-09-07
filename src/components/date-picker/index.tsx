import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useDatePickerStore from "~/store/datePicker.store";

const DatePickerComponent = () => {
  const { value, setValue } = useDatePickerStore();

  const handleChange = (dates) => {
    const [start, end] = dates;
    setValue({
      start: start,
      end: end,
    });
  };

  return (
    <div className="w-full flex justify-center" >
      <ReactDatePicker
   
        selectsRange
        dateFormat="yyyy-MM-dd"
        className="w-96 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md p-2"
        placeholderText="Select a date range"
        isClearable
      />
      </div>
  );
};

export default DatePickerComponent;
