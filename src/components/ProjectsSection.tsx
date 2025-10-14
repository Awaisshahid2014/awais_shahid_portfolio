import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Lock } from "lucide-react";
import { PROJECTS } from "@/constants/projects";
import CertificateCarousel from "@/components/CertificateCarousel";

const ProjectsSection = () => {
  const projects = PROJECTS;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Browse My Recent</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 overflow-hidden flex flex-col h-full"
            >
              {/* Project Image Carousel */}
              <div className="w-full h-64 overflow-hidden bg-muted">
                {project.images && project.images.length > 1 ? (
                  <CertificateCarousel
                    certificates={project.images.map((img) => ({
                      image: img,
                      title: project.title,
                      description: project.description,
                    }))}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={project.images?.[0] || "/placeholder.png"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                {/* Project Title */}
                <h3 className="font-semibold text-lg mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Duration */}
                <p className="text-sm text-muted-foreground mb-2">
                  {project.duration}
                </p>

                {/* Project Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.github ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      disabled
                      title="Private repository"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Private
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.demoLabel}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
