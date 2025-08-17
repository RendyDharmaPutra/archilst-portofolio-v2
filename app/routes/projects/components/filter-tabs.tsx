type FilterTabProps = {
  categories: string[];
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterTabs = ({
  categories,
  activeFilter,
  setActiveFilter,
}: FilterTabProps) => {
  return (
    <div className="-mb-4 flex justify-center">
      <div className="p-2 flex gap-2 rounded-lg border border-secondary-background dark:border-secondary-background-dark bg-primary-background dark:bg-primary-background-dark animate">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 md:px-6 py-2 md:py-3 font-medium rounded-md animate ${
              activeFilter === category
                ? "bg-primary-accent dark:bg-primary-accent-dark text-white shadow-[0_0_15px_rgba(0,128,255,0.3)] dark:shadow-[0_0_15px_rgba(0,102,204,0.3)]"
                : "text-[#A1A1AA] hover:text-primary-accent dark:hover:text-primary-accent-dark hover:bg-primary-accent/10 dark:hover:bg-primary-accent-dark/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
