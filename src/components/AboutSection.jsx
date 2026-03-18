const AboutSection = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-20 text-[#0A0E17]">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-blue-100 bg-blue-50 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            About Us
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black leading-tight">
            A Legacy of <br />
            <span className="text-[#E21D26] text-3xl relative inline-block">
              Excellence.
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#E21D26]/10 -z-10"></span>
            </span>
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Bennett University, <span className="font-bold text-[#0A0E17]">established by The Times Group</span>, is more than just an educational institution; it is a hub of innovation, research, and holistic development.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4">
            <FeatureItem text="Research-driven Curriculum" />
            <FeatureItem text="Global University Tie-ups" />
            <FeatureItem text="Strong Industry Connect" />
            <FeatureItem text="Entrepreneurship Focus" />
          </div>
            <hr className="font-grey" />
          <div className="flex gap-16 pt-8 border-t border-gray-100">
            <div>
              <div className="text-4xl font-black">60+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Global Partners</div>
            </div>
            <div>
              <div className="text-4xl font-black">30+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Hi-Tech Labs</div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT - IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          {/* Top Left Image */}
          <div className="rounded-[2rem] overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
            <img src="/assets/classroom.png" alt="Classroom" className="w-full h-full object-cover" />
          </div>

          {/* Top Right - Red Card */}
          <div className="bg-[#E21D26] rounded-[2rem] p-8 text-white flex flex-col justify-center shadow-xl shadow-red-500/20">
            <div className="text-5xl font-black mb-4">#1</div>
            <p className="text-sm font-medium leading-relaxed opacity-90">
              Ranked among top emerging universities in India.
            </p>
          </div>

          {/* Bottom Left - Quote Card */}
          <div className="bg-[#0A0E17] rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-xl">
            <div className="text-[#E21D26] text-3xl">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
            <p className="italic text-sm font-light leading-relaxed">
              "Bennett gave me the wings to fly and the roots to stay grounded."
            </p>
          </div>

          {/* Bottom Right - Library Image */}
          
          <div className="rounded-[2rem] overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
            <img src="/assets/library.png" alt="Library" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-3 group">
    <div className="w-5 h-5 rounded-full border-2 border-[#E21D26] flex items-center justify-center p-1 group-hover:bg-[#E21D26] transition-colors">
      <svg className="text-[#E21D26] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M5 13l4 4L19 7"></path></svg>
    </div>
    <span className="text-sm font-bold text-gray-700">{text}</span>
  </div>
);

export default AboutSection;




// const AboutSection = () => {
//   return (
//     /* w-full ensures the white background spans the entire screen width */
//     <section className="w-full bg-white py-24 px-6 lg:px-20 text-[#0A0E17]">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="space-y-8 text-left"> {/* Added text-left to fix alignment */}
//           <div className="inline-block px-4 py-1 rounded-full border border-blue-100 bg-blue-50 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
//             About Us
//           </div>
          
//           <h2 className="text-5xl lg:text-6xl font-black leading-tight text-[#0A0E17]">
//             A Legacy of <br />
//             <span className="text-[#E21D26] relative inline-block">
//               Excellence.
//               <span className="absolute bottom-2 left-0 w-full h-3 bg-[#E21D26]/10 -z-10"></span>
//             </span>
//           </h2>

//           <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
//             Bennett University, <span className="font-bold text-[#0A0E17]">established by The Times Group</span>, is more than just an educational institution; it is a hub of innovation, research, and holistic development.
//           </p>

//           {/* Features Grid */}
//           {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4">
//             <FeatureItem text="Research-driven Curriculum" />
//             <FeatureItem text="Global University Tie-ups" />
//             <FeatureItem text="Strong Industry Connect" />
//             <FeatureItem text="Entrepreneurship Focus" />
//           </div> */}

//           <div className="flex gap-16 pt-8 border-t border-gray-100">
//             <div className="text-left">
//               <div className="text-4xl font-black text-[#0A0E17]">60+</div>
//               <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Global Partners</div>
//             </div>
//             <div className="text-left">
//               <div className="text-4xl font-black text-[#0A0E17]">30+</div>
//               <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Hi-Tech Labs</div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT - IMAGE GRID */}
//         <div className="grid grid-cols-2 gap-4 h-[600px]">
//           <div className="rounded-[2rem] overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
//             <img src="/assets/classroom.png" alt="Classroom" className="w-full h-full object-cover" />
//           </div>

//           <div className="bg-[#E21D26] rounded-[2rem] p-8 text-white flex flex-col justify-center shadow-xl shadow-red-500/20">
//             <div className="text-5xl font-black mb-4">#1</div>
//             <p className="text-sm font-medium leading-relaxed opacity-90">
//               Ranked among top emerging universities in India.
//             </p>
//           </div>

//           <div className="bg-[#0A0E17] rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-xl">
//             <div className="text-[#E21D26] text-3xl">
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
//             </div>
//             <p className="italic text-sm font-light leading-relaxed">
//               "Bennett gave me the wings to fly and the roots to stay grounded."
//             </p>
//           </div>

//           <div className="rounded-[2rem] overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
//             <img src="/assets/library.png" alt="Library" className="w-full h-full object-cover" />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;