import { axiosInstance } from "@config";

const getAllStudents = async () => {
  return await axiosInstance.get("/student");
};

const getAStudent = async (studentId) => {
  return await axiosInstance.get(`/student/${studentId}`);
};

const sendStudentDocket = async (studentId) => {
  return await axiosInstance.get(`/student/email/${studentId}`);
};

const updateAStudent = async (studentId, formData) => {
  return await axiosInstance.patch(`/student/${studentId}`, formData);
};

const addAStudent = async (formData) => {
  return await axiosInstance.post("/student", formData);
};

const searchStudentsViaCourse = async (searchQuery) => {
  return await axiosInstance.get(`/student?searchTerm=${searchQuery}`);
};

export default {
  getAllStudents,
  getAStudent,
  updateAStudent,
  sendStudentDocket,
  searchStudentsViaCourse,
  addAStudent,
};
