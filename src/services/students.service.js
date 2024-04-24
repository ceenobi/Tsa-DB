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
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const searchStudentsViaCourse = async (searchQuery) => {
  return await axiosInstance.get(`/student?searchTerm=${searchQuery}`);
};

const getStudentPaymentRecord = async (id) => {
  return await axiosInstance.get(`/student/${id}/payment`);
};

const addStudentPaymentRecord = async (id, formData) => {
  return await axiosInstance.post(
    `/student/${id}/payment`,
    formData,
    {
      headers: authHeader(),
    }
  );
};

const loginAdmin = async (formData) => {
  return await axiosInstance.post("/login", formData);
};

const getAStudentPaymentRecord = async (studentId, paymentId, formData) => {
  return await axiosInstance.get(
    `/student/${studentId}/payment/${paymentId}`,
    formData,
    {
      headers: authHeader(),
    }
  );
};
const updateAStudentPaymentRecord = async (studentId, paymentId, formData) => {
  return await axiosInstance.patch(
    `/student/${studentId}/payment/${paymentId}`,
    formData,
    {
      headers: authHeader(),
    }
  );
};

const sendStudentPaymentReminder = async (formData) => {
  return await axiosInstance.post("/student/send", formData);
};

const logout = () => {
  return localStorage.removeItem("adminToken");
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
  sendStudentPaymentReminder,
  logout,
  getAStudentPaymentRecord,
};
