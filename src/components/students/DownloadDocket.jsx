import { Headings } from "@components";
import { HiOutlinePhone } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { PiGoogleChromeLogoThin } from "react-icons/pi";
import { Image, Stack } from "react-bootstrap";
import { tsLogo } from "@assets";
import { useGetAStudentData } from "@store";
import { timeStamp } from "@utils";
import styles from "../../pages/students/student.module.css";

export default function DownloadDocket({ targetRef }) {
  const { student } = useGetAStudentData();

  return (
    <div className="rounded-4 p-3 mt-5" ref={targetRef}>
      <div className="my-3 my-lg-5 d-md-flex justify-content-between align-items-start p-3 p-lg-4">
        <div className="mb-4 mb-lg-0">
          <Headings
            title="TechStudio Academy"
            color="var(--mainBlue)"
            className={`${styles.h1}`}
          />
          <p className={styles.pStyle}>
            1, Ogunlesi Street, Off Bode Thomas,{" "}
            <br className="d-none d-md-block" /> Awoyokun Bus Stop, Onipanu,
            Lagos State.
          </p>
          <p className={`${styles.pStyle} mb-2 mb-lg-1`}>
            <HiOutlinePhone /> +2348109712678, +2348113800161, +2348126051769.
          </p>
          <div className="d-flex flex-wrap flex-xl-nowrap gap-lg-2 align-items-center">
            <div className="d-flex gap-1 align-items-center mb-0">
              <CiMail />
              <span className={styles.pStyle}>info@techstudioacademy.com</span>
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
        <Image src={tsLogo} fluid alt="logo"/>
      </div>
      <div className="py-5">
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
              title={student.fullName}
              color="var(--mainBlue)"
              className={`${styles.h1Mini}`}
            />
          </div>
          <div className="mb-3 mb-lg-4">
            <p className={`${styles.pStyleMini} mb-0`}>Email Address</p>
            <Headings
              title={student.email}
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
            <p className={`${styles.pStyleMini} mb-0`}>Popularly Known As</p>
            <Headings
              title={student.pka}
              color="var(--mainBlue)"
              className={`${styles.h1Mini}`}
            />
          </div>
          <div className="mb-3 mb-lg-4">
            <p className={`${styles.pStyleMini} mb-0`}>Phone Number</p>
            <Headings
              title={student.phoneNumber}
              color="var(--mainBlue)"
              className={`${styles.h1Mini}`}
            />
          </div>
          <div className="mb-3 mb-lg-4">
            <p className={`${styles.pStyleMini} mb-0`}>Class Type</p>
            <Headings
              title={student.classType}
              color="var(--mainBlue)"
              className={`${styles.h1Mini}`}
            />
          </div>
        </div>
        <div>
          <div className="mb-3 mb-lg-4">
            <p className={`${styles.pStyleMini} mb-0`}>Student ID</p>
            <Headings
              title={student.studentId}
              color="var(--mainBlue)"
              className={`${styles.h1Mini}`}
            />
          </div>
          <div className="mb-3 mb-lg-4">
            <p className={`${styles.pStyleMini} mb-0`}>Course-Cohort</p>
            <Headings
              title={student.courseCohort}
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
            src={student.image}
            fluid
            className="rounded-4 object-fit-fill"
            style={{ height: "250px", width: "250px" }}
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-5">
        <Stack
          direction="horizontal"
          className="justify-content-center align-items-center mb-4 gap-2"
        >
          <hr className="text-black border-2" style={{ width: "100px" }} />
          <Headings
            title="IMPORTANT INFORMATION"
            color="var(--offBlack)"
            className={`${styles.h1} text-center mt-2`}
          />
          <hr className="text-black border-2" style={{ width: "100px" }} />
        </Stack>
        <p
          className={`${styles.pStyleMini} ${styles.pSize} mb-4 mx-auto text-center`}
        >
          Please note the following as they guide the usage of the enrollment
          docket;
        </p>
        <p
          className={`${styles.pStyleMini} ${styles.pSize} mb-4 mx-auto text-center`}
        >
          Lorem ipsum dolor sit amet consectetur. Est amet lorem mauris ipsum mi
          pharetra elementum. Nec augue integer facilisi mi ultrices malesuada
          tristique. Mattis mauris placerat sit iaculis at pretium tempor. Massa
          pharetra suspendisse velit aliquam et mi.
        </p>
      </div>
      <p className="text-end mt-5">Docket generated on {timeStamp()}</p>
    </div>
  );
}
