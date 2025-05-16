import Section from './Section';

export default function HomeSection() {
  return (
    <Section className="min-h-[80vh] flex items-center">
      <div className="space-y-8 max-w-3xl">
        <h1 className="animate-fade-in">
          Hi, I'm Manuel Messon-Roque
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-prose">
          A passionate developer focused on creating beautiful and functional web experiences. 
          I combine technical expertise with creative problem-solving to build modern web applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="button">
            View my work
          </a>
          <a href="#contact" className="button button-outline">
            Get in touch
          </a>
        </div>
      </div>
    </Section>
  );
}
