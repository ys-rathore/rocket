import { Navigation } from './components/Navigation';
import { NewHero } from './components/NewHero';
import { AboutSection } from './components/AboutSection';
import { NewSkillsSection } from './components/NewSkillsSection';
import { ContactSection } from './components/ContactSection';
import { MeshBackground } from './components/MeshBackground';
import { Sun } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 z-0">
        <MeshBackground />
      </div>

      {/* Content above mesh */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <NewHero />
          <AboutSection />
          <NewSkillsSection />
          <ContactSection />
        </main>
        <footer className="border-t border-white/10 py-8 px-6">
          <div className="max-w-7xl mx-auto flex justify-center">
            <Sun className="w-6 h-6 text-yellow-400" />
          </div>
        </footer>
      </div>
    </div>
  );
}
