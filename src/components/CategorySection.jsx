import React from 'react';

const CategorySection = () => {
  // Category data
  const categories = [
    {
      title: "Residential",
      count: 100,
      icon: "building-residential",
      color: "bg-[#FF6700]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod purus rhoncus senien bibendum. Aliquet enim purus ridiculus amet eiam."
    },
    {
      title: "Commercial",
      count: 100,
      icon: "building-commercial",
      color: "bg-[#0A7AA3]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod purus rhoncus senien bibendum. Aliquet enim purus ridiculus amet eiam."
    },
    {
      title: "Industrial",
      count: 100,
      icon: "building-industrial",
      color: "bg-[#0A7AA3]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod purus rhoncus senien bibendum. Aliquet enim purus ridiculus amet eiam."
    },
    {
      title: "Land",
      count: 100,
      icon: "building-land",
      color: "bg-[#0A7AA3]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod purus rhoncus senien bibendum. Aliquet enim purus ridiculus amet eiam."
    },
    {
      title: "Apartment",
      count: 100,
      icon: "building-apartment",
      color: "bg-[#0A7AA3]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod purus rhoncus senien bibendum. Aliquet enim purus ridiculus amet eiam."
    },
    {
      title: "Floor Area",
      count: 100,
      icon: "building-floor",
      color: "bg-[#0A7AA3]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod purus rhoncus senien bibendum. Aliquet enim purus ridiculus amet eiam."
    }
  ];

  // Function to render the appropriate icon based on the category
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "building-residential":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <line x1="9" y1="22" x2="9" y2="12"></line>
            <line x1="15" y1="22" x2="15" y2="12"></line>
            <rect x="7" y="6" width="4" height="4"></rect>
            <rect x="13" y="6" width="4" height="4"></rect>
          </svg>
        );
      case "building-commercial":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <path d="M4 10h16"></path>
            <path d="M4 18h16"></path>
            <path d="M8 6h.01"></path>
            <path d="M12 6h.01"></path>
            <path d="M16 6h.01"></path>
            <path d="M8 14h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 14h.01"></path>
          </svg>
        );
      case "building-industrial":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18"></path>
            <path d="M5 21V7l8 4v10"></path>
            <path d="M19 21v-8l-6-4"></path>
            <path d="M9 17h1"></path>
            <path d="M14 17h1"></path>
            <path d="M9 13h1"></path>
            <path d="M14 13h1"></path>
          </svg>
        );
      case "building-land":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21V7l8 4v10"></path>
            <path d="M19 21v-8l-6-4"></path>
            <path d="M3 7l9-4 9 4"></path>
          </svg>
        );
      case "building-apartment":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18"></path>
            <path d="M9 8h1"></path>
            <path d="M9 12h1"></path>
            <path d="M9 16h1"></path>
            <path d="M14 8h1"></path>
            <path d="M14 12h1"></path>
            <path d="M14 16h1"></path>
            <rect x="5" y="2" width="14" height="19" rx="2" ry="2"></rect>
          </svg>
        );
      case "building-floor":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="3" y1="15" x2="21" y2="15"></line>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <line x1="15" y1="3" x2="15" y2="21"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className=" px-4 mb-10 md:mb-24">
      <div className="w-11/12 mx-auto">
        {/* Section heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Browse By Category</h2>
          <div className="w-16 h-1 bg-[#FF6700] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus dui morbi mattis porta nulla. Massa, magna at nisi nunc. Et lacus dui morbi mattis porta nulla. Massa, magna at nisi nunc.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 overflow-hidden rounded-lg">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`${category.color} p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg`}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-white text-opacity-80 text-sm mb-4">{category.description}</p>
              </div>
              <div className="flex justify-between items-center">
                {renderIcon(category.icon)}
                <div className="bg-white rounded-md text-black px-3 py-1 font-semibold">
                  {category.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;