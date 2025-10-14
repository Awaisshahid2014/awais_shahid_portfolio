// Experience data with company logos and websites
import modeverselogo from "/assets/modeverse-logo.jpeg";
import digitalInnovationLogo from "/assets/digital-innovation-logo.png";
import giistyLogo from "/assets/giisty-logo.jpg";
import hyvesLogo from "/assets/hyves-logo.jpeg";
import hireSmartLogo from "/assets/hiresmart-logo.jpeg";

export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company: "Modeverse",
    duration: "Jan 2025 - Present",
    description:
      "Building and maintaining responsive React.js and Next.js applications with optimized performance. Integrated JWT authentication with protected routes, developed reusable components using Tailwind CSS and Shadcn UI. Integrated Instagram Meta API and built REST APIs using Next.js API routes with MongoDB. Implemented Redux Toolkit for global state management.",
    current: true,
    logo: modeverselogo,
    website: "https://modeverse.pro/",
  },
  {
    title: "Lead Full Stack Developer",
    company: "Digital Innovation Pvt. Ltd.",
    duration: "Nov 2023 - Feb 2024",
    description:
      "Leading full-stack development initiatives at Digital Innovation, building scalable web and mobile applications using MERN stack, React Native, and modern technologies. Managing development teams and delivering high-quality software solutions for international clients.",
    current: false,
    logo: digitalInnovationLogo,
    website: "https://digitalinnovation.pk/",
  },
  {
    title: "React Native Developer",
    company: "Hyves (Dealers Hyve)",
    duration: "Feb 2024 - Nov 2024",
    description:
      "Developed modular, reusable UI components in React Native for Android. Converted Figma designs into functional user interfaces. Used Redux Thunk for state management and utilized WebSocket (Socket.io) to receive and render real-time data. Created mobile-based marketplace for displaying luxury watches.",
    current: false,
    logo: hyvesLogo,
    website: "https://www.hyves.co/",
  },
  {
    title: "Next.js Developer",
    company: "HireSmart (Harry AI)",
    duration: "Feb 2024 - Oct 2024",
    description:
      "Converted Figma wireframes into functional, pixel-perfect user interfaces using TypeScript and Tailwind CSS. Implemented advanced UI patterns including color picker, stepper, and hover animations. Used Socket.io for real-time notifications and progress tracking. Integrated AYRShare for social media analytics from 8 different platforms.",
    current: false,
    logo: hireSmartLogo,
    website: "https://www.hireharry.ai/",
  },
  {
    title: "Next.js Developer",
    company: "Giisty",
    duration: "Nov 2022 - Nov 2023",
    description:
      "Converted Figma designs into pixel-perfect, reusable, responsive components. Integrated REST APIs and managed data handling. Managed image/video uploads via AWS S3 and custom React hooks. Performed unit and integration testing. Built full-stack application for medical knowledge sharing using video and audio.",
    current: false,
    logo: giistyLogo,
    website: "https://mbrif.ae/member/giisty/",
  },
];
