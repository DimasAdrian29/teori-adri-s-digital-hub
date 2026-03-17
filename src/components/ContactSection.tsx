import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Kontak</span>
          <h2 className="mt-4 section-heading">Hubungi kami.</h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">Alamat</h4>
                  <p className="mt-1 font-body text-foreground">
                    Jl. Pendidikan No. 42, Jakarta Selatan<br />
                    DKI Jakarta, 12345
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">Email</h4>
                  <p className="mt-1 font-body text-foreground">info@teoriadri.id</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">Telepon</h4>
                  <p className="mt-1 font-body text-foreground">+62 21 1234 5678</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-10 border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2925271607147!2d106.82714!3d-6.2253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMzEuMSJTIDEwNsKwNDknMzcuNyJF!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Teori Adri"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <div className="border border-primary p-12 flex flex-col items-center text-center">
                <Mail className="w-8 h-8 text-primary" />
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">Pesan terkirim!</h3>
                <p className="mt-2 text-sm font-body text-muted-foreground">
                  Kami akan merespons dalam 1-2 hari kerja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">Nama</label>
                    <input type="text" required className="form-input mt-2" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">Email</label>
                    <input type="email" required className="form-input mt-2" placeholder="email@contoh.com" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">Subjek</label>
                  <input type="text" required className="form-input mt-2" placeholder="Topik pesan Anda" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">Pesan</label>
                  <textarea required rows={5} className="form-input mt-2 resize-none" placeholder="Tulis pesan Anda di sini..." />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Kirim Pesan
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
