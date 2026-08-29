import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Phone,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const mobileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.type === "error") {
      setStatus({
        type: "",
        message: "",
      });
    }

    // Clear custom mobile validation once the user changes it
    if (name === "mobile") {
      e.target.setCustomValidity("");
    }
  };

  useEffect(() => {
    if (status.type !== "success") {
      return;
    }

    const timer = setTimeout(() => {
      setStatus({
        type: "",
        message: "",
      });
    }, 6000);

    return () => clearTimeout(timer);
  }, [status.type]);


  const validateMobile = (e) => {
  const mobile = e.target.value;
  const mobileRegex = /^[6-9][0-9]{9}$/;
  if (!mobileRegex.test(mobile)) {
        e.target.setCustomValidity(
          "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9."
        );
      } else {
        e.target.setCustomValidity("");
      }
    };

    
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact",
        formData
      );

      setStatus({
        type: "success",
        message: response.data.message,
      });

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      if (error.response?.data?.detail) {
        setStatus({
          type: "error",
          message: "Please check your entered details.",
        });
      } else {
        setStatus({
          type: "error",
          message:
            "Unable to send your message. Please try again later.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        px-4
        py-12
        text-white
        sm:px-6
        sm:py-16
        lg:px-16
      "
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}contact-page-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark transparent overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-slate-900/15
        "
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl min-w-0">

        {/* Contact page introduction */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Let's build something
            <span className="text-cyan-400"> together.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            Have a project, opportunity, or technical discussion in mind?
            Feel free to get in touch with me.
          </p>

        </div>

        {/* Contact content */}
        <div
          className="
            mt-10
            grid
            min-w-0
            grid-cols-1
            gap-6
            sm:mt-12
            sm:gap-8
            lg:mt-16
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >

          {/* Contact information */}
          <div
            className="
              min-w-0
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-slate-900/15
              p-5
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              sm:p-6
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
                min-w-0
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-slate-950/10
                p-4
                backdrop-blur-lg
                transition-all
                hover:border-cyan-400/30
                hover:bg-slate-900/45
                sm:gap-4
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

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <p className="mt-1 break-words text-sm text-slate-200">
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
                min-w-0
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-slate-950/10
                p-4
                backdrop-blur-lg
                transition-all
                hover:border-cyan-400/30
                hover:bg-slate-900/45
                sm:gap-4
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

              <div className="min-w-0">
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
                min-w-0
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-slate-950/10
                p-4
                backdrop-blur-lg
                sm:gap-4
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

              <div className="min-w-0">
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
              min-w-0
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-slate-900/15
              p-5
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              sm:p-6
              lg:p-8
            "
          >

            <h2 className="text-2xl font-semibold">
              Send me a message
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Your message will be securely stored and sent for processing.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 min-w-0 space-y-5"
            >

              {/* Name */}
              <div className="min-w-0">

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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="
                    block
                    w-full
                    max-w-full
                    min-w-0
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                />

              </div>

              {/* Email */}
              <div className="min-w-0">

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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="
                    block
                    w-full
                    max-w-full
                    min-w-0
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                />

              </div>

              {/* Mobile Number */}
              <div className="min-w-0">

                <label
                  htmlFor="mobile"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <Phone size={16} />
                  Mobile Number
                </label>

                <input
                  ref={mobileInputRef}
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  placeholder="Your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  onInvalid={validateMobile}
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                  disabled={loading}
                  className="
                    block
                    w-full
                    max-w-full
                    min-w-0
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                />

              </div>

              {/* Message */}
              <div className="min-w-0">

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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="
                    block
                    w-full
                    max-w-full
                    min-w-0
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                />

              </div>

              {/* Status message */}
              {status.message && (
                <div
                  className={`
                    rounded-lg
                    border
                    px-4
                    py-3
                    text-sm
                    ${
                      status.type === "success"
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                        : "border-red-400/30 bg-red-400/10 text-red-300"
                    }
                  `}
                >
                  {status.message}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  flex
                  w-full
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
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:w-auto
                "
              >
                {loading ? "Sending..." : "Send Message"}

                <Send
                  size={18}
                  className={loading ? "animate-pulse" : ""}
                />
              </button>

            </form>

          </div>

        </div>

        {/* Copyright */}
        <footer className="mt-12 border-t border-white/10 pt-8 sm:mt-16">

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-3
              text-center
              text-sm
              text-slate-400
              sm:flex-row
              sm:text-left
            "
          >

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