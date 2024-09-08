import { create } from 'zustand';
import { DayOfWeek } from '~/types';

const initialState = {
  repeatEvery: 1,
  dailyRecurrence: null,
  weeklyRecurrence: null,
  selectedDays: [],
};

type RecurrenceState =  {
    repeatEvery: number;
    dailyRecurrence: number | null;
    weeklyRecurrence: number | null;
    selectedDays: DayOfWeek[];
    setRepeatEvery: (value: number) => void;
    toggleDay: (day: DayOfWeek) => void;    
    setDailyRecurrence: (day: number) => void;   
    setWeeklyRecurrence: (day: number) => void;
    reset: () => void;
}

const useRecurrenceStore = create<RecurrenceState>((set) => ({
  ...initialState,
  setDailyRecurrence: (day) => set(() => ({ dailyRecurrence: day })),
  setWeeklyRecurrence: (day) => set(() => ({ weeklyRecurrence: day })),
  setRepeatEvery: (value) => set(() => ({ repeatEvery: value })),
  toggleDay: (day) => set((state) => {
    const isSelected = state.selectedDays.includes(day);
    return {
      selectedDays: isSelected
        ? state.selectedDays.filter((d) => d !== day)
        : [...state.selectedDays, day],
    };
  }),
  reset: () => set(() => initialState),
}));

export default useRecurrenceStore;
