import React from "react";

type AboutCardProps = {
  title: string;
  content: string;
};

export const AboutCard: React.FC<AboutCardProps> = (props) => {
  return (
    <div className="bg-card text-text border border-accent/20 hover:border-accent dark:hover:border-accent dark:bg-card-dark dark:text-text-dark dark:border-accent/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,128,255,0.15)] dark:hover:shadow-[0_0_20px_rgba(0,128,255,0.1)] shadow-lg rounded-xl">
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-accent">{props.title}</h3>
        <p className="text-text-secondary/80 dark:text-text-secondary-dark/80 leading-relaxed">
          {props.content}
        </p>
      </div>
    </div>
  );
};
