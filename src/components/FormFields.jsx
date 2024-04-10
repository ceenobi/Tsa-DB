import { Form } from "react-bootstrap";

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
          {data?.map((item, i) => (
            <option
              value={i === 0 ? "" : item.name.toLowerCase()}
              key={item.id}
              disabled={i === 0}
            >
              {item.name}
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
