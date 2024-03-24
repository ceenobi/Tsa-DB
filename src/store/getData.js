import { create } from "zustand";


const useGetStudentsData = create((set) => ({
  students: [],
  setStudents: (users) => set(() => ({ students: users })),
}));

const useGetAStudentData = create((set) => ({
  student: [],
  setStudent: (user) => set(() => ({ student: user })),
}));

export { useGetStudentsData, useGetAStudentData };
