import { create } from 'zustand';

// Define the Zustand store
type DatePickerState = {
  value: {
    startDate: Date | undefined;
    endDate: Date | undefined;
  };
  setValue: (newValue: { startDate: Date | undefined; endDate: Date | undefined }) => void;
}

const useDatePickerStore = create<DatePickerState>((set) => ({
  value: {
    startDate: undefined ,
    endDate: undefined,
  },
  setValue: (newValue) => set({ value: newValue }),
}));

export default useDatePickerStore;
