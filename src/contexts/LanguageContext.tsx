
import React, { createContext, useState, useContext } from 'react';

type Language = 'pt-BR' | 'en-US';

type LanguageContextType = {
  language: Language;
  translations: Record<string, string>;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  'pt-BR': {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.lawyers': 'Advogados',
    'nav.contact': 'Contato',
    'nav.language': 'English',

    // Hero
    'hero.title': 'Advocacia de Excelência',
    'hero.subtitle': 'Defendendo seus direitos com dedicação e comprometimento',
    'hero.cta': 'Agende uma Consulta',

    // About
    'about.title': 'Sobre Nós',
    'about.text': 'Com mais de 20 anos de experiência, nossa equipe de advogados especializados está pronta para oferecer as melhores soluções jurídicas para nossos clientes.',
    'about.experience': 'Anos de Experiência',
    'about.cases': 'Casos Resolvidos',
    'about.clients': 'Clientes Satisfeitos',

    // Lawyers section
    'lawyers.title': 'Nossos Advogados',
    'lawyers.subtitle': 'Conheça nossa equipe de profissionais altamente qualificados',
    'lawyers.expertise': 'Especialidades',
    'lawyers.contact': 'Contato',
    'lawyers.profile': 'Ver Perfil',
    
    // Lawyer profiles
    'lawyer1.name': 'Dr. Carlos Mendes',
    'lawyer1.role': 'Advogado Sênior',
    'lawyer1.expertise': 'Direito Civil, Direito Empresarial',
    'lawyer1.bio': 'Advogado com mais de 15 anos de experiência em causas civis e empresariais. Formado pela USP com mestrado em Direito Comercial.',
    
    'lawyer2.name': 'Dra. Ana Paula Silva',
    'lawyer2.role': 'Advogada Especialista',
    'lawyer2.expertise': 'Direito Trabalhista, Direito Previdenciário',
    'lawyer2.bio': 'Especialista em direitos trabalhistas e previdenciários. Pós-graduada em Direito do Trabalho com vasta experiência em negociações coletivas.',
    
    'lawyer3.name': 'Dr. Roberto Costa',
    'lawyer3.role': 'Advogado Criminal',
    'lawyer3.expertise': 'Direito Penal, Direito Processual Penal',
    'lawyer3.bio': 'Advogado criminalista com atuação destacada no Tribunal do Júri. Especialista em crimes contra o patrimônio e crimes econômicos.',
    
    'lawyer4.name': 'Dra. Luciana Farias',
    'lawyer4.role': 'Advogada Tributarista',
    'lawyer4.expertise': 'Direito Tributário, Planejamento Fiscal',
    'lawyer4.bio': 'Especialista em direito tributário e planejamento fiscal para empresas. Mestre em Direito Tributário pela PUC-SP.',

    // Contact Section
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Estamos prontos para ajudar com sua consulta',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.message': 'Mensagem',
    'contact.submit': 'Enviar Mensagem',
    'contact.address': 'Av. Paulista, 1000, São Paulo - SP',
    'contact.phone.office': '+55 (11) 3333-4444',
    'contact.email.office': 'contato@advocaciaelite.com.br',
    'contact.hours': 'Seg - Sex: 9h às 18h',

    // Footer
    'footer.rights': 'Advocacia Elite © 2023. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço'
  },
  'en-US': {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.lawyers': 'Lawyers',
    'nav.contact': 'Contact',
    'nav.language': 'Português',

    // Hero
    'hero.title': 'Excellence in Law Practice',
    'hero.subtitle': 'Defending your rights with dedication and commitment',
    'hero.cta': 'Schedule a Consultation',

    // About
    'about.title': 'About Us',
    'about.text': 'With over 20 years of experience, our team of specialized lawyers is ready to offer the best legal solutions for our clients.',
    'about.experience': 'Years of Experience',
    'about.cases': 'Resolved Cases',
    'about.clients': 'Satisfied Clients',

    // Lawyers section
    'lawyers.title': 'Our Lawyers',
    'lawyers.subtitle': 'Meet our team of highly qualified professionals',
    'lawyers.expertise': 'Expertise',
    'lawyers.contact': 'Contact',
    'lawyers.profile': 'View Profile',
    
    // Lawyer profiles
    'lawyer1.name': 'Dr. Carlos Mendes',
    'lawyer1.role': 'Senior Attorney',
    'lawyer1.expertise': 'Civil Law, Business Law',
    'lawyer1.bio': 'Lawyer with over 15 years of experience in civil and business cases. Graduated from USP with a master\'s degree in Commercial Law.',
    
    'lawyer2.name': 'Dr. Ana Paula Silva',
    'lawyer2.role': 'Specialist Attorney',
    'lawyer2.expertise': 'Labor Law, Social Security Law',
    'lawyer2.bio': 'Specialist in labor and social security rights. Post-graduate in Labor Law with extensive experience in collective negotiations.',
    
    'lawyer3.name': 'Dr. Roberto Costa',
    'lawyer3.role': 'Criminal Attorney',
    'lawyer3.expertise': 'Criminal Law, Criminal Procedure Law',
    'lawyer3.bio': 'Criminal lawyer with outstanding performance in the Jury Court. Specialist in crimes against property and economic crimes.',
    
    'lawyer4.name': 'Dr. Luciana Farias',
    'lawyer4.role': 'Tax Attorney',
    'lawyer4.expertise': 'Tax Law, Tax Planning',
    'lawyer4.bio': 'Specialist in tax law and tax planning for companies. Master in Tax Law from PUC-SP.',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'re ready to help with your inquiry',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.address': '1000 Paulista Ave, São Paulo - SP',
    'contact.phone.office': '+55 (11) 3333-4444',
    'contact.email.office': 'contact@advocaciaelite.com.br',
    'contact.hours': 'Mon - Fri: 9am to 6pm',

    // Footer
    'footer.rights': 'Advocacia Elite © 2023. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt-BR',
  translations: translations['pt-BR'],
  toggleLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt-BR' ? 'en-US' : 'pt-BR'));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations: translations[language],
        toggleLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
