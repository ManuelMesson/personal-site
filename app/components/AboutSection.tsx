export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-8">About Me</h2>
        <div className="max-w-prose">
          <p className="text-lg mb-6">
            I'm a creative barista-turned-developer with a passion for building
            beautiful and functional web experiences.
          </p>
          <p className="mb-6">
            With a background in coffee artistry, I bring the same attention to
            detail and craft to my code. I specialize in modern web technologies
            and believe in creating intuitive, user-focused applications.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl mb-4">Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Frontend Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  TypeScript
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">Interests</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Web Performance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  User Experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Modern Web APIs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
