const Footer = () => {
  const logos = [
    "Google", "Microsoft", "Amazon", "Dell", "Adobe", "Intel", "Cisco",
    "IBM", "Infosys", "Wipro", "HCL", "TCS"
  ];

  return (
    <footer className="bg-white pt-24">
      {/* 1. Trusted By Section */}
      <div className="container mx-auto px-6 text-center mb-32">
        {/* Adjusted tracking and font weight to match image */}
        <p className="text-[#94A3B8] font-bold text-[16px] uppercase tracking-[0.4em] mb-24">
          Trusted By Industry Leaders
        </p>
        
        {/* Logo Cloud - Increased gap and adjusted opacity for the 'ghost' look */}
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 max-w-7xl mx-auto opacity-25 grayscale">
          {logos.map((logo) => (
            <span 
              key={logo} 
              className="text-3xl lg:text-5xl font-bold tracking-tighter text-[#052d6e] hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Main Dark Footer */}
      <div className="bg-[#05070A] rounded-t-[5rem] px-6 pt-24 pb-12 text-center relative overflow-hidden">
        
        {/* Logo Badge Overlay */}
        <div className="inline-flex items-center bg-white px-8 py-4 rounded-2xl mb-12 shadow-2xl">
          <img 
            src="/assets/hero1.png" 
            alt="Bennett University Logo" 
            className="h-12 w-auto" 
          />
        </div>

        {/* Mission Statement - Centered via mx-auto and text-center */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            Extending the legacy of The Times Group, we are creating leaders of the future through research-driven education.
          </p>
        </div>

        {/* Divider Line - Positioned between Mission and Copyright */}
        <div className="max-w-5xl mx-auto h-[1px] bg-white/10 mb-10"></div>

        {/* Copyright */}
        <p className="text-gray-600 text-[11px] uppercase tracking-[0.3em] font-bold">
          © 2026 Bennett University. A Times Group Initiative.
        </p>
      </div>
    </footer>
  );
};

export default Footer;