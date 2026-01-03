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
            Supporting the Nerdly lifestyle one print at a time.

          </p>
        </div>
      </section>

      {/* Boxes Section */}
      <section className="flex-1 bg-gradient-to-b from-black via-gray-900 to-red-900 py-16 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {[
    { href: "/Items", label: "RPG/Game Materials" },
    { href: "/Fan-Scifi", label: "Fantasy & Sci-Fi Decor" },
    { href: "/Toys", label: "Toys" },
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
          Merchant Certifications
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Flying Unicorns is a certified merchant for the following companies and products.
        </p>

        <ul className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-gray-300 text-left">
  {[
    "BitsCraft",
    "Cubee3",
    "Death X Tiles",
    "DM Stash",
    "Flexi Factory",
    "Flamingo Miniatures",
    "Kathy Millat Limited",
    "KragDrag",
    "Mojibake",
    "Oksuna Klinge",
    "STL Minibits",
    "STL Warehouse",
    "Stigern",
    "Vexo",
  ]
    .sort((a, b) => a.localeCompare(b))
    .map((name) => (
      <li key={name} className="flex items-start">
        <span className="mr-2 text-red-400">•</span>
        <span>{name}</span>
      </li>
    ))}
</ul>

        
      </section>

    </main>
  );
}
