import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-3.png";
import Work3 from "./assets/project-2.png";
import Work4 from "./assets/To-do.png";
import Work5 from "./assets/ipAddress.png";
import Work6 from "./assets/TeachAssist.png";
import Work7 from "./assets/bizwire.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Alim",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Alagbe",
  },

  {
    id: 3,
    title: "Age : ",
    description: "17 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Nigerian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Ogun State, Nigeria",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+2347069935849",
  },

  {
    id: 8,
    title: "Email : ",
    description: "alagbealim81@gmail.com",
  },

  {
    id: 9,
    title: "LinkedIn : ",
    description: "Alim-Alagbe",
  },

  {
    id: 10,
    title: "Language : ",
    description: "English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "7+",
    title: "Completed <br /> Projects",
  },
];

export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Feb - Apr 2023",
    title: "Student <span>Haut Institute</span>",
    desc: "I was introduced to data structures, API integration and various JavaScript frameworks.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jul 2023 - present",
    title: "Software Developer <span> Teach Assist AI</span>",
    desc: "Developing user interfaces utilizing React, NodeJS and libraries like AXIOS and REDUX.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Aug 2023 - Sept 2023",
    title:
      "Intern at Corporate Transformation and Innovation Division <span> WEMA Head Office </span>",
    desc: "I was tasked with the processes was involved with bringing up the new feature(Did a survey, Made the design using Figma, active research and communication with team members).",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Nov 2023",
    title: "Bachelor Degree <span> University of Ilorin, Ilorin</span>",
    desc: "I am currently enrolled to study Electrical and Electronic Engineering. Expected Graduation Year: 2028 ",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 5,
    title: "Framer Ai",
    percentage: "75",
  },

  {
    id: 6,
    title: "nodeJS",
    percentage: "50",
  },

  {
    id: 8,
    title: "React",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Web Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Rock, Paper and Scissors ",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML5, CSS, Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://rock-paper-scissors-game-81.netlify.app",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Web Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Advice App Generator ",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML5, CSS, Javascript, API",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://advice-app1221.netlify.app",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Portfolio Template with GSAP page switching",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, GSAP",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://portfolio-template1xx.netlify.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Web Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "To-Do App",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML5, CSS, Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://to-do-app-v1-0.netlify.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Web Application",
    details: [
      {
        title: "Project : ",
        desc: "IP Address Tracker",
      },
      {
        title: "Client : ",
        desc: "Netlify",
      },
      {
        title: "Language : ",
        desc: "HTML5, CSS, Javascript, API",
      },
      {
        title: "Preview : ",
        desc: "https://ip-address-tracker-v1-0.netlify.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Web Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Teach Assist AI",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Amazon Web Services",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, Node JS, Mongo DB",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.teachassist.ai",
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: "Web Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Bizwire Solutions",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Netlify",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Currently under development",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
