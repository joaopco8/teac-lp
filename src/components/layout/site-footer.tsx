"use client";

export function SiteFooter() {
  return (
    <footer className="py-12 bg-[#0a0a2e] border-t border-border/30">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TEAC. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
} 