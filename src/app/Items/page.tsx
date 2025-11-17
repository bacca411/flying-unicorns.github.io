import Image from "next/image";

export default function GameItemsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        Game Items
      </h1>

      {/* Brand Copy */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-6 leading-relaxed">
        Level up your tabletop, RPG, or strategy game with high-quality 3D-printed items 
        crafted for players who love immersive worlds and bold designs. From tokens and 
        treasure chests to environmental props and modular terrain pieces, our prints bring 
        your adventures to life with durability, detail, and that unmistakable nerdly flair.
      </p>

      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
        Whether you&apos;re building a sprawling dungeon, customizing your favorite campaign, 
        or enhancing game night with unique accessories, Flying Unicorns ensures every print 
        is clean, sturdy, and ready for action on the table.
      </p>

      {/* Certifications */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-8">
        Flying Unicorns is a certified merchant for the following creators offering game-ready models:
      </p>

      <ul className="text-gray-400 max-w-3xl mx-auto space-y-2 mb-12">
        <li>• STL Warehouse</li>
        <li>• DM Stash — RPG Packs &amp; Miniatures</li>
        <li>• Vexo</li>
        <li>• Bits Crafts</li>
        <li>• Mojibake Collectables — Tomes &amp; Tubes</li>
        <li>• Death X Tiles</li>
        <li>• Oksuna Klinge — Medieval Architecture</li>
      </ul>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/items-one.jpg"
            alt="Game item example 1"
            width={800}
            height={600}
            className="object-cover rounded-xl"
            priority
          />
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/items-two.jpg"
            alt="Game item example 2"
            width={800}
            height={600}
            className="object-cover rounded-xl"
          />
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/items-three.jpg"
            alt="Game item example 3"
            width={800}
            height={600}
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Commission Statement */}
      <p className="mt-12 text-center text-gray-400 italic">
        Flying Unicorns accepts commissioned printing requests if you have a pattern you 
        want produced. Please contact us via email for more information.
      </p>
    </main>
  );
}
