const AdmissionProcess = () => {
  const steps = [
    {
      title: "Submit Application",
      description: "Complete your profile and upload documents online.",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgColor: "bg-blue-50",
    },
    {
      title: "Assessment",
      description: "Take the BU Entrance Test or submit valid national scores.",
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      bgColor: "bg-purple-50",
    },
    {
      title: "Personal Interview",
      description: "Interact with our faculty and secure your offer.",
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-20 text-[#0A0E17]">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-10">
          <div className="inline-block px-4 py-1 rounded-full border border-red-100 bg-red-50 text-[10px] font-bold text-[#E21D26] uppercase tracking-widest">
            Admission Process 2025
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Your Journey to <br />
            <span className="text-[#E21D26]">Success Begins Here</span>
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            We've simplified our admission process to help you focus on what matters most—your future. Applications are now open for the academic year 2025-26.
          </p>

          {/* Vertical Steps */}
          <div className="space-y-0 relative">
            {/* The vertical line connecting icons */}
            <div className="absolute left-7 top-10 bottom-10 w-[2px] bg-gray-100 -z-0"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-8 pb-10 last:pb-0 relative z-10 group">
                <div className={`w-14 h-14 shrink-0 rounded-2xl ${step.bgColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <div className="space-y-1 pt-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-[#E21D26] hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-red-500/30 transition-all active:scale-95">
            Apply Now
          </button>
        </div>

        {/* RIGHT CONTENT - OVERLAPPING IMAGE & CARD */}
        <div className="relative">
          {/* Main Graduation Image */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-0 aspect-[4/5] lg:aspect-auto lg:h-[650px]">
            <img 
              src="/assets/Girl.png" 
              alt="Students" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Scholarship Card */}
          <div className="absolute -bottom-10 -left-10 lg:-left-20 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] z-10 max-w-[400px] border border-gray-50 animate-bounce-slow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl">
                ✦
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Scholarships</p>
                <h4 className="text-3xl font-black text-[#0A0E17]">Up to 100%</h4>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Merit-based scholarships available for academic excellence in 12th Std, JEE, or SAT scores.
            </p>
          </div>

          {/* Calculator Floating Icon from image */}
          <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20 text-blue-600 border border-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;