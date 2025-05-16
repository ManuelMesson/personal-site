export default function ProjectsSection() {
	const projects = [
		{
			title: "Project 1",
			description: "Description of project 1",
			tech: ["React", "TypeScript", "Next.js"],
			link: "#",
		},
		{
			title: "Project 2",
			description: "Description of project 2",
			tech: ["Node.js", "Express", "MongoDB"],
			link: "#",
		},
	];

	return (
		<section className="section">
			<div className="container">
				<h2 className="mb-8">Projects</h2>
				<div className="grid">
					{projects.map((project, index) => (
						<article key={index} className="card">
							<h3 className="mb-4">{project.title}</h3>
							<p className="mb-6">{project.description}</p>
							<div className="flex gap-2 flex-wrap mb-4">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="px-3 py-1 text-sm bg-muted rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
							<a
								href={project.link}
								className="button button-outline"
							>
								View Project
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
