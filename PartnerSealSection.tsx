import zhongshanLogo from "@/assets/zhongshan-logo-transparent.png";

export function PartnerSealSection() {
  return (
    <section className="relative z-20 -mt-10 md:-mt-14">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-white/60 bg-white/94 px-6 py-5 shadow-card backdrop-blur-sm md:px-10 md:py-6">
          <div className="flex items-center justify-center">
            <img
              src={zhongshanLogo}
              alt="Zhongshan Chemical"
              className="h-16 w-auto object-contain md:h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
