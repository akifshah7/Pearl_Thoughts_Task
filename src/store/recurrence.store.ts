import { create } from 'zustand';
import { DayOfWeek } from '~/types';

type RecurrenceState =  {
    repeatEvery: number;
    dailyRecurrence: number | null;
    weeklyRecurrence: number | null;
    selectedDays: DayOfWeek[];
    setRepeatEvery: (value: number) => void;
    toggleDay: (day: DayOfWeek) => void;    
    setDailyRecurrence: (day: number) => void;   
    setWeeklyRecurrence: (day: number) => void;
  }

const useRecurrenceStore = create<RecurrenceState>((set) => ({
  repeatEvery: 1,
  dailyRecurrence: null,
  setDailyRecurrence: (day) => set(() => ({dailyRecurrence: day})),
  weeklyRecurrence: null,
  setWeeklyRecurrence: (day) => set(() => ({weeklyRecurrence: day})),
  selectedDays: [],
  setRepeatEvery: (value) => set(() => ({ repeatEvery: value })),
  toggleDay: (day) => set((state) => {
    const isSelected = state.selectedDays.includes(day);
    return {
      selectedDays: isSelected
        ? state.selectedDays.filter((d) => d !== day)
        : [...state.selectedDays, day],
    };
  }),
}));

export default useRecurrenceStore;
