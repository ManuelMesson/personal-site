export default function ProjectsSection() {
	const projects = [
		{
			title: "Project 1",
			description: "Description of project 1",
			tech: ["React", "TypeScript", "Next.js"],
			link: "#",
			imageUrl: "/window.svg", // Using a placeholder image
		},
		{
			title: "Project 2",
			description: "Description of project 2",
			tech: ["Node.js", "Express", "MongoDB"],
			link: "#",
			imageUrl: "/globe.svg", // Using a placeholder image
		},
	];

	return (
		<section className="section overflow-hidden">
			<div className="container">
				<div className="text-center md:text-left mb-12">
					<h2 className="mb-4">Projects</h2>
					<p className="text-secondary text-lg md:max-w-2xl">
						Here are some of the projects I've worked on. Each one is crafted with attention to detail and modern best practices.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
					{projects.map((project, index) => (
						<article 
							key={index} 
							className="group relative bg-muted/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
						>
							<div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-5 group-hover:opacity-10 transition-opacity">
								<img
									src={project.imageUrl}
									alt=""
									className="w-full h-full object-contain"
								/>
							</div>

							<div className="relative space-y-6">
								<header>
									<h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
										{project.title}
									</h3>
									<p className="text-secondary text-base md:text-lg leading-relaxed">
										{project.description}
									</p>
								</header>

								<div className="space-y-6">
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-full whitespace-nowrap 
													transition-colors hover:bg-accent/20"
											>
												{tech}
											</span>
										))}
									</div>

									<a
										href={project.link}
										className="inline-flex items-center gap-2 text-accent group/link"
									>
										<span className="relative font-medium">
											View Project
											<span className="absolute -bottom-1 left-0 w-full h-px bg-accent transform scale-x-0 group-hover/link:scale-x-100 transition-transform"></span>
										</span>
										<svg 
											className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
											fill="none" 
											viewBox="0 0 24 24" 
											stroke="currentColor"
										>
											<path 
												strokeLinecap="round" 
												strokeLinejoin="round" 
												strokeWidth={2} 
												d="M17 8l4 4m0 0l-4 4m4-4H3" 
											/>
										</svg>
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
