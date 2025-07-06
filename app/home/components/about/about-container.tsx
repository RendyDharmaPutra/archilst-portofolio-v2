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
            content="Seorang Software Developer dengan passion dalam mengembangkan solusi teknologi inovatif. Berpengalaman
            dalam full-stack development, mobile applications, dan emerging technologies seperti AI dan
            blockchain. Selalu antusias untuk belajar teknologi baru dan menghadapi tantangan dalam dunia software
            engineering."
          />

          <AboutCard
            title="Expertise"
            content=" Fokus pada pengembangan aplikasi web modern dengan React, Node.js, dan cloud technologies. Memiliki
            ketertarikan khusus pada user experience design, performance optimization, dan implementasi best
            practices dalam software development. Juga aktif dalam fotografi sebagai hobi kreatif di luar dunia
            coding."
          />
        </div>
      </div>
    </section>
  );
};
