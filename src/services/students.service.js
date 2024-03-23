import { axiosInstance } from "@config";

const getAllStudents = async () => {
  return await axiosInstance.get("/student");
};

export default {
  getAllStudents,
};
