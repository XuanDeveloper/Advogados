
import { useLanguage } from "@/contexts/LanguageContext";
import { LawyerCard } from "@/components/LawyerCard";

export function LawyersSection() {
  const { t, language } = useLanguage();

  const lawyers = [
    {
      id: 1,
      name: t('lawyer1.name'),
      role: t('lawyer1.role'),
      expertise: t('lawyer1.expertise'),
      bio: t('lawyer1.bio'),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1074&auto=format&fit=crop",
      email: "carlos.mendes@advocaciaelite.com.br",
      phone: "+55 (11) 98765-4321"
    },
    {
      id: 2,
      name: t('lawyer2.name'),
      role: t('lawyer2.role'),
      expertise: t('lawyer2.expertise'),
      bio: t('lawyer2.bio'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
      email: "ana.silva@advocaciaelite.com.br",
      phone: "+55 (11) 98765-4322"
    },
    {
      id: 3,
      name: t('lawyer3.name'),
      role: t('lawyer3.role'),
      expertise: t('lawyer3.expertise'),
      bio: t('lawyer3.bio'),
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
      email: "roberto.costa@advocaciaelite.com.br",
      phone: "+55 (11) 98765-4323"
    },
    {
      id: 4,
      name: t('lawyer4.name'),
      role: t('lawyer4.role'),
      expertise: t('lawyer4.expertise'),
      bio: t('lawyer4.bio'),
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1887&auto=format&fit=crop",
      email: "luciana.farias@advocaciaelite.com.br",
      phone: "+55 (11) 98765-4324"
    }
  ];

  return (
    <section id="lawyers" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('lawyers.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('lawyers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} {...lawyer} />
          ))}
        </div>
      </div>
    </section>
  );
}
