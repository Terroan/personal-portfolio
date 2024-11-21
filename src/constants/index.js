import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiSpringboot,
  SiScikitlearn,
  SiVisualstudio,
  SiWireshark,
  SiMongodb,
  SiPostgresql,
  SiCsharp,
  SiMicropython
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/152FNhCTfYqhXa4sHPlm2jJXyUT5Ps5mh/view?usp=drive_link";
export const repoLink = "https://github.com/terroan";

export const callToAction = "https://www.linkedin.com/in/daniel-jessner";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "HTL St. Johann im Pongau, Salzburg",
    degree: "Graduate Engineer",
    duration: "2021 - current",
    content1: "Higher Technical School of Computer Science",
  },
  {
    id: "education-2",
    icon: pba,
    title: "HTL Saalfelden am Steineren Meer, Salzburg",
    duration: "2020 - 2021",
    content1: "Successfully completed the first year and moved to higher level",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "Partner: PCAP - Programming Essentials in Python",
    content1: "Official Cisco Python Course",
    project: "https://drive.google.com/file/d/187aRlR8T_lbTZMntjy28yZSE5AoqmpK3/view?usp=drive_link",
  },
  {
    id: "a-2",
    icon: ethglobal,
    event: "Cybersecurity Essentials",
    content1: "Official Cisco Cybersecurity Course",
    project: "",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-3",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-2",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-3",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "f-4",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "f-5",
        icon: SiSpringboot,
        name: "Springboot",
      },
      {
        id: "f-6",
        icon: SiScikitlearn,
        name: "Scikitlearn",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiVisualstudio,
        name: "VisualStudio",
      },
      {
        id: "t-9",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "t-10",
        icon: SiWireshark,
        name: "Wireshark",
      },
      {
        id: "t-11",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-12",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Moving Primates GmbH, Tyrol",
    logo: oracle,
    link: "https://www.movingprimates.de",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "Aug 2022 - September 2022",
        content: [
          {
            text: "Working with Shopify and Figma, helping with general work",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Hagleitner Technology International GmbH",
    logo: averlon,
    link: "https://www.hagleitner.com",
    positions: [
      {
        title: "Production Intern",
        duration: "Aug 2023 - September 2024",
        content: [
          {
            text: "Line work injection molding",
            link: ""
          },
          {
            text: "Order preparation",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Billa AG",
    logo: iris,
    link: "https://www.billa.at",
    positions: [
      {
        title: "Salesman",
        duration: "Aug 2022 - current",
        content: [
          {
            text: "Everyday work in local branch, interact with people",
            link: "",
          },
        ],
      },
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Voting App",
    github: "https://github.com/Terroan/POS_VotingApp",
    image: comicify_ai,
    content:
      "Create private voting sessions and invite your friends!",
    stack: [
      {
        id: "icon-1",
        icon: SiCsharp,
        name: "C#"
      },
      {
        id: "icon-2",
        icon: SiSpringboot,
        name: "Springboot"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
    ],
  },
  {
    id: "project-2",
    title: "MBot Control Application",
    github: "https://github.com/huthuthiddeli/SYP_PROJEKT_23-24_Maier",
    image: greentrust,
    content:
      "Application to remote control the MBot on desktop.",
    stack: [
      {
        id: "icon-1",
        icon: SiCsharp,
        name: "C#"
      },
      {
        id: "icon-2",
        icon: DiJava,
        name: "Java"
      },
      {
        id: "icon-3",
        icon: SiSpringboot,
        name: "Springboot"
      },
      {
        id: "icon-4",
        icon: SiMicropython,
        name: "Micropython"
      },
    ],
  },
  {
    id: "project-3",
    title: "DermaAI",
    github: "https://github.com/huthuthiddeli/DermaAI",
    image: chargeswap,
    content:
      "Intelligent skin analysis on desktop and mobile via AI-supported image analysis",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiC,
        name: "C"
      },
      {
        id: "icon-3",
        icon: SiCplusplus,
        name: "C++"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Billa AG",
    title: "Salesman",
    duration: "Aug 2022 - Present",
    content: [
      {
        text: "Saturday job in retail",
        link: "https://www.billa.at",
      },
    ],
    logo: devfolio,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/daniel-jessner",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/terroan",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:jessnerdaniel@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Daniel Jessner",
    githubUsername: 'Terroan',
    tagLine: "@HTL Student",
    intro: "Software Developer from Austria who is either busy improving his craft or pondering over the next big idea. Never stop learning :)"
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = [];