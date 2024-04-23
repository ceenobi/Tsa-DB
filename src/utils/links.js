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
    name: "Cybersecurity",
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
    name: "Select Payment Method",
  },
  {
    id: 2,
    name: "bank deposit",
  },
  {
    id: 3,
    name: "bank transfer",
  },
  { id: 4, name: "cash" },
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
};

export {
  navlinks,
  tableLinks,
  classTypeValues,
  classCohortValues,
  paymentMethods,
};
