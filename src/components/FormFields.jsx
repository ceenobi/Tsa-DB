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
  defaultValue,
  ...props
}) {
  return (
    <>
      <Form.Group className={className} controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Select
          name={name}
          {...register(name, registerOptions)}
          defaultValue={defaultValue}
          isInvalid={!!errors}
          {...props}
        >
          {data?.map((item, i) => (
            <option
              value={item.name.toLowerCase()}
              key={item.id}
              disabled={i === 0}
            >
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
