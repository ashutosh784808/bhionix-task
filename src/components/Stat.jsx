const Stat = ({ icon, value, label }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-2xl text-red-500">{icon}</div>
      <div>
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-[7.5px] uppercase tracking-widest text-gray-500 font-bold max-w-[100px] leading-tight">
          {label}
        </div>
      </div>
    </div>
  );
};

export default Stat;