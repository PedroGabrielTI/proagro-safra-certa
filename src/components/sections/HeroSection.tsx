import zhongshanLogo from "@/assets/zhongshan.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col items-center justify-start pt-32 text-center text-white">

      <div className="z-10 flex flex-col items-center">

        {/* CARIMBO FINAL */}
        <div className="mt-10 z-20 flex justify-center rotate-[-2deg]">
          <div className="border border-dashed border-white/30 rounded-lg px-6 py-4 bg-white/5 backdrop-blur-sm">

            <p className="text-[10px] tracking-[2px] text-white/70 mb-2 text-center">
              AGENTE OFICIAL
            </p>

            <img
              src={zhongshanLogo}
              alt="Zhongshan Chemical"
              className="w-[170px] object-contain mix-blend-multiply opacity-95"
            />

          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-4">
          Genéricos que você já confia.
        </h1>

        <p className="text-xl mb-6 text-yellow-200">
          Com preço que fecha a conta da safra.
        </p>

      </div>

    </section>
  );
}
