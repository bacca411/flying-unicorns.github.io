import Image from "next/image";

export default function ToysPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
        Toys
      </h1>

      <p className="text-center max-w-3xl mx-auto text-gray-300 mb-8">
        Flying Unicorns is a certified merchant for the following toy companies:
      </p>

      <ul className="text-gray-400 max-w-3xl mx-auto space-y-2 mb-12">
        <li>
          • <a href="https://flexifactory.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 hover:underline transition">
            Flexi Factory
          </a>
        </li>
        <li>
          • <a href="https://krakdrag.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 hover:underline transition">
            Krak Drag
          </a>
        </li>
        <li>
          • <a href="https://vexo3d.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 hover:underline transition">
            Vexo
          </a>
        </li>
        <li>
          • <a href="https://bitscrafts.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 hover:underline transition">
            Bits Crafts
          </a>
        </li>
        <li>
          • <a href="https://stlwarehouse.co" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500 hover:underline transition">
            STL Warehouse Dinosaurs
          </a>
        </li>
      </ul>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/rainbow-set.jpg"
            alt="Rainbow dragon and creature set"
            width={800}
            height={600}
            className="object-cover rounded-xl"
            priority
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="/three-dragons.jpg"
            alt="Three colorful dragon figures"
            width={800}
            height={600}
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <p className="mt-12 text-center text-gray-400 italic">
        Flying Unicorns accepts commissioned printing requests if you have a pattern you want produced.
        Please contact us via email for more information.
      </p>
    </main>
  );
}
