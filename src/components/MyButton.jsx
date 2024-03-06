import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

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
      style={{ minWidth: "fit-content" }}
      {...props}
    >
      {iconA}
      {text}
      {iconB}
    </Button>
  );
}

MyButton.propTypes = {
  text: PropTypes.any,
  iconA: PropTypes.any,
  iconB: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.string,
  props: PropTypes.any,
};
