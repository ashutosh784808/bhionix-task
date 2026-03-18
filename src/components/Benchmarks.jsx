const Benchmarks = () => {
  const stats = [
    {
      value: "₹ 1.2 Cr",
      label: "Highest Package",
      subLabel: "International Offer",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      isPrimary: true,
    },
    {
      value: "₹ 21.5 LPA",
      label: "Average Package",
      subLabel: "MBA Program",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      value: "₹ 20.17 LPA",
      label: "Average Package",
      subLabel: "B.Tech CSE",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      value: "₹ 45.5 LPA",
      label: "Top 10% Avg",
      subLabel: "Engineering",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#0A0E17] py-28 px-6 lg:px-20 text-white relative overflow-hidden">
      {/* Background radial glow to match the image atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10 text-center">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tight">
            Setting New <span className="text-[#E21D26] text-4xl ">Benchmarks</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Our commitment to excellence is reflected in the success of our students. Year after year, Bennett University scholars secure top-tier positions at global conglomerates.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative p-10 flex flex-col items-start text-left transition-all duration-500 group hover:-translate-y-2 rounded-[2rem] overflow-hidden ${
                stat.isPrimary
                  ? "bg-[#E21D26] shadow-[0_20px_40px_-10px_rgba(226,29,38,0.4)]"
                  : "bg-[#111827]/40 border border-white/5 backdrop-blur-sm"
              }`}
            >
              {/* Icon Container */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-10 transition-colors ${
                  stat.isPrimary ? "bg-white/20" : "bg-white/5 text-[#E21D26]"
                }`}
              >
                {stat.icon}
              </div>

              {/* Package Value */}
              <div className="text-4xl font-black mb-3 tracking-tighter">
                {stat.value}
              </div>

              {/* Labels */}
              <div className="space-y-1">
                <p className={`text-sm font-bold uppercase tracking-wide ${stat.isPrimary ? "text-white/90" : "text-gray-300"}`}>
                  {stat.label}
                </p>
                <p className={`text-xs font-medium uppercase tracking-widest ${stat.isPrimary ? "text-white/60" : "text-gray-500"}`}>
                  {stat.subLabel}
                </p>
              </div>

              {/* Subtle hover overlay for non-primary cards */}
              {!stat.isPrimary && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benchmarks;