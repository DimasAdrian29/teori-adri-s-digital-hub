import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 pt-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.span variants={fadeUp} className="section-label">
            Edukasi · Sistem · Transformasi
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.95]"
          >
            Menjembatani teori
            <br />
            pedagogis dan
            <br />
            <span className="text-primary">arsitektur digital.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 section-body">
            Teori Adri membangun sistem yang belajar dan lingkungan yang
            berkembang. Kami mengintegrasikan pendidikan dan teknologi untuk
            transformasi yang terukur.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex gap-4 flex-wrap">
            <a href="#services" className="btn-primary">
              Jelajahi Layanan
            </a>
            <a href="#partnership" className="btn-outline">
              Kerja Sama
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
