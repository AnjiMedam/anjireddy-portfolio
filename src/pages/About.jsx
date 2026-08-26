import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  CalendarDays,
} from "lucide-react";

import {
  experience,
  education,
  certifications,
} from "../data/portfolioData";

function About() {
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
        backgroundImage: `
          linear-gradient(
            rgba(2, 6, 23, 0.25),
            rgba(2, 6, 23, 0.25)
          ),
          url(${import.meta.env.BASE_URL}about-page-bg.png)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Soft background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -top-40
            right-0
            h-96
            w-96
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-96
            w-96
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-6xl">

        {/* About page introduction */}
        <div
          className="
            max-w-3xl
            rounded-3xl
            border
            border-white/10
            bg-slate-950/20
            p-7
            shadow-2xl
            shadow-black/20
            backdrop-blur-xl
            lg:p-9
          "
        >

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            My professional
            <span className="text-cyan-400">
              {" "}journey.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            My experience includes enterprise application development,
            backend solutions, REST API integrations, data-processing
            workflows, and business-critical application development.
          </p>

        </div>

        {/* Professional experience */}
        <div className="mt-16">

          <div className="mb-7 flex items-center gap-3">

            <BriefcaseBusiness
              size={22}
              className="text-cyan-400"
            />

            <h2 className="text-2xl font-semibold">
              Professional Experience
            </h2>

          </div>

          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-950/20
                p-6
                shadow-2xl
                shadow-black/20
                backdrop-blur-xl
                lg:p-8
              "
            >

              {/* Company and role information */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {job.company}
                  </h3>

                  <p className="mt-1 text-cyan-400">
                    {job.role}
                  </p>

                </div>

                <div className="flex items-center gap-2 text-sm text-slate-400">

                  <CalendarDays size={16} />

                  <span>
                    {job.period}
                  </span>

                </div>

              </div>

              {/* Responsibilities */}
              <div className="mt-7">

                <p className="mb-4 text-sm font-medium text-slate-200">
                  Key Responsibilities
                </p>

                {/* Responsibility cards */}
                <div className="grid gap-3 sm:grid-cols-2">

                  {job.responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-950/15
                        p-4
                        backdrop-blur-lg
                        transition-all
                        duration-200
                        hover:border-cyan-400/30
                        hover:bg-slate-950/25
                      "
                    >

                      <div className="flex gap-3">

                        {/* Responsibility indicator */}
                        <span
                          className="
                            mt-2
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-cyan-400
                            shadow-lg
                            shadow-cyan-400/50
                          "
                        />

                        {/* Responsibility text */}
                        <p className="text-sm leading-6 text-slate-300">
                          {responsibility}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Education and certifications */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {/* Education */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-950/20
              p-6
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              lg:p-8
            "
          >

            <div className="flex items-center gap-3">

              <GraduationCap
                size={22}
                className="text-cyan-400"
              />

              <h2 className="text-2xl font-semibold">
                Education
              </h2>

            </div>

            <div className="mt-7 space-y-7">

              {education.map((item) => (
                <div
                  key={`${item.institution}-${item.degree}`}
                  className="
                    border-b
                    border-white/10
                    pb-6
                    last:border-b-0
                    last:pb-0
                  "
                >

                  <h3 className="font-semibold text-white">
                    {item.institution}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.degree}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

                    <span className="text-sm text-slate-400">
                      {item.period}
                    </span>

                    <span
                      className="
                        rounded-lg
                        border
                        border-cyan-400/20
                        bg-cyan-400/10
                        px-3
                        py-1
                        text-sm
                        font-medium
                        text-cyan-400
                      "
                    >
                      {item.score}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Certifications */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-950/20
              p-6
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              lg:p-8
            "
          >

            <div className="flex items-center gap-3">

              <Award
                size={22}
                className="text-cyan-400"
              />

              <h2 className="text-2xl font-semibold">
                Certifications
              </h2>

            </div>

            <div className="mt-7 space-y-4">

              {certifications.map((certificate) => (
                <div
                  key={certificate.name}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-950/15
                    p-5
                    backdrop-blur-lg
                    transition-all
                    duration-200
                    hover:border-cyan-400/30
                    hover:bg-slate-950/25
                  "
                >

                  <p className="font-medium leading-6 text-white">
                    {certificate.name}
                  </p>

                  {certificate.year && (
                    <p className="mt-2 text-sm text-cyan-400">
                      {certificate.year}
                    </p>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;