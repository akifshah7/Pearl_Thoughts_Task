import useRecurrenceStore from "~/store/recurrence.store";

const DailyRecurrence = () => {
  const recurrenceStore = useRecurrenceStore();
  console.log(recurrenceStore.dailyRecurrence)
  return (
    <div className="w-full mt-4">
      <label>
        <input
          value={recurrenceStore.dailyRecurrence || ""}
          onChange={(e) =>
            recurrenceStore.setDailyRecurrence(Number(e.target.value))
          }
          className="bg-gray-100 w-full h-9 rounded-md p-2 active:border-none"
          min="1"
          placeholder="Repeat every X day(s)"
        />
      </label>
    </div>
  );
};

export default DailyRecurrence;
