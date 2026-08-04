import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Footer from "@/app/components/Footer";
import Projects from "@/app/components/Projects";
import Sidebar from "@/app/components/Sidebar";
import Spotlight from "@/app/components/Spotlight";
import TardisButton from "@/app/components/TardisButton";
import Writing from "@/app/components/Writing";

export default function Home() {
  return (
    <Spotlight>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-yellow-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0 focus-visible:text-slate-900"
        >
          Skip to Content
        </a>

        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main
            id="content"
            className="pt-24 lg:w-[52%] lg:py-24 flex flex-col gap-12"
          >
            <About />
            <Experience />
            <Projects />
            <Writing />
            <Footer />
          </main>

          {/* Anchors to the `relative` page wrapper - bottom-right of the viewport */}
          <TardisButton />
        </div>
      </div>
    </Spotlight>
  );
}
