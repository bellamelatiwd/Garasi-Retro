"use client";

import { useState } from "react";
import Image from "next/image";

type Brand = "semua" | "toyota" | "datsun" | "honda";

const cars: {
  brand: Exclude<Brand, "semua">;
  model: string;
  year: string;
  image: string;
}[] = [
  {
    brand: "toyota",
    model: "Corona Mark II",
    year: "1978 · Restorasi Total",
    image: "/cars/corona-mark2.jpg",
  },
  {
    brand: "datsun",
    model: "510 Bluebird",
    year: "1971 · Bodi & Cat",
    image: "/cars/datsun-510.jpg",
  },
  {
    brand: "honda",
    model: "Civic SB1",
    year: "1981 · Sparepart & Tune-up",
    image: "/cars/civic-sb1.jpg",
  },
  {
    brand: "toyota",
    model: "Corolla KE30",
    year: "1979 · Detailing",
    image: "/cars/corolla-ke30.jpg",
  },
  {
    brand: "datsun",
    model: "120Y",
    year: "1976 · Restorasi Total",
    image: "/cars/datsun-120y.jpg",
  },
  {
    brand: "honda",
    model: "Civic Wonder",
    year: "1985 · Bodi & Cat",
    image: "/cars/civic-wonder.jpg",
  },
];

const filters: Brand[] = ["semua", "toyota", "datsun", "honda"];

export default function Gallery() {
  const [active, setActive] = useState<Brand>("semua");

  const visible =
    active === "semua" ? cars : cars.filter((c) => c.brand === active);

  return (
    <section id="galeri" className="px-6 py-16 border-b border-chrome/15">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
          <h2 className="font-display font-medium text-3xl">
            Garapan Terbaru
          </h2>
          <p className="text-steel text-sm max-w-[36ch]">
            Sebagian unit yang sudah melewati proses restorasi di garasi
            kami.
          </p>
        </div>

        <div className="flex gap-2.5 flex-wrap mb-7">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors capitalize ${
                active === f
                  ? "bg-rust border-rust text-ink font-semibold"
                  : "border-chrome/25 text-chrome hover:border-chrome/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4.5">
          {visible.map((car) => (
            <div
              key={car.model}
              className="bg-ink-soft border border-chrome/10 rounded-md overflow-hidden"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="px-4.5 py-4">
                <div className="text-xs text-rust tracking-wide mb-1 capitalize">
                  {car.brand}
                </div>
                <div className="font-display text-lg font-medium">
                  {car.model}
                </div>
                <div className="text-steel text-sm mt-0.5">{car.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
