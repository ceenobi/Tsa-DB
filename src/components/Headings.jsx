import PropTypes from "prop-types";

export default function Headings({ title, size, color, ...props }) {
  return (
    <h1 style={{ fontSize: `${size}`, color: `${color}` }} {...props}>
      {title}
    </h1>
  );
}

Headings.propTypes = {
  title: PropTypes.any,
  size: PropTypes.string,
  color: PropTypes.string,
  props: PropTypes.func,
};
