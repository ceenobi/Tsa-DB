import { tableLinks } from "@utils";
import { create } from "zustand";

const useFetchData = create((set) => {
  return {
    data: [],
    fetchAndSetData: () => {
      try {
        const res = tableLinks;
        set({
          data: res.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  };
});

const useGetStudentsData = create((set) => ({
  students: [],
  setStudents: (users) => set(() => ({ students: users })),
}));

export { useFetchData, useGetStudentsData };
