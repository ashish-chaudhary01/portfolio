import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const data = [
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

  const input =
    "border border-white/20 bg-white/2 px-4 py-3.5 rounded-lg outline-none focus:ring-1 ring-[#2DC7FF] focus:shadow-[0_0_8px_#2DC7FF]";
  return (
    <section id="contact" className="min-h-screen pt-25 pb-25">
      <div className="text-center mb-10">
        <p className="uppercase text-indigo-400 font-medium tracking-[0.25em] text-sm mb-3">
          get in touch
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3">
          Let's Connect
        </p>
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
            {data.map((inputs, idx) => (
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
