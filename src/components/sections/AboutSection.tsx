import { Sprout, ShieldCheck, Target } from "lucide-react";
import zhongshanLogo from "@/assets/zhongshan-logo.png";
const pillars = [{
  icon: Sprout,
  title: "Raiz no agro",
  description: "Origem no campo, não só no escritório. Entendemos a realidade de quem produz."
}, {
  icon: ShieldCheck,
  title: "Base técnica e regulatória",
  description: "Só comercializamos produtos registrados para uso no Brasil. Zero improv isação."
}, {
  icon: Target,
  title: "Visão de longo prazo",
  description: "Foco em relação de safra a safra. Não é só uma venda, é uma parceria."
}];
export function AboutSection() {
  return <section id="quem-somos" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Quem está por trás da Proagro
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A <strong>Proagro</strong> é o braço comercial direto de uma indústria de 
                defensivos genéricos que já está no Brasil desde 2009. São mais de 15 anos 
                de operação, com diversos defensivos agrícolas registrados e outros em processo de 
                aprovação.
              </p>
              <p>Trabalhamos exclusivamente com produtos regulados para uso no Brasil, nada de experimentação ou importação irregular. Cada defensivo passou por todos os testes e aprovações exigidos pelos órgãos reguladores.</p>
              <p>
                O fundador é produtor rural e conhece na pele o impacto de cada ponto 
                a mais no custo por hectare. Por isso, a Proagro existe: para dar ao 
                produtor acesso direto a defensivos de qualidade, com preço justo e 
                relação transparente.
              </p>
            </div>

            {/* Zhongshan Logo */}
            <div className="mt-10 pt-8 border-t border-border">
              <img
                src={zhongshanLogo}
                alt="Zhongshan Chemical"
                className="h-20 sm:h-24 w-auto hover:opacity-100 transition-opacity"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          </div>

          {/* Pillars */}
          <div className="space-y-4 md:space-y-6">
            {pillars.map((pillar, index) => <div key={index} className="flex gap-4 md:gap-5 p-4 md:p-6 bg-muted rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}