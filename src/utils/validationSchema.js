import * as yup from "yup";
const validationSchema = yup
  .object({
    fullName: yup.string().required("This field is required"),
    pka: yup.string().required("This field is required"),
    courseCohort: yup.string().required("This field is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    phoneNumber: yup.string().required("Please input a reachable number"),
    classType: yup.string().required("Please select class type"),
    receipt: yup.string().required("receipt is required"),
    whatsappNumber: yup.string().required("This field is required"),
    emergencyContactName: yup.string().required("This field is required"),
    emergencyContactNumber: yup.string().required("This field is required"),
    emergencyContactLocation: yup.string().required("This field is required"),
    amount: yup.string().required("amount is required"),
    image: yup.string().required("Image is required"),
    password:yup.string().required("Password is required"),
    adminEmail:yup.string().required("Admin account not found")
  })
  .required();

export default validationSchema;
