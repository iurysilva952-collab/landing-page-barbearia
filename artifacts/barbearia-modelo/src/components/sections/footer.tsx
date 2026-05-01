export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold text-foreground tracking-normal uppercase">
            BARBEARIA<span className="text-primary">.</span>MODELO
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right pr-24">
            <p className="mb-2">
              © {new Date().getFullYear()} Barbearia Modelo. Todos os direitos reservados.
            </p>
            <p>
              Site criado por{" "}
              <a
                href="https://www.instagram.com/hopes.dev?igsh=MXExOGszNmx2dmFhNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                HopesDev
              </a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}