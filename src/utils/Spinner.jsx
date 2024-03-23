import { BeatLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center mt-5">
      <BeatLoader color="#1f2666" />
    </div>
  );
}
