import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Lumina Photography. All rights reserved.</p>
      </footer>
    </main>
  );
}
