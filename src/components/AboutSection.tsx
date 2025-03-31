
import { useLanguage } from "@/contexts/LanguageContext";
import { Scale, Award, Users } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Scale className="w-8 h-8 text-accent" />,
      value: "20+",
      label: t('about.experience')
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      value: "1500+",
      label: t('about.cases')
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      value: "850+",
      label: t('about.clients')
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.text')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-lg p-8 text-center border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
