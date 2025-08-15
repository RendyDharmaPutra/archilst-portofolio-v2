export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 font-bold text-4xl md:text-5xl text-primary-accent dark:text-primary-accent-dark animate">
        {title}
      </h2>
      <div className="mx-auto h-1 w-24 bg-primary-accent dark:bg-primary-accent-dark animate" />
    </div>
  );
};
