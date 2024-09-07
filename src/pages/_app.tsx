import React from "react";
import DatePickerComponent from "~/components/date-picker";
import MiniCalendar from "~/components/date-picker/mini-calendar/MiniCalendar";
import RecurrenceOptions from "~/components/date-picker/recurrence/RecurrenceOptions";
import "~/global.css";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white p-4">
      <div className="max-w-96 h-fit relative space-y-8">
        <DatePickerComponent />
        <RecurrenceOptions />
        <MiniCalendar />
      </div>
    </div>
  );
};

export default App;
