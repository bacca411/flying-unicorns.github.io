import Image from "next/image";

export default function GameMaterialsPage() {
  // Names only + alphabetical (per client request)
  const merchants = [
    "BitsCraft",
    "Death X Tiles",
    "DM Stash",
    "Flamingo Miniatures",
    "Mojibake",
    "Oksuna Klinge",
    "STL Warehouse",
    "Vexo",
  ].sort((a, b) => a.localeCompare(b));

  // Image captions can be updated once client confirms what each photo is
  const images = [
    {
      src: "/items-one.jpg",
      alt: "RPG/Game Materials example 1",
      caption: "Caption: (update when photos are finalized)",
    },
    {
      src: "/items-two.jpg",
      alt: "RPG/Game Materials example 2",
      caption: "Caption: (update when photos are finalized)",
    },
    {
      src: "/items-three.jpg",
      alt: "RPG/Game Materials example 3",
      caption: "Caption: (update when photos are finalized)",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        RPG/Game Materials
      </h1>

      {/* Brand Copy */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-6 leading-relaxed">
        Level up your tabletop, RPG, or strategy game with high-quality 3D-printed items
        crafted for players who love immersive worlds and bold designs. From tokens and
        treasure chests to environmental props and modular terrain pieces, our prints bring
        your adventures to life with durability, detail, and that unmistakable nerdly flair.
      </p>

      {/* Client requested: end at "ready for action." */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
        Whether you&apos;re building a sprawling dungeon, customizing your favorite campaign,
        or enhancing game night with unique accessories, Flying Unicorns ensures every print
        is clean, sturdy, and ready for action.
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
              priority={img.src === "/items-one.jpg"}
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

