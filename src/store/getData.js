import { create } from "zustand";

const useGetStudentsData = create((set) => ({
  students: [],
  setStudents: (users) => set(() => ({ students: users })),
  searchQuery: [],
  setSearchQuery: (students) => set(() => ({ searchQuery: students })),
}));

const useGetAStudentData = create((set) => ({
  student: [],
  setStudent: (user) => set(() => ({ student: user })),
}));

const useFilteredData = create((set) => ({
  itemsPerPage: 20,
  filterData: null,
  setFilterData: (data) => set(() => ({ filterData: data })),
}));

const useGetAStudentPaymentRecord = create((set) => ({
  student: [],
  setStudent: (user) => set(() => ({ student: user })),
}));

export {
  useGetStudentsData,
  useGetAStudentData,
  useFilteredData,
  useGetAStudentPaymentRecord,
};
