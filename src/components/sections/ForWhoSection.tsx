import { Check, Users, X } from "lucide-react";

const idealProfile = [
  "Compra defensivos em volumes de safra (verão e inverno)",
  "Quer reduzir custo sem abrir mão da performance que já conhece",
  "Prefere se organizar e planejar a compra, em vez de correr atrás no último minuto",
  "Quer ter uma segunda alternativa segura além do fornecedor atual",
  "Valoriza relação comercial de longo prazo, não só preço de momento",
];

const alsoForThem = [
  "Agrônomos que recomendam e influenciam decisões de compra",
  "Compradores e gestores de grupos agrícolas",
  "Sucessores e gestores que tocam a operação da fazenda",
];

export function ForWhoSection() {
  return (
    <section id="para-quem" className="py-20 md:py-28 bg-card">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Proagro é para você, produtor que…
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Ideal Profile */}
          <div className="bg-primary/5 rounded-2xl p-5 md:p-8 border border-primary/20">
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              Perfil ideal
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {idealProfile.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </span>
                  <span className="text-sm md:text-base text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Also For Them + Not For */}
          <div className="space-y-6 md:space-y-8">
            {/* Also For Them */}
            <div className="bg-secondary rounded-2xl p-5 md:p-8">
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-agro-earth flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                Também falamos com
              </h3>
              <ul className="space-y-3">
                {alsoForThem.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <span className="w-2 h-2 rounded-full bg-agro-earth flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For */}
            <div className="bg-muted rounded-2xl p-5 md:p-8 border border-border">
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-muted-foreground/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                </div>
                Pode não ser o melhor fit
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Se você precisa de <strong>repique emergencial</strong> para ontem, talvez 
                não sejamos a melhor opção agora. Nosso foco é compra programada de safra, 
                com planejamento e relação de longo prazo. Mas se quiser se organizar para 
                a próxima safra, a porta está aberta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
