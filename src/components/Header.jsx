import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaRegBuilding } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md w-full">
      <div className="w-11/12 mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and company name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className=" text-white p-2">
                 <span><FaRegBuilding className="text-4xl text-[#FF6700]"></FaRegBuilding></span>
                </div>
                <h2 className=" text-2xl font-medium text-gray-400"><span className="text-[#0A7AA3]">House</span><span className="text-[#FF6700]">Building</span></h2>
              </div>
            </div>
          </div>

          {/* Navigation links - desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-white px-3 py-2 hover:text-orange-500">Home</Link>
              <a href="#" className="text-gray-400 px-3 py-2 hover:text-orange-500">Feature</a>
              <a href="#" className="text-gray-400 px-3 py-2 hover:text-orange-500">Listing</a>
              <a href="#" className="text-gray-400 px-3 py-2 hover:text-orange-500">Pages</a>
              <a href="#" className="text-gray-400 px-3 py-2 hover:text-orange-500">Contact Us</a>
            </div>
          </div>

          {/* Create Listing button */}
          <div className="hidden md:block">
            <button className="bg-[#FF6700] rounded-lg hover:bg-orange-600 text-white px-4 py-2 flex items-center">
              <span className="mr-2">+</span>
              Create Listing
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white block px-3 py-2 hover:bg-gray-700">Home</Link>
            <a href="#" className="text-gray-400 block px-3 py-2 hover:bg-gray-700">Feature</a>
            <a href="#" className="text-gray-400 block px-3 py-2 hover:bg-gray-700">Listing</a>
            <a href="#" className="text-gray-400 block px-3 py-2 hover:bg-gray-700">Pages</a>
            <a href="#" className="text-gray-400 block px-3 py-2 hover:bg-gray-700">Contact Us</a>
            <button className="mt-2 w-full bg-[#FF6700] hover:bg-orange-600 text-gray-400 px-4 py-2 rounded flex items-center justify-center">
              <span className="mr-2">+</span>
              Create Listing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header