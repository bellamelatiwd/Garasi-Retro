export default function Footer() {
  return (
    <footer id="kontak" className="px-6 py-14">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-6">
          <h2 className="font-display font-medium text-2xl max-w-[16ch]">
            Punya mobil klasik yang butuh perhatian?
          </h2>
          <div className="text-chrome text-sm space-y-1">
            <div>Cimahi, Jawa Barat</div>
            <div>hello@garasiretro.id</div>
            <div>+62 812-3456-7890</div>
          </div>
        </div>
        <div className="mt-10 pt-5 border-t border-chrome/15 text-xs text-steel flex justify-between flex-wrap gap-2">
          <span>Garasi Retro</span>
          <span>Restorasi mobil klasik sejak semangat, bukan sejak tahun.</span>
        </div>
      </div>
    </footer>
  );
}
