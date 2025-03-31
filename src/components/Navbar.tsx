
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold font-serif text-foreground">Advocacia<span className="text-gold">Elite</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              {t('nav.home')}
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              {t('nav.about')}
            </a>
            <a href="#lawyers" className="text-foreground hover:text-accent transition-colors">
              {t('nav.lawyers')}
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              {t('nav.contact')}
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              {t('hero.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
                {t('nav.home')}
              </a>
              <a href="#about" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
                {t('nav.about')}
              </a>
              <a href="#lawyers" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
                {t('nav.lawyers')}
              </a>
              <a href="#contact" className="px-4 py-2 text-foreground hover:bg-muted rounded-md" onClick={toggleMenu}>
                {t('nav.contact')}
              </a>
              <div className="pt-2 border-t border-border">
                <LanguageToggle />
              </div>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t('hero.cta')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
