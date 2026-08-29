import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Server,
} from "lucide-react";

import { projects } from "../data/portfolioData";

function Projects() {
  // Select an icon based on the project's technology category
  const getProjectIcon = (category) => {
    if (category === "Python") {
      return Code2;
    }

    if (category === "Django") {
      return Server;
    }

    return Database;
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        px-8
        py-16
        text-white
        lg:px-16
      "
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}projects-page-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Transparent overlay to maintain readability */}
      <div className="pointer-events-none absolute inset-0 bg-slate-950/20" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Projects page introduction */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Selected Work
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Projects I have
            <span className="text-cyan-400">
              {" "}worked on.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            A selection of applications and technical solutions
            developed across enterprise application development,
            data processing, contract management, and business
            automation.
          </p>

        </div>

        {/* Project cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {projects.map((project) => {
            const ProjectIcon = getProjectIcon(project.category);

            return (
              <article
                key={project.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/15
                  bg-slate-900/20
                  p-6
                  shadow-2xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-slate-900/25
                  lg:p-7
                "
              >

                {/* Project header */}
                <div className="flex items-start justify-between gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/25
                      bg-cyan-400/10
                      text-cyan-400
                      backdrop-blur-sm
                    "
                  >
                    <ProjectIcon size={22} />
                  </div>

                  <span
                    className="
                      rounded-md
                      border
                      border-white/15
                      bg-slate-950/25
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-cyan-300
                      backdrop-blur-sm
                    "
                  >
                    {project.category}
                  </span>

                </div>

                {/* Project title */}
                <h2 className="mt-6 text-xl font-semibold leading-7 text-white">
                  {project.title}
                </h2>

                {/* Project description */}
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                {/* Project responsibilities */}
                <div className="mt-6 space-y-3">

                  {project.responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="
                        flex
                        gap-3
                        rounded-lg
                        border
                        border-white/10
                        bg-slate-950/20
                        p-3
                        backdrop-blur-sm
                      "
                    >

                      <span
                        className="
                          mt-2
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-cyan-400
                        "
                      />

                      <p className="text-sm leading-6 text-slate-300">
                        {responsibility}
                      </p>

                    </div>
                  ))}

                </div>

                {/* Technologies used */}
                <div className="mt-6 border-t border-white/10 pt-5">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          border
                          border-white/10
                          bg-slate-950/20
                          px-2.5
                          py-1
                          text-xs
                          text-slate-300
                          backdrop-blur-sm
                        "
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Projects;