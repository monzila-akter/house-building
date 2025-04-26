import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaQuoteLeft } from 'react-icons/fa';

const FeedbackSection = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Johan Smith",
      role: "Managing Director Of Abco",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim, morbi neque, lorem amet enim,imperdiet condimentum.",
      image: "https://i.ibb.co/d0N1XhzW/360-F-88538986-5-Bi4e-J667pocs-O3-BIlb-N4f-HKz8y-UFSu-A-2.jpg"
    },
    {
      id: 2,
      name: "Johan Smith",
      role: "Managing Director Of Abco",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim, morbi neque, lorem amet enim,imperdiet condimentum.",
      image: "https://i.ibb.co/N6yKDTFn/cheerful-attractive-african-freelance-business-600nw-2432719233.webp"
    },
    {
      id: 3,
      name: "Johan Smith",
      role: "Managing Director Of Abco",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim, morbi neque, lorem amet enim,imperdiet condimentum.",
      image: "https://i.ibb.co/Q744S5R0/images-38.jpg"
    },
    {
      id: 4,
      name: "Johan Smith",
      role: "Managing Director Of Abco",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim, morbi neque, lorem amet enim,imperdiet condimentum.",
      image: "https://i.ibb.co/hFWgchm5/istockphoto-492529287-612x612.jpg"
    }
  ];

  return (
    <section className="mb-10 md:mb-24">
      <div className="w-11/12 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Clients Feedback</h2>
          <div className="w-24 h-1 bg-[#FF6700] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus dui morbi mattis porta nulla. Massa, magna at nisl nunc. Et lacus dui morbi mattis porta nulla. Massa, magna at nisl nunc.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative">
              {/* Client Image - Positioned absolutely above the card */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-18 z-10">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white rounded-lg shadow-md pt-20 pb-6 px-6 mt-8">
                <div className="text-[#FF6700] mb-3">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-700 text-sm mb-6">
                  {testimonial.quote}
                </p>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>

                {/* Social Icons */}
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;