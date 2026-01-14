import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Shubhranshu Pandey",
  initials: "SP",
  url: "https://github.com/shubhranshu-pandey",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "DevOps Engineer. I love building things and helping others.",
  summary:
    "At the start of 2022, [I began my academic journey in Computer Science](/#education) with real-world development work as a full-stack engineer. I'm passionate about building complete platforms, working with modern technologies like React, Node.js, and cloud services. [I've contributed to open-source projects and maintain an active GitHub presence.](https://github.com/shubhranshupandey) I'm passionate about merging creativity with code to craft seamless, scalable, and intelligent web experiences.",
  avatarUrl: "/Photo w bg.png",
  skills: [
    "AWS",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "CI/CD",
    "Linux",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Python",
    "Bash",
    "C++",
    "C",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "AWS Lambda",
    "S3",
    "EC2",
    "CloudFormation",
    "Ansible",
    "Monitoring",
    "Nginx",
    "PostgreSQL",
    "MongoDB",
    "Jira",
    "ChatGPT",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://drive.google.com/file/d/1VUASJGNUxCviYq7z2SKhGjkz9arEnK4G/view?usp=share_link", icon: FileTextIcon, label: "CV", target: "_blank" },
  ],
  contact: {
    email: "shubhranshupandey@gmail.com",
    tel: "+91 1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shubhranshu-pandey",
        icon: Icons.github,
        navbar: true,
        target: "_blank",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubhranshu-pandey21/",
        icon: Icons.linkedin,
        navbar: true,
        target: "_blank",
      },
    
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mphasis",
      href: "https://www.mphasis.com",
      badges: [],
      location: "Remote",
      title: "Trainee Associate Software Engineer - DevOps",
      logoUrl: "/mphasislogo.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Working on DevOps practices and cloud infrastructure automation. Implementing CI/CD pipelines, managing containerized applications with Docker, and deploying cloud resources on AWS. Collaborating with development teams to streamline deployment processes and improve system reliability through monitoring and automation.",
    },
    {
      company: "Outlier AI",
      href: "https://outlier.ai",
      badges: [],
      location: "Remote",
      title: "Freelancer",
      logoUrl: "/outlierai.webp",
      start: "Nov 2024",
      end: "Dec 2024",
      description:
        "Assisted in training AI models by labelling, categorizing, and validating data. Contributed to improving AI accuracy through detailed analysis. Ensured high-quality data processing to enhance AI-driven decision-making.",
    },

  ],
  summerTraining: [
    {
      company: "Broadridge Financial Solutions",
      href: "https://www.broadridge.com",
      badges: [],
      location: "Remote",
      title: "DevOps Trainee",
      logoUrl: "/Broadridge.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Completed comprehensive DevOps training covering AWS cloud services, Docker containerization, CI/CD pipelines with Jenkins, infrastructure automation with Terraform, and Linux system administration. Gained hands-on experience with cloud architecture, deployment automation, and DevOps best practices.",
    },
  ],
  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree: "Computer Science & Engineering (CSE)",
      logoUrl: "/lpu.png",
      start: "2022",
      end: "2026",
    },

  ],
  projects: [

    {
      title: "Serverless QR Code Generator",
      href: "https://github.com/shubhranshu-pandey/Serverless-QR-Code-generator",
      dates: "Jan 2025 - Apr 2025",
      active: true,
      description:
        "With the Serverless QR Code Generator, I built a lightweight cloud-based application that allows users to generate QR codes for URLs and store them efficiently. The project leverages a serverless architecture to ensure scalability, low operational overhead, and fast response times. It focuses on practical cloud deployment, API integration, and image handling, providing real-time feedback while demonstrating hands-on experience with AWS serverless services.",
      technologies: [
        "HTML",
        "CSS",
        "Python",
        "AWS Lambda",
        "S3",
        "boto3",
        "Docker",
      ],
      links: [

        {
          type: "Source",
          href: "https://github.com/shubhranshu-pandey/Serverless-QR-Code-generator",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/qrcodegenerator.png",

    },

    {
      title: "Query Quest",
      href: "https://queryquestmern.vercel.app/",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description:
        "With the launch of QueryQuest, I built a platform that helps developers and data analysts optimize, explore, and execute SQL queries with ease. QueryQuest simplifies database interaction by offering real-time query execution, optimization suggestions, and performance insights. It's a powerful, intuitive way to enhance database management, troubleshoot faster, and work more efficiently on data-driven projects.",
      technologies: [
        "ReactJS",
        "TailwindCSS",
        "Node,Js",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://queryquestmern.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shubhranshu-pandey/QueryQuest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/P2.png",
    
    },
    
    {
      title: "humanchain-incident-api",
      href: "https://humanchain-incident-api.vercel.app/",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description:
        "​With the launch of the HumanChain Incident API, I developed a RESTful service to log and manage hypothetical AI safety incidents. Built as a take-home assignment for HumanChain's Backend Intern position, it features a user-friendly web interface with CRUD operations and integrates MongoDB for data persistence. This project demonstrates practical backend development skills and database integration.",
      technologies: [
        "Typescript",
        "ReactJS",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",

      ],
      links: [
        {
          type: "Website",
          href: "https://humanchain-incident-api.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shubhranshu-pandey/humanchain-incident-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/P3.png",
  
    },
    
    {
      title: "YumYum-restaurant website",
      href: "https://yummyum.netlify.app/",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "Welcome to YumYum, the ultimate restaurant website built with React, Redux, and Tailwind CSS! Discover tantalizing dishes, browse menus, and make reservations effortlessly. Our sleek design ensures a seamless user experience, making your online dining journey delightful. Dive into YumYum – where every click leads to deliciousness!!",
      technologies: [
        "ReactJS",
        "Redux",
        "TailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Netlify",
        "Vercel",
        "Git",
        "GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://yummyum.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shubhranshu-pandey/YumYum",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/P4.png",
      
    },
  ],
 
} as const;
