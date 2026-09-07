const steps = [
  {
    title: "Inspeksi & Diagnosa",
    desc: "Pemeriksaan menyeluruh kondisi bodi, mesin, dan kelistrikan untuk menentukan cakupan pekerjaan.",
  },
  {
    title: "Rencana Restorasi",
    desc: "Penyusunan rencana kerja, estimasi biaya, dan pengadaan sparepart yang dibutuhkan.",
  },
  {
    title: "Pengerjaan",
    desc: "Eksekusi di bengkel dengan update berkala ke pemilik lewat foto dan catatan progres.",
  },
  {
    title: "Quality Check & Serah Terima",
    desc: "Uji jalan, pemeriksaan akhir, dan serah terima unit beserta catatan perawatan.",
  },
];

export default function Process() {
  return (
    <section id="proses" className="px-6 py-16 border-b border-chrome/15">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
          <h2 className="font-display font-medium text-3xl">Proses Kerja</h2>
          <p className="text-steel text-sm max-w-[36ch]">
            Empat tahap yang selalu sama, dari mobil pertama hingga yang
            terbaru.
          </p>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`grid grid-cols-[56px_1fr] gap-5 py-5.5 border-t border-chrome/15 ${
                i === steps.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="font-display text-2xl text-rust font-semibold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-medium text-base mb-1">{step.title}</h3>
                <p className="text-steel text-sm max-w-[52ch]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
