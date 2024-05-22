import axios from "axios";

const TIMEOUTMSG = "Waiting for too long...Aborted !";
const config = {
  baseURL: import.meta.env.VITE_TSA_DB,
  timeout: 20000,
  timeoutErrorMessage: TIMEOUTMSG,
};

export const axiosInstance = axios.create(config);
