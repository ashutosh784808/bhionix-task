import EnquiryForm from './EnquiryForm';
import Stat from './Stat';

const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-university-red/20 bg-university-red/5 text-[10px] font-black tracking-[0.2em] uppercase text-university-red">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-university-red"></span>
          </span>
          Admissions Open 2025
        </div>

        <h1 className="text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
           Create Your <br />
           <span className="font-serif italic font-light text-[#E21D26]">Legacy</span>
         </h1>

        <p className="max-w-md text-xl text-gray-400 font-light leading-relaxed border-l-2 border-university-red/30 pl-6">
          Bennett University offers a trans-disciplinary curriculum designed to shape the leaders of tomorrow.
        </p>

        <div className="pt-10 flex flex-wrap gap-12 border-t border-white/5">
          <Stat icon="🎓" value="#1" label="Emerging University" />
          <Stat icon="📊" value="100%" label="Placement Record" />
          <Stat icon="🌐" value="68" label="Acre Global Campus" />
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-university-red/20 to-blue-500/10 rounded-[40px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
        <EnquiryForm />
      </div>
    </section>
  );
};

export default HeroSection;




