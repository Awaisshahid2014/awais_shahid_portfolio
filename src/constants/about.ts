// Static data for the AboutSection
import { Briefcase, GraduationCap, Code2, Brain } from "lucide-react";

export const ABOUT_PROFILE_IMAGE = "/about-pic.jpeg";

export const ABOUT_FLOATING_STATS = [
  {
    icon: Code2,
    label: "3+ Years",
    sublabel: "Experience",
    className:
      "absolute -top-6 -right-6 bg-gradient-primary rounded-xl p-4 shadow-glow",
    iconClass: "w-6 h-6 text-primary-foreground mx-auto mb-1",
    labelClass: "text-xs text-primary-foreground font-semibold",
    sublabelClass: "text-xs text-primary-foreground/80",
    animate: { y: [0, -15, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  {
    icon: Brain,
    label: "Lead Full Stack",
    sublabel: "Developer",
    className:
      "absolute -bottom-6 -left-6 bg-gradient-hero rounded-xl p-4 shadow-elegant",
    iconClass: "w-6 h-6 text-hero-foreground mx-auto mb-1",
    labelClass: "text-xs text-hero-foreground font-semibold",
    sublabelClass: "text-xs text-hero-foreground/80",
    animate: { y: [0, 15, 0] },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
];

export const ABOUT_CARDS = [
  {
    icon: Briefcase,
    title: "Experience",
    details: [
      { label: "Full Stack Development", value: "3+ Years" },
      { label: "Lead Developer", value: "Current" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    details: [
      { label: "Bachelor of Computer Science", value: "(BSCS)" },
      { label: "University", value: "Graduated" },
    ],
  },
];

export const ABOUT_DESCRIPTION = `Lead Full Stack Developer with 3+ years of experience building scalable web and mobile applications. 
Specialized in MERN stack, React Native, and modern web technologies. Expert in developing AI-integrated solutions, 
real-time applications, and cross-platform mobile apps. Proven track record of leading development teams and 
delivering high-quality software solutions for international clients across UAE, Portugal, and Pakistan. 
Passionate about clean code, system architecture, and continuous innovation in software development.`;
