import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import zhongshanLogo from "@/assets/zhongshan-logo-transparent.png";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display font-bold leading-tight mb-6 animate-fade-up">
            <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Genéricos que você já confia.
            </span>
            <span className="block text-agro-wheat text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-3">
              Com preço que fecha a conta da safra.
            </span>
          </h1>

          <p
            className="text-base md:text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            A Proagro conecta você direto à indústria de genéricos regulados no Brasil, para comprar para a safra com segurança e economia.
          </p>

          <div
            className="flex flex-col gap-2 md:flex-row md:justify-center md:gap-6 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {[
              "Defensivos já conhecidos no campo",
              "Registro e segurança garantidos no Brasil",
              "Preço competitivo para compras de safra",
            ].map((bullet, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-primary-foreground/90">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm">{bullet}</span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open("https://wa.me/5500000000000", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Quero falar com a Proagro
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#produtos")}
            >
              Ver produtos disponíveis
            </Button>
          </div>

          <div
            className="mt-6 flex justify-center animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <img
              src={zhongshanLogo}
              alt="Zhongshan Chemical"
              className="w-[150px] sm:w-[170px] md:w-[190px] h-auto opacity-95 drop-shadow-[0_0_10px_rgba(255,215,120,0.22)]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
      </div>
    </section>
  );
}
