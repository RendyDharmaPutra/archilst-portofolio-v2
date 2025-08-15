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
          className="text-tertiary-text dark:text-tertiary-text-dark hover:text-primary-accent dark:hover:text-primary-accent-dark animate"
        >
          {contact.icon}
        </Link>
      ))}
    </div>
  );
};
