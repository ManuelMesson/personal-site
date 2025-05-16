export default function ContactSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-8">Get in Touch</h2>
        <div className="max-w-prose">
          <p className="text-lg mb-6">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="card">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg border border-secondary bg-background"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg border border-secondary bg-background"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-secondary bg-background"
                  required
                ></textarea>
              </div>
              <button type="submit" className="button">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl mb-4">Other ways to reach me</h3>
            <div className="flex gap-4">
              <a href="#" className="button button-outline">
                LinkedIn
              </a>
              <a href="#" className="button button-outline">
                GitHub
              </a>
              <a href="mailto:you@example.com" className="button button-outline">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
