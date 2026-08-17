import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { ProjectsSection } from './components/Projects/ProjectsSection';

export function App() {
  return (
    <>
      <Navbar activeSection="home" />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
    </>
  );
}
