import { focusedStudent } from "@assets";
import { Image, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from "./pages.module.css";
import { useTitle } from "@hooks";

export default function Login() {
  useTitle("Add a new student");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();


 const onSubmitHandler = async (e) => {
   e.preventDefault();
 };
  return (
    <div className="d-lg-flex align-items-center">
      <div className={styles.imgStudent}>
        <Image src={focusedStudent} fluid />
      </div>
      <div className="p-3 p-md-4">
         <Form onSubmit={handleSubmit(onSubmitHandler)}>

         </Form>
      </div>
    </div>
  );
}
