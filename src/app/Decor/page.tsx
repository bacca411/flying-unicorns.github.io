import Image from "next/image";

export default function CollectablesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        Collectables
      </h1>

      {/* Brand Copy */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-6 leading-relaxed">
        From elegant display pieces to bold statement prints, our Collectables collection
        brings artistry and imagination to life. These pieces are crafted for fans, collectors,
        decorators, and anyone who enjoys unique 3D-printed creations that stand out in any room.
      </p>

      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
        Whether you&apos;re expanding your personal collection or searching for the perfect
        gift, Flying Unicorns delivers high-quality prints with exceptional detail, vibrant
        finishes, and a touch of nerdly charm.
      </p>

      {/* Certifications */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-8">
        Flying Unicorns is a certified merchant for the following collectible and decor brands:
      </p>

      <ul className="text-gray-400 max-w-3xl mx-auto space-y-2 mb-12">
        <li>
          •{" "}
          <a
            href="https://stigern.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 hover:underline transition"
          >
            Stigern Collectables
          </a>
        </li>
        <li>
          •{" "}
          <a
            href="https://cubee3.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 hover:underline transition"
          >
            Cubee3 Products
          </a>
        </li>
        <li>
          •{" "}
          <a
            href="https://vexo3d.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 hover:underline transition"
          >
            Vexo
          </a>
        </li>
        <li>
          •{" "}
          <a
            href="https://bitscrafts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-500 hover:underline transition"
          >
            Bits Crafts
          </a>
        </li>
      </ul>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/collectables-one.jpg"
            alt="Green dragon bust collectible"
            width={800}
            height={600}
            className="object-cover rounded-xl"
            priority
          />
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/collectables-two.jpg"
            alt="Dragon head bookends collectible"
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

  