const CampusExperience = () => {
  return (
    <section className="bg-[#0A0E17] py-28 px-6 lg:px-20 text-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-4 space-y-8">
          <div className="inline-flex items-center gap-2 text-[#E21D26] font-bold text-[10px] uppercase tracking-[0.3em]">
            <span className="w-2 h-2 bg-[#E21D26] rounded-full animate-pulse"></span>
            Virtual Campus Experience
          </div>

          <h2 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            Step Inside <br />
            <span className="text-[#E21D26]">Bennett.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            Can't make it to Greater Noida? Explore our 68-acre hi-tech campus, from the automated library to the sports complex, right from your device.
          </p>

          <div className="flex flex-col gap-4 w-fit mt-5">
            <button className="group bg-white text-[#0A0E17] pl-8 pr-1.5 py-1.5 mx-2 rounded-full font-black text-sm flex items-center justify-between gap-10 hover:bg-gray-100 transition-all active:scale-95 shadow-2xl">
              <span className="tracking-tight uppercase">Start 360° Tour</span>
              <div className="bg-[#0F1624] text-white w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>

            <button className="group border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-4 transition-all">
              <span>Schedule Campus Visit</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="pt-10 flex gap-16 border-t border-white/5">
            <div>
              <div className="text-4xl font-black">68</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Acres</div>
            </div>
            <div>
              <div className="text-4xl font-black">16+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Labs</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 gap-6">
          
          <div className="col-span-2 relative rounded-[2.5rem] overflow-hidden group h-64 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000" 
              alt="Sports Complex" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-[#E21D26] text-[15px] font-black uppercase tracking-widest mb-2">Recreation</p>
              <h3 className="text-2xl font-bold">World-Class Sports Complex</h3>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden group h-80 shadow-xl">
            <img 
              src="/assets/Building.png" 
              alt="Student Housing" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-[#E21D26] text-[15px] font-black uppercase tracking-widest mb-2">Residential</p>
              <h3 className="text-xl font-bold leading-tight">Modern Student Housing</h3>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden group h-80 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=500" 
              alt="Cafeteria" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-[#E21D26] text-[15px] font-black uppercase tracking-widest mb-2">Lifestyle</p>
              <h3 className="text-xl font-bold leading-tight">Multi-Cuisine Cafeteria</h3>
            </div>
          </div>

          <div className="col-span-2 relative rounded-[2.5rem] overflow-hidden group h-64 shadow-2xl">
            <img 
              src="/assets/house.png" 
              alt="Auditorium" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-[#E21D26] text-[15px] font-black uppercase tracking-widest mb-2">Academic</p>
              <h3 className="text-2xl font-bold">Grand Auditorium</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusExperience;
