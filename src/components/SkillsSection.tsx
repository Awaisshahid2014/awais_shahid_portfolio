import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
} from "@/components/AnimatedSection";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React.js", level: "Experienced" },
    { name: "Next.js", level: "Experienced" },
    { name: "TypeScript", level: "Experienced" },
    { name: "JavaScript (ES6+)", level: "Experienced" },
    { name: "HTML5", level: "Experienced" },
    { name: "CSS3", level: "Experienced" },
    { name: "Tailwind CSS", level: "Experienced" },
    { name: "Shadcn UI", level: "Experienced" },
    { name: "Material UI", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Experienced" },
    { name: "Express.js", level: "Experienced" },
    { name: "REST API", level: "Experienced" },
    { name: "JWT Auth", level: "Experienced" },
    { name: "Socket.io", level: "Intermediate" },
    { name: "Git & GitHub", level: "Experienced" },
  ];

  const databaseSkills = [
    { name: "MongoDB", level: "Experienced" },
    { name: "Firebase", level: "Experienced" },
    { name: "Firestore", level: "Experienced" },
    { name: "PostgreSQL", level: "Experienced" },
  ];

  const mobileAndToolsSkills = [
    { name: "React Native", level: "Experienced" },
    { name: "Redux Toolkit + Thunk", level: "Experienced" },
    { name: "Context API", level: "Experienced" },
    { name: "Framer Motion", level: "Intermediate" },
    { name: "Postman", level: "Experienced" },
    { name: "Figma", level: "Intermediate" },
    { name: "AWS S3", level: "Intermediate" },
    { name: "Vercel", level: "Experienced" },
    { name: "Vercel", level: "Experienced" },
    { name: "Vercel", level: "Experienced" },
  ];
  const socialMediaPlatformsIntegration = [
    { name: "Google", level: "Experienced" },
    { name: "Youtube", level: "Experienced" },
    { name: "Facebook", level: "Experienced" },
    { name: "Instagram", level: "Experienced" },
    { name: "X", level: "Intermediate" },
    { name: "Tiktok", level: "Experienced" },
    { name: "LinkedIn", level: "Intermediate" },
    { name: "Pinterest", level: "Intermediate" },
  ];

  const SkillCard = ({
    title,
    skills,
    icon: Icon,
  }: {
    title: string;
    skills: { name: string; level: string }[];
    icon: any;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-0 relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        <CardHeader className="pb-4 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <motion.div
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Icon className="w-6 h-6 text-primary" />
            </motion.div>
            <CardTitle className="text-xl font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-200 group/skill"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/skill:animate-pulse" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate group-hover/skill:text-primary transition-colors duration-200">
                    {skill.name}
                  </h4>
                  <Badge
                    variant={
                      skill.level === "Experienced" ? "default" : "secondary"
                    }
                    className="text-xs mt-1 group-hover/skill:scale-105 transition-transform duration-200"
                  >
                    {skill.level}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-primary-glow/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Explore My</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Skills
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <SkillCard
            title="Frontend Development"
            skills={frontendSkills}
            icon={Code}
          />
          <SkillCard
            title="Backend Development"
            skills={backendSkills}
            icon={Server}
          />
          <SkillCard
            title="Mobile & Tools"
            skills={mobileAndToolsSkills}
            icon={Code}
          />
          <SkillCard
            title="Social Media Platforms Integration"
            skills={socialMediaPlatformsIntegration}
            icon={Code}
          />
          <SkillCard
            title="Databases"
            skills={databaseSkills}
            icon={Database}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
