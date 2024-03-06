import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { students, coins, avatar } from "@assets";

const navlinks = [
  {
    id: 1,
    Icon: MdDashboard,
    name: "Dashboard",
    path: "/",
  },
  { id: 2, Icon: IoIosPeople, name: "Students", path: "/students" },
  {
    id: 3,
    Icon: MdPayment,
    name: "Payment",
    path: "/payments",
  },
];

const dashboardLinks = [
  {
    id: 1,
    title: "Enrolled Students",
    number: 1350234,
    img: students,
  },
  {
    id: 2,
    title: "Total Revenue",
    number: 1350234,
    img: coins,
  },
  {
    id: 3,
    title: "Total Outstanding",
    number: 1350234,
    img: coins,
  },
];

const tableLinks = {
  headers: [
    "Full Name (As written on certificate)",
    "PKA",
    "Course-Cohort",
    "Email Address",
    "Phone Number",
    "Class Type",
  ],
  courses: [
    "Fullstack",
    "Frontend",
    "UI/UX",
    "Data Analysis",
    "Cyber Security",
  ],
  data: [
    {
      id: 1,
      img: avatar,
      title: "Charles The-one",
      pka: "charley",
      courseCohort: "Fullstack March 2023",
      email: "theoneandonly@gmail.com",
      phone: "06011111111",
      classType: "Weekday",
    },
    {
      id: 2,
      img: avatar,
      title: "Aisha Partyfreaks",
      pka: "oyeaish",
      courseCohort: "Fullstack March 2024",
      email: "partyfreaks@gmail.com",
      phone: "06011111111",
      classType: "Weekday",
    },
    {
      id: 3,
      img: avatar,
      title: "Eggys Eggy",
      pka: "eggy",
      courseCohort: "Fullstack November 2023",
      email: "eggys@gmail.com",
      phone: "06011111111",
      classType: "Weekend",
    },
    {
      id: 4,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 5,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 6,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 7,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 8,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 9,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 10,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 11,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 12,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
    {
      id: 13,
      img: avatar,
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
    },
  ],
};

export { navlinks, dashboardLinks, tableLinks };
