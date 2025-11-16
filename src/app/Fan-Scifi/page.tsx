import Image from "next/image";

export default function FantasyScifiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        Fantasy &amp; Sci-Fi Collectables
      </h1>

      {/* Brand Copy */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-6 leading-relaxed">
        Step into worlds of magic, adventure, and futuristic wonder. Our Fantasy &amp; Sci-Fi 
        prints are crafted for collectors, gamers, storytellers, and anyone who loves the 
        boundless imagination of other realms. From detailed RPG terrain to bold sci-fi props, 
        each piece is printed with precision and designed to elevate your tabletop or display shelf.
      </p>

      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
        Every model in this category captures the spirit of epic quests, cosmic journeys, 
        and legendary creatures. Whether you&apos;re building an immersive game world or 
        curating a striking collection, our prints deliver high detail, durability, and 
        that special spark of nerdly creativity.
      </p>

      {/* Certifications */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-8">
        Flying Unicorns is a certified merchant for the following Fantasy &amp; Sci-Fi creators:
      </p>

      <ul className="text-gray-400 max-w-3xl mx-auto space-y-2 mb-12">
        <li>
          •{" "}
          <a
            href="https://stlwarehouse.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 hover:underline transition"
          >
            STL Warehouse
          </a>
        </li>
        <li>
          •{" "}
          <a
            href="https://dmstash.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 hover:underline transition"
          >
            DM Stash – RPG Packs &amp; Miniatures
          </a>
        </li>
        <li>
          •{" "}
          <a
            href="https://www.myminifactory.com/users/MojibakeMiniatures"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 hover:underline transition"
          >
            Mojibake Collectables – Tomes &amp; Tubes
          </a>
        </li>
        <li>• Flamingo Miniatures – Land of Darnascus</li>
        <li>• Death X Tiles Sets</li>
        <li>• Oksuna Klinge – Medieval Architecture</li>
      </ul>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/fantasy-one.avif"
            alt="Fantasy collectible example"
            width={800}
            height={600}
            className="object-cover rounded-xl"
            priority
          />
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/fantasy-two.jpg"
            alt="RPG terrain or miniature example"
            width={800}
            height={600}
            className="object-cover rounded-xl"
          />
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/fantasy-three.avif"
            alt="Sci-fi model or prop example"
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
