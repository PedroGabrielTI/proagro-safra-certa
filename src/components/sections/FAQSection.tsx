import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Genérico é realmente igual ao produto de marca?",
    answer:
      "Sim. O genérico contém o mesmo princípio ativo do produto de marca, na mesma concentração. A diferença está no nome comercial e no preço — não na eficácia. É o mesmo princípio dos medicamentos genéricos: mesma fórmula, preço menor.",
  },
  {
    question: "Como tenho certeza de que os produtos são registrados no Brasil?",
    answer:
      "Todos os nossos produtos possuem registro no MAPA (Ministério da Agricultura) e atendem às exigências da ANVISA e do IBAMA. Fornecemos a documentação completa e você pode conferir o registro diretamente no sistema Agrofit.",
  },
  {
    question: "Vocês atendem qualquer região do Brasil?",
    answer:
      "Sim, atendemos produtores em todas as regiões do Brasil. Nossa logística é programada conforme a localização e o calendário de safra de cada cliente, garantindo entrega no momento certo.",
  },
  {
    question: "Vocês trabalham com repique ou só compra programada?",
    answer:
      "Nosso foco é a compra programada de safra — verão e inverno. Isso permite melhores condições comerciais e garantia de estoque. Para repique emergencial, pode não ser o melhor fit, mas podemos conversar sobre as próximas safras.",
  },
  {
    question: "Posso testar em parte da área antes de migrar tudo?",
    answer:
      "Com certeza. Muitos produtores começam testando o genérico em uma parte da área para comparar resultados. É uma forma segura de conhecer o produto antes de ampliar o uso. A gente apoia essa abordagem.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-section-gradient">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas diretas para as perguntas que mais ouvimos dos produtores.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
