import NavMenu from './NavMenu';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hi, I'm Manuel Messon-Roque</h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl">
        Welcome to my personal site! I'm excited to share my journey, projects, and ideas with you. Feel free to explore and learn more about me.
      </p>
      <NavMenu />
    </div>

  );
}
