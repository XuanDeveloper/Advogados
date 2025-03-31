
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-16 md:pt-24 pb-32 bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl">
              {t('hero.subtitle')}
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6">
              {t('hero.cta')}
            </Button>
          </div>
          <div className="md:w-1/2 relative animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
                alt="Law Office"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-card p-4 rounded-lg shadow-lg border border-border hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-accent"></div>
                  <div className="w-10 h-10 rounded-full bg-primary"></div>
                  <div className="w-10 h-10 rounded-full bg-secondary"></div>
                </div>
                <p className="font-medium">20+ {t('about.experience')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
