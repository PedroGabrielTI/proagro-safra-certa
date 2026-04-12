import { Button } from "@/components/ui/button";
import herbicidesImg from "@/assets/herbicides-field.jpg";
import insecticidesImg from "@/assets/insecticides-field.jpg";
import fungicidesImg from "@/assets/fungicides-field.jpg";
const categories = [{
  image: herbicidesImg,
  title: "Herbicidas",
  description: "Controle eficiente de plantas daninhas nas principais culturas brasileiras — soja, milho, algodão e cana. Defensivos consagrados como glifosato, 2,4-D e atrazina com custo mais competitivo por hectare.",
  cultures: "Soja, Milho, Algodão, Cana"
}, {
  image: insecticidesImg,
  title: "Inseticidas",
  description: "Proteção contra as principais pragas que atacam sua lavoura. Defensivos de amplo espectro e específicos para cada situação, desde lagartas até percevejos e cigarrinhas.",
  cultures: "Todas as principais culturas"
}, {
  image: fungicidesImg,
  title: "Fungicidas e Outros",
  description: "Prevenção e controle de doenças fúngicas que comprometem a produtividade. Linha completa de defensivos para manter sua lavoura saudável durante todo o ciclo.",
  cultures: "Soja, Milho, Trigo, Feijão"
}];
export function ProductsSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="produtos" className="py-20 md:py-28 bg-card">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa linha de defensivos genéricos
          </h2>
          <p className="text-lg text-muted-foreground">Trabalhamos com defensivos agrícolas já consolidados, que você e seu agrônomo conhecem há anos. Sem nomes complicados, falamos a língua do produtor.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {categories.map((category, index) => <div key={index} className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {category.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium text-primary">
                    Culturas: {category.cultures}
                  </span>
                </div>
              </div>
            </div>)}
        </div>

        {/* Info Block */}
        <div className="max-w-2xl mx-auto mb-12 p-6 bg-muted rounded-2xl text-center">
          <p className="text-foreground/80">
            <strong>Nosso compromisso:</strong>
            <br />
            Não vamos empurrar nomes técnicos complicados. Você fala a cultura, o problema e a região, a gente fala o defensivo certo e a condição comercial.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="xl" onClick={() => scrollToSection("#contato")}>
            Quero uma proposta para minha próxima safra
          </Button>
        </div>
      </div>
    </section>;
}