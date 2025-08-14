import { Link } from "@remix-run/react";
import { useContacts } from "~/hooks/use-contacts";

export const HeroContacts = () => {
  const contacts = useContacts();

  return (
    <div className="flex justify-center gap-6 mt-8">
      {contacts.map((link, i) => (
        <Link
          key={i}
          to={link.href}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full border transition-all duration-300 text-text-muted dark:text-text-dark/60 border-text/20 dark:border-text-dark/20 hover:text-accent dark:hover:text-accent hover:border-accent dark:hover:border-accent hover:shadow-[0_0_15px_rgba(0,128,255,0.5)] dark:hover:shadow-[0_0_15px_rgba(0,128,255,0.5)]"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};
