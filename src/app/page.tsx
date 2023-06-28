import AboutSection from "@/compnents/AboutSection";
import HeroSection from "@/compnents/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <AboutSection />
    </main>
  )
}
