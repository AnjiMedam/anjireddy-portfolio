import {
  ArrowRight,
  Download,
  BriefcaseBusiness,
  Database,
  Code2,
  Server,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  profile,
  homeSkills,
  education,
} from "../data/portfolioData";

function Home() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}home-page-bg.png)`,
      }}
    >

      {/* Dark transparent overlay
          Keeps the background visible while improving text readability */}
      <div className="absolute inset-0 bg-slate-950/35 pointer-events-none" />

      {/* Soft lighting layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-40
            top-1/3
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
            -right-40
            bottom-10
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

      </div>

      {/* Main homepage container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          items-center
          px-8
          py-16
          lg:px-14
        "
      >

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >

          {/* =========================================================
              LEFT — PROFESSIONAL INTRODUCTION
          ========================================================= */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-950/20
              p-8
              shadow-2xl
              shadow-black/20
              backdrop-blur-md
              lg:p-10
            "
          >

            {/* Professional role */}
            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-cyan-400" />

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400
                "
              >
                {profile.role}
              </p>

            </div>

            {/* Developer name */}
            <h1
              className="
                text-5xl
                font-bold
                tracking-tight
                text-white
                drop-shadow-lg
                sm:text-6xl
                lg:text-7xl
              "
            >
              Anjireddy

              <span className="block text-cyan-400">
                Medam
              </span>
            </h1>

            {/* Professional summary */}
            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-slate-200
                drop-shadow-md
              "
            >
              {profile.summary}
            </p>

            {/* Core technologies */}
            <div className="mt-7 flex flex-wrap gap-2.5">

              {homeSkills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-lg
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1.5
                    text-sm
                    text-slate-200
                    shadow-sm
                    backdrop-blur-md
                    transition-all
                    duration-200
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/10
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Main action buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-cyan-400
                  px-5
                  py-3
                  font-semibold
                  text-slate-950
                  shadow-lg
                  shadow-cyan-400/20
                  transition-all
                  duration-200
                  hover:bg-cyan-300
                  hover:shadow-cyan-400/30
                "
              >
                View Projects

                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/15
                  bg-white/5
                  px-5
                  py-3
                  font-medium
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-cyan-400/30
                  hover:bg-white/10
                "
              >
                Download Resume

                <Download size={18} />
              </button>

            </div>

          </div>


          {/* =========================================================
              RIGHT — DEVELOPER PROFILE GLASS CARD
          ========================================================= */}
          <div className="relative">

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-950/20
                p-7
                shadow-2xl
                shadow-black/30
                backdrop-blur-xl
                lg:p-8
              "
            >

              {/* Subtle glass highlight */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-8
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-300/40
                  to-transparent
                "
              />

              {/* Profile heading */}
              <div className="flex items-center gap-4">

                <div
                  className="
                    h-14
                    w-14
                    shrink-0
                    overflow-hidden
                    rounded-xl
                    border
                    border-cyan-400/30
                    bg-slate-950/50
                    shadow-lg
                  "
                >
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Anjireddy Medam"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>

                  <h2 className="font-semibold text-white">
                    Developer Profile
                  </h2>

                  <p className="mt-1 text-sm text-slate-300/70">
                    Enterprise Application Development
                  </p>

                </div>

              </div>


              {/* =====================================================
                  EXPERIENCE + PROJECT STATISTICS
              ===================================================== */}
              <div className="mt-7 grid grid-cols-2 gap-3">

                {/* Experience */}
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur-md
                    transition-all
                    duration-200
                    hover:border-cyan-400/20
                    hover:bg-white/10
                  "
                >

                  <BriefcaseBusiness
                    size={20}
                    className="text-cyan-400"
                  />

                  <p className="mt-3 text-2xl font-bold text-white">
                    0-2
                  </p>

                  <p className="mt-1 text-xs text-slate-300/60">
                    Years Experience
                  </p>

                </div>


                {/* Projects */}
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur-md
                    transition-all
                    duration-200
                    hover:border-cyan-400/20
                    hover:bg-white/10
                  "
                >

                  <Code2
                    size={20}
                    className="text-cyan-400"
                  />

                  <p className="mt-3 text-2xl font-bold text-white">
                    4
                  </p>

                  <p className="mt-1 text-xs text-slate-300/60">
                    Major Projects
                  </p>

                </div>

              </div>


              {/* =====================================================
                  BACKEND DEVELOPMENT
              ===================================================== */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-cyan-400/20
                  hover:bg-white/10
                "
              >

                <div className="text-cyan-400">
                  <Server size={20} />
                </div>

                <div>

                  <p className="text-sm font-medium text-white">
                    Backend Development
                  </p>

                  <p className="mt-1 text-xs text-slate-300/60">
                    Python • FastAPI • Django • REST APIs
                  </p>

                </div>

              </div>


              {/* =====================================================
                  DATABASE + ENTERPRISE
              ===================================================== */}
              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-cyan-400/20
                  hover:bg-white/10
                "
              >

                <div className="text-cyan-400">
                  <Database size={20} />
                </div>

                <div>

                  <p className="text-sm font-medium text-white">
                    Database & Enterprise
                  </p>

                  <p className="mt-1 text-xs text-slate-300/60">
                    Oracle APEX • SQL • PL/SQL • Oracle Database
                  </p>

                </div>

              </div>


              {/* =====================================================
                  EDUCATION
              ===================================================== */}
              <div className="mt-6 border-t border-white/10 pt-5">

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-cyan-400/70
                  "
                >
                  Education
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {education[0].degree}
                </p>

                <p className="mt-1 text-xs text-slate-300/60">
                  {education[0].institution} • {education[0].score}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;