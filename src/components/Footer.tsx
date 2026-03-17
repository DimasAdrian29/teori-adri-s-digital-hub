const footerLinks = [
  {
    title: "Layanan",
    links: [
      { label: "Workshop & Pelatihan", href: "#services" },
      { label: "Pengembangan Sistem", href: "#services" },
      { label: "Konsultasi IT", href: "#services" },
      { label: "Integrasi Sistem", href: "#services" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#about" },
      { label: "Portofolio", href: "#portfolio" },
      { label: "Kerja Sama", href: "#partnership" },
      { label: "Kontak", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-mono text-sm font-bold tracking-[0.2em] uppercase">
              Teori Adri
            </span>
            <p className="mt-4 text-sm leading-relaxed opacity-60 max-w-[40ch] font-body">
              Menjembatani teori pedagogis dan arsitektur digital untuk transformasi pendidikan dan teknologi.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <span className="text-xs font-mono uppercase tracking-[0.15em] opacity-40">
                {group.title}
              </span>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono opacity-40">
            © {new Date().getFullYear()} Teori Adri. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-mono opacity-40 hover:opacity-100 transition-opacity">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-xs font-mono opacity-40 hover:opacity-100 transition-opacity">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
