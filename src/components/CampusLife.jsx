const CampusLife = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-20 text-[#0A0E17]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-16 space-y-4 max-w-2xl">
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Life at Bennett
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Beyond academics, our campus is a vibrant ecosystem of culture, sports, and creativity.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[700px]">
          
          {/* Left Large Card: Featured Event */}
          <div className="md:col-span-6 lg:col-span-6 relative rounded-[2.5rem] overflow-hidden group shadow-2xl">
            <img 
              src="/assets/Annual Cultural Test.png" 
              alt="Cultural Fest" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/80 to-transparent text-white">
              <span className="inline-block bg-[#E21D26] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md mb-4">
                Featured Event
              </span>
              <h3 className="text-3xl font-bold leading-tight max-w-md">
                Uphoria 2024: The Annual Cultural Fest
              </h3>
            </div>
          </div>

          {/* Middle Column: Vertical Stack */}
          <div className="md:col-span-6 lg:col-span-3 grid grid-rows-2 gap-6">
            {/* Convocation Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden group shadow-xl">
              <img 
                src="/assets/convocation.png" 
                alt="Convocation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <p className="absolute bottom-8 left-8 text-white font-bold text-lg tracking-tight">Convocation</p>
            </div>
            
            {/* View Full Gallery - Action Card */}
            <div className="bg-[#0A0E17] rounded-[2.5rem] flex flex-col items-center justify-center text-center p-10 group cursor-pointer hover:bg-[#111827] transition-colors shadow-xl">
              <div className="mb-6 text-gray-400 group-hover:text-[#E21D26] transition-colors">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
              <h4 className="text-white text-xl font-bold mb-2">View Full Gallery</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">350+ Photos</p>
            </div>
          </div>

          {/* Right Column: Tall Image Card */}
          <div className="md:col-span-12 lg:col-span-3 relative rounded-[2.5rem] overflow-hidden group shadow-xl">
            <img 
              src="/assets/campus.png" 
              alt="Campus" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/90 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Advanced Labs</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                State-of-the-art infrastructure for practical learning.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusLife;

