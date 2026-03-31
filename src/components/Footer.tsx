import logoProagroBranca from "@/assets/logo-proagro-branca.png";
import zhongshanLogo from "@/assets/zhongshan-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agro-green-dark py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img 
              src={logoProagroBranca} 
              alt="ProAgro" 
              className="h-10 sm:h-12 w-auto mb-3"
            />
            <p className="text-primary-foreground/60 text-sm">
              Defensivos genéricos para o produtor que pensa em safra.
            </p>
          </div>

          <div className="flex items-center">
            <img
              src={zhongshanLogo}
              alt="Zhongshan Chemical"
              className="h-14 sm:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Proagro. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              Produtos registrados no MAPA para uso no Brasil.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
