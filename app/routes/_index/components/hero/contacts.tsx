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
          className="p-3 rounded-full text-tertiary-text dark:text-tertiary-text-dark border border-primary-text/20 dark:border-primary-text-dark/20 hover:text-primary-accent dark:hover:text-primary-accent-dark hover:border-primary-accent dark:hover:border-primary-accent-dark hover:shadow-[0_0_15px_rgba(0,128,255,0.5)] dark:hover:shadow-[0_0_15px_rgba(0,128,255,0.5)] animate"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};
