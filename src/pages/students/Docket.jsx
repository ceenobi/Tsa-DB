import { useTitle } from "@hooks";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowLeft } from "react-icons/md";
import { Headings, MyButton } from "@components";
import { HiOutlinePhone } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { PiGoogleChromeLogoThin } from "react-icons/pi";
import { Image, Stack } from "react-bootstrap";
import styles from "./student.module.css";
import { tsLogo, divider } from "@assets";

export default function Docket() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  useTitle(`StudentId ${studentId}`);

  return (
    <>
      <div className="mt-5 d-lg-flex justify-content-between align-items-start">
        <div className="d-flex gap-1 mb-2 mb-lg-0">
          <MdArrowLeft
            size="50px"
            className="cursor"
            color="#1f2666"
            onClick={() => navigate(-1)}
          />
          <div>
            <Headings
              title="Student Docket"
              color="var(--mainBlue)"
              size="1.375rem"
            />
            <p className={styles.pStyle}>Bakare Mariam Oyelola - 24030105WD</p>
          </div>
        </div>
        <div className="d-flex justify-content-between gap-3">
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
        <div className="my-3 my-lg-5 d-md-flex justify-content-between align-items-start p-3 p-lg-4">
          <div className={`${styles.boxSize} mb-4 mb-lg-0`}>
            <Headings
              title="TechStudio Academy"
              color="var(--mainBlue)"
              size="1.375rem"
            />
            <p className={styles.pStyle}>
              1, Ogunlesi Street, Off Bode Thomas, Awoyokun Bus Stop, Onipanu,
              Lagos State.
            </p>
            <p className={`${styles.pStyle} mb-2 mb-lg-1`}>
              <HiOutlinePhone /> +2348109712678, +2348113800161, +2348126051769.
            </p>
            <div className="d-flex flex-wrap flex-xl-nowrap gap-lg-2 align-items-center">
              <div className="d-flex gap-1 align-items-center mb-0">
                <CiMail />
                <span className={styles.pStyle}>
                  info@techstudioacademy.com
                </span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <PiGoogleChromeLogoThin />
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
          <Image src={tsLogo} fluid className="d-none d-md-block" />
        </div>
        <div className="py-2 py-lg-5">
          <Headings
            title="STUDENT ENROLLMENT DOCKET"
            color="var(--mainWhite)"
            className={`${styles.headers} p-2 rounded-2 text-center mx-auto`}
          />
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-4 p-3 p-lg-4">
          <div>
            <div className="mb-4">
              <p className={`${styles.pStyleMini} mb-0`}>Full Name</p>
              <Headings
                title="Bakare Mariam Oyelola"
                color="var(--mainBlue)"
                size="1.2rem"
              />
            </div>
            <div className="mb-4 d-flex text-wrap flex-column">
              <p className={`${styles.pStyleMini} mb-0`}>Email Address</p>
              <Headings
                title="oyelolaifeoluwa@gmail.com"
                color="var(--mainBlue)"
                size="1.2rem"
              />
            </div>
            <div className="mb-4">
              <p className={`${styles.pStyleMini} mb-0`}>Course Duration</p>
              <Headings
                title="16 Weeks"
                color="var(--mainBlue)"
                size="1.2rem"
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className={`${styles.pStyleMini} mb-0`}>Popularly Known As</p>
              <Headings title="Mimi" color="var(--mainBlue)" size="1.25rem" />
            </div>
            <div className="mb-4">
              <p className={`${styles.pStyleMini} mb-0`}>Phone Number</p>
              <Headings
                title="08130000000"
                color="var(--mainBlue)"
                size="1.2rem"
              />
            </div>
            <div className="mb-4">
              <p className={`${styles.pStyleMini} mb-0`}>Class Type</p>
              <Headings title="Weekend" color="var(--mainBlue)" size="1.2rem" />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className={`${styles.pStyleMini} mb-0`}>Student ID</p>
              <Headings
                title="24030105WD"
                color="var(--mainBlue)"
                size="1.2rem"
              />
            </div>
            <div className="mb-4">
              <p className={`${styles.pStyleMini} mb-0`}>Course-Cohort</p>
              <Headings
                title="Fullstack March 2024"
                color="var(--mainBlue)"
                size="1.2rem"
              />
            </div>
            <div className="mb-4">
              <p className={`${styles.pStyleMini} mb-0`}>Valid Till</p>
              <Headings
                title="02-10-2025"
                color="var(--mainRed)"
                size="1.2rem"
              />
            </div>
          </div>
          <div className="mx-auto mx-md-0 mx-lg-auto mx-xl-0">
            <Image
              src={
                "https://res.cloudinary.com/ceenobi/image/upload/v1701812025/pintube/czx6fsishkk3yaeeazwc.jpg"
              }
              fluid
              className="rounded-4"
              style={{ height: "300px" }}
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <Stack
            direction="horizontal"
            className="w-100 justify-content-center mb-3 position-relative"
          >
            <Image
              src={divider}
              className="position-absolute top-50 start-50 translate-middle"
            />
            <Headings
              title="IMPORTANT INFORMATION"
              color="var(--offBlack)"
              size="1.2rem"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </Stack>
          <p className={`${styles.pStyleMini} ${styles.boxSize} mb-4`}>
            Please note the following as they guide the usage of the enrollment
            docket;
          </p>
          <p className={`${styles.pStyleMini} ${styles.boxSize} mb-4  `}>
            Lorem ipsum dolor sit amet consectetur. Est amet lorem mauris ipsum
            mi pharetra elementum. Nec augue integer facilisi mi ultrices
            malesuada tristique. Mattis mauris placerat sit iaculis at pretium
            tempor. Massa pharetra suspendisse velit aliquam et mi.
          </p>
        </div>
      </div>
    </>
  );
}
