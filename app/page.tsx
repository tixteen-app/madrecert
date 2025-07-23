import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ClientLogosSection } from './components/ClientLogosSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

export default function App() { 
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ClientLogosSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}