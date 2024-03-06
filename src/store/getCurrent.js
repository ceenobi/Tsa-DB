import { create } from "zustand";

const useCurrent = create((set) => ({
  current: 0,
  addCurrent: (name) => set(() => ({ current: name })),
}));

export default useCurrent;
