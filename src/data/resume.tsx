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
    "[At the start of my academic journey in Computer Science](/#education), I began building practical, [real-world projects with a strong focus on cloud and DevOps fundamentals](https://github.com/shubhranshu-pandey). I enjoy working with technologies like AWS, Azure, Docker, Linux, and CI/CD tools to design reliable and scalable systems. Through hands-on projects and formal training, I have developed a solid understanding of automation, serverless architecture, and infrastructure workflows. I am motivated by continuous learning and enjoy applying engineering principles to solve real problems efficiently.",
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
    email: "shubhranshu2192@gmail.com",
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
          type: "Website",
          href: "https://qr.shubhranshu.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shubhranshu-pandey/Serverless-QR-Code-generator",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/qrcodegenerator.png",

    },

    {
      title: "Lost and Found",
      href: "#",
      dates: "Jan 2025",
      active: true,
      description:
        "Built with a structured backend and a responsive frontend, the application focuses on simplicity, usability, and data reliability. This project strengthened my understanding of full-stack development, backend API integration, and collaborative project structuring, while also providing hands-on experience in implementing role-based access (moderator login) and database management.",
      technologies: [
        "ReactJS",
        "Node.Js",
        "Express",
        "JavaScript",
        "SQLite",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shubhranshu-pandey/Lost-and-Found",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/LostandFound.png",

    },

    {
      title: "CipherSQLStudio",
      href: "https://cipherschool.shubhranshu.tech",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description:
        "CipherSQLStudio is a full-stack SQL learning platform that allows users to practice SQL through hands-on assignments with real-time query execution in a sandboxed PostgreSQL environment and AI-powered hints. It includes a Monaco-based SQL editor, difficulty-based challenges, progress tracking, secure JWT authentication, and a responsive interface. The platform is built using React, Vite, SCSS, Monaco Editor on the frontend and Node.js, Express, MongoDB Atlas, PostgreSQL (Docker), JWT, and Groq AI / Google Gemini on the backend, showcasing strong full-stack and database-driven application design.",
      technologies: [
        "ReactJS",
        "Vite",
        "SCSS",
        "Monaco Editor",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "PostgreSQL (Docker)",
        "JWT Auth",
        "Groq AI",
        "Docker"

      ],
      links: [
        {
          type: "Website",
          href: "https://cipherschool.shubhranshu.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shubhranshu-pandey/CipherSQLStudio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CipherSchoolSQL.png",

    },

    {
      title: "Movie Booking System",
      href: "https://mbs.shubhranshu.tech",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "Movie Booking System is a full-stack web application inspired by platforms like BookMyShow, enabling users to browse movies, view cinemas and show timings, and book seats seamlessly. The system supports secure user authentication, real-time seat selection with live seat blocking, booking history, and cancellation features, along with an admin panel for managing movies, cinemas, screens, and shows. Built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js), it integrates Sequelize ORM, JWT authentication, Socket.io for real-time updates, and Tailwind CSS for a responsive and intuitive user experience, demonstrating strong full-stack architecture and real-time application design.",
      technologies: [
        "ReactJS",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "Socket.io",
        "JWT",
        "Docker",
        "GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://mbs.shubhranshu.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shubhranshu-pandey/Movie-Booking-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MovieBookingSystem.png",

    },
  ],

} as const;
