import Image from "next/image";

export default function FantasyScifiDecorPage() {
  const merchants = [
    "BitsCraft",
    "Flexi Factory",
    "KragDrag",
    "STL Warehouse",
    "Stigern",
    "Vexo",
  ].sort((a, b) => a.localeCompare(b));

  // Update captions once Carla sends the final photos and labels
  const images = [
    {
      src: "/fantasy-one.avif",
      alt: "Fantasy and sci-fi decor example 1",
      caption: "Caption: (update when photos are finalized)",
    },
    {
      src: "/fantasy-two.jpg",
      alt: "Fantasy and sci-fi decor example 2",
      caption: "Caption: (update when photos are finalized)",
    },
    {
      src: "/fantasy-three.avif",
      alt: "Fantasy and sci-fi decor example 3",
      caption: "Caption: (update when photos are finalized)",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        Fantasy &amp; Sci-Fi Decor
      </h1>

      {/* Client-provided copy (verbatim) */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
        Step into worlds of magic, adventure, and futuristic wonder. Our fantasy and science fiction decor crafted for anyone who loves the boundless imagination of other realms. From garden décor of fairy houses and gnomes to perpetual calendars and book holders and more, each piece is printed with precision to elevate your tabletop or display shelf. Some pieces are available in DIY painting options upon request.
      </p>

      {/* Image Gallery + captions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              priority={img.src === "/fantasy-one.avif"}
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
