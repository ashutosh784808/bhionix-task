const EnquiryForm = () => {
  return (
    <div className="bg-[#151B28]/60 border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden backdrop-blur-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-1">Enquire Now</h2>
        <p className="text-gray-400 text-sm font-medium">Take the first step towards excellence.</p>
      </div>
      
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full bg-[#1A2232] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full bg-[#1A2232] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Mobile</label>
            <input type="tel" placeholder="+91 98765..." className="w-full bg-[#1A2232] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Program</label>
          <select className="w-full bg-[#1A2232] border border-white/10 rounded-xl px-4 py-3 focus:outline-none text-gray-400 appearance-none cursor-pointer">
          </select>
        </div>

        {/* Circular/Pill Button */}
        <button className="w-full bg-[#E21D26] hover:bg-red-700 text-white font-bold py-4 rounded-full transition-all shadow-lg shadow-red-600/30 active:scale-95">
          Register Interest →
        </button>
      </form>
      <p className="pt-3 mt-6 text-[9px] text-gray-500 text-center leading-relaxed">
            By submitting this form, you agree to receive communications from Bennett University.
       </p>
    </div>
  );
};

export default EnquiryForm;