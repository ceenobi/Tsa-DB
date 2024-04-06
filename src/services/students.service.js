import { axiosInstance, authHeader } from "@config";

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
  return await axiosInstance.patch(`/student/${studentId}`, formData, {
    headers: authHeader(),
  });
};

const addAStudent = async (formData) => {
  return await axiosInstance.post("/student", formData, {
    headers: authHeader(),
  });
};

const searchStudentsViaCourse = async (searchQuery) => {
  return await axiosInstance.get(`/student?searchTerm=${searchQuery}`);
};

const getStudentPaymentRecord = async (id) => {
  return await axiosInstance.get(`/student/${id}/payment`);
};

const addStudentPaymentRecord = async (id) => {
  return await axiosInstance.post(`/student/${id}/payment`);
};

const loginAdmin = async (formData) => {
  return await axiosInstance.post("/login", formData);
};

const updateAStudentPaymentRecord = async (studentId, paymentId, formData) => {
  return await axiosInstance.patch(`/student/${studentId}/payment/${paymentId}`, formData, {
    headers: authHeader(),
  });
};

export default {
  getAllStudents,
  getAStudent,
  updateAStudent,
  sendStudentDocket,
  searchStudentsViaCourse,
  addAStudent,
  getStudentPaymentRecord,
  addStudentPaymentRecord,
  loginAdmin,
  updateAStudentPaymentRecord,
};
