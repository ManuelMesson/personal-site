import Section from './Section';

export default function HomeSection() {
  return (
    <Section className="hero" containerClassName="animate-rise">
      <div className="max-w-3xl">
        <span className="section-kicker">Product Builder</span>
        <h1 className="section-title">A minimal home for projects, notes, and practical product work.</h1>
        <p className="section-lead section-copy">
          I am Manuel Messon-Roque. I build software for hospitality and service businesses with a focus on better workflows, sharper
          operations, and clear interfaces.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="button">
            View Projects
          </a>
          <a href="#contact" className="button button-outline">
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  );
}
