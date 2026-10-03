import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { AboutHero } from '../components/About/AboutHero';
import { AboutInspirations } from '../components/About/AboutInspirations';
import { AboutQuote } from '../components/About/AboutQuote';
import { AboutExperience } from '../components/About/AboutExperience';
import { AboutThinking } from '../components/About/AboutThinking';
import { AboutSkills } from '../components/About/AboutSkills';
import { AboutAvailability } from '../components/About/AboutAvailability';
import '../components/About/AboutPage.css';

export function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <AboutHero />
        <AboutInspirations />
        <AboutQuote />
        <AboutExperience />
        <AboutThinking />
        <AboutSkills />
        <AboutAvailability />
      </main>
      <Footer />
    </>
  );
}
