import { TrendingUp, Newspaper, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

const newsLinks = [
  {
    title: "Canal Rural",
    description: "Notícias do agronegócio brasileiro",
    url: "https://www.canalrural.com.br/",
  },
  {
    title: "Agrolink",
    description: "Portal do agronegócio",
    url: "https://www.agrolink.com.br/",
  },
  {
    title: "Notícias Agrícolas",
    description: "Cotações e mercado agrícola",
    url: "https://www.noticiasagricolas.com.br/",
  },
  {
    title: "Globo Rural",
    description: "Agro, meio ambiente e economia",
    url: "https://g1.globo.com/economia/agronegocios/",
  },
];

const quotations = [
  { symbol: "BMFBOVESPA:DOL1!", title: "Dólar Futuro (B3)" },
  { symbol: "BMFBOVESPA:ICF1!", title: "Café Futuro (B3)" },
  { symbol: "BMFBOVESPA:CCM1!", title: "Milho Futuro (B3)" },
  { symbol: "BMFBOVESPA:BGI1!", title: "Boi Gordo (B3)" },
];

function TradingViewWidget({ symbol, title }: { symbol: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing content
    containerRef.current.innerHTML = "";
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      height: "100%",
      locale: "br",
      dateRange: "1M",
      colorTheme: "light",
      isTransparent: true,
      autosize: true,
      largeChartUrl: "",
      noTimeScale: false,
      chartOnly: false,
    });
    
    containerRef.current.appendChild(script);
  }, [symbol]);

  return (
    <div className="bg-card rounded-xl border border-border p-4 shadow-sm hover:shadow-card transition-shadow">
      <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-primary" />
        {title}
      </h4>
      <div ref={containerRef} className="h-40" />
    </div>
  );
}

export function MarketSection() {
  return (
    <section id="mercado" className="py-20 md:py-28 bg-section-gradient">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mercado em tempo real
          </h2>
          <p className="text-lg text-muted-foreground">
            Acompanhe as principais cotações e informações do agronegócio para tomar decisões mais estratégicas.
          </p>
        </div>

        {/* Cotações Grid */}
        <div className="mb-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Cotações
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quotations.map((q, index) => (
              <TradingViewWidget key={index} symbol={q.symbol} title={q.title} />
            ))}
          </div>
        </div>

        {/* Notícias do Agro */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-primary" />
            Portais de Notícias do Agro
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Cotações fornecidas por TradingView. Para decisões comerciais, consulte sempre fontes oficiais.
        </p>
      </div>
    </section>
  );
}
