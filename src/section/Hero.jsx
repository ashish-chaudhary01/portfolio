function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen max-w-250 mx-auto py-25 flex flex-col justify-end"
    >
      {/* name */}
      <h2 className="text-[8vw] md:text-[8vw] font-extrabold leading-[0.95] shadow-xl">
        Ashish <span className="text-[#008CEA]">Chaudhary </span>
      </h2>
      {/* description */}
      <div className="mt-8 text-white/70 md:text-lg max-w-xl flex flex-col gap-8">
        I’m a passionate Full Stack developer who enjoys building things for the
        web and constantly improving my skills. From designing interfaces to
        developing complete applications, I love turning ideas into experiences
        that are simple, useful, and enjoyable.
        {/* cta */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="py-3 px-6 text-sm text-black bg-white  font-semibold duration-200 hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="py-3 px-6 text-sm text-white border border-white/30  font-semibold duration-200 hover:bg-white hover:text-black"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
