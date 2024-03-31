import { useState } from "react";
import { Form, Image } from "react-bootstrap";
import toast from "react-hot-toast";

export function FormInputs({
  id,
  label,
  className,
  register,
  errors,
  placeholder,
  type,
  registerOptions,
  name,
  showPassword,
  togglePassword,
  ...props
}) {
  const [preview, setPreview] = useState();

  const onPreviewPicture = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 5 * 1000 * 1000) {
        toast.error("File with maximum size of 5MB is allowed");
        return false;
      }
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  console.log(preview);
  return (
    <>
      <Form.Group className={className} controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          {...register(name, registerOptions)}
          isInvalid={!!errors}
          className="bg-light.bg-gradient"
          onChange={onPreviewPicture}
          {...props}
        />
        <Form.Control.Feedback type="invalid">
          {errors?.message}
        </Form.Control.Feedback>
        {type === "password" && (
          <>
            {showPassword ? (
              <span
                className="position-absolute top-50 end-0 translate-middle cursor"
                onClick={togglePassword}
              >
                Hide
              </span>
            ) : (
              <span
                className="position-absolute top-50 end-0 translate-middle cursor"
                onClick={togglePassword}
              >
                Show
              </span>
            )}
          </>
        )}
      </Form.Group>
      {preview && (
        <>
          <Image
            src={preview}
            alt="image preview"
            style={{ width: "40px", height: "40px" }}
            className="rounded-3 my-3 me-2"
          />
        </>
      )}
    </>
  );
}

export function FormSelect({
  id,
  label,
  className,
  register,
  errors,
  registerOptions,
  name,
  data,
  ...props
}) {
  return (
    <>
      <Form.Group className={className} controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Select
          name={name}
          {...register(name, registerOptions)}
          defaultValue=""
          isInvalid={!!errors}
          {...props}
        >
          {data?.map((item) => (
            <option value={item.name.toLowerCase()} key={item.id}>
              {item.name.toLowerCase()}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors?.message}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}
