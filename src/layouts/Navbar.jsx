import { Menu, X } from "lucide-react";
import { useState } from "react";

const navlinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="animate-[fade-in_0.3s_ease] fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4">
        {/*  */}
        <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 flex gap-6 sm:gap-8 items-center">
          {/* logo */}
          <h1 className="font-extrabold uppercase">
            <a href="#about">Ashish</a>
          </h1>

          {/* navlinks */}
          <nav className="hidden sm:flex">
            {navlinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="px-6 py-1.5 rounded-full duration-300 capitalize text-gray-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* menu icon for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>
      {/* mobile navbar */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-20 left-2 right-2 z-999 animate-[fade-in_0.2s_linear] bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
          <nav className="flex flex-col gap-3">
            {navlinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="px-6 py-1.5 rounded-full duration-300 capitalize text-gray-300 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
