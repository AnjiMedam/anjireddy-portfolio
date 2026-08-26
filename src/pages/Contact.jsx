import {
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Phone,
} from "lucide-react";

function Contact() {
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
        backgroundImage: `url(${import.meta.env.BASE_URL}contact-page-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Dark transparent overlay for better text visibility */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-slate-900/15
        "
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Contact page introduction */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something
            <span className="text-cyan-400">
              {" "}together.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Have a project, opportunity, or technical discussion in mind?
            Feel free to get in touch with me.
          </p>

        </div>

        {/* Contact content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact information */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/15
              p-6
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              lg:p-8
            "
          >

            <h2 className="text-2xl font-semibold">
              Get in touch
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              I am open to discussing software development opportunities,
              projects, technical collaborations, and interesting ideas.
            </p>

            {/* Email */}
            <a
              href="mailto:anjireddy495521@gmail.com"
              className="
                mt-8
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-white/10
                bg-slate-950/10
                p-4
                backdrop-blur-lg
                transition-all
                hover:border-cyan-400/30
                hover:bg-slate-900/45
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <Mail size={20} />
              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <p className="mt-1 text-sm text-slate-200">
                  anjireddy495521@gmail.com
                </p>

              </div>

            </a>

            {/* Mobile Number */}
            <a
              href="tel:8688495521"
              className="
                mt-3
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-white/10
                bg-slate-950/10
                p-4
                backdrop-blur-lg
                transition-all
                hover:border-cyan-400/30
                hover:bg-slate-900/45
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <Phone size={20} />
              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Mobile
                </p>

                <p className="mt-1 text-sm text-slate-200">
                  8688495521
                </p>

              </div>

            </a>

            {/* Location */}
            <div
              className="
                mt-3
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-white/10
                bg-slate-950/10
                p-4
                backdrop-blur-lg
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <MapPin size={20} />
              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Location
                </p>

                <p className="mt-1 text-sm text-slate-200">
                  India
                </p>

              </div>

            </div>

          </div>

          {/* Contact form */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/15
              p-6
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              lg:p-8
            "
          >

            <h2 className="text-2xl font-semibold">
              Send me a message
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Your message will be sent to my email.
            </p>

            <form className="mt-7 space-y-5">

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <User size={16} />
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-slate-900/15
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    backdrop-blur-lg
                    placeholder:text-slate-500
                    focus:border-cyan-400/50
                    focus:bg-slate-950/50
                  "
                />

              </div>

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <Mail size={16} />
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-slate-900/15
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    backdrop-blur-lg
                    placeholder:text-slate-500
                    focus:border-cyan-400/50
                    focus:bg-slate-950/50
                  "
                />

              </div>

              {/* Mobile Number */}
              <div>

                <label
                  htmlFor="mobile"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <Phone size={16} />
                  Mobile Number
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Your mobile number"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-slate-900/15
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    backdrop-blur-lg
                    placeholder:text-slate-500
                    focus:border-cyan-400/50
                    focus:bg-slate-950/50
                  "
                />

              </div>

              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <MessageSquare size={16} />
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-white/10
                    bg-slate-900/15
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    backdrop-blur-lg
                    placeholder:text-slate-500
                    focus:border-cyan-400/50
                    focus:bg-slate-950/50
                  "
                />

              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-cyan-400
                  px-5
                  py-3
                  font-semibold
                  text-slate-950
                  transition-all
                  hover:bg-cyan-300
                  hover:shadow-lg
                  hover:shadow-cyan-400/20
                "
              >
                Send Message

                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

        {/* Copyright */}
        <footer className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 sm:flex-row">

            <p>
              © {new Date().getFullYear()} Anjireddy Medam. All rights reserved.
            </p>

            <p>
              Software Development Engineer
            </p>

          </div>

        </footer>

      </div>

    </section>
  );
}

export default Contact;