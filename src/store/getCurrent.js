import { createWithEqualityFn } from "zustand/traditional";

const useCurrent = createWithEqualityFn(
  (set) => ({
    current: 0,
    addCurrent: (number) => set(() => ({ current: number })),
  }),
  (state, newState) => state.current === newState.current
);

const useCurrentPage = createWithEqualityFn(
  (set) => ({
    resultsPerPage: 20,
    setResultsPerPage: (number) => set(() => ({ resultsPerPage: number })),
  }),
  (state, newState) => state.resultsPerPage === newState.resultsPerPage
);

export { useCurrent, useCurrentPage };
