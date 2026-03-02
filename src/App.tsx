import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { FaithValues } from './components/FaithValues';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Certifications />
          <Projects />
          <Skills />
          <Languages />
          <FaithValues />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;