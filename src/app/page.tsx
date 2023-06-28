import AboutSection from "@/compnents/AboutSection";
import Footer from "@/compnents/Footer";
import HeroSection from "@/compnents/HeroSection";
import ProjectsSection from "@/compnents/ProjectSection";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}
