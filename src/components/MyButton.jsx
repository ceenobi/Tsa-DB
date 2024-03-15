import { Button } from "react-bootstrap";

export default function MyButton({
  text,
  iconA,
  iconB,
  variant,
  className,
  ...props
}) {
  return (
    <Button
      variant={variant}
      className={`${className}`}
      {...props}
    >
      {iconA}
      {text}
      {iconB}
    </Button>
  );
}

