import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Navbar from "./sections/Navabar";

export default function Home() {
  return (
    <div className="px-3 py-3 bg-[#2C2A2B]">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
    </div>
  );
}
