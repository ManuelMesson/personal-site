import Section from './Section';

const aboutText =
  'I spent nine years in high-volume, customer-facing operations. Today, I serve 100–150 Amazon engineers and product managers daily at the Day 1 HQ café. I bring that operating context to the software I build.';

const facts = [
  {
    title: 'PopoSoft',
    description: 'Founded in March 2026 and run as a company with one human.',
  },
  {
    title: 'Software',
    description: 'Built by directing AI agents.',
  },
  {
    title: 'Operations',
    description: 'Nine years in high-volume, customer-facing work.',
  },
] as const;

export default function AboutSection() {
  return (
    <Section id="about">
      <span className="section-kicker">About</span>
      <h2 className="section-title">Software, grounded in operations.</h2>
      <p className="section-lead section-copy">{aboutText}</p>

      <div className="card-grid three">
        {facts.map((fact) => (
          <article key={fact.title} className="card">
            <h3 className="card-title">{fact.title}</h3>
            <p className="muted mb-0">{fact.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
