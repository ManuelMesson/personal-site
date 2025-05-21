export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center md:text-left mb-8 md:mb-12">About Me</h2>
        <div className="max-w-prose mx-auto">
          <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
            <p className="text-lg md:text-xl text-center md:text-left leading-relaxed">
              I'm a creative barista-turned-developer with a passion for building
              beautiful and functional web experiences.
            </p>
            <p className="text-base md:text-lg text-center md:text-left leading-relaxed text-secondary">
              With a background in coffee artistry, I bring the same attention to
              detail and craft to my code. I specialize in modern web technologies
              and believe in creating intuitive, user-focused applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                Skills
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span className="text-secondary">Frontend Development</span>
                </li>
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span className="text-secondary">React & Next.js</span>
                </li>
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span className="text-secondary">TypeScript</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                Interests
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span className="text-secondary">Web Performance</span>
                </li>
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span className="text-secondary">User Experience</span>
                </li>
                <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span className="text-secondary">Modern Web APIs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
