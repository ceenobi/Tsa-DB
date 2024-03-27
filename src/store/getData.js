import { create } from "zustand";


const useGetStudentsData = create((set) => ({
  students: [],
  setStudents: (users) => set(() => ({ students: users })),
}));

const useGetAStudentData = create((set) => ({
  student: [],
  setStudent: (user) => set(() => ({ student: user })),
}));

const useGetStudentsByCourse = create((set) => ({
  course: [],
  setCourse: (students) => set(() => ({ course: students })),
}));

export { useGetStudentsData, useGetAStudentData, useGetStudentsByCourse };
