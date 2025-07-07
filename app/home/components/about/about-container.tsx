import { AboutCard } from "./about-card";

export const AboutContainer = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Background */}
          <AboutCard
            title="Background"
            content="A Software Developer evolving into a well-rounded Software Engineer and Engineer.
            Focused on building solutions through technology, system design, and creative exploration across both software and hardware domains."
          />

          <AboutCard
            title="Expertise"
            content="Specializing in modern cross-platform digital solution development,
            with a strong emphasis on user experience design, performance optimization, and the implementation of best practices in software development.
            Also actively engaged in photography as a creative hobby beyond the world of coding."
          />
        </div>
      </div>
    </section>
  );
};
