import { useState } from "react";
import { focusedStudent } from "@assets";
import { Image, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from "./pages.module.css";
import { useTitle } from "@hooks";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { logo } from "@assets";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [reveal, setReveal] = useState(false);

  useTitle("Add a new student");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  function handleHide() {
    !reveal ? setReveal(true) : setReveal(false);
  }
  return (
    <div className="d-lg-flex align-items-center position-relative ">
      <div className={`${styles.imgStudent} `}>
        <Image src={focusedStudent} className="w-100 h-100 object-fit-cove " />
      </div>
      <div className="position-absolute top-0 mt-5 ms-5 ">
        <NavLink to="/">
          <Image src={logo} className="w-50 ms-4 mt-4" />
        </NavLink>
        {/* <Image src={logo} className="w-75 ms-4 mt-3"/> */}
      </div>
      <div className="p-5  rounded shadow-lg mx-5 w-50">
        <h2
          style={{
            color: "rgba(31, 38, 102, 1)",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Welcome Back
        </h2>
        <p className="mb-5">Let's continue from were you stopped</p>
        <Form>
          {/* email address */}
          <Form.Group className="mb-4 text-secondary small" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
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
            />
            <p
              className="position-absolute end-0 top-50  me-2"
              role="button"
              onClick={handleHide}
            >
              {reveal ? <FaRegEyeSlash /> : <FaRegEye />}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <div className="my-4">
            <a href="#" className="fw-bold small">
              Forgot password?
            </a>
          </div>
          <Button variant="primary" type="submit" className="w-100 my-4">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}
