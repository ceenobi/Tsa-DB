import { createWithEqualityFn } from "zustand/traditional";

const useCurrent = createWithEqualityFn(
  (set) => ({
    current: 0,
    addCurrent: (number) => set(() => ({ current: number })),
  }),
  (state, newState) => state.current === newState.current
);

export { useCurrent };

// import { create } from "zustand";

// const useCurrent = create((set) => ({
//   current: 0,
//   addCurrent: (number) => set(() => ({ current: number })),
// }));

// export default useCurrent;
