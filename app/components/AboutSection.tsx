export default function AboutSection() {
  return (
    <section className="section py-20 md:py-32 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="mb-4">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* Main Content */}
          <div className="flex-1">
            <p className="text-base md:text-lg text-zinc-800 dark:text-zinc-100 mb-10 text-left">
              I’m a developer passionate about crafting clean, accessible, and delightful digital experiences. My journey from coffee artistry to code means I value both creativity and precision in every project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Skills Card */}
              <div className="rounded-xl border border-accent/10 bg-white/80 dark:bg-zinc-900/70 shadow-md px-6 py-7 flex flex-col items-start min-w-[200px]">
                <h3 className="text-base font-semibold mb-3 text-accent">Skills</h3>
                <ul className="flex flex-col gap-2 w-full">
                  {['Frontend Development', 'React & Next.js', 'TypeScript'].map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Interests Card */}
              <div className="rounded-xl border border-accent/10 bg-white/80 dark:bg-zinc-900/70 shadow-md px-6 py-7 flex flex-col items-start min-w-[200px]">
                <h3 className="text-base font-semibold mb-3 text-accent">Interests</h3>
                <ul className="flex flex-col gap-2 w-full">
                  {['Web Performance', 'User Experience', 'Modern Web APIs'].map((interest) => (
                    <li key={interest} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent-light" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
