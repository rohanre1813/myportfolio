import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar'; 
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { ScrollRails } from './components/ui/ScrollRails';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative">
        <ScrollRails />
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
