import {
  Code2,
  Server,
  Database,
} from "lucide-react";

import { skills } from "../data/portfolioData";

function Skills() {
  // Skill categories used to organize the technical stack
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Languages used for application development and database work.",
      icon: Code2,
      items: skills.languages,
    },
    {
      title: "Frameworks & Libraries",
      description: "Frameworks used to build frontend applications and backend services.",
      icon: Server,
      items: skills.frameworks,
    },
    {
      title: "Tools & Platforms",
      description: "Development tools, enterprise platforms, databases, and technologies.",
      icon: Database,
      items: skills.toolsAndPlatforms,
    },
  ];

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
        backgroundImage: `url(${import.meta.env.BASE_URL}skills-page-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Dark transparent overlay to keep content readable */}
      <div className="pointer-events-none absolute inset-0 bg-slate-950/25" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Skills page introduction */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technical Skills
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I
            <span className="text-cyan-400">
              {" "}work with.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            A collection of programming languages, frameworks,
            platforms, databases, and development tools used across
            my professional and personal projects.
          </p>

        </div>

        {/* Technical skill categories */}
        <div className="mt-16 space-y-6">

          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  rounded-2xl
                  border
                  border-white/15
                  bg-slate-900/20
                  p-6
                  shadow-2xl
                  backdrop-blur-md
                  lg:p-8
                "
              >

                {/* Category heading */}
                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-11
                      w-11
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
                    <Icon size={21} />
                  </div>

                  <div>

                    <h2 className="text-xl font-semibold text-white">
                      {category.title}
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {category.description}
                    </p>

                  </div>

                </div>

                {/* Skills inside the category */}
                <div className="mt-6 flex flex-wrap gap-3">

                  {category.items.map((skill) => (
                    <div
                      key={skill}
                      className="
                        rounded-lg
                        border
                        border-white/15
                        bg-slate-950/25
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-slate-200
                        backdrop-blur-sm
                        transition-all
                        duration-200
                        hover:border-cyan-400/30
                        hover:bg-cyan-400/10
                        hover:text-cyan-300
                      "
                    >
                      {skill}
                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* Skills page closing note */}
        <div
          className="
            mt-8
            rounded-xl
            border
            border-white/15
            bg-slate-900/20
            p-5
            backdrop-blur-md
          "
        >

          <p className="text-sm leading-6 text-slate-300">
            This technical stack represents the technologies currently
            included in my professional profile. The portfolio will
            continue to evolve as I gain experience with new tools
            and technologies.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Skills;