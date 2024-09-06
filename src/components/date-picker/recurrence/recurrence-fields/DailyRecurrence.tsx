const DailyRecurrence = () => {
    return (
      <div className="w-ful mt-4">
        <label>
           <input className="bg-gray-100 w-full h-9 rounded-md p-2 active:border-none" min='1' placeholder="Repeat every X day(s)" />
        </label>
      </div>
    );
  };
  
  export default DailyRecurrence;
  