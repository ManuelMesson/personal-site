export default function NavMenu() {
  return (
    <nav className="flex justify-center mt-8 space-x-4">
      <a href="#about" className="text-lg text-blue-500 hover:underline">About</a>
      <a href="#projects" className="text-lg text-blue-500 hover:underline">Projects</a>
      <a href="#contact" className="text-lg text-blue-500 hover:underline">Contact</a>
    </nav>
  );
}