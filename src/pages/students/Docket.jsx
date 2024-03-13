import { useTitle } from "@hooks";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowLeft } from "react-icons/md";
import { Headings, MyButton } from "@components";
import { HiOutlinePhone } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { FiChrome } from "react-icons/fi";
import styles from "./student.module.css";

export default function Docket() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  useTitle(`StudentId ${studentId}`);

  return (
    <>
      <div className="mt-5 d-flex justify-content-between align-items-start">
        <div className="d-flex gap-1 justify-content-between align-items-start">
          <MdArrowLeft
            size="50px"
            className="cursor"
            color="#1f2666"
            onClick={() => navigate(-1)}
          />
          <div>
            <Headings
              title="Student Docket"
              size="1.375rem"
              color="var(--mainBlue)"
            />
            <p className={styles.pStyle}>Bakare Mariam Oyelola - 24030105WD</p>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-3">
          <MyButton
            variant="primary"
            text="Download Docket"
            className="fw-bold"
          />
          <MyButton
            variant="outline-primary"
            text="Share Via Email"
            className="fw-bold"
          />
        </div>
      </div>
      <div className={`${styles.bg} rounded-4 p-3 mt-5`}>
        <div className="mt-5 d-flex justify-content-between align-items-start p-4">
          <div className={styles.boxSize}>
            <Headings
              title="TechStudio Academy"
              size="1.375rem"
              color="var(--mainBlue)"
            />
            <p className={styles.pStyle}>
              1, Ogunlesi Street, Off Bode Thomas, Awoyokun Bus Stop, Onipanu,
              Lagos State.
            </p>
            <p className={styles.pStyle}>
              <HiOutlinePhone /> +2348109712678, +2348113800161, +2348126051769.
            </p>
            <div className="d-flex flex-wrap flex-xl-nowrap gap-2 align-items-center">
              <div className="d-flex gap-1 align-items-center">
                <CiMail />
                <span className={styles.pStyle}>
                  info@techstudioacademy.com
                </span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <FiChrome />
                <a
                  href="https://www.techstudioacademy.com"
                  target="_blank"
                  className={styles.pStyle}
                >
                  www.techstudioacademy.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
