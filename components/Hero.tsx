export default function Hero() {
  return (
    <section className="max-w-[1080px] mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-12 items-end border-b border-chrome/15">
      <div>
        <h1 className="font-display font-semibold text-[2.2rem] md:text-[3.6rem] leading-[1.05] max-w-[11ch]">
          Setiap mobil klasik punya nomor rangka. Kami tahu ceritanya.
        </h1>
        <p className="mt-5 max-w-[46ch] text-chrome text-base">
          Garasi Retro merestorasi dan menyediakan sparepart untuk mobil
          klasik JDM dan pasar Indonesia — dari Toyota Corona sampai Honda
          Civic SB1. Berbasis di Cimahi, melayani seluruh Bandung Raya.
        </p>
        <div className="mt-8 flex gap-3.5 flex-wrap">
          <a
            href="#kontak"
            className="inline-block px-6 py-3 text-sm font-medium rounded-[3px] bg-rust text-ink hover:bg-rust-bright transition-colors"
          >
            Konsultasi Gratis
          </a>
          <a
            href="#galeri"
            className="inline-block px-6 py-3 text-sm font-medium rounded-[3px] border border-chrome/35 text-paper hover:border-paper transition-colors"
          >
            Lihat Garapan Kami
          </a>
        </div>
      </div>

      <div className="bg-ink-soft border border-chrome/15 rounded-md p-5 font-display">
        <div className="flex justify-between text-[0.72rem] text-steel tracking-wide mb-3.5">
          <span>UNIT TERAKHIR</span>
          <span>SELESAI 2026</span>
        </div>
        <div className="text-2xl font-semibold text-rust tracking-wide">
          RT104-0553218
        </div>
        <div className="mt-1.5 text-sm text-chrome font-body">
          Toyota Corona Mark II · Restorasi Total 8 Bulan
        </div>
      </div>
    </section>
  );
}
