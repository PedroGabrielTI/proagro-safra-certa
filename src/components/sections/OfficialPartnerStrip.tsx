import zhongshanLogo from "@/assets/zhongshan-logo-card.png";

export function OfficialPartnerStrip() {
  return (
    <section className="relative -mt-8 z-20 px-4">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-white/60 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="flex items-center justify-center px-6 py-5 sm:px-8 sm:py-6">
            <img
              src={zhongshanLogo}
              alt="Zhongshan Chemical"
              className="h-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
