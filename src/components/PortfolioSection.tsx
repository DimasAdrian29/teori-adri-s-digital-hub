import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LMS Universitas Nusantara",
    client: "Universitas Nusantara",
    category: "education",
    description: "Platform Learning Management System terintegrasi untuk 15,000+ mahasiswa dengan fitur adaptive learning.",
    featured: true,
  },
  {
    title: "Portal SIADK Kemenag",
    client: "Kementerian Agama RI",
    category: "systems",
    description: "Sistem informasi administrasi digital terpusat untuk pengelolaan data pendidikan keagamaan.",
    featured: true,
  },
  {
    title: "Workshop Digital Literacy",
    client: "Dinas Pendidikan DKI Jakarta",
    category: "education",
    description: "Program pelatihan literasi digital untuk 500+ guru SMA se-DKI Jakarta.",
    featured: false,
  },
  {
    title: "ERP Sistem Sekolah",
    client: "Yayasan Pendidikan Harapan",
    category: "systems",
    description: "Enterprise resource planning untuk manajemen operasional 12 unit sekolah.",
    featured: false,
  },
  {
    title: "Pelatihan Cybersecurity",
    client: "PT Telekomunikasi Indonesia",
    category: "education",
    description: "Training intensif keamanan siber untuk divisi IT perusahaan telekomunikasi.",
    featured: false,
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Portofolio</span>
          <h2 className="mt-4 section-heading">Bukti kerja.</h2>
          <p className="mt-6 section-body">
            Proyek-proyek yang telah kami kerjakan bersama mitra dari berbagai sektor.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`border border-border bg-card p-8 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-primary ${
                p.featured ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-primary">
                    {p.category === "education" ? "Edukasi" : "Sistem"}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <span className="text-xs font-mono text-muted-foreground">{p.client}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
