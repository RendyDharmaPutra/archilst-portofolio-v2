import React from "react";

type AboutCardProps = {
  title: string;
  content: string;
};

export const AboutCard: React.FC<AboutCardProps> = (props) => {
  return (
    <div className="rounded-xl text-primary-text dark:text-primary-text-dark border border-primary-accent/20 dark:border-primary-accent-dark/30 hover:border-primary-accent dark:hover:border-primary-accent-dark bg-primary-background dark:bg-primary-background-dark shadow-lg hover:shadow-[0_0_20px_rgba(0,128,255,0.15)] dark:hover:shadow-[0_0_20px_rgba(0,128,255,0.1)] animate">
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-primary-accent dark:text-primary-accent-dark animate">
          {props.title}
        </h3>
        <p className="leading-relaxed text-secondary-text/80 dark:text-secondary-text-dark/80 animate">
          {props.content}
        </p>
      </div>
    </div>
  );
};
