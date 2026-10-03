import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { ProjectsSection } from '../components/Projects/ProjectsSection';
import { AboutSection } from '../components/About/AboutSection';
import { Footer } from '../components/Footer/Footer';

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
