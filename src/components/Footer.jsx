import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { FaRegBuilding } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-16 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About Section */}
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center mb-4">
                            <div className=" text-white">
                                <span><FaRegBuilding className="text-4xl text-[#FF6700]"></FaRegBuilding></span>
                            </div>
                            <h2 className=" text-2xl font-medium text-gray-400"><span className="text-[#0A7AA3]">House</span><span className="text-[#FF6700]">Building</span></h2>
                        </div>
                        <p className="text-gray-300 text-sm mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam gravida orci eget. Id porta molestie sollicitudin eu cras auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam gravida orci eget.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-8 h-8 border border-orange-500 rounded-sm flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-8 h-8 border border-orange-500 rounded-sm flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="w-8 h-8 border border-orange-500 rounded-sm flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-8 h-8 border border-orange-500 rounded-sm flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                                <FaGoogle />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                                <p className="text-gray-300 text-sm">
                                    1234, Imagine Osman Center<br />
                                    Uttara, Khal Pahr, Dhaka
                                </p>
                            </div>
                            <div className="flex items-start">
                                <FaPhone className="text-orange-500 mt-1 mr-3" />
                                <p className="text-gray-300 text-sm">
                                    +09876543211<br />
                                    +09876543211
                                </p>
                            </div>
                            <div className="flex items-start">
                                <FaEnvelope className="text-orange-500 mt-1 mr-3" />
                                <p className="text-gray-300 text-sm">
                                    yourmail@gmail.com<br />
                                    Yourmail@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-orange-500 text-sm">Our Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-orange-500 text-sm">Investment Solution</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-orange-500 text-sm">Frequently Ask Question</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-orange-500 text-sm">How It Work</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-orange-500 text-sm">Investment Solution</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-orange-500 text-sm">Frequently Ask Question</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-orange-500 text-sm">How It Work</a></li>
                        </ul>
                    </div>

                    {/* Recently Properties */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Recently Properties</h3>
                        <div className="space-y-4">
                            {/* Property Item 1 */}
                            <div className="flex space-x-3">
                                <div className="w-20 h-16  flex-shrink-0">
                                    <img src="https://i.ibb.co/fGVspfC2/images-37.jpg" className='w-full h-full object-cover' alt="" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium">Awesome Family Home</h4>
                                    <p className="text-xs text-gray-400">1234, Uttara, Dhaka</p>
                                    <p className="text-orange-500 font-medium">$40,000</p>
                                </div>
                            </div>

                            {/* Property Item 2 */}
                            <div className="flex space-x-3">
                                <div className="w-20 h-16 flex-shrink-0">
                                    <img src="https://i.ibb.co/GQw9vBQL/images-36.jpg" className='w-full h-full object-cover' alt="" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium">Super Delux Flat</h4>
                                    <p className="text-xs text-gray-400">1234, Uttara, Dhaka</p>
                                    <p className="text-orange-500 font-medium">$40,000</p>
                                </div>
                            </div>

                            {/* Property Item 3 */}
                            <div className="flex space-x-3">
                                <div className="w-20 h-16 flex-shrink-0">
                                    <img src="https://i.ibb.co/PbFNmH1/439055356.jpg" className='w-full h-full object-cover' alt="" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium">Awesome Family Home</h4>
                                    <p className="text-xs text-gray-400">1234, Uttara, Dhaka</p>
                                    <p className="text-orange-500 font-medium">$40,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll to top button */}
                <div className="flex justify-center mt-8 mb-6">
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                        <FaArrowUp />
                    </button>
                </div>

                {/* Copyright and legal links */}
                <div className="pt-6 border-t border-gray-700 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2022 Solutya All right reserved</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-sm text-gray-400 hover:text-orange-500">Terms & Conditions</a>
                            <a href="#" className="text-sm text-gray-400 hover:text-orange-500">Claim</a>
                            <a href="#" className="text-sm text-gray-400 hover:text-orange-500">Privacy & Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;