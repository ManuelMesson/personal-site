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
				<h2 className="text-center md:text-left mb-8">Projects</h2>
				<div className="grid gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<article key={index} className="card flex flex-col h-full">
							<h3 className="text-xl md:text-2xl mb-4">{project.title}</h3>
							<p className="mb-6 flex-grow">{project.description}</p>
							<div className="space-y-4">
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className="px-3 py-1 text-sm bg-muted rounded-full whitespace-nowrap"
										>
											{tech}
										</span>
									))}
								</div>
								<a
									href={project.link}
									className="button button-outline w-full sm:w-auto text-center"
								>
									View Project
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
