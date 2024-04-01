import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdPayment } from "react-icons/md";

const navlinks = [
  {
    id: 1,
    Icon: MdDashboard,
    name: "Dashboard",
    path: "dashboard",
  },
  { id: 2, Icon: IoIosPeople, name: "Students", path: "dashboard/students" },
  {
    id: 3,
    Icon: MdPayment,
    name: "Payment",
    path: "dashboard/payments",
  },
];

const classCohortValues = [
  {
    id: 1,
    name: "Select Class Cohort",
  },
  {
    id: 2,
    name: "Fullstack",
  },
  {
    id: 3,
    name: "Data Analysis",
  },
  {
    id: 4,
    name: "Frontend",
  },
  {
    id: 5,
    name: "Product Design",
  },
  {
    id: 6,
    name: "Cyber Security",
  },
];

const classTypeValues = [
  {
    id: 1,
    name: "Select Class Type",
  },
  {
    id: 2,
    name: "Weekday",
  },
  { id: 3, name: "Weekend" },
  {
    id: 4,
    name: "Online",
  },
];

const paymentMethods = [
  {
    id: 1,
    name: "Bank Transfer",
  },
  {
    id: 2,
    name: "POS Transaction",
  },
  { id: 3, name: "Cash Payment" },
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
  paymentHeaders: [
    "Full Name (As written on certificate)",
    "Course-Cohort",
    "Total",
    "Amount Paid",
    "Balance",
    "Status",
  ],
  courses: [
    "Fullstack",
    "Frontend",
    "Product Design",
    "Data Analysis",
    "Cyber Security",
  ],
  data: [
    {
      id: 1,
      img: "https://res.cloudinary.com/ceenobi/image/upload/v1701812025/pintube/czx6fsishkk3yaeeazwc.jpg",
      title: "Charles TheOne",
      pka: "The smooth macadamian",
      courseCohort: "Fullstack March 2023",
      email: "theoneandonly@yourstruly.com",
      phone: "06011111111",
      classType: "Weekday",
      whatsApp: "08130035667",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ceenobi/image/upload/v1686266381/cld-sample.jpg",
      title: "Aisha Partyfreaks",
      pka: "oyeaish",
      courseCohort: "Fullstack March 2024",
      email: "partyfreaks@gmail.com",
      phone: "06011111111",
      classType: "Weekday",
      whatsApp: "08130035662",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ceenobi/image/upload/v1702659165/pintube/bb4a5vlbmzxmm2nh47ca.jpg",
      title: "Eggys Eggy",
      pka: "eggy",
      courseCohort: "Fullstack November 2023",
      email: "eggys@gmail.com",
      phone: "06011111111",
      classType: "Weekend",
      whatsApp: "08130035663",
    },
  ],
};

export {
  navlinks,
  tableLinks,
  classTypeValues,
  classCohortValues,
  paymentMethods,
};
