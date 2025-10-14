import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import CertificateCarousel from "@/components/CertificateCarousel";
import { CERTIFICATE_IMAGES, CERTIFICATES } from "@/constants/experience";

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Explore My</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>

        {/* Certificates List */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {CERTIFICATES.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 h-full">
                  <CardHeader className="pb-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{cert.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Certificate Gallery
          </h3>
          <CertificateCarousel certificates={CERTIFICATE_IMAGES} />
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
