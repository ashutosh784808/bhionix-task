const Navbar = () => {
  const navLinks = [
    "About Us", "Schools", "Programs", "Admissions", 
    "Campus Life", "TBI-Hatch", "International"
  ];

  return (
    /* Transparent background so #0F1624 shows through everywhere */
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Badge */}
        <div className="bg-white px-4 py-2 rounded-lg shadow-md">
          <img 
            src="/assets/hero1.png" 
            alt="logo" 
            className="h-9 w-auto object-contain" 
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center bg-[#1A2232]/80 backdrop-blur-md border border-white/5 rounded-full px-8 py-3 gap-8 shadow-xl">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white text-[13px] font-medium transition-colors">
              {link}
            </a>
          ))}
          <button className="bg-[#E21D26] hover:bg-red-700 text-white px-10 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-red-600/20 active:scale-95">
          Apply Now
        </button>
        </div>

        {/* Pill-shaped Button */}
        
      </div>
    </nav>
  );
};

export default Navbar;