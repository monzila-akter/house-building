import React from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { BsShare, BsHeart, BsImage } from 'react-icons/bs';

const PropertiesSection = () => {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Real Luxury Family House Villa",
      location: "Est St. 77 - Central Park South, Uttara",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bedrooms: 3,
      bathrooms: 3,
      size: "3000 sq ft",
      price: "$50,000",
      image: "https://i.ibb.co/bR51mP5y/images-34.jpg" 
    },
    {
      id: 2,
      title: "Real Luxury Family House Villa",
      location: "Est St. 77 - Central Park South, Uttara",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bedrooms: 3,
      bathrooms: 3,
      size: "3000 sq ft",
      price: "$50,000",
      image: "https://i.ibb.co/PGCtCSpn/hq720-1.jpg"
    },
    {
      id: 3,
      title: "Real Luxury Family House Villa",
      location: "Est St. 77 - Central Park South, Uttara",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bedrooms: 3,
      bathrooms: 3,
      size: "3000 sq ft",
      price: "$50,000",
      image: "https://i.ibb.co/N61K2xgT/mansion.png"
    },
    {
      id: 4,
      title: "Real Luxury Family House Villa",
      location: "Est St. 77 - Central Park South, Uttara",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bedrooms: 3,
      bathrooms: 3,
      size: "3000 sq ft",
      price: "$50,000",
      image: "https://i.ibb.co/jZ43PJR6/images-35.jpg"
    }
  ];

  return (
    <section className=" px-4 mb-10 md:mb-24">
      <div className="w-11/12 mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Listed Properties</h2>
          <div className="w-24 h-1 bg-[#FF6700] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus dui morbi mattis porta nulla. Massa, magna at nisi
            nunc. Et lacus dui morbi mattis porta nulla. Massa, magna at nisi nunc.
          </p>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
              {/* Property Image */}
              <div className=" w-full md:w-2/5 h-64 md:h-auto">
              <img src={property.image} className='object-cover h-full w-full' alt="" />
              </div>

              {/* Property Details */}
              <div className="p-4 w-full md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <BiMap className="mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    {property.description}
                  </p>
                </div>

                {/* Property Features */}
                <div className="mt-4">
                  <div className="flex border-b border-gray-200 py-3">
                    <div className="w-1/3 flex items-center justify-center border-r border-gray-200">
                      <div className="text-center">
                        <div className="text-[#FF6700] font-bold">{property.bedrooms}</div>
                        <div className="text-gray-500 text-xs flex items-center justify-center">
                          <FaBed className="mr-1" />
                          <span>Bedroom</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center border-r border-gray-200">
                      <div className="text-center">
                        <div className="text-[#FF6700] font-bold">{property.bathrooms}</div>
                        <div className="text-gray-500 text-xs flex items-center justify-center">
                          <FaBath className="mr-1" />
                          <span>Bathroom</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-[#FF6700] font-bold">{property.size.split(' ')[0]}</div>
                        <div className="text-gray-500 text-xs flex items-center justify-center">
                          <FaRulerCombined className="mr-1" />
                          <span>Size</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <div className="text-[#FF6700] font-bold text-xl">{property.price}</div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                      <BsShare className="text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                      <BsHeart className="text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                      <BsImage className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="bg-[#FF6700] hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition flex items-center justify-center mx-auto">
            <span className="mr-2">+</span> View All List
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;