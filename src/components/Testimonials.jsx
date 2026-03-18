const Testimonials = () => {
  const stories = [
    {
      name: "Aditya Raj",
      role: "Software Engineer",
      company: "Adobe",
      package: "₹ 1.2 Cr",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
    },
    {
      name: "Sneha Gupta",
      role: "Data Scientist",
      company: "Microsoft",
      package: "₹ 45 LPA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
    },
    {
      name: "Rohan Mehta",
      role: "Product Manager",
      company: "Google",
      package: "₹ 52 LPA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 px-6 lg:px-20 text-[#0A0E17]">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16 space-y-4">
          <p className="text-[#E21D26] font-black text-[31px] uppercase tracking-[0.3em]">
            Success Stories
          </p>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-13xl mx-auto">
            Where Ambition Meets <br /> Opportunity
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-left relative group hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-50"
            >
              {/* Quote Icon from image */}
              <div className="absolute top-10 right-10 text-[#F1F5F9]">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
                  <path d="M11.4 0C5.1 0 0 5.1 0 11.4v20.6h16V11.4H8c0-3.1 2.5-5.6 5.6-5.6V0h-2.2zm23 0c-6.3 0-11.4 5.1-11.4 11.4v20.6h16V11.4h-8c0-3.1 2.5-5.6 5.6-5.6V0h-2.2z" />
                </svg>
              </div>

              {/* Profile Image */}
              <div className="mb-8 relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-50"></div>
              </div>

              {/* Name & Role */}
              <div className="mb-10">
                <h3 className="text-2xl font-black tracking-tight mb-1">{story.name}</h3>
                <p className="text-gray-400 text-sm font-medium">{story.role}</p>
              </div>

              {/* Footer Info */}
              <div className="pt-8 border-t border-gray-50 flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-2">Company</p>
                  <p className="text-lg font-black text-blue-900 tracking-tight">{story.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-2">Package</p>
                  <div className="bg-red-50 text-[#E21D26] px-4 py-1.5 rounded-lg text-sm font-black">
                    {story.package}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-lg transition-all active:scale-95 group">
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-lg transition-all active:scale-95 group">
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



