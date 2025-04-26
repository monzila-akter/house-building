import { BsGrid } from 'react-icons/bs';

const StatsSection = () => {
  return (
    <div className="w-full mb-10 md:mb-24 bg-gray-800 relative overflow-hidden">
      {/* Full Dot Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 flex flex-wrap justify-start content-start">
        {Array.from({ length: 1500 }).map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 m-1 rounded-full bg-gray-600"
            style={{
              flex: '0 0 auto'
            }}
          ></div>
        ))}
      </div>

      {/* Stats Container */}
      <div className="container mx-auto py-14 px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          
          {/* First Stat */}
          <div className="w-full md:w-1/3 py-4 md:py-0">
            <h2 className="text-[#FF6700] text-3xl md:text-4xl font-bold mb-4">$15.4M</h2>
            <p className="text-gray-300 uppercase text-sm tracking-wider">
              OWNED FROM<br />PROPERTIES TRANSACTIONS
            </p>
          </div>
          
          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden md:block h-24 w-1 bg-gray-400"></div>
          
          {/* Middle Stat */}
          <div className="w-full md:w-1/3 py-4 md:py-0">
            <h2 className="text-[#FF6700] text-3xl md:text-4xl font-bold mb-4">456K</h2>
            <p className="text-gray-300 uppercase text-sm tracking-wider">
              APARTMENTS SOLD<br />PROPERTIES TRANSACTIONS
            </p>
          </div>
          
          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden md:block h-24 w-1 bg-gray-400"></div>
          
          {/* Third Stat */}
          <div className="w-full md:w-1/3 py-4 md:py-0">
            <h2 className="text-[#FF6700] text-3xl md:text-4xl font-bold mb-4">$15.4M</h2>
            <p className="text-gray-300 uppercase text-sm tracking-wider">
              OWNED FROM<br />PROPERTIES TRANSACTIONS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;