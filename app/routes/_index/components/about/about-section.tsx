import { SectionHeader } from "../section-header";
import { AboutCard } from "./about-card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <SectionHeader title="ABOUT ME" />

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
