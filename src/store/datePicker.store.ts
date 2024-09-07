import { create } from 'zustand';
import { parseDate } from '@internationalized/date';

// Define the Zustand store
interface DatePickerState {
  value: {
    start: any;
    end: any;
  };
  setValue: (newValue: { start: any; end: any }) => void;
}

const useDatePickerStore = create<DatePickerState>((set) => ({
  value: {
    start: parseDate("2024-04-01"),
    end: parseDate("2024-04-08"),
  },
  setValue: (newValue) => set({ value: newValue }),
}));

export default useDatePickerStore;
