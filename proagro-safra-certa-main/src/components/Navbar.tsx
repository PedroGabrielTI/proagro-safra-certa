import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoProagroVerde from "@/assets/logo-proagro-verde.png";
import logoProagroBranca from "@/assets/logo-proagro-branca.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Por que Genéricos", href: "#genericos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Como Comprar", href: "#como-comprar" },
  { label: "Mercado", href: "#mercado" },
  { label: "Para Quem É", href: "#para-quem" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#inicio");
          }}
          className="transition-opacity hover:opacity-80"
        >
          <img 
            src={isScrolled ? logoProagroVerde : logoProagroBranca} 
            alt="ProAgro" 
            className="h-10 sm:h-12 w-auto transition-all"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isScrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-muted"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant={isScrolled ? "accent" : "hero"}
            size="sm"
            className="ml-4"
            onClick={() => scrollToSection("#contato")}
          >
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="accent"
              className="mt-2"
              onClick={() => scrollToSection("#contato")}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
