import { useState } from "react";
import { focusedStudent } from "@assets";
import { Image, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from "./pages.module.css";
import { useTitle } from "@hooks";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { logo } from "@assets";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import * as yup from "yup";
import { BeatLoader } from "react-spinners";
import { studentsService } from "@services";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const [reveal, setReveal] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useTitle("Add a new student");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data) => {
    setIsClicked(true);
    try {
      setServerError("");
      setSuccessMsg("");
      const responseData = await studentsService.loginAdmin(data);
      if (responseData.data.success) {
        toast.success("Logged in " + responseData.data.admin.name);
        setSuccessMsg("Welcome " + responseData.data.admin.name);
        setIsClicked(true);
        localStorage.setItem(
          "adminToken",
          JSON.stringify(responseData.data.token)
        );
        navigate("/dashboard");
      }
      if (!responseData.ok) {
        const errorData = await responseData;
        setServerError(errorData.error);
      }
    } catch (error) {
      console.log(error.message);
      setServerError(error.response?.data?.error);
    } finally {
      setIsClicked(false);
    }
  };

  function handleHide() {
    setReveal((prevReveal) => !prevReveal);
  }
  const btnContent = isClicked ? <BeatLoader color="#ffffff" /> : "Log in";

  return (
    <main className={`${styles.loginDiv}`}>
      <div className={`${styles.bgImgTop} d-none d-lg-block`}></div>

      <div className={`d-lg-flex align-items-center position-relative`}>
        <div className={`${styles.imgStudent} d-none d-lg-block`}>
          <Image src={focusedStudent} className="w-100 h-100" />
        </div>
        <div className="position-absolute top-0 mt-5 ms-5 ">
          <NavLink to="/">
            <Image src={logo} className="w-50 ms-4 mt-4" />
          </NavLink>
          {/* <Image src={logo} className="w-75 ms-4 mt-3"/> */}
        </div>
        <div className={`p-5  rounded shadow-lg mx-5  ${styles.formDiv}`}>
          <h2
            style={{
              color: "rgba(31, 38, 102, 1)",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Welcome Back
          </h2>
          <p className="mb-5">Let&apos;s continue from were you stopped</p>
          <Form onSubmit={handleSubmit(handleLogin)}>
            {/* email address */}
            <Form.Group
              className="mb-4 text-secondary small"
              controlId="formBasicEmail"
            >
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                {...register("email")}
              />
              <Form.Text className="text-muted">
                {/* We'll never share your email with anyone else. */}
              </Form.Text>
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </Form.Group>
            {/* password */}

            <Form.Group
              className="mb-3 position-relative text-secondary small"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={reveal ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
              />
              <p
                className="position-absolute end-0 top-50  me-2"
                role="button"
                onClick={handleHide}
              >
                {reveal ? <FaRegEye /> : <FaRegEyeSlash />}
              </p>
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div className="my-4">
              <a href="#" className="fw-bold small">
                Forgot password?
              </a>
            </div>
            {serverError && <p className="text-danger">{serverError}</p>}
            {successMsg && <p className="text-success">{successMsg}</p>}

            <Button
              variant="primary"
              type="submit"
              className="w-100 my-4"
              disabled={isSubmitting}
            >
              {btnContent}
            </Button>
          </Form>
          {/* <div className={`${styles.bgImgBttom}`}></div> */}
        </div>
      </div>
    </main>
  );
}
