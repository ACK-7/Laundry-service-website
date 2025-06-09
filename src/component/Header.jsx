import React, { useEffect, useState } from 'react';
import { Phone, Shirt } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#dbf5f9] shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-[#dbf5f9] rounded-full flex items-center justify-center">
            {/* Use Shirt icon from lucide-react */}
            <Shirt size={40} stroke="#22B8EF" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-gray-900 leading-tight">Your Laundry</span>
            <span className="text-[#22B8EF] text-base font-medium leading-none mt-1">SERVICES</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            activeClass="text-[#08b4ec] font-bold underline decoration-2 underline-offset-4"
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-gray-700 font-medium hover:text-[#22B8EF] transition-colors cursor-pointer"
          >
            Services
          </Link>
          <Link
            activeClass="text-[#08b4ec] font-bold underline decoration-2 underline-offset-4"
            to="process"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-gray-700 font-medium hover:text-[#22B8EF] transition-colors cursor-pointer"
          >
            How It Works
          </Link>
          <Link
            activeClass="text-[#08b4ec] font-bold underline decoration-2 underline-offset-4"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-gray-700 font-medium hover:text-[#22B8EF] transition-colors cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            activeClass="text-[#08b4ec] font-bold underline decoration-2 underline-offset-4"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-gray-700 font-medium hover:text-[#22B8EF] transition-colors cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            activeClass="text-[#08b4ec] font-bold underline decoration-2 underline-offset-4"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-gray-700 font-medium hover:text-[#22B8EF] transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Info & CTA */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-2 text-gray-600">
            <Phone size={20} />
            <span className="text-base font-medium">(256) 704-911245</span>
          </div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="bg-[#08b4ec] hover:bg-[#0ea5e9] text-white px-8 py-3 rounded-lg font-bold text-lg shadow transition-colors cursor-pointer"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;