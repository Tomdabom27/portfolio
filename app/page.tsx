import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const maxW: React.CSSProperties = {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 40px",
  };

  return (
    <>
      <Nav />
      <main>
        <div style={maxW}>
          <Hero />
        </div>
        <Stats />
        <div style={maxW}>
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
