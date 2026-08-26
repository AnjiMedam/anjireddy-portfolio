import {
  ArrowLeft,
  CalendarDays,
  Clock3,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { blogPosts } from "../data/portfolioData";

function BlogArticle() {
  // Reads the article slug from the current URL.
  const { slug } = useParams();

  // Finds the article whose slug matches the URL.
  const article = blogPosts.find(
    (post) => post.slug === slug
  );

  // Handles an invalid or unknown article URL.
  if (!article) {
    return (
      <section className="min-h-screen bg-slate-950 px-6 py-16 text-white lg:px-16">

        <div className="mx-auto max-w-4xl">

          <h1 className="text-3xl font-bold">
            Article Not Found
          </h1>

          <p className="mt-4 text-slate-400">
            The article you are looking for does not exist.
          </p>

          <Link
            to="/blog"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-cyan-400
              transition-colors
              hover:text-cyan-300
            "
          >
            <ArrowLeft size={16} />

            Back to Blog
          </Link>

        </div>

      </section>
    );
  }

  return (
    <article className="min-h-screen bg-slate-950 px-6 py-12 text-white lg:px-16">

      <div className="mx-auto max-w-4xl">

        {/* Back navigation */}
        <Link
          to="/blog"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-slate-500
            transition-colors
            hover:text-cyan-400
          "
        >
          <ArrowLeft size={16} />

          Back to Blog
        </Link>

        {/* Article header */}
        <header className="mt-10">

          {/* Category, date, and reading time */}
          <div className="flex flex-wrap items-center gap-4">

            <span
              className="
                rounded-md
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-3
                py-1
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-cyan-400
              "
            >
              {article.category}
            </span>

            <div className="flex items-center gap-2 text-xs text-slate-500">

              <CalendarDays size={14} />

              <span>
                {article.date}
              </span>

            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">

              <Clock3 size={14} />

              <span>
                {article.readTime}
              </span>

            </div>

          </div>

          {/* Article title */}
          <h1
            className="
              mt-6
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-5xl
            "
          >
            {article.title}
          </h1>

          {/* Article introduction */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {article.description}
          </p>

        </header>

        {/* Article sections */}
        <div className="mt-14 space-y-16">

          {article.sections?.map((section) => (

            <section key={section.number}>

              {/* Section heading */}
              <div className="flex items-start gap-4">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-cyan-400/10
                    text-sm
                    font-bold
                    text-cyan-400
                  "
                >
                  {section.number}
                </span>

                <h2 className="text-2xl font-semibold leading-10">
                  {section.title}
                </h2>

              </div>

              {/* Main section paragraphs */}
              {section.paragraphs?.map((paragraph, index) => (

                <p
                  key={index}
                  className="
                    mt-6
                    leading-8
                    text-slate-400
                  "
                >
                  {paragraph}
                </p>

              ))}

              {/* Section subsections */}
              {section.subsections?.map((subsection) => (

                <div
                  key={subsection.title}
                  className="mt-10"
                >

                  {/* Subsection heading */}
                  <h3 className="text-lg font-semibold text-white">
                    {subsection.title}
                  </h3>

                  {/* Subsection paragraphs */}
                  {subsection.paragraphs?.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="
                          mt-4
                          leading-8
                          text-slate-400
                        "
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                  {/* Information cards */}
                  {subsection.points && (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                      {subsection.points.map((point) => (

                        <div
                          key={point.title}
                          className="
                            rounded-xl
                            border
                            border-slate-800
                            bg-slate-900/60
                            p-4
                            transition-colors
                            hover:border-cyan-400/20
                          "
                        >

                          <p className="text-sm font-medium text-white">
                            {point.title}
                          </p>

                          <p className="mt-2 text-xs leading-5 text-slate-500">
                            {point.description}
                          </p>

                        </div>

                      ))}

                    </div>
                  )}

                </div>

              ))}

              {/* Section screenshots */}
              {section.images?.map((image) => (

                <figure
                  key={image.src}
                  className="
                    mt-8
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900
                  "
                >

                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full"
                  />

                  <figcaption
                    className="
                      border-t
                      border-slate-800
                      px-5
                      py-3
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    {image.caption}
                  </figcaption>

                </figure>

              ))}

            </section>

          ))}

        </div>

        {/* Article footer */}
        <footer className="mt-16 border-t border-slate-800 pt-8">

          <p className="text-sm leading-6 text-slate-500">
            This article documents the development setup and
            workflow used for Oracle APEX development with
            APEXLang and VS Code.
          </p>

          <Link
            to="/blog"
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-cyan-400
              transition-colors
              hover:text-cyan-300
            "
          >
            <ArrowLeft size={16} />

            Back to all articles
          </Link>

        </footer>

      </div>

    </article>
  );
}

export default BlogArticle;