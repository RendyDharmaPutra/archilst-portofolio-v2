export const FooterCopyrights = () => {
  return (
    <div className="mt-8 pt-8 border-t border-accent/10 dark:border-accent-dark/20 text-center">
      <p className="text-text-muted/70 dark:text-text-muted-dark/50">
        © {new Date().getFullYear()} Rendy DharmaPutra. All rights reserved.
      </p>
    </div>
  );
};
