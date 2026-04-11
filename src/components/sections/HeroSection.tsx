import zhongshanLogo from "@/assets/zhongshan-gold.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center text-center text-white">

      <div className="z-10 max-w-4xl px-4">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Genéricos que você já confia.
        </h1>

        <p className="text-xl mb-6 text-yellow-200">
          Com preço que fecha a conta da safra.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
            Quero falar com a Proagro
          </button>
          <button className="border border-white px-6 py-3 rounded-lg">
            Ver produtos disponíveis
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <img
            src={zhongshanLogo}
            alt="Zhongshan Chemical"
            className="w-[200px] md:w-[240px] opacity-90"
          />
        </div>

      </div>
    </section>
  );
}
