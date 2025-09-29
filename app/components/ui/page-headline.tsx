type PageHeadlineProps = {
  title: string;
  description: string;
};

export const PageHeadline = ({ title, description }: PageHeadlineProps) => {
  return (
    <div className="flex flex-col gap-6 text-center">
      <h1 className="font-bold text-5xl md:text-7xl text-transparent bg-gradient-to-r from-primary-background-dark dark:from-primary-background via-primary-accent dark:via-primary-accent-dark to-primary-background-dark dark:to-primary-background bg-clip-text animate">
        {title}
      </h1>
      <div className="mx-auto mb-2 h-1 w-32 bg-gradient-to-r from-transparent via-primary-accent dark:via-primary-accent-dark to-transparent animate"></div>

      <p
        className={`max-w-3xl mx-auto leading-relaxed text-xl text-secondary-text dark:text-secondary-text-dark animate`}
      >
        {description}
      </p>
    </div>
  );
};
