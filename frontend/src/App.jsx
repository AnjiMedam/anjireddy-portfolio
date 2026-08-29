import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Apex from "./pages/Apex";

import BlogArticle from "./pages/BlogArticle";

function App() {
  return (
    <BrowserRouter>

      <div className="flex min-h-screen bg-slate-950 text-white">

        <Sidebar />

        <MainLayout>

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/blog" element={<Blog />} />

            {/* Dynamic article route */}
            <Route path="/blog/:slug" element={<BlogArticle />}/>

            <Route path="/contact" element={<Contact />} />

            <Route path="/apex" element={<Apex />} />

          </Routes>

        </MainLayout>

      </div>

    </BrowserRouter>
  );
}

export default App;