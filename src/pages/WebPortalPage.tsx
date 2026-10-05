import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { WebPortalHero } from '../components/WebPortal/WebPortalHero';
import {
  WebPortalBand,
  WebPortalContext,
  WebPortalProblem,
  WebPortalScope,
} from '../components/WebPortal/WebPortalContext';
import {
  WebPortalResearch,
  WebPortalRole,
} from '../components/WebPortal/WebPortalResearch';
import {
  WebPortalDesign,
  WebPortalProcess,
  WebPortalWorkshop,
} from '../components/WebPortal/WebPortalProcess';
import {
  WebPortalEnd,
  WebPortalInProgress,
  WebPortalTakeaways,
} from '../components/WebPortal/WebPortalTakeaways';
import '../components/WebPortal/WebPortal.css';

export function WebPortalPage() {
  return (
    <>
      <Navbar />
      <main className="webportal-page page-start">
        <WebPortalHero />
        <WebPortalContext />
        <WebPortalBand />
        <WebPortalProblem />
        <WebPortalScope />
        <WebPortalResearch />
        <WebPortalRole />
        <WebPortalProcess />
        <WebPortalWorkshop />
        <WebPortalDesign />
        <WebPortalTakeaways />
        <WebPortalInProgress />
        <WebPortalEnd />
      </main>
      <Footer />
    </>
  );
}
