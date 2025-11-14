import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="w-full h-[50vh] bg-gradient-to-r from-black to-red-700 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/logo.png"
            alt="Flying Unicorn Logo"
            width={220}
            height={220}
            className="mb-4 drop-shadow-lg"
            priority
          />
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Flying Unicorns
          </h1>
          <p className="text-white text-lg mt-2 opacity-90">
            Supporting the Nerdly Life. One piece at a time
          </p>
        </div>
      </section>

      {/* Boxes Section */}
      <section className="flex-1 bg-gradient-to-b from-black via-gray-900 to-red-900 py-16 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { href: "/Toys", label: "Toys" },
            { href: "/Fan-Scifi", label: "Fantasy/Sci-Fi Decor" },
            { href: "/Items", label: "Game Items" },
            { href: "/Decor", label: "Collectables" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="bg-gradient-to-tr from-black via-red-900 to-red-600 rounded-xl shadow-lg flex items-center justify-center h-48 transform transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] hover:brightness-125"
            >
              <span className="text-xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
                {label}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gradient-to-t from-black via-gray-900 to-red-900 py-12 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
          Certified Merchants
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Flying Unicorns is a certified merchant for the following companies and products.
        </p>

        <ul className="mt-6 space-y-3 text-gray-400 text-sm sm:text-base">
          <li>
            <strong className="text-white">Toys:</strong> Flexi Factory, Krak Drag, Vexo, Bits Crafts, STL Warehouse Dinosaurs
          </li>
          <li>
            <strong className="text-white">Collectible and Decor Products:</strong> Stigern Collectables, Cubee3 Products, Vexo, Bits Crafts
          </li>
          <li>
            <strong className="text-white">Fantasy Collectables and RPG Terrain:</strong> STL Warehouse, DM Stash RPG packs and Miniatures, MojiBake Collectables Tomes and Tubes, Flamingo Miniatures (Land of Darnascus), Death X Tiles sets, Oksuna Klinge Medieval Architecture
          </li>
          <li>
            <strong className="text-white">Science Fiction:</strong> STL Minibits SciFi collection, Kathy Millat Limited Outbound Station props and sets
          </li>
        </ul>

        <p className="mt-6 text-sm text-gray-500 italic">
          Supporting the Nerdly lifestyle one print at a time.
        </p>
      </section>

    </main>
  );
}
