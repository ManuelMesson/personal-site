import Section from './Section';

const projects = [
  {
    title: 'Hospitality Ops SaaS',
    description: 'Internal tooling to improve service speed, team visibility, and consistency in high-volume operations.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '',
  },
  {
    title: 'Personal Publishing Platform',
    description: 'A focused platform for sharing build logs, project writeups, and practical lessons from product execution.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: '',
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <span className="section-kicker">Projects</span>
      <h2 className="section-title">Selected work</h2>
      <p className="section-lead section-copy">A snapshot of what I am building right now across product, code, and operations.</p>

      <div className="card-grid two">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-copy muted">{project.description}</p>

            <div className="card-meta flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            {project.link ? (
              <a href={project.link} className="read-link">
                View project
              </a>
            ) : (
              <p className="muted mb-0">Detailed case study coming soon.</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
