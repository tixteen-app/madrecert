import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ClientLogosSection } from './components/ClientLogosSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import Services from './components/Service';

export default function App() { 
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <Services/>
        <WhyChooseUsSection />
        <ClientLogosSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}