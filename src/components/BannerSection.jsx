import { useState } from 'react';
import { ChevronDown, MapPin, Search } from 'lucide-react';

const BannerSection = () => {

  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  return (
    <section className="relative w-full mb-10 md:mb-20">
      {/* Background image with overlay */}
      <div 
        className="w-full bg-cover bg-center h-96 md:h-screen md:max-h-[600px]"
        style={{
          backgroundImage: "url('https://i.ibb.co/b58psLB6/e7d745cda4e178e5dcb9bf751eb39bbd.jpg')",
          backgroundColor: "rgba(75, 75, 75, 0.9)",
          backgroundBlendMode: "overlay"
        }}
      >
    
        
        {/* Content container */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Create Lasting Wealth Through<br />
            Real Villa
          </h1>
          
          {/* Subheading */}
          <p className="text-gray-200 max-w-xl mx-auto mb-8 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est donec elit,
            ullamcorper mauris, eget turpis justo, viverra.Egestas vitae
            nunc integer nec ultrices sed tincidunt sit sit.
          </p>
          
          {/* "Knock Us" button */}
          <button className="bg-[#FF6700] hover:bg-orange-600 text-white font-medium px-8 py-3 rounded mb-12 transition-colors">
            Knock Us
          </button>
        </div>
      </div>
      
      {/* Search form container */}
      <div className="container mx-auto px-4 -mt-16 md:-mt-14 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Property Types Dropdown */}
            <div className="relative">
              <div className="border border-gray-300 rounded-md px-4 py-3 flex justify-between items-center cursor-pointer hover:border-orange-500">
                <span className={`${propertyType ? 'text-gray-800' : 'text-gray-500'}`}>
                  {propertyType || 'Property Types'}
                </span>
                <ChevronDown className="h-5 w-5 text-[#FF6700]" />
              </div>
            </div>
            
            {/* Location Input */}
            <div className="relative">
              <div className="border border-gray-300 rounded-md px-4 py-3 flex justify-between items-center cursor-pointer hover:border-orange-500">
                <span className={`${location ? 'text-gray-800' : 'text-gray-500'}`}>
                  {location || 'Location'}
                </span>
                <MapPin className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            
            {/* Price Dropdown */}
            <div className="relative">
              <div className="border border-gray-300 rounded-md px-4 py-3 flex justify-between items-center cursor-pointer hover:border-orange-500">
                <span className={`${price ? 'text-gray-800' : 'text-gray-500'}`}>
                  {price || 'Price'}
                </span>
                <ChevronDown className="h-5 w-5 text-[#FF6700]" />
              </div>
            </div>
            
            {/* Search Button */}
            <button className="bg-[#FF6700] hover:bg-orange-600 text-white rounded-md px-4 py-3 font-medium transition-colors flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;