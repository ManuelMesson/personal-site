import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Manuel Messon-Roque</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <b>Manuel Messon-Roque</b>
        <nav>
          <ul>
            <li>Blog</li>
            <li>Resume</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <main></main>

      <footer>
        <a href="https://www.linkedin.com/in/manuelmesson/">Linkedin</a><br />
        <a href="https://github.com/manuelMesson">GitHub</a>
      </footer>
    </div>
  );
}
