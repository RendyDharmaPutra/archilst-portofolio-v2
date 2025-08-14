import { Link } from "@remix-run/react";
import { useContacts } from "~/hooks/use-contacts";

export const FooterContacts = () => {
  const contacts = useContacts(); // Mengambil data Kontak

  return (
    <div className="flex gap-4">
      {contacts.map((contact, idx) => (
        <Link
          key={idx}
          to={contact.href}
          target="_blank"
          rel="noreferrer"
          className="text-text-muted dark:text-text-muted-dark hover:text-accent dark:hover:text-accent transition-colors duration-300"
        >
          {contact.icon}
        </Link>
      ))}
    </div>
  );
};
