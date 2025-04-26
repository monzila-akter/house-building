import { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Subscribing email:', email);
    // Reset form
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="relative py-20 mb-10 md:mb-24">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-gray-700" 
        style={{ 
          backgroundImage: `url('https://i.ibb.co/GQtspnGg/images-39.jpg')`,
          backgroundBlendMode: 'overlay' 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe Us</h2>
          
          {/* Description */}
          <p className="text-gray-200 mb-8">
            Sign up to our newsletter to get the latest news and offers.
          </p>
          
          {/* Subscribe Form */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full max-w-md px-4 py-3 mb-4 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              Get Notified
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;