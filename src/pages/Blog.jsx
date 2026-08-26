import { useState } from "react";

import {
  ArrowUpRight,
  Clock3,
  FileText,
  Search,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

import { blogPosts } from "../data/portfolioData";

function Blog() {
  // Stores the text entered by the user in the search box.
  const [searchText, setSearchText] = useState("");

  // Filters articles whenever the search text changes.
  const filteredPosts = blogPosts.filter((post) => {
    const searchValue = searchText.toLowerCase().trim();

    return (
      post.title.toLowerCase().includes(searchValue) ||
      post.category.toLowerCase().includes(searchValue) ||
      post.description.toLowerCase().includes(searchValue)
    );
  });

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        px-6
        py-12
        text-white
        lg:px-10
      "
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}blog-page-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Transparent overlay to maintain readability */}
      <div className="pointer-events-none absolute inset-0 bg-slate-950/20" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Blog page introduction */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Blog
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technical Articles
              <span className="text-cyan-400">
                {" "}& Tutorials.
              </span>
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Practical guides and technical notes based on the
              technologies and development workflows I work with.
            </p>

          </div>

          {/* Article search */}
          <div className="relative w-full lg:w-80">

            <Search
              size={18}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search articles..."
              className="
                w-full
                rounded-xl
                border
                border-white/15
                bg-slate-900/20
                py-3
                pl-11
                pr-11
                text-sm
                text-white
                outline-none
                placeholder:text-slate-400
                backdrop-blur-md
                transition-all
                focus:border-cyan-400/40
                focus:bg-slate-900/25
              "
            />

            {/* Clear search button */}
            {searchText && (
              <button
                type="button"
                onClick={() => setSearchText("")}
                aria-label="Clear search"
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-7
                  w-7
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-md
                  text-slate-400
                  transition-colors
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <X size={16} />
              </button>
            )}

          </div>

        </div>

        {/* Blog article cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {filteredPosts.map((post) => (

            <article
              key={post.slug}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-slate-900/20
                shadow-2xl
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-slate-900/25
              "
            >

              {/* Article thumbnail */}
              <div className="aspect-video overflow-hidden bg-slate-950/20">

                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Article summary */}
              <div className="p-5">

                {/* Category and reading time */}
                <div className="flex items-center justify-between gap-3">

                  <span
                    className="
                      rounded-md
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      px-2.5
                      py-1
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-cyan-400
                      backdrop-blur-sm
                    "
                  >
                    {post.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">

                    <Clock3 size={13} />

                    <span>
                      {post.readTime}
                    </span>

                  </div>

                </div>

                {/* Article title */}
                <h2 className="mt-4 line-clamp-2 text-lg font-semibold leading-6 text-white">
                  {post.title}
                </h2>

                {/* Article description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
                  {post.description}
                </p>

                {/* Article footer */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                  <div className="flex items-center gap-2 text-xs text-slate-400">

                    <FileText size={14} />

                    <span>
                      {post.date}
                    </span>

                  </div>

                  {/* Open the full article */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-cyan-400
                      transition-colors
                      hover:text-cyan-300
                    "
                  >
                    Read Article

                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* Message shown when the search has no matching articles */}
        {filteredPosts.length === 0 && (
          <div className="mt-12 rounded-xl border border-white/15 bg-slate-900/20 p-10 text-center backdrop-blur-md">

            <p className="text-slate-300">
              No articles found.
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Try searching with another keyword.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default Blog;