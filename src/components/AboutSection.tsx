import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Compass, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Presisi", desc: "Setiap solusi dibangun dengan ketelitian tinggi dan pendekatan terukur." },
  { icon: Eye, title: "Transparansi", desc: "Proses terbuka dan kolaboratif dari perencanaan hingga implementasi." },
  { icon: Compass, title: "Inovasi", desc: "Mengadopsi teknologi terkini untuk solusi yang relevan dan berkelanjutan." },
  { icon: Shield, title: "Integritas", desc: "Komitmen pada kualitas dan etika dalam setiap proyek yang kami kerjakan." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Tentang Kami</span>
          <h2 className="mt-4 section-heading">
            Teori menjadi aksi.
          </h2>
          <p className="mt-6 section-body">
            Teori Adri adalah konsultan dual-pilar yang menghubungkan dunia pendidikan
            dengan pengembangan sistem teknologi. Kami percaya bahwa transformasi nyata
            dimulai dari fondasi teori yang kuat, dieksekusi dengan presisi teknis.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border border-border p-8 bg-card"
          >
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-primary">Visi</span>
            <p className="mt-4 text-lg font-body text-foreground leading-relaxed">
              Menjadi jembatan terdepan antara teori pendidikan dan implementasi teknologi
              di Indonesia, menciptakan ekosistem yang mendukung pertumbuhan berkelanjutan.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border border-border p-8 bg-card"
          >
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-primary">Misi</span>
            <ul className="mt-4 space-y-3 text-lg font-body text-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="text-primary mt-1">—</span>
                Menyediakan pelatihan dan workshop yang relevan dengan kebutuhan industri
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">—</span>
                Membangun sistem digital yang terintegrasi dan scalable
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">—</span>
                Memfasilitasi kolaborasi antara institusi pendidikan dan sektor teknologi
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 border border-border bg-card"
            >
              <v.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                {v.title}
              </h3>
              <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
