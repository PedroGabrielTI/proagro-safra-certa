import { MessageSquare, ClipboardList, FileText, Truck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
const steps = [{
  icon: MessageSquare,
  number: "01",
  title: "Você conta sua operação",
  description: "Área plantada, culturas, região, histórico de uso de defensivos. Queremos entender sua realidade."
}, {
  icon: ClipboardList,
  number: "02",
  title: "Ajustamos o plano de safra",
  description: "Verão, inverno, volume estimado — montamos juntos a programação que faz sentido para você."
}, {
  icon: FileText,
  number: "03",
  title: "Enviamos a proposta",
  description: "Preço, condições de pagamento e prazos claros. Sem pegadinhas, sem letras miúdas."
}, {
  icon: Truck,
  number: "04",
  title: "Definimos a entrega",
  description: "Programação logística conforme sua necessidade. Entrega parcelada ou única, você decide."
}, {
  icon: Handshake,
  number: "05",
  title: "Acompanhamos você",
  description: "Entre uma safra e outra, estamos aqui. Relação de longo prazo, não venda única."
}];
export function HowToBuySection() {
  return <section id="como-comprar" className="py-20 md:py-28 bg-section-gradient">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como comprar com a Proagro
          </h2>
          <p className="text-lg text-muted-foreground">Do primeiro contato à entrega, tudo pensado para quem compra para safra, não para emergência.</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16 px-4 md:px-0">
          {/* Line - Desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-border" />
          
          {/* Line - Mobile (vertical) */}
          <div className="md:hidden absolute top-0 bottom-0 left-10 w-1 bg-border" />
          
          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => <div key={index} className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0">
                {/* Icon Container */}
                <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border-2 border-primary flex items-center justify-center md:mb-4 shadow-card flex-shrink-0">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  {/* Number Badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-bold flex items-center justify-center shadow-md z-20">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="whatsapp" size="xl" onClick={() => window.open("https://wa.me/5500000000000", "_blank")}>
            Falar com um especialista Proagro
          </Button>
        </div>
      </div>
    </section>;
}