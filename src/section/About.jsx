import { Mail, MapPin, User } from "lucide-react";
import Skills from "../components/Skills";

function AboutSection() {
  return (
    <section id="about" className=" min-h-screen">
      <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-white mb-16 tracking-tight text-center">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-18 items-center mb-30">
        {/* left container */}
        {/* image part */}
        <div className="flex justify-center">
          <div className="w-full max-w-100 aspect-square overflow-hidden p-2 bg-white/5 backdrop-blur-2xl border-2 border-white/10 rounded-2xl">
            <div className="overflow-hidden w-full h-full group rounded-xl">
              <img
                src="/profile.jpg"
                alt="profile"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 duration-500 overflow-hidden"
              />
            </div>
          </div>
        </div>

        {/* right container */}
        {/* details part */}
        <div className="w-full max-w-xl">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
            Hi, i am{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00d8ff] to-[#8b5cf6]">
              Ashish
            </span>
          </h3>
          <p className="text-[1.05rem] mb-8 leading-relaxed text-slate-300">
            I’m a passionate developer who enjoys building things for the web
            and constantly improving my skills. From designing interfaces to
            developing complete applications, I love turning ideas into
            experiences that are simple, useful, and enjoyable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 duration-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#4788FF]/10 text-[#4788FF] flex items-center justify-center">
                <User />
              </div>
              <div className="overflow-hidden">
                <p className="text-slate-300 text-sm">Name</p>
                <p className="text-white text-md line-clamp-1">
                  Ashish Chaudhary
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 duration-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#9747FF]/10 text-[#9747FF] flex items-center justify-center">
                <MapPin />
              </div>
              <div className="overflow-hidden">
                <p className="text-slate-300 text-sm">Location</p>
                <p className="text-white text-md">India</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 duration-100 flex items-center gap-4 sm:col-span-2">
              <div className="w-12 h-12 rounded-lg bg-[#FE6847]/10 text-[#cb3d1d] flex items-center justify-center">
                <Mail />
              </div>
              <div className="overflow-hidden">
                <p className="text-slate-300 text-sm">Email</p>
                <p className="text-white text-md">sk8896107@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skill card */}
      <Skills />
    </section>
  );
}

export default AboutSection;

// {/* details */}
// <div className="mt-4 text-md">
//   <p>
//     Hi, I’m Ashish Chaudhary, a Computer Science Engineering student
//     currently pursuing my Diploma in Computer Science and Engineering
//     from Government Polytechnic Kashipur, Uttarakhand.
//   </p>
//   <br />
//   <p>
//     I’m passionate about web development and software engineering, and I
//     enjoy turning ideas into functional, user-friendly web applications.
//     My journey in development started with learning the fundamentals of
//     programming and gradually moved towards building real-world projects
//     using modern web technologies.
//   </p>
//   <br />
