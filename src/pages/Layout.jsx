import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import Stack from "./Stack";
import Timeline from "@/components/Timeline";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <main className="space-y-m">
      <section className="hero min-h-screen overflow-hidden bg-linear-to-t from-purple-800/30 via-#0B0909 to-#000 flex flex-col items-center">
        <Nav />
        <Hero />
      </section>
      <Stack />
      {/* <Timeline /> */}
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Layout;
