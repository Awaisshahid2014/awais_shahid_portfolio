import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code2, Brain } from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
} from "@/components/AnimatedSection";
import {
  ABOUT_PROFILE_IMAGE,
  ABOUT_FLOATING_STATS,
  ABOUT_CARDS,
  ABOUT_DESCRIPTION,
} from "@/constants/about";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-primary-glow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Get To Know More</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimatedSection direction="left" className="flex justify-center">
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="w-80 h-96 rounded-2xl overflow-hidden shadow-elegant relative"
              >
                <img
                  src={ABOUT_PROFILE_IMAGE}
                  alt="About profile picture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={ABOUT_FLOATING_STATS[0].animate}
                transition={ABOUT_FLOATING_STATS[0].transition as any}
                className="absolute -top-6 -right-6 bg-gradient-primary rounded-xl p-4 shadow-glow"
              >
                <div className="text-center">
                  <Code2 className="w-6 h-6 text-primary-foreground mx-auto mb-1" />
                  <p className="text-xs text-primary-foreground font-semibold">
                    {ABOUT_FLOATING_STATS[0].label}
                  </p>
                  <p className="text-xs text-primary-foreground/80">
                    {ABOUT_FLOATING_STATS[0].sublabel}
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={ABOUT_FLOATING_STATS[1].animate}
                transition={ABOUT_FLOATING_STATS[1].transition as any}
                className="absolute -bottom-6 -left-6 bg-gradient-hero rounded-xl p-4 shadow-elegant"
              >
                <div className="text-center">
                  <Brain className="w-6 h-6 text-hero-foreground mx-auto mb-1" />
                  <p className="text-xs text-hero-foreground font-semibold">
                    {ABOUT_FLOATING_STATS[1].label}
                  </p>
                  <p className="text-xs text-hero-foreground/80">
                    {ABOUT_FLOATING_STATS[1].sublabel}
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* About Content */}
          <AnimatedSection direction="right" className="space-y-8">
            {/* Experience and Education Cards */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-0 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Briefcase className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {ABOUT_CARDS[0].title}
                    </h3>
                    <div className="text-muted-foreground grid grid-cols-2 gap-y-2 text-left">
                      <span>{ABOUT_CARDS[0].details[0].label}</span>
                      <span className="font-medium text-primary text-right">
                        {ABOUT_CARDS[0].details[0].value}
                      </span>
                      <span>{ABOUT_CARDS[0].details[1].label}</span>
                      <span className="font-medium text-primary text-right">
                        {ABOUT_CARDS[0].details[1].value}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-0 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                    >
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {ABOUT_CARDS[1].title}
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-medium">
                        {ABOUT_CARDS[1].details[0].label}
                      </p>
                      <p className="text-sm">
                        {ABOUT_CARDS[1].details[0].value}
                      </p>
                      <p className="text-sm">
                        {ABOUT_CARDS[1].details[1].label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerContainer>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-card rounded-2xl p-8 shadow-card relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
              <motion.p
                className="text-muted-foreground leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {ABOUT_DESCRIPTION}
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
