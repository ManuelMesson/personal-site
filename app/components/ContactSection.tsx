export default function ContactSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center md:text-left mb-8">Get in Touch</h2>
        <div className="max-w-prose mx-auto">
          <p className="text-base md:text-lg mb-6 text-center md:text-left">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="card">
            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
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
                  className="w-full p-3 rounded-lg border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
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
                  className="w-full p-3 rounded-lg border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                ></textarea>
              </div>
              <button type="submit" className="button w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl mb-4 text-center md:text-left">Other ways to reach me</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#" className="button button-outline w-full sm:w-auto text-center">
                LinkedIn
              </a>
              <a href="#" className="button button-outline w-full sm:w-auto text-center">
                GitHub
              </a>
              <a href="mailto:you@example.com" className="button button-outline w-full sm:w-auto text-center">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
