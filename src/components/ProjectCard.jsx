import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl bg-white/2 border border-white/10 hover:border-white/15 duration-500 transition-all hover:-translate-y-2 backdrop-blur-md overflow-hidden h-full hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] ">
      {/* image container */}
      <div className="relative h-55 w-full overflow-hidden rounded-t-2xl border-b border-white/5">
        <img
          src={project.poster}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* gradient black */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
      </div>
      {/* project details */}
      <div className="p-6 flex justify-between flex-col gap-4">
        <div>
          <h3 className="font-bold text-[1.1rem] mb-2 text-white group-hover:text-blue-400 duration-500 leading-tight line-clamp-2">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm font-medium leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex gap-2 items-center flex-wrap mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1.5 rounded-lg bg-white/3 border border-white/5 font-bold text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* links */}
        <div className="flex gap-3 items-center mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 shadow-[0_0_8px_rgba(255,255,255,0.1)] px-3 py-2 bg-white text-black flex items-center justify-center gap-2 font-bold text-xs rounded-lg hover:bg-white/90 duration-200"
          >
            <span>
              <ExternalLink size={15} />
            </span>
            <span>Live Demo</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 shadow-[0_0_8px_rgba(255,255,255,0.1)] px-3 py-2 bg-white text-black flex items-center justify-center gap-2 font-bold text-xs rounded-lg hover:bg-white/90 duration-200"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="size-4 fill-current"
                aria-hidden="true"
              >
                <path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" />
              </svg>
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
