import { useState } from "react";
import { Form } from "react-bootstrap";
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
  accept,
  ...props
}) {
  const [preview, setPreview] = useState();

  const onPreviewFileName = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 5 * 1000 * 1000) {
        toast.error("File with maximum size of 5MB is allowed");
        return false;
      }
      setPreview(e.target.files[0].name);
    }
  };

  return (
    <>
      <Form.Group className={className} controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          {...register(name, registerOptions)}
          className="bg-light.bg-gradient"
          accept={accept}
          onChange={onPreviewFileName}
          {...props}
          isInvalid={!!errors}
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
          <span className="small">
            {preview.slice(0, preview.length / 2) + preview.slice(-5)}
          </span>
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
