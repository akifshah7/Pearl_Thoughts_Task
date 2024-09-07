import React from "react";
import { DateRangePicker } from "@nextui-org/date-picker";
import useDatePickerStore from "~/store/datePicker.store";

const DatePickerComponent = () => {
  const { value, setValue } = useDatePickerStore();

  return (
    <DateRangePicker
      label="Select Date"
      value={value}
      onChange={setValue}
      calendarProps={{
        classNames: {
          base: "bg-white",
          headerWrapper: "p-4 bg-background",
          prevButton: "border-1 border-default-200 rounded-small",
          nextButton: "border-1 border-default-200 rounded-small",
          gridHeader: "bg-background shadow-none border-b-1 border-default-100",
          cellButton: [
            "data-[today=true]:bg-default-100 data-[selected=true]:bg-transparent rounded-small",
            "data-[range-start=true]:before:rounded-l-small",
            "data-[selection-start=true]:before:rounded-l-small",
            "data-[range-end=true]:before:rounded-r-small",
            "data-[selection-end=true]:before:rounded-r-small",
            "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-small",
            "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-small",
          ],
        },
      }}
      className="w-96 border-2 h-16 bg-gray-100 rounded-md border-gray-400 px-2 py-1"
    />
  );
};

export default DatePickerComponent;
