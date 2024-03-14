export default function Headings({ title, size, color, ...props }) {
  return (
    <h1
      style={{ fontSize: `${size}`, color: `${color}`, fontWeight: "700" }}
      {...props}
    >
      {title}
    </h1>
  );
}
