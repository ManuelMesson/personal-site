import Section from './Section';

export default function HomeSection() {
  return (
    <Section className="min-h-[80vh] flex items-center justify-center py-8 md:py-16">
      <div className="space-y-6 md:space-y-8 max-w-3xl px-4">
        <h1 className="animate-fade-in text-center md:text-left">
          Hi, I'm Manuel Messon-Roque
        </h1>
        <p className="text-base md:text-xl text-secondary max-w-prose text-center md:text-left">
          A passionate developer focused on creating beautiful and functional web experiences. 
          I combine technical expertise with creative problem-solving to build modern web applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a href="#projects" className="button w-full sm:w-auto text-center">
            View my work
          </a>
          <a href="#contact" className="button button-outline w-full sm:w-auto text-center">
            Get in touch
          </a>
        </div>
      </div>
    </Section>
  );
}
