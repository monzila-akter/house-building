import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

// Sample property data (same as before)
const properties = [
  {
    id: 1,
    title: "Ample Apartment",
    subtitle: "At Last Floor",
    location: "Your Location is here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor varius in nisl quisque blandit mi. Et lorem vitae et amet.",
    price: "$50,000",
    beds: 3,
    baths: 3,
    sqft: "1400m",
    image: "https://i.ibb.co/PbFNmH1/439055356.jpg"
  },
  {
    id: 2,
    title: "Luxury Condo",
    subtitle: "Beach View",
    location: "Prime Downtown Location",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor varius in nisl quisque blandit mi. Et lorem vitae et amet.",
    price: "$75,000",
    beds: 2,
    baths: 2,
    sqft: "950m",
    image: "https://i.ibb.co/GQw9vBQL/images-36.jpg"
  },
  {
    id: 3,
    title: "Family House",
    subtitle: "With Garden",
    location: "Suburban Paradise",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor varius in nisl quisque blandit mi. Et lorem vitae et amet.",
    price: "$120,000",
    beds: 4,
    baths: 3,
    sqft: "2200m",
    image: "https://i.ibb.co/fGVspfC2/images-37.jpg"
  }
];

const DealsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + properties.length) % properties.length);
  };

  return (
    <div className="w-11/12 mx-auto px-4 mb-10 md:mb-24">
      {/* Heading Section (same as before) */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Best Deals</h2>
        <div className="w-20 h-1 bg-[#FF6700] mx-auto mt-3 mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus dui morbi mattis porta nulla. Massa, magna at nisl nunc. Et lacus dui morbi mattis porta nulla. Massa, magna at nisl nunc.
        </p>
      </div>

      {/* Carousel Section - Modified for background image */}
      <div 
        className="relative rounded-lg shadow-lg overflow-hidden min-h-[500px]"
        style={{
          backgroundImage: `url(${properties[activeIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Property Card - Now positioned over the background image */}
        <div className="relative z-10 h-full flex items-center p-4 md:p-8">
          <div className="bg-white rounded-lg shadow-md max-w-md mx-auto md:mx-0 md:ml-8 lg:ml-16 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">{properties[activeIndex].title}</h3>
              <h4 className="text-lg md:text-xl text-gray-700 mb-2">{properties[activeIndex].subtitle}</h4>
              
              <div className="flex items-center mb-4 text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <span>{properties[activeIndex].location}</span>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                {properties[activeIndex].description}
              </p>
              
              <div className="text-[#FF6700] text-2xl md:text-3xl font-bold mb-6">
                {properties[activeIndex].price}
              </div>
              
              <div className="flex justify-between mb-6">
                <div className="flex flex-col items-center">
                  <FaBed className="text-gray-500 mb-1" size={24} />
                  <div>
                    <span className="text-gray-700">Bed</span>
                    <span className="text-[#FF6700] font-bold text-lg ml-2">{properties[activeIndex].beds}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <FaBath className="text-gray-500 mb-1" size={24} />
                  <div>
                    <span className="text-gray-700">Bath</span>
                    <span className="text-[#FF6700] font-bold text-lg ml-2">{properties[activeIndex].baths}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <FaRulerCombined className="text-gray-500 mb-1" size={24} />
                  <div>
                    <span className="text-gray-700">Sqft</span>
                    <span className="text-[#FF6700] font-bold text-lg ml-2">{properties[activeIndex].sqft}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-[#0A7AA3] hover:bg-cyan-700 text-white text-center rounded-md transition-colors">
                Details
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons - Adjusted for new layout */}
        <div className="absolute right-4 top-4 flex space-x-2 z-10">
          <button 
            onClick={prevSlide}
            className="bg-white hover:bg-gray-100 text-gray-800 w-8 h-8 flex items-center justify-center rounded-md shadow-md"
          >
            &lt;
          </button>
          <button 
            onClick={nextSlide}
            className="bg-white hover:bg-gray-100 text-gray-800 w-8 h-8 flex items-center justify-center rounded-md shadow-md"
          >
            &gt;
          </button>
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {properties.map((_, index) => (
          <button 
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${index === activeIndex ? 'bg-[#FF6700]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DealsSection;