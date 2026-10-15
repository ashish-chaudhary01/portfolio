import { projects } from "../data/data";
import ProjectCard from "../components/ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="py-15 max-w-300 mx-auto">
      <div className="text-center">
        <p className="uppercase text-indigo-400 font-medium tracking-[0.25em] text-sm mb-3">
          featured projects
        </p>
        <h2 className="text-[2.5rem] md:text[3rem] font-bold mb-1">
          Projects <span>Showcase</span>
        </h2>
        <p className=" text-slate-300">Explore my journey through projects.</p>
      </div>
      {/* project cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
