import { useEffect } from "react";
import { useTitle } from "@hooks";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowLeft } from "react-icons/md";
import { Headings, MyButton, DocketModal } from "@components";
import { HiOutlinePhone } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { PiGoogleChromeLogoThin } from "react-icons/pi";
import { Image, Stack } from "react-bootstrap";
// import { useFetchData } from "@store";
import { tsLogo, divider } from "@assets";
import styles from "./student.module.css";

export default function Docket() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  useTitle(`StudentId ${studentId}`);
  // const fetchData = useFetchData((state) => state.fetchAndSetData);
  // const data = useFetchData((state) => state.data);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // const student = data.filter((item) => item.id == studentId);

  return (
    <>
      {/* {student.map((item) => (
        <>
          <div className="mt-3 mt-md-5 d-md-flex justify-content-between align-items-start">
            <Stack
              direction="horizontal"
              className="mb-2 mb-lg-0 align-items-start"
            >
              <MdArrowLeft
                size="30px"
                className="cursor"
                color="#1f2666"
                onClick={() => navigate("/dashboard/students")}
              />
              <div>
                <Headings
                  title="Student Docket"
                  color="var(--mainBlue)"
                  className={`mt-1 ${styles.h1}`}
                />
                <p className={styles.pStyle}>{item.title}</p>
              </div>
            </Stack>
            <div className="d-flex flex-wrap justify-content-between gap-3 mt-1">
              <DocketModal />
              <MyButton
                variant="outline-primary"
                text="Share Via Email"
                className={`fw-bold ${styles.btnWidth}`}
              />
            </div>
          </div>
          <div className={`${styles.bg} rounded-4 p-3 mt-5`}>
            <div className="my-3 my-lg-5 d-md-flex justify-content-between align-items-start p-3 p-lg-4">
              <div className={`${styles.boxSize} mb-4 mb-lg-0`}>
                <Headings
                  title="TechStudio Academy"
                  color="var(--mainBlue)"
                  className={`${styles.h1}`}
                />
                <p className={styles.pStyle}>
                  1, Ogunlesi Street, Off Bode Thomas, Awoyokun Bus Stop,
                  Onipanu, Lagos State.
                </p>
                <p className={`${styles.pStyle} mb-2 mb-lg-1`}>
                  <HiOutlinePhone /> +2348109712678, +2348113800161,
                  +2348126051769.
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
                className={`${styles.headers} ${styles.h1} p-2 rounded-2 text-center mx-auto`}
              />
            </div>
            <div className="d-flex flex-wrap flex-xl-nowrap gap-4 gap-xl-0 justify-content-between p-3 p-lg-4">
              <div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>Full Name</p>
                  <Headings
                    title={item.title}
                    color="var(--mainBlue)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>Email Address</p>
                  <Headings
                    title={item.email}
                    color="var(--mainBlue)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>Course Duration</p>
                  <Headings
                    title="16 Weeks"
                    color="var(--mainBlue)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
              </div>
              <div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>
                    Popularly Known As
                  </p>
                  <Headings
                    title={item.pka}
                    color="var(--mainBlue)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>Phone Number</p>
                  <Headings
                    title={item.phone}
                    color="var(--mainBlue)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>Class Type</p>
                  <Headings
                    title={item.classType}
                    color="var(--mainBlue)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
              </div>
              <div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>Student ID</p>
                  <Headings
                    title={item.id}
                    color="var(--mainBlue)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>Course-Cohort</p>
                  <Headings
                    title={item.courseCohort}
                    color="var(--mainBlue)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
                <div className="mb-3 mb-lg-4">
                  <p className={`${styles.pStyleMini} mb-0`}>Valid Till</p>
                  <Headings
                    title="02-10-2025"
                    color="var(--mainRed)"
                    className={`${styles.h1Mini}`}
                  />
                </div>
              </div>
              <div className="mx-auto mx-lg-auto mx-xl-0">
                <Image
                  src={item.img}
                  fluid
                  className="rounded-4 object-fit-cove"
                  style={{ height: "250px", width: "250px" }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-5">
              <Stack
                direction="horizontal"
                className="justify-content-center mb-5 position-relative"
              >
                <Image
                  src={divider}
                  className={`${styles.divider} position-absolute top-50 start-50 translate-middle`}
                />
                <Headings
                  title="IMPORTANT INFORMATION"
                  color="var(--offBlack)"
                  className={`${styles.h1} position-absolute top-50 start-50 translate-middle text-center`}
                />
              </Stack>
              <p
                className={`${styles.pStyleMini} ${styles.pSize} mb-4 mx-auto text-center`}
              >
                Please note the following as they guide the usage of the
                enrollment docket;
              </p>
              <p
                className={`${styles.pStyleMini} ${styles.pSize} mb-4 mx-auto text-center`}
              >
                Lorem ipsum dolor sit amet consectetur. Est amet lorem mauris
                ipsum mi pharetra elementum. Nec augue integer facilisi mi
                ultrices malesuada tristique. Mattis mauris placerat sit iaculis
                at pretium tempor. Massa pharetra suspendisse velit aliquam et
                mi.
              </p>
            </div>
          </div>
        </>
      ))} */}
    </>
  );
}
