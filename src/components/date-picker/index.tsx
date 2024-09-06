import React from "react";
import { DateRangePicker } from "@nextui-org/date-picker";

const DatePickerComponent: React.FC = () => {
  return (
    <DateRangePicker
      label="Select Date"
      calendarProps={{
        classNames: {
          base: "bg-white",
          headerWrapper: "pt-4 bg-background",
          prevButton: "border-1 border-default-200 rounded-small",
          nextButton: "border-1 border-default-200 rounded-small",
          gridHeader: "bg-background shadow-none border-b-1 border-default-100",
          cellButton: [
            "data-[today=true]:bg-default-100 data-[selected=true]:bg-transparent rounded-small",
            // start (pseudo)
            "data-[range-start=true]:before:rounded-l-small",
            "data-[selection-start=true]:before:rounded-l-small",
            // end (pseudo)
            "data-[range-end=true]:before:rounded-r-small",
            "data-[selection-end=true]:before:rounded-r-small",
            // start (selected)
            "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-small",
            // end (selected)
            "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-small",
          ],
        },
      }}
      className="w-96 border border-2 h-16 bg-gray-100 rounded-md border-gray-400 px-2 py-1"
    />
  );
};

export default DatePickerComponent;
