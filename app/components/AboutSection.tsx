import Section from './Section';

const aboutText =
  'Born and raised in Puerto Rico, now based in Seattle. I care about building products that teams can adopt quickly and customers can trust. My current focus is shipping SaaS tools and long-term projects where technology supports real hospitality experiences.';

const principles = ['Clarity over complexity', 'Execution over hype', 'Systems that support people'] as const;

export default function AboutSection() {
  return (
    <Section id="about">
      <span className="section-kicker">About</span>
      <h2 className="section-title">Built around useful outcomes.</h2>
      <p className="section-lead section-copy">{aboutText}</p>

      <div className="card-grid three">
        {principles.map((principle) => (
          <article key={principle} className="card">
            <h3 className="card-title">{principle}</h3>
            <p className="muted mb-0">A product philosophy shaped by operational teams, not abstract feature checklists.</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
