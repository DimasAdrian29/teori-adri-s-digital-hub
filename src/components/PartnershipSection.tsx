import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const partnerTypes = [
  "Institusi Pendidikan",
  "Korporasi / Swasta",
  "Pemerintahan",
  "Organisasi Non-Profit",
  "Lainnya",
];

const PartnershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="partnership" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Kerja Sama</span>
            <h2 className="mt-4 section-heading">
              Mari berkolaborasi.
            </h2>
            <p className="mt-6 section-body">
              Kami terbuka untuk berbagai bentuk kemitraan — dari proyek pengembangan
              sistem hingga program pelatihan bersama. Sampaikan kebutuhan Anda
              melalui formulir berikut.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-primary mt-1 font-mono text-sm">01</span>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Diskusi Kebutuhan</h4>
                  <p className="text-sm font-body text-muted-foreground">Kami akan memahami kebutuhan dan tujuan Anda secara menyeluruh.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-primary mt-1 font-mono text-sm">02</span>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Proposal & Perencanaan</h4>
                  <p className="text-sm font-body text-muted-foreground">Tim kami menyusun proposal terstruktur dengan timeline yang jelas.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-primary mt-1 font-mono text-sm">03</span>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Eksekusi & Evaluasi</h4>
                  <p className="text-sm font-body text-muted-foreground">Implementasi dengan monitoring berkala dan laporan progress transparan.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="border border-primary p-12 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Terima kasih!
                </h3>
                <p className="mt-2 text-sm font-body text-muted-foreground">
                  Proposal Anda telah kami terima. Tim kami akan menghubungi Anda dalam 2-3 hari kerja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
                      Nama Lengkap
                    </label>
                    <input type="text" required className="form-input mt-2" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
                      Organisasi
                    </label>
                    <input type="text" required className="form-input mt-2" placeholder="PT Example" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
                    Email
                  </label>
                  <input type="email" required className="form-input mt-2" placeholder="nama@organisasi.com" />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
                    Tipe Organisasi
                  </label>
                  <select required className="form-input mt-2">
                    <option value="">Pilih tipe...</option>
                    {partnerTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
                    Deskripsi Kebutuhan
                  </label>
                  <textarea required rows={4} className="form-input mt-2 resize-none" placeholder="Jelaskan kebutuhan atau ide kolaborasi Anda..." />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
                    Estimasi Anggaran
                  </label>
                  <select className="form-input mt-2">
                    <option value="">Pilih rentang...</option>
                    <option value="<50jt">&lt; Rp 50 Juta</option>
                    <option value="50-150jt">Rp 50 - 150 Juta</option>
                    <option value="150-500jt">Rp 150 - 500 Juta</option>
                    <option value=">500jt">&gt; Rp 500 Juta</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Kirim Proposal
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
