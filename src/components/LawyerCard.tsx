
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface LawyerProps {
  id: number;
  name: string;
  role: string;
  expertise: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
}

export function LawyerCard({
  id,
  name,
  role,
  expertise,
  bio,
  image,
  email,
  phone,
}: LawyerProps) {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden border border-border hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="p-6">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">{t('lawyers.expertise')}</h4>
          <p className="text-sm text-muted-foreground">{expertise}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">{t('lawyers.contact')}</h4>
          <div className="space-y-2">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              {email}
            </a>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              {t('lawyers.profile')}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
              <DialogDescription>{role}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="mx-auto w-32 h-32 overflow-hidden rounded-full border-2 border-border">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">{t('lawyers.expertise')}</h4>
                <p className="text-sm text-muted-foreground">{expertise}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Bio</h4>
                <p className="text-sm text-muted-foreground">{bio}</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {email}
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {phone}
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
