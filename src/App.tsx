import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';

export function App() {
  return (
    <>
      <Navbar activeSection="home" />
      <main>
        <Hero />
      </main>
    </>
  );
}
