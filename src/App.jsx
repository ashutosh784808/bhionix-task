// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';
// import Benchmarks from './components/Benchmarks';
// import AdmissionProcess from './components/AdmissionProcess';
// import Testimonials from './components/Testimonials';
// import CampusLife from './components/CampusLife';
// import CampusExperience from './components/CampusExperience';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen selection:bg-[#E21D26] selection:text-white overflow-x-hidden font-sans">
      
//       {/* DARK THEME SECTIONS */}
//       <div className="bg-[#0A0E17] relative">
//         <Navbar />
//         <main className="container mx-auto px-6 lg:px-20 pt-32 pb-24">
//           <HeroSection />
//         </main>
//       </div>

//       {/* LIGHT THEME SECTIONS */}
//       <AboutSection />

//       {/* DARK THEME SECTIONS */}
//       <Benchmarks />

//       {/* LIGHT THEME SECTIONS */}
//       <AdmissionProcess />
//       <Testimonials />
//       <CampusLife />

//       {/* DARK THEME SECTIONS */}
//       <CampusExperience />

//       {/* FINAL TRANSITION & FOOTER */}
//       <Footer />

//     </div>
//   );
// }

// export default App;



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
    /* CRITICAL: bg-[#0F1624] is now on the root div. 
       This ensures 100% of the screen width and height is this exact color.
    */
    <div className="min-h-screen bg-[#0F1624] text-white font-sans selection:bg-[#E21D26] overflow-x-hidden antialiased">
      
      {/* We removed the dark side-overlays entirely. 
          This background covers the whole screen now.
      */}
      
      <Navbar />
      
      <main>
        {/* The content is centered with max-w-7xl, 
            but the background color (#0F1624) stays visible 
            all the way to the edges of the monitor. 
        */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-44 pb-24">
          <HeroSection />
        </div>

        {/* All other sections integrated here */}
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