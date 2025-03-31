
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5"
    >
      <Globe className="h-4 w-4" />
      <span>{t('nav.language')}</span>
    </Button>
  );
}
