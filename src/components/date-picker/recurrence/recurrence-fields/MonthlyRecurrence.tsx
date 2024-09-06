import Dropdown from "~/components/shared/Dropdown";

const MonthlyRecurrence = () => {
  const monthlyRecurrenceOptions = ["First", "Second", "Third", "Fourth"];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="mt-4">
      <label>
        <input
          className="bg-gray-100 w-full h-9 rounded-md p-2 active:border-none"
          min="1"
          placeholder="Repeat every X month(s)"
        />
      </label>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-lg font-semibold mt-2">On the:</h4>
        <div className="flex gap-x-2 items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-emerald-500"
              />
            </label>
          </div>
          <span className="mr-1">Day</span>
          <input
            className="bg-gray-100 w-12 h-8 mr-1 rounded-md p-2 active:border-none text-black"
            min="1"
            defaultValue={1}
          />
          <span>of the month</span>
        </div>
        <div className="flex gap-x-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-emerald-500"
              />
            </label>
          </div>
          <Dropdown options={monthlyRecurrenceOptions} />
          <Dropdown options={weekDays} />
        </div>
      </div>
    </div>
  );
};

export default MonthlyRecurrence;
