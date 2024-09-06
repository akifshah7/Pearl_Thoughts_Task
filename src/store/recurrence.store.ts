import { create } from 'zustand';

type RecurrenceState =  {
    repeatEvery: number;
    selectedDays: string[];
    setRepeatEvery: (value: number) => void;
    toggleDay: (day: string) => void;     
  }

const useRecurrenceStore = create<RecurrenceState>((set) => ({
  repeatEvery: 1,
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
