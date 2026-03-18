import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Benchmarks from './components/Benchmarks';
import AdmissionProcess from './components/AdmissionProcess';
import Testimonials from './components/Testimonials';
import CampusLife from './components/CampusLife';
import CampusExperience from './components/CampusExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F1624] text-white font-sans selection:bg-[#E21D26] overflow-x-hidden antialiased">

      
      <Navbar />
      
      <main>

        <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-44 pb-24">
          <HeroSection />
        </div>

        <AboutSection />
        <Benchmarks />
        <AdmissionProcess />
        <Testimonials />
        <CampusLife />
        <CampusExperience />
      </main>

      <Footer />
    </div>
  );
}

export default App;
