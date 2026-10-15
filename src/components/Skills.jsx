import { skills } from "../data/data";

const marqueeSkills = [...skills, ...skills];

function Skills() {
  return (
    <>
      <h2 className="mt-20 text-center font-bold text-[2.5rem] sm:text-4xl drop-shadow-2xl">
        Tech <span className="text-blue-400">Stack</span>
      </h2>
      <div className="group mt-10 overflow-hidden backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max min-w-full animate-[spins_18s_linear_infinite] items-center gap-4 py-6">
          {marqueeSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              title={skill.name}
              className="group flex items-center justify-center size-25 sm:size-30 shrink-0 rounded-lg bg-white/5 backdrop-blur-md p-4 shadow-lg hover:-translate-y-2 duration-200 border border-white/10 hover:border-[#4760FF]/70 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="group-hover:scale-[1.2] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] duration-300 size-10 sm:size-15 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
