import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputData = [
    {
      label: "name",
      value: formData.name,
      placeholder: "John Doe",
      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
    },
    {
      label: "email",
      value: formData.email,
      placeholder: "john@example.com",
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
    },
  ];

  const links = [
    {
      url: "https://github.com/ashish-chaudhary01",
      label: "GitHub",
    },
    {
      url: "#",
      label: "LinkedIn",
    },
  ];

  const input =
    "border border-white/20 bg-white/2 px-4 py-3.5 rounded-lg outline-none focus:ring-1 ring-[#2DC7FF] focus:shadow-[0_0_8px_#2DC7FF]";
  return (
    <section id="contact" className="min-h-screen pt-25 pb-25">
      <div className="text-center mb-10">
        <p className="uppercase text-indigo-400 font-medium tracking-[0.25em] text-sm mb-3">
          get in touch
        </p>
        <p className="text-3xl font-extrabold mb-3">Let's Connect</p>
        <p className=" text-slate-300">
          Have a project in mind or want to collaborate? I'd love to hear from
          you.
        </p>
      </div>
      {/* grid part */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 sm:gap-14 max-w-250 mx-auto">
        {/* left container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="space-y-6"
        >
          <div className="border border-white/10 bg-white/5 backdrop-blur-md p-8 rounded-xl">
            <div className="mb-2 text-white bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full inline-block">
              <MessageSquare />
            </div>
            <p className="text-lg font-bold mb-1">Open to opportunities</p>
            <p className="text-sm text-slate-300">
              I'm currently available for new opportunities. Whether it's a
              full-time role, freelance project, or just a chat — reach out!
            </p>
          </div>
          {/* email */}
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 duration-100 flex items-center gap-4 sm:col-span-2">
            <div className="w-12 h-12 rounded-lg bg-[#2DC7FF]/10 text-[#2DC7FF] flex items-center justify-center">
              <Mail />
            </div>
            <div className="overflow-hidden">
              <p className="text-slate-300 text-sm">Email</p>
              <p className="text-white text-md">sk8896107@gmail.com</p>
            </div>
          </div>
          {/* phone number */}
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 duration-100 flex items-center gap-4 sm:col-span-2">
            <div className="w-12 h-12 rounded-lg bg-[#2DC7FF]/10 text-[#2DC7FF] flex items-center justify-center">
              <Mail />
            </div>
            <div className="overflow-hidden">
              <p className="text-slate-300 text-sm">Phone</p>
              <p className="text-white text-md">+91 70783 98177</p>
            </div>
          </div>
          {/* location */}
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 duration-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#2DC7FF]/10 text-[#2DC7FF] flex items-center justify-center">
              <MapPin />
            </div>
            <div className="overflow-hidden">
              <p className="text-slate-300 text-sm">Location</p>
              <p className="text-white text-md">India</p>
            </div>
          </div>
          {/* links */}
          <div className="flex gap-4 items-center">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 flex items-center gap-2 justify-center border border-white/10 bg-white/5 rounded-md font-extrabold text-md hover:-translate-y-1.25 duration-200 hover:bg-white/20 backdrop-blur-md"
              >
                {link.label === "GitHub" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="h-7 w-7 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.369 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                  </svg>
                )}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* right container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
          className="rounded-xl bg-white/5 backdrop-blur-md p-8 border border-white/10"
        >
          <h2 className="text-[1.1rem] font-bold mb-10">Send a message</h2>

          <form action="#" className="flex flex-col gap-10">
            {inputData.map((inputs, idx) => (
              <div className="flex flex-col gap-4" key={idx}>
                <label
                  className="text-sm font-bold capitalize"
                  htmlFor={inputs.label}
                >
                  {inputs.label}
                </label>
                <input
                  type={inputs.label === "name" ? "text" : "email"}
                  name={inputs.label}
                  id={inputs.label}
                  value={inputs.value}
                  onChange={inputs.onChange}
                  placeholder={inputs.placeholder}
                  required
                  className={input}
                />
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <label className="text-sm font-bold capitalize" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className={input}
                placeholder="Tell me about yourself or about your project"
              ></textarea>
            </div>
            {/* button */}
            <button
              type="submit"
              className="py-4 rounded-xl bg-[#2DC7FF] text-slate-900 font-bold flex gap-2 items-center justify-center cursor-pointer hover:-translate-y-1.5 duration-200 shadow-[0_0_6px_#2DC7FF] "
            >
              <span>
                <Send size={20} />
              </span>
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
