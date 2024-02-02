import { FaPython } from "react-icons/fa";
import {
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiPython,
  SiNextdotjs,
  SiHtml5,
  SiNodedotjs,
} from "react-icons/si";
import sheltervolunteers from "../public/img/projects/sheltervolunteers.png";
import gog from "../public/img/projects/gog.png";
import dads from "../public/img/projects/dads.jpg";

export const projects = [
  {
    imageSrc: dads,
    projectLink: "https://oss-slu.github.io/docs/project_dads/about",
    githubLink: "https://github.com/oss-slu/dads",
    title: "DADS",
    description:
      "Flexible web-based search-driven user interface for a database of arithmetic dynamical systems",
    techStack:
      "React.js // Python // Flask // PostgreSQL // Bootstrap CSS",
    colorFrom: "#100E5E",
    colorVia: "#103CB6",
    colorTo: "#156CC3",
    glowFrom: "#103CB6",
    glowTo: "#156CC3",
    icons: [SiReact,SiPython,SiFlask, SiPostgresql],
  },
  {
    imageSrc: gog,
    projectLink: "https://oss-slu.github.io/docs/project_gallery_of_glosses/about",
    githubLink: "https://github.com/CenterForDigitalHumanities/glossing-entries",
    title: "Gallery Of glosses",
    description:
      "Web interfaces for researchers and enthusiasts to view and manage Glosses and manuscripts",
    techStack: "React.js // Python // Flask // SQLite // Tailwind CSS",
    colorFrom: "#c897ff",
    colorVia: "#cc9cf4",
    colorTo: "#D49BAA",
    glowFrom: "#c897ff",
    glowTo: "#D49BAA",
    icons: [SiNextdotjs,SiHtml5,SiNodedotjs],
  },
  {
    imageSrc: sheltervolunteers,
    projectLink: "https://oss-slu.github.io/docs/project_shelter_volunteers/about",
    githubLink: "https://github.com/oss-slu/shelter_volunteers",
    title: "Shelter Volunteers",
    description:
      "Application that simplifies the process of scheduling work shifts for volunteers, and to give homeless shelters visibility into their upcoming staffing.",
    techStack:
      "React.js // Bootstrap CSS // Python // Flask",
    colorFrom: "#6d8b61",
    colorVia: "#608464",
    colorTo: "#6aa764",
    glowFrom: "#6d8b61",
    glowTo: "#558c50",
    icons: [SiReact,FaPython,SiFlask, SiMongodb],
  },
];
