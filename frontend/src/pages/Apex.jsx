import {
  ArrowUpRight,
  Database,
  ShieldCheck,
  Code2,
} from "lucide-react";

import { oracleApex } from "../data/portfolioData";

function Apex() {
  return (
    <section
      className="
        min-h-screen
        px-6
        py-16
        text-white
        lg:px-12
      "
      style={{
        backgroundImage: "url('/apex-page-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Page content wrapper */}
      <div className="mx-auto max-w-6xl">

        {/* Page introduction */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Project Showcase
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Enterprise
            <span className="text-cyan-400">
              {" "}Application.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A business application developed around Oracle Database,
            low-code application development, and secure enterprise
            workflows.
          </p>

        </div>

        {/* Main glass project card */}
        <div
          className="
            mt-14
            overflow-hidden
            rounded-[2rem]
            border
            border-cyan-300/20
            bg-slate-950/25
            shadow-2xl
            shadow-black/30
            backdrop-blur-sm
          "
        >

          {/* Project header */}
          <div
            className="
              border-b
              border-white/10
              bg-white/[0.015]
              p-7
              lg:p-9
            "
          >

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

              {/* Project icon */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  text-cyan-400
                  shadow-lg
                  shadow-cyan-400/5
                "
              >
                <Code2 size={30} />
              </div>

              <div>

                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                  Featured Project
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Enterprise Web Application
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                  {oracleApex.description}
                </p>

              </div>

            </div>

          </div>

          {/* Technology overview */}
          <div className="grid gap-5 p-7 sm:grid-cols-2 lg:p-9">

            {/* Database */}
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-slate-950/15
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-slate-950/50
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <Database size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                Autonomous Database
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Application data is managed through an Oracle
                Autonomous Database environment.
              </p>

            </div>

            {/* Security */}
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-slate-950/15
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-slate-950/50
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <ShieldCheck size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                Secure Application
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Authentication and application access are handled
                through the platform's security features.
              </p>

            </div>

          </div>

          {/* Technology tags */}
          <div
            className="
              border-t
              border-white/10
              bg-white/[0.01]
              px-7
              py-6
              lg:px-9
            "
          >

            <div className="flex flex-wrap gap-3">

              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-slate-950/40
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-slate-300
                  backdrop-blur-sm
                "
              >
                Oracle Database
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/5
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-cyan-300
                  backdrop-blur-sm
                "
              >
                APEX
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-slate-950/40
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-slate-300
                  backdrop-blur-sm
                "
              >
                SQL
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-slate-950/40
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-slate-300
                  backdrop-blur-sm
                "
              >
                PL/SQL
              </span>

            </div>

          </div>

          {/* Launch section */}
          <div
            className="
              flex
              flex-col
              gap-5
              border-t
              border-white/10
              bg-white/[0.01]
              p-7
              sm:flex-row
              sm:items-center
              sm:justify-between
              lg:px-9
            "
          >

            <div>

              <p className="font-medium text-white">
                Explore the live project
              </p>

              <p className="mt-1 text-sm text-slate-400">
                The application will open in a new browser tab.
              </p>

            </div>

            <a
              href={oracleApex.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-cyan-300/20
                bg-cyan-400
                px-5
                py-3
                text-sm
                font-semibold
                text-slate-950
                shadow-lg
                shadow-cyan-400/10
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-cyan-300
                hover:shadow-cyan-400/20
              "
            >
              Launch Project

              <ArrowUpRight size={17} />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Apex;