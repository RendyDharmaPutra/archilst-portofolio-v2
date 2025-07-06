import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const useContacts = () => {
  return [
    {
      href: "https://wa.me/your-number",
      icon: <Phone className="h-6 w-6" />,
    },
    {
      href: "mailto:your-email@example.com",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      href: "https://instagram.com/your-username",
      icon: <Instagram className="h-6 w-6" />,
    },
    {
      href: "https://github.com/your-username",
      icon: <Github className="h-6 w-6" />,
    },
    {
      href: "https://linkedin.com/in/your-username",
      icon: <Linkedin className="h-6 w-6" />,
    },
  ];
};
