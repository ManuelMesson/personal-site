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
            <p className="text-base md:text-lg text-zinc-800 dark:text-zinc-100 mb-10 text-left whitespace-pre-line">
              {`
              Hi, I'm Manuel.

Since I was a kid, I’ve been passionate about computers and app development. I love solving problems with tech and building tools that make life easier. My focus is on creating digital products that support hospitality and customer service—fields I care deeply about. With a customer-obsessed mindset, I’m currently working on launching my first SaaS product.

I'm also passionate about coffee and creating great guest experiences. I’ve always loved the energy of a busy cafe, the rhythm of good service, and the small details that make people feel welcome. Sales and helping others come naturally to me, and I enjoy making connections while delivering excellent service.

I was born and raised in Puerto Rico and moved to Seattle when I was 25. It’s been 8 years, and the journey has taught me a lot about resilience, growth, and building from the ground up.

Now, I’m focused on combining my love for tech and hospitality to launch meaningful products—and eventually, open my own café spaces.

This is just the beginning, and I’m excited for what’s ahead.`}
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
