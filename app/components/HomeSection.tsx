import Section from './Section';

export default function HomeSection() {
  return (
    <Section className="hero" containerClassName="animate-rise">
      <div className="max-w-3xl">
        <span className="section-kicker">Founder-Operator</span>
        <h1 className="section-title">I build software by directing AI agents.</h1>
        <p className="section-lead section-copy">
          I founded PopoSoft in March 2026 and run it as its one human. Through it, I shipped Landed, a live AI career tool, and Shelves, an
          open-source memory engine.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://landed-cz99.onrender.com" target="_blank" rel="noopener noreferrer" className="button">
            Open Landed
          </a>
          <a href="#projects" className="button button-outline">
            View projects
          </a>
        </div>
      </div>
    </Section>
  );
}
