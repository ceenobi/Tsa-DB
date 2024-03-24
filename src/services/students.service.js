import { axiosInstance } from "@config";

const getAllStudents = async () => {
  return await axiosInstance.get("/student");
};
const getAStudent = async (studentId) => {
  return await axiosInstance.get(`/student/${studentId}`);
};

const updateAStudent = async (studentId, formData) => {
  return await axiosInstance.patch(`/student/${studentId}`, formData);
};

export default {
  getAllStudents,
  getAStudent,
  updateAStudent,
};
