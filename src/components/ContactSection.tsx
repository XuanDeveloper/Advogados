
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      label: t('contact.address'),
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      label: t('contact.phone.office'),
    },
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      label: t('contact.email.office'),
    },
    {
      icon: <Clock className="h-5 w-5 text-accent" />,
      label: t('contact.hours'),
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951648936!2d-46.65684092558837!3d-23.56496317882276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1sen!2sbr!4v1685537714070!5m2!1sen!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="w-full"
            ></iframe>
          </div>

          <div className="flex flex-col gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    {t('contact.name')}
                  </label>
                  <Input
                    id="name"
                    placeholder={t('contact.name')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    {t('contact.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('contact.email')}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  {t('contact.phone')}
                </label>
                <Input
                  id="phone"
                  placeholder={t('contact.phone')}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  placeholder={t('contact.message')}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                {t('contact.submit')}
              </Button>
            </form>

            <div className="bg-card border border-border p-6 rounded-lg space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5">{info.icon}</div>
                  <p className="text-sm">{info.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
