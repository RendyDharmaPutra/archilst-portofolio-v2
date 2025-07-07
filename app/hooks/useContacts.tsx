import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

// Data Kontak
export const useContacts = () => {
  return [
    {
      href: "https://wa.me/08980426333",
      icon: <Phone className="h-5 sm:h-6 w-5 sm:w-6" />,
    },
    {
      href: "mailto:rendydp424@gmail.com",
      icon: <Mail className="h-5 sm:h-6 w-5 sm:w-6" />,
    },
    {
      href: "https://instagram.com/arclst24",
      icon: <Instagram className="h-5 sm:h-6 w-5 sm:w-6" />,
    },
    {
      href: "https://github.com/RendyDharmaPutra",
      icon: <Github className="h-5 sm:h-6 w-5 sm:w-6" />,
    },
    {
      href: "https://linkedin.com/in/RendyDharmaPutra",
      icon: <Linkedin className="h-5 sm:h-6 w-5 sm:w-6" />,
    },
  ];
};
