import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { students, coins, avatar } from "@assets";

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

const classCohortValues = [
  {
    id: 1,
    name: "Select Class Cohort",
  },
];

const classTypeValues = [
  {
    id: 1,
    name: "Select Class Type",
  },
  {
    id: 2,
    name: "weekday",
  },
  { id: 3, name: "weekend" },
  {
    id: 4,
    name: "online",
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
    {
      id: 4,
      img: "https://res.cloudinary.com/ceenobi/image/upload/v1703151392/pintube/r2zkfto6eavzpvaroo4i.jpg",
      title: "Mubi Money",
      pka: "mubi",
      courseCohort: "Fullstack November 2023",
      email: "mubimoney@gmail.com",
      phone: "06011111111",
      classType: "Online",
      whatsApp: "08130035664",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/ceenobi/image/upload/v1703105422/pintube/hpwfnubxahqx208rgslk.jpg",
      title: "Davido Foodie",
      pka: "Big Dave",
      courseCohort: "Fullstack November 2023",
      email: "foodmonger@gmail.com",
      phone: "06011111111",
      classType: "Online",
      whatsApp: "08130035665",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/ceenobi/image/upload/v1703239682/pintube/pojxfhysaxebyy9cdfao.webp",
      title: "Hanney Gee",
      pka: "Hanney",
      courseCohort: "Fullstack November 2023",
      email: "hanney@gmail.com",
      phone: "06011111111",
      classType: "Online",
      whatsApp: "08130035666",
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/ceenobi/image/upload/v1699817633/631685_UM8IG_2546_003_100_0000_Light-GG-Matelass-medium-tote_rzikpb.webp",
      title: "Tolani Tolls",
      pka: "Tee baby",
      courseCohort: "Fullstack November 2023",
      email: "tolanii@gmail.com",
      phone: "06011111111",
      classType: "Online",
      whatsApp: "08130035668",
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
      whatsApp: "08130035667",
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
      whatsApp: "08130035669",
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
      whatsApp: "08130035660",
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
      whatsApp: "08130035667",
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
      whatsApp: "08130035667",
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
      whatsApp: "08130035667",
    },
  ],
};

export {
  navlinks,
  dashboardLinks,
  tableLinks,
  classTypeValues,
  classCohortValues,
};
