import Image from "next/image";

export default function ToysPage() {
  const merchants = [
    "BitsCraft",
    "Flexi Factory",
    "KragDrag",
    "STL Warehouse",
    "Vexo",
  ].sort((a, b) => a.localeCompare(b));

  const images = [
    {
      src: "/rainbow-set.jpg",
      alt: "Rainbow dragon and creature set",
      caption: "Caption: Rainbow set (update wording if needed)",
    },
    {
      src: "/three-dragons.jpg",
      alt: "Three colorful dragon figures",
      caption: "Caption: Dragon trio (update wording if needed)",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        Toys
      </h1>

      {/* Brand Copy (keep - client liked it) */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-6 leading-relaxed">
        Welcome to the playful side of Flying Unicorns! Our 3D-printed toys are crafted
        with premium materials, bold colors, and a whole lot of nerdly spirit. From flexi
        creatures to adorable dragons, every print is designed to spark joy, brighten your
        space, and bring imagination to life.
      </p>

      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
        Whether you&apos;re collecting, gifting, or just embracing your inner geek, our toys
        are made to move, wiggle, and entertain. Each piece is printed with care and
        tested for smooth articulation and vibrant detail — because toys should be fun,
        high-quality, and downright magical.
      </p>

      {/* Image Gallery + captions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {images.map((img) => (
          <figure
            key={img.src}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="object-cover rounded-xl"
              priority={img.src === "/rainbow-set.jpg"}
            />
            <figcaption className="mt-2 text-center text-sm text-gray-300">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Merchant Certifications BELOW pictures (per client) */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
          Merchant Certifications
        </h2>

        <ul className="text-gray-300 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-left">
          {merchants.map((m) => (
            <li key={m} className="flex items-start">
              <span className="mr-2 text-red-400">•</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Commission Statement */}
      <p className="mt-10 text-center text-gray-400 italic">
        Flying Unicorns accepts commissioned printing requests for anyone wanting prints of their own STL files.
        Please contact us via email for more information.
      </p>
    </main>
  );
}
