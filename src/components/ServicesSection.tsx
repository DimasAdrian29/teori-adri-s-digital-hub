import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Database, Users, BookOpen, Cpu, Network, Settings } from "lucide-react";

const educationServices = [
  { icon: GraduationCap, title: "Workshop IT", desc: "Pelatihan intensif untuk guru dan tenaga pendidik dalam pemanfaatan teknologi pembelajaran." },
  { icon: BookOpen, title: "Kurikulum Digital", desc: "Pengembangan kurikulum berbasis teknologi yang selaras dengan standar industri." },
  { icon: Users, title: "Training Korporat", desc: "Program pelatihan khusus untuk meningkatkan kapabilitas digital tim perusahaan." },
  { icon: Cpu, title: "E-Learning Development", desc: "Pembangunan platform dan konten e-learning yang interaktif dan terukur." },
];

const systemServices = [
  { icon: Code, title: "Pengembangan Software", desc: "Solusi perangkat lunak kustom — web, mobile, dan enterprise application." },
  { icon: Database, title: "Manajemen Database", desc: "Desain, migrasi, dan optimasi database untuk performa dan keamanan optimal." },
  { icon: Network, title: "Integrasi Sistem", desc: "Menghubungkan sistem yang ada dengan platform baru secara seamless." },
  { icon: Settings, title: "Konsultasi IT", desc: "Analisis kebutuhan, arsitektur solusi, dan roadmap transformasi digital." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Layanan Kami</span>
          <h2 className="mt-4 section-heading">Dua pilar, satu visi.</h2>
          <p className="mt-6 section-body">
            Layanan kami dibangun di atas dua pilar utama — Edukasi dan Pengembangan Sistem —
            yang saling mendukung untuk menciptakan dampak yang menyeluruh.
          </p>
        </motion.div>

        {/* Education Pillar */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Edukasi
            </span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="service-card"
              >
                <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Systems Pillar */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-foreground" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground font-semibold">
              Pengembangan Sistem
            </span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="service-card"
              >
                <s.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
