export const FooterCopyrights = () => {
  return (
    <div className="mt-8 pt-8 text-center border-t border-primary-accent/10 dark:border-primary-accent-dark/20 animate">
      <p className="text-tertiary-text/70 dark:text-tertiary-text-dark/50 animate">
        © {new Date().getFullYear()} Rendy DharmaPutra. All rights reserved.
      </p>
    </div>
  );
};
