import Section from './Section';

const projects = [
  {
    title: 'Landed',
    description: 'A live AI career tool.',
    details: ['Live', 'AI career tool'],
    link: 'https://landed-cz99.onrender.com',
    linkLabel: 'Open Landed',
  },
  {
    title: 'Shelves',
    description: 'An open-source memory engine, released under the MIT License.',
    details: ['Open source', 'Memory engine', 'MIT'],
    link: 'https://github.com/ManuelMesson/shelves',
    linkLabel: 'View repository',
  },
] as const;

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <span className="section-kicker">Projects</span>
      <h2 className="section-title">Selected work</h2>
      <p className="section-lead section-copy">Two products shipped through PopoSoft.</p>

      <div className="card-grid two">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-copy muted">{project.description}</p>

            <div className="card-meta flex flex-wrap gap-2">
              {project.details.map((detail) => (
                <span key={detail} className="chip">
                  {detail}
                </span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="read-link">
              {project.linkLabel}
            </a>
          </article>
        ))}
      </div>

      <div className="section-action">
        <a href="https://github.com/ManuelMesson" target="_blank" rel="noopener noreferrer" className="button button-outline">
          View GitHub profile
        </a>
      </div>
    </Section>
  );
}
