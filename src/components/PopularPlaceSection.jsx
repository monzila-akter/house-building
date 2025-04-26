import { FaMapMarkerAlt } from 'react-icons/fa';

const PopularPlaceSection = () => {
  // Sample location data with images
  const locations = [
    {
      id: 1,
      name: "Dhaka",
      properties: 50,
      image: "https://i.ibb.co/nNdSfdjG/istockphoto-1210768445-612x612.jpg"
    },
    {
      id: 2,
      name: "Sylhet",
      properties: 50,
      image: "https://i.ibb.co/bgbgdr4S/Theme-the-15-best-sylhet-tours-attractions-in-bangladesh.webp"
    },
    {
      id: 3,
      name: "Barishal",
      properties: 50,
      image: "https://i.ibb.co/rKfyyDrG/Floating-Guava-Market-Atghoria.jpg"
    },
    {
      id: 4,
      name: "Chittagong",
      properties: 50,
      image: "https://i.ibb.co/1JMRDJHR/Aerial-view-of-Chittagong-Port.webp"
    }
  ];

  return (
    <section className="mb-10 md:mb-24 bg-gray-100">
      <div className="w-11/12 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Most Popular Places</h2>
          <div className="w-24 h-1 bg-[#FF6700] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus dui morbi mattis porta nulla. Massa, magna at nisl nunc. Et lacus dui morbi mattis porta nulla. Massa, magna at nisl nunc.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Dhaka - Large Card (Left) */}
          <div className="relative rounded-lg overflow-hidden h-96 md:h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-gray-500"
              style={{ backgroundImage: `url(${locations[0].image})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6">
              <div className="bg-[#FF6700] text-white p-3 rounded-md inline-flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <div>
                  <h3 className="font-bold text-lg">{locations[0].name}</h3>
                  <p className="text-sm">{locations[0].properties} Properties</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column Stack */}
          <div className="grid grid-cols-1 gap-4">
            {/* Top Row - 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sylhet */}
              <div className="relative rounded-lg overflow-hidden h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-gray-500"
                  style={{ backgroundImage: `url(${locations[1].image})` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-[#FF6700] text-white p-3 rounded-md inline-flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <div>
                      <h3 className="font-bold text-lg">{locations[1].name}</h3>
                      <p className="text-sm">{locations[1].properties} Properties</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Barishal */}
              <div className="relative rounded-lg overflow-hidden h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-gray-500"
                  style={{ backgroundImage: `url(${locations[2].image})` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-[#FF6700] text-white p-3 rounded-md inline-flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <div>
                      <h3 className="font-bold text-lg">{locations[2].name}</h3>
                      <p className="text-sm">{locations[2].properties} Properties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Row - Large Card */}
            <div className="relative rounded-lg overflow-hidden h-48">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-gray-500"
                style={{ backgroundImage: `url(${locations[3].image})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-[#FF6700] text-white p-3 rounded-md inline-flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <div>
                    <h3 className="font-bold text-lg">{locations[3].name}</h3>
                    <p className="text-sm">{locations[3].properties} Properties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularPlaceSection;