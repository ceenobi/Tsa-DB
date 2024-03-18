import { Button } from "react-bootstrap";

export default function MyButton({ text, variant, className, ...props }) {
  return (
    <Button variant={variant} className={`${className}`} {...props}>
      {text}
    </Button>
  );
}
