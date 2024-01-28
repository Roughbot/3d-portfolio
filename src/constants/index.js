import cyberhost from "../assets/images/cyberhost.png";
import {
  car,
  contact,
  express,
  git,
  github,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  html,
  threads,
  summiz,
  password,
  typescript,
  snapgram,
  motion,
  linux,
  python,
  java,
  docker,
  login,
  profile,
  leetcode,
  api,
  gmail,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Programming",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Programming",
  },
  {
    imageUrl: linux,
    name: "linux",
    type: "Environment",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: api,
    name: "API",
    type: "Backend",
  },

  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Framer Motion",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Cyber Security Intern",
    company_name: "THECYBERHOST",
    icon: cyberhost,
    iconBg: "#accbe1",
    date: "August 2023 - September 2023",
    points: [
      "Identified and Proposed fixes for security vulnerabilities in various applications.",
      "Conducted vulnerability assessments and penetration testing.",
      "Participated in training sessions and completing assigned projects on time.",
      "Staying updated with the latest cyber threats, trends, and best practices.",
    ],
  },
];

export const socialLinks = [
  {
    name: "github",
    iconUrl: github,
    link: "https://github.com/roughbot",
  },
  {
    name: "gmail",
    iconUrl: gmail,
    link: "mailto:sathyanarayanan.pramod@gmail.com",
  },
  {
    name: "linkedin",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sathyanarayananpramod/",
  },
  {
    name: "letcode",
    iconUrl: leetcode,
    link: "https://leetcode.com/Cyber_hOX/",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "Summify",
    description:
      "Developed an web app using OpenAI GPT-4 to generate concise summaries for long blog content. With this tool, you can save time and effort by quickly extracting the key points from lengthy articles, allowing you to grasp the main concepts without having to read the entire text.",
    link: "https://github.com/Roughbot/summify",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "E-Commerce Website",
    description:
      "The aim of this project is to develop an online shopping platform that provides a seamless shopping experience for users. The platform offers a wide range of products including hats, jackets, sneakers, and clothing for both men and women.",
    link: "https://github.com/Roughbot/e-commerce-cloth-shop",
  },
  {
    iconUrl: login,
    theme: "btn-back-black",
    name: "Authentication App",
    description:
      "Designed and built a fully functional Authentication app using NextJS, allows you to register and login to your account. Added additional functionality such as forgot password, reset password, and email verification.",
    link: "https://github.com/Roughbot/Auth-app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-blue",
    name: "Quote Generator",
    description:
      "Design and build an inspirational Quote-Generator that generates different quotes randomly, which can be downloaded in an image format.",
    link: "https://github.com/Roughbot/Quote-Generator",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-yellow",
    name: "Anime Universe",
    description:
      "Developed an Web app using NextJS that implement infinite loading and searching functionality using Server Action and Framer-Motion.",
    link: "https://github.com/Roughbot/Anime-Universe",
  },
  {
    iconUrl: password,
    theme: "btn-back-orange",
    name: "Password Generator",
    description:
      "Developed an Web application using react that allows users to create strong passwords with various combinations of characters, including uppercase and lowercase letters, symbols, and numbers.",
    link: "https://github.com/Roughbot/Password-Generator",
  },
  {
    iconUrl: profile,
    theme: "btn-back-pink",
    name: "3D Portfolio",
    description:
      "A 3D Portfolio profile page made with react+threeJS, Animating 3D models in real time.",
    link: " https://github.com/Roughbot/3d-portfolio",
  },
];
