import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border border-white/10 mt-10 px-10 sm:px-15">
      <div className="py-15 flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-br from-[#2DC7FF] to-[#4bc0ea] leading-tight tracking-tight mb-1">
            Ashish Chaudhary
          </h2>
          <p className="leading-relaxed text-sm text-slate-300 max-w-xs">
            Full stack web developer, softeware engineer based in India.
          </p>
        </div>
      </div>
      <div className="py-6 text-xs flex flex-col gap-3 items-center justify-between sm:flex-row text-gray-500">
        <p>© 2026 Ashish Chaudhary. All right reserved.</p>
        <a
          href="#about"
          className="group flex items-center gap-1 hover:text-white duration-100"
        >
          <span className="group-hover:-translate-y-0.5 duration-100">
            <ArrowUp size={15} />
          </span>
          <span>Back to top</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
