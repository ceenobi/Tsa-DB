import * as yup from "yup";
const validationSchema = yup
  .object({
    fullName: yup.string().required("missing info"),
    pka: yup.string().required("missing info"),
    // studentId: yup.string().required("missing info"),
    courseCohort: yup.string().required("missing info"),
    email: yup.string().required("missing email").email("Invalid email format"),
    phoneNumber: yup.string().required("missing phone number"),
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
