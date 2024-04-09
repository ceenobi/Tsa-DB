import * as yup from "yup";
const validationSchema = yup
  .object({
    fullName: yup.string().required("This field is required"),
    pka: yup.string().required("missing info"),
    // studentId: yup.string().required("missing info"),
    courseCohort: yup.string().required("This field is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    phoneNumber: yup.string().required("Please input a reachable number"),
    classType: yup.string().required("missing info"),
    receipt: yup.string().required("receipt is required"),
    whatsappNumber: yup.string().required("missing info"),
    // referralStudentId: yup.string().required("missing info"),
    // referralName: yup.string().required("missing info"),
    emergencyContactName: yup.string().required("missing info"),
    emergencyContactNumber: yup.string().required("missing info"),
    emergencyContactLocation: yup.string().required("missing info"),
    amount: yup.string().required("amount is required"),
    image: yup.string().required("image is required"),
  })
  .required();

export default validationSchema;
