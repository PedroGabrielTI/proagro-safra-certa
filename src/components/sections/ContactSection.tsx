import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Nossa equipe entrará em contato em breve.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-primary">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Vamos falar da sua próxima safra?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Conte o que você planta, sua região e o que usa hoje. A gente te mostra 
            onde o genérico pode entrar com segurança e preço melhor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4">
                Prefere WhatsApp?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                A maioria dos produtores prefere resolver pelo WhatsApp. É rápido, 
                prático e você fala direto com quem entende.
              </p>
              <Button
                variant="whatsapp"
                size="xl"
                className="w-full"
                onClick={() => window.open("https://wa.me/5531995337481", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </Button>
            </div>

            {/* Other Contacts */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">E-mail</p>
                  <p className="font-medium text-primary-foreground">comercial@proagro-br.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Telefone</p>
                  <p className="font-medium text-primary-foreground">5531995337481</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Atendimento</p>
                  <p className="font-medium text-primary-foreground">Todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Envie uma mensagem
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome completo *
                </label>
                <Input
                  required
                  placeholder="Seu nome"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome da fazenda / empresa
                </label>
                <Input
                  placeholder="Ex: Fazenda Boa Vista"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cidade *
                  </label>
                  <Input
                    required
                    placeholder="Cidade"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Estado *
                  </label>
                  <Input
                    required
                    placeholder="UF"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Culturas principais
                </label>
                <Input
                  placeholder="Ex: Soja, Milho, Algodão"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Melhor forma de contato *
                </label>
                <Input
                  required
                  placeholder="WhatsApp, telefone ou e-mail"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Conte rapidamente sua necessidade
                </label>
                <Textarea
                  placeholder="O que você está buscando? Qual sua área plantada? Já usa genéricos?"
                  rows={4}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensagem
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
