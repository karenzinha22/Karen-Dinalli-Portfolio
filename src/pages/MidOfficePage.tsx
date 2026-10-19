import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { MidOfficeHero } from '../components/MidOffice/MidOfficeHero';
import {
  MidOfficeChallenge,
  MidOfficeGoals,
  MidOfficeOverview,
  MidOfficeQuestion,
  MidOfficeTeam,
} from '../components/MidOffice/MidOfficeContext';
import { MidOfficeProcess, MidOfficeScreens } from '../components/MidOffice/MidOfficeDesign';
import { MidOfficeFindings, MidOfficeResearch } from '../components/MidOffice/MidOfficeResearch';
import {
  MidOfficeDemo,
  MidOfficeEnd,
  MidOfficeFinal,
  MidOfficeReflection,
  MidOfficeStatus,
} from '../components/MidOffice/MidOfficeClose';
import '../components/WebPortal/WebPortal.css';
import '../components/MidOffice/MidOffice.css';

export function MidOfficePage() {
  return (
    <>
      <Navbar />
      <main className="midoffice-page page-start">
        <MidOfficeHero />
        <MidOfficeOverview />
        <MidOfficeChallenge />
        <MidOfficeQuestion />
        <MidOfficeGoals />
        <MidOfficeTeam />
        <MidOfficeResearch />
        <MidOfficeFindings />
        <MidOfficeProcess />
        <MidOfficeScreens />
        <MidOfficeDemo />
        <MidOfficeFinal />
        <MidOfficeStatus />
        <MidOfficeReflection />
        <MidOfficeEnd />
      </main>
      <Footer />
    </>
  );
}
