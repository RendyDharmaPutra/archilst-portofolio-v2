import { FooterContacts } from "./contacts";
import { FooterHeadline } from "./headline";

export const FooterContent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Headline */}
      <FooterHeadline />

      {/* Contacts */}
      <FooterContacts />
    </div>
  );
};
