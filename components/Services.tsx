const services = [
  {
    title: "Restorasi Bodi & Cat",
    desc: "Perbaikan karat, pengelasan panel, dan pengecatan ulang sesuai warna orisinal pabrikan atau spesifikasi custom.",
  },
  {
    title: "Sparepart Langka",
    desc: "Pencarian dan pengadaan komponen NOS maupun bekas berkualitas untuk model yang sudah tidak diproduksi.",
  },
  {
    title: "Detailing & Perawatan",
    desc: "Perawatan berkala, tune-up mesin klasik, dan detailing interior-eksterior untuk unit harian maupun koleksi.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="px-6 py-16 border-b border-chrome/15">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
          <h2 className="font-display font-medium text-3xl">Layanan</h2>
          <p className="text-steel text-sm max-w-[36ch]">
            Dari perawatan rutin sampai bongkar total, satu atap dari
            diagnosa ke serah terima.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-chrome/15">
          {services.map((s) => (
            <div key={s.title} className="bg-ink px-6 py-8">
              <h3 className="font-medium text-lg mb-2.5">{s.title}</h3>
              <p className="text-steel text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
