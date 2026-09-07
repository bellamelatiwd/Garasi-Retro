export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-7 border-b border-chrome/15">
      <div className="font-display font-semibold text-lg flex items-baseline gap-2">
        GARASI RETRO
        <span className="bg-rust text-ink text-[0.65rem] font-body font-semibold tracking-wide px-1.5 py-0.5 rounded-sm">
          D 1978 CM
        </span>
      </div>
      <div className="hidden sm:flex gap-8 text-sm text-chrome">
        <a href="#layanan" className="hover:text-paper transition-colors">
          Layanan
        </a>
        <a href="#galeri" className="hover:text-paper transition-colors">
          Galeri
        </a>
        <a href="#proses" className="hover:text-paper transition-colors">
          Proses
        </a>
        <a href="#kontak" className="hover:text-paper transition-colors">
          Kontak
        </a>
      </div>
    </nav>
  );
}
