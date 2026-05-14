function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-blue-500">Harshvardhan</h1>
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar